export interface TextRegion {
  id: string;
  bbox: [number, number, number, number]; // x1, y1, x2, y2 normalized 0-1
  original: string;
  translated: string;
}

export interface Page {
  id: string;
  imageOriginalUrl: string;
  imagePreviewUrl?: string;
  regions: TextRegion[];
  renderedImageUrl?: string;
  filename: string;
  uploadedAt: Date;
}

export interface ExtractRequest {
  pageId: string;
}

export interface TranslateRequest {
  texts: string[];
  targetLanguage: string;
}

export interface RenderRequest {
  pageId: string;
  regions: TextRegion[];
}

