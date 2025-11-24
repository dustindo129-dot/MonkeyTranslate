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

## Development Workflow

### When working locally:
1. Use `geminiClient.prod.ts` by importing it directly
2. Or create a symlink/copy when needed

### Before pushing to GitHub:
1. Make sure you're using `geminiClient.ts` (OSS version) in imports
2. The production version stays local only
3. Git will automatically ignore `*.prod.ts` files

## Switching Between Versions

If you need to use the production version locally, temporarily rename files:
```bash
# Use production version
mv geminiClient.ts geminiClient.oss.ts
mv geminiClient.prod.ts geminiClient.ts

# Switch back before committing
mv geminiClient.ts geminiClient.prod.ts
mv geminiClient.oss.ts geminiClient.ts
```

Or better yet, use environment-based imports in your code.

