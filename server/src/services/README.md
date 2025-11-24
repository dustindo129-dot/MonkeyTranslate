# Services Directory

## Files

### `geminiClient.ts` (Open Source)
This is the **open-source version** that gets pushed to GitHub. It includes basic Gemini AI integration suitable for learning and non-commercial use.

**Features:**
- Basic text extraction using Gemini 1.5 Flash
- Simple translation
- Basic image rendering with Sharp overlays
- Good for understanding the architecture

### `geminiClient.prod.ts` (Proprietary - Local Only)
This is your **production version** with advanced features. **DO NOT push this to GitHub!**

**Protected Features:**
- Optimized model integration (proprietary)
- Advanced image generation capabilities (proprietary)
- Advanced prompt engineering
- Multi-step quality validation
- Cost optimization strategies
- Image preprocessing optimizations
- Error recovery mechanisms

**Note:** This file is in `.gitignore` and will not be committed.

### `imageRenderer.ts`
Image processing utilities (can be simplified for open source if needed).

## Development Workflow (Environment-Based)

The project now uses **automatic environment-based imports** via `server/src/services/index.ts`.

### How It Works:
- Imports use `import { GeminiClient } from '../services'` (note: no specific file)
- The `index.ts` file automatically selects the correct version based on environment variables
- **No manual file renaming needed!**

### Local Development (Use Production Version):
1. Set `USE_PROD_GEMINI=true` in your `.env` file (or it defaults to `true` in `NODE_ENV=development`)
2. Run your dev server
3. Automatically uses `geminiClient.prod.ts` with all advanced features

### Building for Distribution (Use OSS Version):
1. Set `USE_PROD_GEMINI=false` in your `.env` file
2. Or ensure `NODE_ENV` is not `development`
3. Build/package the app
4. Automatically uses `geminiClient.ts` (open-source version)

### Example `.env` Configuration:
```env
# For local development with production features
NODE_ENV=development
USE_PROD_GEMINI=true
GEMINI_API_KEY=your_key_here

# For building release/distribution
# USE_PROD_GEMINI=false
```

### Environment Variable Priority:
1. `USE_PROD_GEMINI=true` → Always use production version
2. `USE_PROD_GEMINI=false` → Always use OSS version
3. `NODE_ENV=development` (and USE_PROD_GEMINI not set) → Use production version
4. Default → Use OSS version

### Benefits:
✅ No manual file switching needed
✅ Can't accidentally commit production imports
✅ Easy to test both versions
✅ Safe for CI/CD pipelines

