import axios from 'axios';
import { Page, TextRegion } from '../types';

const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiService = {
  // Health check
  async checkHealth(): Promise<{ status: string; apiKeyConfigured: boolean }> {
    const response = await api.get('/health');
    return response.data;
  },

  // Upload images
  async uploadImages(files: File[]): Promise<{ pages: Page[] }> {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('images', file);
    });

    const response = await api.post('/pages', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Extract text from image
  async extractText(pageId: string): Promise<{ regions: TextRegion[] }> {
    const response = await api.post(`/pages/${pageId}/extract`);
    return response.data;
  },

  // Translate texts
  async translateTexts(texts: string[], targetLanguage: string): Promise<{ translations: string[] }> {
    const response = await api.post('/translate', {
      texts,
      targetLanguage,
    });
    return response.data;
  },

  // Render image with translations
  async renderImage(pageId: string, regions: TextRegion[]): Promise<{ success: boolean; imageUrl: string }> {
    const response = await api.post(`/pages/${pageId}/render`, {
      regions,
    });
    return response.data;
  },

  // Get all pages
  async getPages(): Promise<{ pages: Page[] }> {
    const response = await api.get('/pages');
    return response.data;
  },

  // Get page by ID
  async getPage(pageId: string): Promise<{ page: Page }> {
    const response = await api.get(`/pages/${pageId}`);
    return response.data;
  },

  // Delete page
  async deletePage(pageId: string): Promise<{ success: boolean }> {
    const response = await api.delete(`/pages/${pageId}`);
    return response.data;
  },

  // Get image URL
  getImageUrl(pageId: string): string {
    return `${API_BASE_URL}/pages/${pageId}/image?t=${Date.now()}`;
  },
};

