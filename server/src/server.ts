import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import pagesRouter, { initializeGeminiClient } from './routes/pages';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../../.env') });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Check for Gemini API key
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.warn('⚠️  WARNING: GEMINI_API_KEY not found in environment variables');
  console.warn('⚠️  The application will not work without a valid API key');
  console.warn('⚠️  Please create a .env file with your GEMINI_API_KEY');
  console.warn('⚠️  Get your key from: https://aistudio.google.com/app/apikey');
} else {
  console.log('✓ Gemini API key found');
  initializeGeminiClient(GEMINI_API_KEY);
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    apiKeyConfigured: !!GEMINI_API_KEY,
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/pages', pagesRouter);

// Translate endpoint (separate from pages)
app.post('/api/translate', async (req, res) => {
  try {
    const { GeminiClient } = await import('./services/geminiClient');
    
    if (!GEMINI_API_KEY) {
      return res.status(503).json({ error: 'Gemini API not configured' });
    }

    const geminiClient = new GeminiClient(GEMINI_API_KEY);
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

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 MonkeyTranslate Server is running!`);
  console.log(`📡 API: http://localhost:${PORT}`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
  
  if (!GEMINI_API_KEY) {
    console.log('\n⚠️  To enable the API, please:');
    console.log('   1. Copy .env.example to .env');
    console.log('   2. Add your GEMINI_API_KEY to the .env file');
    console.log('   3. Restart the server\n');
  } else {
    console.log('\n✓ Server is ready to accept requests\n');
  }
});

