# MonkeyTranslate Setup Guide

This guide will walk you through setting up and running MonkeyTranslate on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 18+** - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)

## Step-by-Step Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/monkey-translate.git
cd monkey-translate
```

### 2. Install Dependencies

Run the following command to install dependencies for both the client and server:

```bash
npm run install:all
```

This command will:
- Install root dependencies
- Install server dependencies (Express, Gemini SDK, etc.)
- Install client dependencies (React, Vite, Tailwind, etc.)

### 3. Get Your Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Get API Key"** or **"Create API Key"**
4. Copy your API key

**Note:** Keep your API key private. Never share it or commit it to version control.

### 4. Configure Environment Variables

1. Copy the example environment file:

```bash
cp .env.example .env
```

2. Open the `.env` file in your favorite text editor:

```bash
# On Windows
notepad .env

# On Mac/Linux
nano .env
# or
vim .env
```

3. Replace `your_gemini_api_key_here` with your actual API key:

```env
GEMINI_API_KEY=AIzaSyC...your_actual_key_here
PORT=3001
NODE_ENV=development
```

4. Save and close the file

### 5. Start the Development Server

Run both the backend and frontend servers:

```bash
npm run dev
```

This will start:
- **Backend server** on http://localhost:3001
- **Frontend server** on http://localhost:5173

### 6. Open the Application

Open your web browser and navigate to:

```
http://localhost:5173
```

You should see the MonkeyTranslate interface!

## Usage

### Basic Workflow

1. **Upload Images**
   - Drag and drop images onto the upload zone, or click to browse
   - Supports: PNG, JPG, JPEG, GIF, WEBP (up to 10MB each)
   - You can upload multiple images at once

2. **Extract Text**
   - Click the **"Extract Text"** button
   - The AI will detect all text regions in the image
   - Extracted text will appear in the right panel

3. **Translate or Edit**
   - **Option A: Auto-translate**
     - Select a target language from the dropdown
     - Click **"Auto-Translate"**
   - **Option B: Manual edit**
     - Click the edit icon on any text region
     - Type your custom translation or replacement text
     - Click **"Save"**

4. **Generate Translated Image**
   - Once you're happy with the translations, click **"Generate Translated Image"**
   - The app will create a new image with text replaced
   - The preview will update automatically

5. **Download**
   - Click **"Download"** to save the translated image to your computer

## Troubleshooting

### "API key not configured" error

**Problem:** The app shows a warning about the API key.

**Solution:**
1. Make sure you created a `.env` file in the root directory
2. Verify your API key is correct
3. Restart the server (`Ctrl+C` then `npm run dev` again)

### Images not uploading

**Problem:** Upload fails or shows an error.

**Solutions:**
- Check that your image is under 10MB
- Ensure the image format is supported (JPG, PNG, GIF, WEBP)
- Check server logs for detailed error messages

### Text extraction not working

**Problem:** "Extract Text" button doesn't work or shows errors.

**Solutions:**
- Verify your Gemini API key is valid and has not expired
- Check that you have API quota remaining (free tier has limits)
- Try with a clearer image (high contrast, readable text)

### Server won't start

**Problem:** `npm run dev` fails with errors.

**Solutions:**
1. Make sure all dependencies are installed:
   ```bash
   npm run install:all
   ```
2. Check that ports 3001 and 5173 are not in use by other applications
3. Delete `node_modules` folders and reinstall:
   ```bash
   rm -rf node_modules client/node_modules server/node_modules
   npm run install:all
   ```

### TypeScript errors

**Problem:** Seeing type errors in the console.

**Solution:**
- This shouldn't prevent the app from running in development mode
- If needed, you can run `npm run build` to check for build errors

## Development Tips

### Running Only Backend or Frontend

**Backend only:**
```bash
npm run dev:server
```

**Frontend only:**
```bash
npm run dev:client
```

### Building for Production

To create production builds:

```bash
npm run build:all
```

This creates optimized builds in:
- `client/dist/` - Frontend static files
- `server/dist/` - Compiled backend code

### File Structure

```
monkey-translate/
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── services/     # API client
│   │   └── App.tsx       # Main app component
│   └── package.json
├── server/               # Express backend
│   ├── src/
│   │   ├── routes/       # API routes
│   │   ├── services/     # Gemini client, image rendering
│   │   └── server.ts     # Main server file
│   └── package.json
├── .env                  # Your API key (DO NOT COMMIT)
├── .env.example          # Template for .env
└── README.md
```

## API Rate Limits

The free tier of Gemini API has rate limits:
- 15 requests per minute (RPM)
- 1 million tokens per minute (TPM)
- 1,500 requests per day (RPD)

For production use, consider upgrading to a paid plan.

## Security Best Practices

1. **Never commit `.env`** - It's already in `.gitignore`
2. **Never share your API key** - Anyone with your key can use your quota
3. **Regenerate compromised keys** - If your key is exposed, create a new one immediately
4. **Use environment-specific keys** - Different keys for development and production

## Getting Help

- **Issues:** [GitHub Issues](https://github.com/yourusername/monkey-translate/issues)
- **Discussions:** [GitHub Discussions](https://github.com/yourusername/monkey-translate/discussions)
- **Gemini API Docs:** [Google AI for Developers](https://ai.google.dev/)

## Next Steps

- Check out the [README.md](README.md) for more information
- Explore the code and customize it for your needs
- Contribute improvements back to the project!

Enjoy using MonkeyTranslate! 🐵✨

