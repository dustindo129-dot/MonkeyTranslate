/**
 * Environment-based service exports
 *
 * This file automatically selects the appropriate version of GeminiClient based on environment:
 * - USE_PROD_GEMINI=true (or NODE_ENV=development): Uses production version with advanced features
 * - USE_PROD_GEMINI=false (or default): Uses open-source version
 *
 * This allows you to:
 * 1. Develop locally with the production version
 * 2. Automatically use OSS version when building for distribution
 * 3. Never accidentally commit production code
 */

import { GeminiClient as GeminiClientProd } from './geminiClient.prod';
import { GeminiClient as GeminiClientOSS } from './geminiClient';

// Lazy getter function that checks environment at runtime
let _geminiClientClass: typeof GeminiClientProd | typeof GeminiClientOSS | null = null;
let _initialized = false;

function getGeminiClientClass() {
  if (!_initialized) {
    // Check environment variables at runtime (after dotenv has loaded)
        const useProdVersion = process.env.USE_PROD_GEMINI === 'true' ||
                                (process.env.NODE_ENV === 'development' && process.env.USE_PROD_GEMINI !== 'false');

    if (useProdVersion) {
      _geminiClientClass = GeminiClientProd;
    } else {
      _geminiClientClass = GeminiClientOSS;
    }

    _initialized = true;
  }

  return _geminiClientClass!;
}

// Export a class that proxies to the correct version
export class GeminiClient {
  private instance: GeminiClientProd | GeminiClientOSS;

  constructor(apiKey: string) {
    const ClientClass = getGeminiClientClass();
    this.instance = new ClientClass(apiKey);
  }

  // Proxy all methods to the actual instance
  extractTextFromImage(imagePath: string) {
    return this.instance.extractTextFromImage(imagePath);
  }

  translateTexts(texts: string[], targetLanguage: string) {
    return this.instance.translateTexts(texts, targetLanguage);
  }

  renderTranslatedImage(imagePath: string, regions: any[]) {
    return this.instance.renderTranslatedImage(imagePath, regions);
  }
}

// Export other services normally
export { ImageRenderer } from './imageRenderer';

