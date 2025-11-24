import express, { Request, Response } from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs/promises';
import { GeminiClient } from '../services/geminiClient';
import { ImageRenderer } from '../services/imageRenderer';
import { Page, TextRegion } from '../types';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadsDir = path.join(__dirname, '../../uploads');
    try {
      await fs.mkdir(uploadsDir, { recursive: true });
      cb(null, uploadsDir);
    } catch (error) {
      cb(error as Error, uploadsDir);
    }
  },
  filename: (req, file, cb) => {
    const uniqueName = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Only image files are allowed (jpeg, jpg, png, gif, webp)'));
  },
});

// In-memory store for pages (in production, use a database)
const pages: Map<string, Page> = new Map();

// Initialize Gemini client
let geminiClient: GeminiClient | null = null;
const imageRenderer = new ImageRenderer();

export function initializeGeminiClient(apiKey: string) {
  geminiClient = new GeminiClient(apiKey);
}

// Upload images (batch support)
router.post('/', upload.array('images', 10), async (req: Request, res: Response) => {
  try {
    if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const uploadedPages: Page[] = [];

    for (const file of req.files) {
      const pageId = uuidv4();
      const page: Page = {
        id: pageId,
        imageOriginalUrl: `/api/pages/${pageId}/image`,
        filename: file.originalname,
        regions: [],
        uploadedAt: new Date(),
      };

      // Store the file path in memory (in production, store in database)
      (page as any).filePath = file.path;
      
      pages.set(pageId, page);
      uploadedPages.push(page);
    }

    res.json({ pages: uploadedPages });
  } catch (error) {
    console.error('Error uploading files:', error);
    res.status(500).json({ error: 'Failed to upload files' });
  }
});

// Get image file
router.get('/:id/image', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const page = pages.get(id);

    if (!page) {
      return res.status(404).json({ error: 'Page not found' });
    }

    const filePath = (page as any).filePath;
    if (!filePath) {
      return res.status(404).json({ error: 'Image file not found' });
    }

    // Check if rendered image exists
    if ((page as any).renderedFilePath) {
      const renderedPath = (page as any).renderedFilePath;
      try {
        await fs.access(renderedPath);
        return res.sendFile(renderedPath);
      } catch {
        // Rendered file doesn't exist, fall back to original
      }
    }

    res.sendFile(filePath);
  } catch (error) {
    console.error('Error serving image:', error);
    res.status(500).json({ error: 'Failed to serve image' });
  }
});

// Extract text from image
router.post('/:id/extract', async (req: Request, res: Response) => {
  try {
    if (!geminiClient) {
      return res.status(503).json({ error: 'Gemini API not configured. Please set GEMINI_API_KEY in .env file' });
    }

    const { id } = req.params;
    const page = pages.get(id);

    if (!page) {
      return res.status(404).json({ error: 'Page not found' });
    }

    const filePath = (page as any).filePath;
    if (!filePath) {
      return res.status(404).json({ error: 'Image file not found' });
    }

    // Extract text using Gemini
    const regions = await geminiClient.extractTextFromImage(filePath);
    page.regions = regions;

    res.json({ regions });
  } catch (error) {
    console.error('Error extracting text:', error);
    res.status(500).json({ error: 'Failed to extract text from image' });
  }
});

// Translate texts
router.post('/translate', async (req: Request, res: Response) => {
  try {
    if (!geminiClient) {
      return res.status(503).json({ error: 'Gemini API not configured' });
    }

    const { texts, targetLanguage } = req.body;

    if (!texts || !Array.isArray(texts) || texts.length === 0) {
      return res.status(400).json({ error: 'Invalid texts array' });
    }

    if (!targetLanguage) {
      return res.status(400).json({ error: 'Target language is required' });
    }

    const translations = await geminiClient.translateTexts(texts, targetLanguage);

    res.json({ translations });
  } catch (error) {
    console.error('Error translating texts:', error);
    res.status(500).json({ error: 'Failed to translate texts' });
  }
});

// Render image with translations
router.post('/:id/render', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { regions } = req.body as { regions: TextRegion[] };

    const page = pages.get(id);
    if (!page) {
      return res.status(404).json({ error: 'Page not found' });
    }

    const filePath = (page as any).filePath;
    if (!filePath) {
      return res.status(404).json({ error: 'Image file not found' });
    }

    if (!regions || !Array.isArray(regions)) {
      return res.status(400).json({ error: 'Invalid regions array' });
    }

    // Update page regions
    page.regions = regions;

    if (!geminiClient) {
      return res.status(503).json({ error: 'Gemini API not configured' });
    }

    // Generate a completely new image with translated text using Nano Banana Pro
    const renderedBuffer = await geminiClient.renderTranslatedImage(filePath, regions);

    // Save the rendered image
    const renderedFilename = `rendered-${uuidv4()}${path.extname(filePath)}`;
    const renderedPath = path.join(path.dirname(filePath), renderedFilename);
    await fs.writeFile(renderedPath, renderedBuffer);

    (page as any).renderedFilePath = renderedPath;
    page.renderedImageUrl = `/api/pages/${id}/image`;

    res.json({ 
      success: true, 
      imageUrl: page.renderedImageUrl,
      message: 'Image rendered successfully' 
    });
  } catch (error) {
    console.error('Error rendering image:', error);
    res.status(500).json({ error: 'Failed to render image with translations' });
  }
});

// Get page details
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const page = pages.get(id);

    if (!page) {
      return res.status(404).json({ error: 'Page not found' });
    }

    res.json({ page });
  } catch (error) {
    console.error('Error getting page:', error);
    res.status(500).json({ error: 'Failed to get page' });
  }
});

// Delete page
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const page = pages.get(id);

    if (!page) {
      return res.status(404).json({ error: 'Page not found' });
    }

    // Delete associated files
    const filePath = (page as any).filePath;
    const renderedFilePath = (page as any).renderedFilePath;

    try {
      if (filePath) await fs.unlink(filePath);
      if (renderedFilePath) await fs.unlink(renderedFilePath);
    } catch (error) {
      console.error('Error deleting files:', error);
    }

    pages.delete(id);

    res.json({ success: true, message: 'Page deleted successfully' });
  } catch (error) {
    console.error('Error deleting page:', error);
    res.status(500).json({ error: 'Failed to delete page' });
  }
});

// Get all pages
router.get('/', async (req: Request, res: Response) => {
  try {
    const allPages = Array.from(pages.values());
    res.json({ pages: allPages });
  } catch (error) {
    console.error('Error getting pages:', error);
    res.status(500).json({ error: 'Failed to get pages' });
  }
});

export default router;

