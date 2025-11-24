# MonkeyTranslate 🐵

An open-source image translation tool powered by Google's Gemini API. Extract text from images, translate it to any language, and regenerate images with the translated text while preserving the original styling.

## Features

- 📤 **Batch Image Upload** - Upload multiple images at once
- 🔍 **Text Extraction** - Automatically detect and extract text from images
- 🌍 **Multi-language Translation** - Translate to any language using Gemini AI
- 🎨 **Style Preservation** - Regenerate images with translated text in the original style
- 🖼️ **Visual Editor** - Interactive work panel to edit and manage translations
- 🔑 **Privacy First** - Uses your own Gemini API key (stored locally)

## Tech Stack

**Frontend:**
- React 18 with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- React Query for API state management

**Backend:**
- Node.js with Express
- Google Gemini API (@google/genai)
- Multer for file uploads

## Prerequisites

- Node.js 18+ and npm
- A Google Gemini API key ([Get one here](https://aistudio.google.com/app/apikey))

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/monkey-translate.git
cd monkey-translate
```

### 2. Install dependencies

```bash
npm run install:all
```

This will install dependencies for the root, server, and client.

### 3. Set up your Gemini API key

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and add your Gemini API key:

```
GEMINI_API_KEY=your_actual_api_key_here
```

**Important:** Never commit your `.env` file or share your API key publicly!

### 4. Run the development server

```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:3001`
- Frontend development server on `http://localhost:5173`

Open your browser and navigate to `http://localhost:5173`

## How to Use

1. **Enter API Key** - On first launch, you'll be prompted to enter your Gemini API key
2. **Upload Images** - Click "Upload Images" to select one or more images
3. **Extract Text** - Click "Extract Text" to detect text regions in the image
4. **Edit Translations** - Modify the extracted text or add translations in the work panel
5. **Generate Image** - Click "Generate Translated Image" to create a new image with replaced text

## Project Structure

```
monkey-translate/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── types/
│   │   └── App.tsx
│   └── package.json
├── server/          # Express backend
│   ├── src/
│   │   ├── routes/
│   │   ├── services/
│   │   └── server.ts
│   └── package.json
├── .env.example     # Environment template
└── README.md
```

## API Endpoints

- `POST /api/pages` - Upload images
- `POST /api/pages/:id/extract` - Extract text from an image
- `POST /api/translate` - Translate text using Gemini
- `POST /api/pages/:id/render` - Generate image with translated text
- `GET /api/pages/:id/image` - Get uploaded image
- `DELETE /api/pages/:id` - Delete a page

## Building for Production

```bash
npm run build:all
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Acknowledgments

- Powered by [Google Gemini API](https://ai.google.dev/)
- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)

## Troubleshooting

**"API key not configured" error:**
- Make sure you've created a `.env` file in the root directory
- Check that your `GEMINI_API_KEY` is valid
- Restart the server after adding the key

**Images not uploading:**
- Check file size limits (default 10MB per image)
- Ensure images are in JPG, PNG, or WEBP format

**Text extraction not working:**
- Verify your API key has access to Gemini Pro Vision
- Check that the image has clear, readable text

## Support

For issues and questions, please open an issue on GitHub.

