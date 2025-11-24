import sharp from 'sharp';
import { TextRegion } from '../types';
import fs from 'fs/promises';

/**
 * Advanced image renderer that uses Sharp to overlay translated text
 * This is a basic implementation - for production, you might want to use
 * a more sophisticated solution with font matching and style preservation
 */
export class ImageRenderer {
  async renderWithTranslations(
    imagePath: string,
    regions: TextRegion[]
  ): Promise<Buffer> {
    try {
      // Load the original image
      const imageBuffer = await fs.readFile(imagePath);
      const image = sharp(imageBuffer);
      const metadata = await image.metadata();
      
      if (!metadata.width || !metadata.height) {
        throw new Error('Could not determine image dimensions');
      }

      const width = metadata.width;
      const height = metadata.height;

      // Create SVG overlays for each text region
      const overlays = regions
        .filter(r => r.translated && r.translated !== r.original)
        .map(region => {
          const [x1, y1, x2, y2] = region.bbox;
          
          // Convert normalized coordinates to pixel coordinates
          const left = Math.round(x1 * width);
          const top = Math.round(y1 * height);
          const boxWidth = Math.round((x2 - x1) * width);
          const boxHeight = Math.round((y2 - y1) * height);
          
          // Estimate font size based on box height
          const fontSize = Math.max(12, Math.round(boxHeight * 0.6));
          
          // Create SVG for this text region
          // First, create a white rectangle to cover the old text
          const coverSvg = Buffer.from(`
            <svg width="${boxWidth}" height="${boxHeight}">
              <rect width="${boxWidth}" height="${boxHeight}" fill="white" opacity="0.9"/>
            </svg>
          `);
          
          // Then, create the new text
          const textSvg = Buffer.from(`
            <svg width="${boxWidth}" height="${boxHeight}">
              <text
                x="50%"
                y="50%"
                font-family="Arial, sans-serif"
                font-size="${fontSize}"
                fill="black"
                text-anchor="middle"
                dominant-baseline="middle"
                style="font-weight: 400;"
              >${this.escapeXml(region.translated)}</text>
            </svg>
          `);

          return [
            { input: coverSvg, left, top },
            { input: textSvg, left, top }
          ];
        })
        .flat();

      // Composite all overlays onto the image
      const result = Buffer.from(await image
        .composite(overlays)
        .toBuffer());

      return result;
    } catch (error) {
      console.error('Error rendering image with translations:', error);
      throw new Error('Failed to render image with translations');
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
}

