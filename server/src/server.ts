// Load environment variables FIRST, before any other imports
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

// Now import other modules (they can use environment variables)
import express from 'express';
import cors from 'cors';
import pagesRouter, { initializeGeminiClient } from './routes/pages';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'file://'], // Allow Electron
  credentials: true
}));
app.use(express.json({ limit: '50mb' })); // Increase limit for large image data
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// No timeout limits for image rendering operations

// Check for Gemini API key
let GEMINI_API_KEY = process.env.GEMINI_API_KEY;
let apiKeyValid: boolean | null = null; // null = not tested, true = valid, false = invalid
let lastValidationTime = 0;
const VALIDATION_CACHE_MS = 60000; // Cache validation result for 1 minute

// Function to update API key (called when key changes)
export function updateApiKey(newKey: string) {
  GEMINI_API_KEY = newKey;
  // Clear validation cache when key changes
  apiKeyValid = null;
  lastValidationTime = 0;
}

// Validate API key by making a test call
async function validateApiKey(): Promise<boolean> {
  if (!GEMINI_API_KEY) {
    return false;
  }

  // Return cached result if recent
  const now = Date.now();
  if (apiKeyValid !== null && (now - lastValidationTime) < VALIDATION_CACHE_MS) {
    return apiKeyValid;
  }

  try {
    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

    // Use the same model selection logic as the service
    const useProdVersion = process.env.USE_PROD_GEMINI === 'true' ||
                          (process.env.NODE_ENV === 'development' && process.env.USE_PROD_GEMINI !== 'false');

    const modelName = useProdVersion ? 'gemini-2.5-pro' : 'gemini-1.5-flash';

    // Try to make a minimal API call to validate the key
    const model = genAI.getGenerativeModel({ model: modelName });

    await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: 'hi' }] }]
    });

    apiKeyValid = true;
    lastValidationTime = now;
    return true;
  } catch (error: any) {
    // Check if it's an authentication error
    if (error.message?.includes('API key') ||
        error.message?.includes('API_KEY_INVALID') ||
        error.status === 400 ||
        error.status === 401 ||
        error.status === 403) {
      apiKeyValid = false;
      lastValidationTime = now;
      return false;
    }

    // For network issues or other errors, don't cache the result
    // Return false but don't update apiKeyValid
    console.warn('API key validation failed:', error.message);
    return false;
  }
}

if (!GEMINI_API_KEY) {
  console.warn('⚠️  WARNING: GEMINI_API_KEY not found in environment variables');
  console.warn('⚠️  The application will not work without a valid API key');
  console.warn('⚠️  Please create a .env file with your GEMINI_API_KEY');
  console.warn('⚠️  Get your key from: https://aistudio.google.com/app/apikey');
} else {
  console.log('✓ Gemini API key found');
  initializeGeminiClient(GEMINI_API_KEY);

  // Validate the key in the background
  validateApiKey().then(valid => {
    if (valid) {
      console.log('✓ Gemini API key validated successfully');
    } else {
      console.warn('⚠️  Gemini API key validation failed - key may be invalid');
    }
  }).catch(err => {
    console.warn('⚠️  Could not validate Gemini API key:', err.message);
  });
}

// Health check endpoint
app.get('/api/health', async (req, res) => {
  // Check if API key changed (updated from environment)
  const currentKey = process.env.GEMINI_API_KEY;
  if (currentKey !== GEMINI_API_KEY) {
    updateApiKey(currentKey || '');
  }

  // Only validate if we don't have a cached result yet
  // This prevents repeated validation calls from slowing down the UI
  let isValid = apiKeyValid;

  // If we haven't validated yet (null), do validation in background
  if (isValid === null && GEMINI_API_KEY) {
    // Don't await - validate in background to avoid blocking health check
    validateApiKey().then(valid => {
      // Result will be cached for next call
    });
  }

  // If key exists but validation is null (not tested yet), assume valid temporarily
  // This prevents showing "invalid" during initial startup
  const effectiveValid = GEMINI_API_KEY ? (isValid !== false) : false;

  res.json({
    status: 'ok',
    apiKeyConfigured: !!GEMINI_API_KEY,
    apiKeyValid: effectiveValid,
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/pages', pagesRouter);

// Translate endpoint (separate from pages)
app.post('/api/translate', async (req, res) => {
  try {
    const { GeminiClient } = await import('./services');

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

