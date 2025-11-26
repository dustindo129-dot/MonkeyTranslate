export interface TextRegion {
  id: string;
  bbox: [number, number, number, number]; // x1, y1, x2, y2 normalized 0-1
  original: string;
  translated: string;
  status?: 'active' | 'removed' | 'deleted'; // Track region state
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

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

