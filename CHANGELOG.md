# Changelog

All notable changes to MonkeyTranslate will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-11-24

### Added
- Initial release of MonkeyTranslate
- Image upload with drag-and-drop support
- Batch image upload (multiple images at once)
- Text extraction using Google Gemini API
- Auto-translation to 13+ languages
- Manual text editing for custom replacements
- Image regeneration with translated text
- Visual work panel showing all text regions
- Download translated images
- API key configuration with helpful setup guide
- Responsive UI with Tailwind CSS
- React + TypeScript frontend with Vite
- Node.js + Express backend
- Real-time API health monitoring

### Features
- **Text Detection**: Automatically detect text regions in images with bounding boxes
- **Multi-language Support**: Translate to English, Spanish, French, German, Italian, Portuguese, Russian, Japanese, Korean, Chinese, Arabic, Hindi, Vietnamese
- **Style Preservation**: Regenerate images attempting to preserve original text styling
- **Privacy First**: Uses your own Gemini API key stored locally
- **Open Source**: MIT licensed for personal and commercial use

### Technical Details
- Frontend: React 18, TypeScript, Vite, Tailwind CSS, React Query
- Backend: Node.js, Express, Google Generative AI SDK, Sharp, Multer
- Image Processing: Sharp for image manipulation
- API: RESTful endpoints for upload, extraction, translation, and rendering

## [Unreleased]

### Planned Features
- Electron app for desktop distribution
- PDF support
- Improved font matching in rendered images
- Batch processing for multiple pages
- History and undo functionality
- Dark mode
- Export as PDF
- Custom font selection
- Manual text region adjustment

---

For detailed changes, see the [GitHub releases page](https://github.com/yourusername/monkey-translate/releases).

