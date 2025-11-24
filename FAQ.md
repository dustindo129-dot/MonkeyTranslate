# Frequently Asked Questions (FAQ)

## General Questions

### What is MonkeyTranslate?

MonkeyTranslate is an open-source tool that uses Google's Gemini AI to extract text from images, translate it to different languages, and regenerate the images with the translated text.

### Is it really free?

The software is free and open-source (MIT License). However, you need a Google Gemini API key, which has:
- **Free tier:** 15 requests/minute, 1M tokens/minute, 1,500 requests/day
- **Paid plans:** Available for higher usage

### Do you collect my data?

No! This is a local application. Everything runs on your machine. We never see:
- Your API key
- Your images
- Your translations
- Any of your data

## Setup Questions

### Where do I get a Gemini API key?

1. Visit https://aistudio.google.com/app/apikey
2. Sign in with your Google account
3. Click "Get API Key" or "Create API Key"
4. Copy your key

### Can I use this without an API key?

No, the Gemini API key is required for the AI features (text extraction and translation). However, you can modify the code to use a different AI service if you prefer.

### Why do I need to set up a backend server?

The backend keeps your API key secure. If we put the key in the browser, anyone could steal it from the web page source. With a local backend, your key stays on your machine in the `.env` file.

## Usage Questions

### What image formats are supported?

- PNG
- JPG/JPEG
- GIF
- WEBP

Maximum file size: 10MB per image (configurable in server code)

### Can I upload multiple images at once?

Yes! Drag and drop multiple images, or select multiple files when browsing. You can process up to 10 images per upload batch.

### What languages are supported?

Currently, the UI includes:
- English, Spanish, French, German, Italian
- Portuguese, Russian, Japanese, Korean
- Chinese, Arabic, Hindi, Vietnamese

But you can translate to any language Gemini supports! Just modify the language list in `client/src/components/WorkPanel.tsx`.

### Why doesn't the translated image look perfect?

The current implementation uses a basic text overlay approach. The AI tries to match fonts and colors, but it's not always perfect. This is an area for improvement! We welcome contributions to enhance the image rendering quality.

### Can I manually edit the translations?

Absolutely! Each text region can be manually edited. Click the edit icon next to any text region in the work panel.

## Technical Questions

### What tech stack is used?

**Frontend:**
- React 18 with TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- React Query (state management)

**Backend:**
- Node.js with Express
- Google Generative AI SDK
- Sharp (image processing)
- Multer (file uploads)

### Can I deploy this to a server?

Yes, but **be very careful**:
- ⚠️ Never expose your API key in client code
- ⚠️ Implement authentication to prevent abuse
- ⚠️ Add rate limiting to prevent quota exhaustion
- ⚠️ Consider using a backend-only deployment

For most users, we recommend keeping it local or using Electron for a desktop app.

### Can I contribute to the project?

Yes! We welcome contributions. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### How do I build an Electron app?

We don't include Electron by default, but you can add it:

1. Install Electron:
   ```bash
   npm install --save-dev electron electron-builder
   ```

2. Create an Electron main file

3. Package with electron-builder

We may add official Electron support in a future release!

## Troubleshooting

### "API key not configured" error

**Solution:**
1. Ensure `.env` file exists in the root directory
2. Check that `GEMINI_API_KEY=...` is set correctly
3. Restart the server after changes

### Text extraction returns empty results

**Possible causes:**
- Image has no visible text
- Text is too blurry or low contrast
- API quota exceeded

**Solutions:**
- Try a clearer image
- Check your API usage at https://aistudio.google.com
- Wait if you've hit rate limits

### Translation is inaccurate

Gemini is very good at translation, but no AI is perfect. You can:
- Manually edit translations in the work panel
- Try different prompts (modify the code)
- Use a specialized translation API for critical use cases

### Server won't start on port 3001

**Solution:**
1. Check if another app is using port 3001
2. Change the port in `.env`:
   ```
   PORT=3002
   ```
3. Restart the server

### Images won't upload

**Checklist:**
- File size under 10MB?
- Supported format (PNG/JPG/GIF/WEBP)?
- Server running on port 3001?
- Check browser console for errors

## Performance Questions

### How long does text extraction take?

Typically 2-10 seconds depending on:
- Image size and complexity
- Number of text regions
- API response time
- Your internet speed

### Can I process very large images?

The default limit is 10MB, but you can increase it in `server/src/routes/pages.ts`:

```typescript
limits: {
  fileSize: 20 * 1024 * 1024, // 20MB
}
```

Note: Larger images consume more API tokens and processing time.

### How many images can I process per day?

With the free tier:
- 1,500 API requests per day
- Each image typically requires 2-3 requests (extract + translate + render)
- Approximately **500 images per day** on the free tier

## Business Questions

### Can I use this commercially?

Yes! The MIT License allows commercial use. However:
- You're responsible for your Gemini API costs
- No warranty is provided
- Attribution is appreciated (but not required)

### Can I resell this as a service?

Yes, but:
- Implement proper authentication and billing
- Secure API key handling (never expose to clients)
- Consider Gemini's terms of service
- Add rate limiting and abuse prevention

### Can I customize the UI for my brand?

Absolutely! It's open-source. Customize:
- Colors in `client/tailwind.config.js`
- Logo and branding in `client/src/App.tsx`
- Any component to match your needs

## API Questions

### Which Gemini model is used?

Currently: `gemini-2.0-flash-exp` (specified in `server/src/services/geminiClient.ts`)

You can change this to:
- `gemini-pro` - More capable, higher cost
- `gemini-pro-vision` - Better for image tasks
- Any other Gemini model

### How much do API calls cost?

Free tier:
- First 1,500 requests/day: **Free**

Paid tier pricing (check Google's latest pricing):
- Input: ~$0.00025 per 1K characters
- Output: ~$0.0005 per 1K characters

A typical image translation costs **$0.001 - $0.01** on the paid tier.

### Can I use a different AI service?

Yes! The code is modular. You can replace the Gemini client with:
- OpenAI GPT-4 Vision
- Azure Computer Vision
- AWS Textract
- Any other OCR/translation API

Just modify `server/src/services/geminiClient.ts`.

## Still Have Questions?

- 📖 Check the [SETUP_GUIDE.md](SETUP_GUIDE.md)
- 🐛 Open an issue on GitHub
- 💬 Start a discussion on GitHub Discussions
- 📧 Contact the maintainers

---

**Didn't find your answer?** Please open an issue so we can add it to this FAQ!

