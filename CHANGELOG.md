# Changelog

All notable changes to MonkeyTranslate will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2025-01-24 - "Sunset" (Open Source Release)

### 🎉 Initial Open Source Release

This is the first public release of MonkeyTranslate under the Business Source License 1.1 (BUSL-1.1). This version represents a production-ready, feature-complete image translation platform suitable for personal, educational, and non-commercial use.

### ✨ Features

#### Core Functionality
- **AI-Powered Text Extraction** - Intelligent text detection from images using Google Gemini 2.5 Pro
  - Automatic bounding box detection with normalized coordinates
  - Support for multiple text regions per image
  - Handles complex layouts and various font styles

- **Multi-Language Translation** - Translate extracted text to 100+ languages
  - Batch translation optimization
  - Context-aware translation using Gemini AI
  - Preserves text structure and formatting

- **Style-Preserving Image Regeneration** - Creates new images with translated text
  - Maintains original fonts, colors, and styling
  - Pixel-perfect text placement
  - Supports images up to 20 megapixels

- **Batch Processing** - Upload and process multiple images simultaneously
  - Concurrent image processing
  - Progress tracking per image
  - Queue management

#### User Interface
- **Modern React UI** - Responsive, intuitive interface built with React 18
  - Drag-and-drop image upload
  - Real-time processing feedback
  - Interactive text region editing
  - Zoomable image viewer with pan controls

- **Internationalization** - Multi-language UI support
  - English, Spanish, French, German, Chinese
  - Context-aware translations
  - Easy language switching

- **Dark Mode Ready** - Tailwind CSS with dark mode support
  - Automatic theme detection
  - Manual theme toggle
  - Optimized color palettes

#### Desktop Application
- **Windows Desktop App** - Standalone desktop application
  - Windows executable (.exe) - Pre-built and ready to download
  - No browser required
  - No installation needed
  - Offline-first architecture
  - macOS and Linux: Build from source (instructions included)

- **Native File Management** - System integration
  - Native file picker dialogs
  - Save files to local filesystem
  - Persistent settings storage

#### Developer Experience
- **Full TypeScript** - 100% TypeScript codebase
  - Strict mode enabled
  - Comprehensive type definitions
  - Shared types between frontend/backend

- **Modern Build Tools**
  - Vite for lightning-fast dev server
  - Hot Module Replacement (HMR)
  - Optimized production builds
  - Source maps for debugging

- **Monorepo Architecture**
  - npm workspaces configuration
  - Unified dependency management
  - Parallel script execution
  - Clean separation of concerns

### 🛠️ Technical Implementation

#### Backend Architecture
- **Express.js REST API** - Clean, modular API design
  - RESTful endpoint structure
  - Middleware for error handling
  - CORS configuration for Electron
  - Multipart form data handling with Multer

- **Service Layer Pattern** - Business logic separation
  - GeminiClient service for AI operations
  - ImageRenderer service for image processing
  - Modular, testable code structure

- **File Management** - Efficient upload handling
  - Unique ID generation for pages
  - Temporary storage with cleanup
  - Base64 encoding for API transmission

#### Frontend Architecture
- **React Query (TanStack Query)** - Advanced state management
  - Automatic caching and invalidation
  - Optimistic updates
  - Background refetching
  - Error boundary integration

- **Context API** - Global state management
  - Language context for i18n
  - API key storage and validation
  - Settings persistence

- **Component Library** - Reusable, type-safe components
  - ApiKeyModal - API key configuration
  - UploadZone - Drag-and-drop interface
  - PageList - Image gallery with controls
  - PageEditor - Main editing interface
  - WorkPanel - Translation management
  - ZoomableImage - Interactive image viewer
  - TextRegionItem - Individual region editor

#### AI Integration
- **Multi-Model Strategy** - Optimized model selection
  - Gemini 2.5 Pro for text tasks (extraction, translation)
  - Gemini 3 Pro Image for image generation
  - Model-specific prompt engineering

- **Prompt Engineering** - Structured AI instructions
  - JSON-formatted responses
  - Consistent output parsing
  - Error recovery mechanisms

- **Image Optimization** - Gemini API limit handling
  - Automatic resizing for 20MP limit
  - Aspect ratio preservation
  - Quality-optimized compression
  - Scale-back to original dimensions

### 📦 Dependencies

#### Key Frontend Dependencies
- React 18.3.1
- TypeScript 5.6.2
- Vite 6.0.7
- TailwindCSS 3.4.17
- @tanstack/react-query 5.62.11
- Lucide React 0.469.0

#### Key Backend Dependencies
- Express 4.21.2
- @google/generative-ai 0.24.0
- @google/genai 0.24.1
- Sharp 0.33.5
- Multer 1.4.5-lts.1

#### Desktop Dependencies
- Electron 28.0.0
- electron-builder 24.9.1
- electron-packager 17.1.2

### 🔧 Configuration

#### Environment Variables
```bash
GEMINI_API_KEY=your_api_key_here  # Required
PORT=3001                          # Optional (default: 3001)
NODE_ENV=development               # Optional (default: development)
```

#### Build Configuration
- Electron app ID: `com.monkeytranslate.app`
- Supported platforms: Windows (x64), macOS (x64), Linux (x64)
- Bundle size optimization with compression
- No automatic updates configured

### 📚 Documentation

#### Included Documentation
- `README.md` - Comprehensive project overview and quick start guide
- `OPEN-SOURCE-STRATEGY.md` - Details on open source vs. proprietary components
- `ELECTRON-BUILD.md` - Desktop application building guide
- `LICENSE` - BUSL-1.1 license text
- `CONTRIBUTING.md` - Contribution guidelines (see below)
- `CODE_OF_CONDUCT.md` - Community standards (see below)
- `CHANGELOG.md` - This file

### 🎯 Known Limitations (v1.0)

#### Performance
- Image generation can take 10-30 seconds for complex images
- Large batches may hit Gemini API rate limits
- No built-in retry logic for failed API calls

#### Features
- No image editing capabilities beyond text translation
- No custom font selection for translated text
- No offline mode (requires internet for AI features)
- No batch export functionality

#### Platform-Specific
- Windows: Antivirus may flag unsigned executable (expected for unsigned apps)
- macOS/Linux: Build from source required (cross-platform builds have limitations)

### 🔐 Security

#### Privacy Features
- API keys stored locally in application config
- No telemetry or analytics
- No external data collection
- All processing done client-side or through user's API key

#### Security Measures
- CORS configuration for Electron
- Environment variable protection
- Input validation on all API endpoints
- File type restrictions on uploads

### 🚀 Deployment

#### Development
```bash
npm run dev              # Start dev servers
npm run dev:server       # Backend only
npm run dev:client       # Frontend only
```

#### Production
```bash
npm run build:all        # Build web version
npm run build:win        # Build Windows app (pre-built available in releases)
npm run build:mac        # Build macOS app (requires macOS machine)
npm run build:linux      # Build Linux app
```

### 🙏 Credits

- **Google Gemini AI** - AI models powering extraction, translation, and generation
- **React & TypeScript Teams** - Framework and language
- **Electron Team** - Desktop application framework
- **Open Source Community** - All the amazing libraries used

### 📄 License

Business Source License 1.1 (BUSL-1.1)
- Free for non-production use
- Converts to Apache 2.0 on 2029-01-01
- See LICENSE file for details

---

## [Unreleased]

### Planned Features (v2.0)
- Real-time collaboration features
- Cloud storage integration
- Advanced batch processing with progress tracking
- Custom font support for translations
- Plugin system for extensibility
- API rate limiting and cost optimization
- Automated testing suite (E2E, unit, integration)
- CI/CD pipeline with GitHub Actions
- Docker containerization
- Enterprise SSO support

### Under Consideration
- Browser extension version
- Mobile application (React Native)
- Web-based version (no Electron)
- Support for PDF and document translation
- OCR improvement with custom models
- Translation memory and glossary support

---

## Version History

### v1.0.0 - "Sunset" - 2025-01-24
- Initial open source release
- Complete feature set for image translation
- Cross-platform desktop application
- Professional documentation

---

*For detailed information about what's included in the open source release vs. proprietary features, see [OPEN-SOURCE-STRATEGY.md](OPEN-SOURCE-STRATEGY.md).*

