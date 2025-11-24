import { GoogleGenerativeAI } from '@google/generative-ai';
import { TextRegion } from '../types';
import fs from 'fs/promises';
import path from 'path';

export class GeminiClient {
  private genAI: GoogleGenerativeAI;
  private textModel: any; // Gemini 2.5 Pro for text extraction and translation
  private imageModel: any; // Gemini 3 Pro for image generation

  constructor(apiKey: string) {
    this.genAI = new GoogleGenerativeAI(apiKey);
    // Use Gemini 2.5 Pro for text extraction and translation
    this.textModel = this.genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });
    // Use Gemini Pro 3 Preview for image generation (Nano Banana Pro)
    this.imageModel = this.genAI.getGenerativeModel({ model: 'gemini-pro-3-preview' });
  }

  /**
   * Extract text regions from an image
   */
  async extractTextFromImage(imagePath: string): Promise<TextRegion[]> {
    try {
      const imageBuffer = await fs.readFile(imagePath);
      const base64Image = imageBuffer.toString('base64');
      const mimeType = this.getMimeType(imagePath);

      const prompt = `Analyze this image and detect all text regions. For each text block, provide:
1. The exact text content
2. Its bounding box coordinates (x1, y1, x2, y2) normalized between 0 and 1, where (0,0) is top-left and (1,1) is bottom-right

Return ONLY a JSON array with this exact structure, no markdown formatting:
[
  {
    "id": "1",
    "text": "detected text",
    "bbox": [x1, y1, x2, y2]
  }
]

Important: 
- Detect each visually separate text block
- Coordinates must be normalized (0-1 range)
- Include all visible text, even if small
- Return valid JSON only`;

      // Use Gemini 2.5 Pro for text extraction
      const result = await this.textModel.generateContent([
        {
          inlineData: {
            mimeType,
            data: base64Image,
          },
        },
        { text: prompt },
      ]);

      const response = await result.response;
      const text = response.text();
      
      // Clean up the response - remove markdown code blocks if present
      let jsonText = text.trim();
      if (jsonText.startsWith('```json')) {
        jsonText = jsonText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
      } else if (jsonText.startsWith('```')) {
        jsonText = jsonText.replace(/```\n?/g, '');
      }
      
      const regions = JSON.parse(jsonText);

      return regions.map((region: any, index: number) => ({
        id: region.id || `region-${index + 1}`,
        bbox: region.bbox,
        original: region.text,
        translated: region.text, // Initialize with original text
      }));
    } catch (error) {
      console.error('Error extracting text from image:', error);
      throw new Error('Failed to extract text from image');
    }
  }

  /**
   * Translate multiple texts to a target language
   */
  async translateTexts(texts: string[], targetLanguage: string): Promise<string[]> {
    try {
      const prompt = `Translate the following texts to ${targetLanguage}. Return ONLY a JSON array of translated strings, maintaining the same order. No markdown formatting:

Texts to translate:
${texts.map((text, i) => `${i + 1}. "${text}"`).join('\n')}

Return format: ["translated text 1", "translated text 2", ...]`;

      // Use Gemini 2.5 Pro for translation
      const result = await this.textModel.generateContent(prompt);
      const response = await result.response;
      let text = response.text().trim();
      
      // Clean up markdown formatting
      if (text.startsWith('```json')) {
        text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '');
      } else if (text.startsWith('```')) {
        text = text.replace(/```\n?/g, '');
      }
      
      const translations = JSON.parse(text);
      return translations;
    } catch (error) {
      console.error('Error translating texts:', error);
      throw new Error('Failed to translate texts');
    }
  }

  /**
   * Generate a completely new image with translated text using Nano Banana Pro
   * Sends the original image and a detailed prompt to generate a new image
   * with the translated text, preserving the original style and layout
   */
  async renderTranslatedImage(
    imagePath: string,
    regions: TextRegion[]
  ): Promise<Buffer> {
    try {
      const imageBuffer = await fs.readFile(imagePath);
      const base64Image = imageBuffer.toString('base64');
      const mimeType = this.getMimeType(imagePath);

      // Get image metadata for dimensions
      const image = await import('sharp').then(m => m.default(imageBuffer));
      const metadata = await image.metadata();
      const width = metadata.width || 1024;
      const height = metadata.height || 1024;

      // Create detailed prompt describing the image with translated text
      const textReplacements = regions
        .filter(r => r.translated && r.translated !== r.original)
        .map((region, index) => {
          const [x1, y1, x2, y2] = region.bbox;
          const leftPercent = (x1 * 100).toFixed(1);
          const topPercent = (y1 * 100).toFixed(1);
          const rightPercent = (x2 * 100).toFixed(1);
          const bottomPercent = (y2 * 100).toFixed(1);
          
          return `Text region ${index + 1}: Replace "${region.original}" located at ${leftPercent}% from left, ${topPercent}% from top, to ${rightPercent}% from left, ${bottomPercent}% from top, with "${region.translated}".`;
        })
        .join('\n');

      const prompt = `Generate a new image based on this reference image. The new image should be identical to the reference image in every way EXCEPT for the following text replacements:

${textReplacements}

CRITICAL REQUIREMENTS:
- Generate a completely new image that matches the reference image exactly
- Preserve ALL visual elements: colors, fonts, styles, layout, background, design elements
- Only change the specified text regions to their translated versions
- Maintain the exact same font style, size, weight, and color for each text region
- Keep the same image dimensions (${width}x${height})
- Preserve all non-text visual elements exactly as they appear
- The translated text should be rendered in the same style and position as the original

Generate this new image now.`;

      // Use Gemini 3 Pro (Nano Banana Pro) to generate the new image
      const result = await this.imageModel.generateContent([
        {
          inlineData: {
            mimeType,
            data: base64Image,
          },
        },
        { 
          text: prompt,
        },
      ]);

      const response = await result.response;
      
      // Check if the response contains an image
      // Gemini may return images in different formats depending on the model
      const candidates = response.candidates;
      if (candidates && candidates.length > 0) {
        const candidate = candidates[0];
        
        // Check for inline data (image) in the response
        if (candidate.content && candidate.content.parts) {
          for (const part of candidate.content.parts) {
            if (part.inlineData && part.inlineData.data) {
              // Found an image in the response
              const generatedImageBuffer = Buffer.from(part.inlineData.data, 'base64');
              return generatedImageBuffer;
            }
          }
        }
      }

      // If no image was returned, try to extract image from text response
      // Some Gemini models might return image data in text format
      const responseText = response.text();
      
      // Check if response contains base64 image data
      const base64ImageMatch = responseText.match(/data:image\/[^;]+;base64,([A-Za-z0-9+/=]+)/);
      if (base64ImageMatch) {
        const imageData = base64ImageMatch[1];
        return Buffer.from(imageData, 'base64');
      }

      // If no image found, throw an error
      throw new Error('Image generation did not return an image. The model may not support image generation, or the response format is unexpected.');
      
    } catch (error) {
      console.error('Error rendering translated image:', error);
      throw new Error(`Failed to render translated image: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private getMimeType(filePath: string): string {
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes: { [key: string]: string } = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif',
      '.webp': 'image/webp',
    };
    return mimeTypes[ext] || 'image/jpeg';
  }
}

