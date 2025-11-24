import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenAI } from '@google/genai';
import { TextRegion } from '../types';
import fs from 'fs/promises';
import path from 'path';

export class GeminiClient {
  private genAI: GoogleGenerativeAI;
  private nativeGenAI: GoogleGenAI;
  private textModel: any; // Gemini 2.5 Pro for text extraction and translation
  private imageModel: any; // Gemini 3 Pro for image generation

  constructor(apiKey: string) {
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.nativeGenAI = new GoogleGenAI({ apiKey });
    this.textModel = this.genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });
    this.imageModel = this.genAI.getGenerativeModel({ model: 'gemini-2.5-flash-image' });
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
      throw new Error('Failed to translate texts');
    }
  }

  /**
   * Generate a new image with translated text using Gemini 3 Pro Image Preview
   * Then overlay text precisely at each region using Sharp
   */
  async renderTranslatedImage(
    imagePath: string,
    regions: TextRegion[]
  ): Promise<Buffer> {
    try {
      const imageBuffer = await fs.readFile(imagePath);
      let processedImageBuffer = imageBuffer;
      const mimeType = this.getMimeType(imagePath);

      const sharp = await import('sharp');
      let image = sharp.default(imageBuffer);
      let metadata = await image.metadata();
      const originalWidth = metadata.width || 1024;
      const originalHeight = metadata.height || 1024;
      let width = originalWidth;
      let height = originalHeight;

      // Gemini API has pixel limits (approximately 20 megapixels)
      const maxPixels = 20 * 1024 * 1024; // 20MP limit
      const currentPixels = width * height;
      let wasResized = false;
      
      if (currentPixels > maxPixels) {
        console.log(`Image size ${width}x${height} (${currentPixels} pixels) exceeds limit. Resizing...`);
        
        // Calculate scale factor to stay within limits with some safety margin
        const scaleFactor = Math.sqrt(maxPixels * 0.9 / currentPixels); // 10% safety margin
        const newWidth = Math.floor(width * scaleFactor);
        const newHeight = Math.floor(height * scaleFactor);
        
        // Resize image
        image = image.resize(newWidth, newHeight, {
          fit: 'fill',
          withoutEnlargement: true,
          kernel: sharp.kernel.lanczos3 // Better quality for downscaling
        });
        
        processedImageBuffer = await image.toBuffer();
        metadata = await image.metadata();
        width = metadata.width || newWidth;
        height = metadata.height || newHeight;
        wasResized = true;
        
        console.log(`Image resized to ${width}x${height} (${width * height} pixels)`);
      }

      const base64Image = processedImageBuffer.toString('base64');

      const filteredRegions = regions.filter(r => r.translated && r.translated !== r.original);
      
      if (filteredRegions.length === 0) {
        return imageBuffer;
      }

      const textReplacements = filteredRegions.map((region) => {
        const [x1, y1, x2, y2] = region.bbox;
        const leftPx = Math.round(x1 * width);
        const topPx = Math.round(y1 * height);
        const rightPx = Math.round(x2 * width);
        const bottomPx = Math.round(y2 * height);
        const leftPercent = (x1 * 100).toFixed(1);
        const topPercent = (y1 * 100).toFixed(1);
        const rightPercent = (x2 * 100).toFixed(1);
        const bottomPercent = (y2 * 100).toFixed(1);
        
        return {
          original: region.original,
          translated: region.translated,
          coords: {
            left: leftPx,
            top: topPx,
            right: rightPx,
            bottom: bottomPx,
            leftPercent,
            topPercent,
            rightPercent,
            bottomPercent
          }
        };
      });

      const replacementList = textReplacements.map(r => 
        `- Change "${r.original}" to "${r.translated}" at position ${r.coords.leftPercent}% left, ${r.coords.topPercent}% top (pixel coordinates: ${r.coords.left},${r.coords.top} to ${r.coords.right},${r.coords.bottom})`
      ).join('\n');

      const prompt = `TASK: Edit this image by replacing specific text elements with translations.

REFERENCE IMAGE DIMENSIONS: ${width} pixels wide × ${height} pixels tall

TEXT REPLACEMENTS TO MAKE:
${replacementList}

STEP-BY-STEP PROCESS:
1. Analyze the reference image and locate each text string listed above
2. For each text replacement:
   a. Find the original text at the specified coordinates
   b. Erase/remove ONLY that text
   c. Insert the new translated text in the EXACT same location
   d. Use the SAME font family, size, weight, color, and style as the original
   e. Maintain the same text alignment and positioning
3. Leave ALL other image elements completely unchanged:
   - Characters, people, objects: UNCHANGED
   - Backgrounds, colors, gradients: UNCHANGED  
   - Layout, composition, spacing: UNCHANGED
   - All visual effects and graphics: UNCHANGED

CRITICAL REQUIREMENTS:
✓ Output image must be ${width}×${height} pixels (same as input)
✓ Only the specified text should change
✓ Everything else must remain pixel-perfect identical
✓ Text replacements must match original text styling exactly

This is an IMAGE EDITING task. Generate the edited image now with ONLY the text changes applied.`;

      const imageSize = width > 1920 || height > 1080 ? "4K" : "HD";
      
      const supportedRatios = [
        { ratio: '1:1', value: 1.0 },
        { ratio: '2:3', value: 2/3 },
        { ratio: '3:2', value: 3/2 },
        { ratio: '3:4', value: 3/4 },
        { ratio: '4:3', value: 4/3 },
        { ratio: '4:5', value: 4/5 },
        { ratio: '5:4', value: 5/4 },
        { ratio: '9:16', value: 9/16 },
        { ratio: '16:9', value: 16/9 },
        { ratio: '21:9', value: 21/9 }
      ];
      
      const originalRatio = width / height;
      let closestRatio = supportedRatios[0];
      let minDifference = Math.abs(originalRatio - closestRatio.value);
      
      for (const supportedRatio of supportedRatios) {
        const difference = Math.abs(originalRatio - supportedRatio.value);
        if (difference < minDifference) {
          minDifference = difference;
          closestRatio = supportedRatio;
        }
      }
      
      const promptContent = [
        { text: prompt },
        {
          inlineData: {
            mimeType,
            data: base64Image,
          },
        },
      ];

      const config = {
        imageConfig: {
          aspectRatio: closestRatio.ratio,
          imageSize: imageSize
        }
      };

      const result = await this.nativeGenAI.models.generateContent({
        model: "gemini-3-pro-image-preview",
        contents: promptContent,
        config: config
      });
      
      const candidates = result.candidates;
      let generatedImageBuffer: Buffer | null = null;
      
      if (candidates && candidates.length > 0) {
        const candidate = candidates[0];
        if (candidate.content && candidate.content.parts) {
          for (const part of candidate.content.parts) {
            if (part.inlineData && part.inlineData.data) {
              generatedImageBuffer = Buffer.from(part.inlineData.data, 'base64');
              break;
            }
          }
        }
      }

      if (!generatedImageBuffer) {
        throw new Error('Image generation did not return an image');
      }

      // If we resized the image for processing, scale it back to original dimensions
      let finalImageBuffer = generatedImageBuffer;
      
      if (wasResized) {
        console.log(`Scaling generated image back to original size: ${originalWidth}x${originalHeight}`);
        const generatedImage = sharp.default(generatedImageBuffer);
        
        // Scale back to original dimensions
        finalImageBuffer = await generatedImage
          .resize(originalWidth, originalHeight, { 
            fit: 'fill',
            kernel: sharp.kernel.lanczos3 // Better quality for upscaling
          })
          .toBuffer();
      }

      return finalImageBuffer;
      
    } catch (error) {
      throw new Error(`Failed to render translated image: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private escapeXml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
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

