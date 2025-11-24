# MonkeyTranslate 🐵🌍

<div align="center">

![MonkeyTranslate Logo](client/public/logo.png)

**A production-ready image translation platform powered by Google Gemini AI**

[![License](https://img.shields.io/badge/License-BUSL--1.1-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.0+-61dafb.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Electron](https://img.shields.io/badge/Electron-28+-47848f.svg)](https://www.electronjs.org/)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Architecture](#-architecture) • [Quick Start](#-quick-start) • [Documentation](#-documentation)

</div>

---

## 🎯 Overview

MonkeyTranslate is a sophisticated full-stack application that leverages Google's Gemini AI to extract text from images, translate it into any language, and regenerate the image with translated text while preserving original styling. Built with modern technologies and professional development practices, it serves both as a production desktop application and a showcase of enterprise-grade software architecture.

### Why This Project Matters

- **Real-World AI Integration**: Demonstrates practical implementation of LLM APIs with error handling, prompt engineering, and multi-model orchestration
- **Full-Stack Architecture**: Showcases end-to-end development from React UI to Express backend to Electron desktop packaging
- **Production-Ready**: Features proper state management, internationalization, type safety, and deployment workflows
- **Modern Tech Stack**: Built entirely with TypeScript, leveraging cutting-edge frameworks and best practices

---

## ✨ Features

### Core Capabilities
- 📤 **Batch Image Processing** - Upload and process multiple images concurrently
- 🔍 **Intelligent Text Extraction** - AI-powered text detection with bounding box coordinates
- 🌍 **Multi-Language Translation** - Translate to 100+ languages using Gemini AI
- 🎨 **Style-Preserving Rendering** - Regenerate images maintaining original fonts, colors, and layouts
- 🖼️ **Interactive Visual Editor** - Intuitive interface for reviewing and editing translations

### Technical Features
- 🔑 **Privacy-First Design** - API keys stored locally, no external data collection
- 💾 **State Management** - React Query for efficient caching and optimistic updates
- 🌐 **Internationalization** - Multi-language UI (English, Spanish, French, German, Chinese)
- 🖥️ **Cross-Platform Desktop App** - Electron-based standalone executable (Windows/macOS/Linux)
- 🎯 **Type Safety** - Full TypeScript coverage with strict mode
- 🔄 **Real-Time Updates** - Live feedback on processing status and API health

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI with hooks and functional components
- **TypeScript 5** - Type-safe development with strict configuration
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first styling with custom design system
- **React Query (TanStack Query)** - Powerful async state management
- **Lucide React** - Beautiful, consistent icon system
- **i18next** - Internationalization framework

### Backend
- **Node.js 18+** - JavaScript runtime with ES modules
- **Express.js** - Minimalist web framework
- **TypeScript** - Compiled with target ES2022
- **Multer** - Multipart form data handling for file uploads
- **Sharp** - High-performance image processing
- **Google Gemini AI** - Multi-model AI integration (text & image models)

### Desktop Application
- **Electron 28** - Cross-platform desktop framework
- **electron-builder** - Automated packaging and distribution
- **IPC Communication** - Secure main-renderer process communication

### Development & Build
- **npm Workspaces** - Monorepo management
- **Concurrently** - Parallel script execution
- **dotenv** - Environment variable management
- **ESLint + Prettier** - Code quality and formatting
- **Git** - Version control with conventional commits

---

## 🏗️ Architecture

### System Design

```
┌─────────────────────────────────────────────────────────────┐
│                     Electron Shell                          │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              React Frontend (Port 5173)              │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │   │
│  │  │   UI     │  │  State   │  │  API Service     │  │   │
│  │  │Components│→│Management │→│  (React Query)   │  │   │
│  │  └──────────┘  └──────────┘  └──────────────────┘  │   │
│  └─────────────────────────────────────────────────────┘   │
│                           ↓ HTTP/REST API                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Express Backend (Port 3001)             │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │   │
│  │  │  Routes  │→│ Services │→│  Gemini Client   │  │   │
│  │  │  (REST)  │  │ Layer    │  │  (AI Logic)      │  │   │
│  │  └──────────┘  └──────────┘  └──────────────────┘  │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                           ↓
                  ┌────────────────┐
                  │  Google Gemini │
                  │    AI API      │
                  └────────────────┘
```

### Data Flow

1. **Upload Phase**: User selects images → Multer handles upload → Files stored with unique IDs
2. **Extraction Phase**: Image sent to Gemini 2.5 Pro → AI detects text regions → Returns normalized bounding boxes
3. **Translation Phase**: Text arrays sent to Gemini → AI translates to target language → Returns translated strings
4. **Rendering Phase**: Image + regions sent to Gemini Image model → AI regenerates image with translated text → Returns final image buffer

### Directory Structure

```
monkey-translate/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── contexts/      # React context providers
│   │   ├── services/      # API service layer
│   │   ├── types/         # TypeScript type definitions
│   │   ├── i18n/          # Internationalization configs
│   │   ├── App.tsx        # Root component
│   │   └── main.tsx       # Entry point
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
│
├── server/                # Express backend application
│   ├── src/
│   │   ├── routes/        # API route handlers
│   │   ├── services/      # Business logic layer
│   │   │   ├── geminiClient.ts    # AI integration (simplified OSS version)
│   │   │   └── imageRenderer.ts   # Image processing
│   │   ├── types.ts       # Shared type definitions
│   │   └── server.ts      # Express app entry point
│   ├── uploads/           # Temporary file storage
│   └── package.json       # Backend dependencies
│
├── electron/              # Electron main process
│   ├── main.js           # Main process entry
│   └── preload.js        # Preload script
│
├── dist/                 # Build output
├── .env.example          # Environment template
├── LICENSE               # BUSL-1.1 license
└── package.json          # Root package with scripts
```

---

## 🚀 Quick Start

### Option 1: Download Pre-Built App (Easiest!) ⚡

**No installation, no setup, just run!**

1. **Download** the latest release for your platform:
   - 🪟 **Windows**: `MonkeyTranslate-Setup.exe` - Just double-click and run!
   - 🍎 **macOS**: `MonkeyTranslate.dmg` - Drag to Applications
   - 🐧 **Linux**: `MonkeyTranslate.AppImage` - Make executable and run

2. **Launch** the application
3. **Enter your Gemini API key** (get one free [here](https://aistudio.google.com/app/apikey))
4. **Start translating!**

👉 [**Download Latest Release**](https://github.com/dustindo129-dot/monkey-translate/releases/latest)

> **Note**: Windows users can run the .exe directly - no installation or Node.js required!

---

### Option 2: Development Setup

For developers who want to modify the code or contribute:

#### Prerequisites
- **Node.js 18+** and npm
- **Google Gemini API Key** ([Get one free](https://aistudio.google.com/app/apikey))

#### Installation

```bash
# Clone the repository
git clone https://github.com/dustindo129-dot/monkey-translate.git
cd monkey-translate

# Install all dependencies (root, server, and client)
npm run install:all

# Set up environment variables
cp .env.example .env
# Edit .env and add your GEMINI_API_KEY

# Start development servers
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

### Building Desktop Application

```bash
# Build for your current platform
npm run build:win      # Windows (portable .exe)
npm run build:mac      # macOS (.dmg)
npm run build:linux    # Linux (AppImage)

# Or build for all platforms at once
npm run build:electron

# Output will be in the dist/ folder
```

See [BUILDING.md](BUILDING.md) for detailed build instructions and troubleshooting.

---

## 📖 Documentation

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Health check and API key status |
| `POST` | `/api/pages` | Upload images (multipart/form-data) |
| `POST` | `/api/pages/:id/extract` | Extract text from image |
| `POST` | `/api/translate` | Translate text array |
| `POST` | `/api/pages/:id/render` | Generate translated image |
| `GET` | `/api/pages/:id/image` | Retrieve uploaded/rendered image |
| `DELETE` | `/api/pages/:id` | Delete page and associated files |

### Environment Variables

```bash
# Required
GEMINI_API_KEY=your_gemini_api_key_here

# Optional
PORT=3001                    # Backend server port
NODE_ENV=development         # Environment mode
```

### Usage Guide

1. **Configure API Key**: On first launch, enter your Gemini API key
2. **Upload Images**: Drag-and-drop or click to select images (JPG, PNG, WEBP)
3. **Extract Text**: Click "Extract Text" to detect text regions with AI
4. **Select Language**: Choose target language from the dropdown
5. **Review & Edit**: Modify translations in the work panel if needed
6. **Generate Image**: Click "Generate Translated Image" to create final output
7. **Download**: Save the translated image to your device

---

## 🎓 Key Technical Achievements

### 1. **AI Integration Excellence**
- Implemented multi-model orchestration using Gemini 2.5 Pro (text) and Gemini 3 Pro (image generation)
- Engineered robust prompt templates for consistent JSON output
- Built error recovery mechanisms for API failures
- Optimized image size handling for Gemini API limits (20MP)

### 2. **Full-Stack Architecture**
- Designed RESTful API with proper separation of concerns
- Implemented type-safe interfaces shared between frontend and backend
- Created modular service layer for business logic isolation
- Built scalable file management system with unique IDs

### 3. **Modern React Development**
- Leveraged React Query for advanced caching and optimistic updates
- Implemented Context API for global state (language, API key)
- Created reusable component library with TypeScript props
- Built responsive UI with Tailwind CSS and dark mode support

### 4. **Desktop Application Engineering**
- Integrated Electron with existing web application
- Configured IPC for secure cross-process communication
- Implemented automated build pipelines for multiple platforms
- Optimized bundle size and startup performance

### 5. **Developer Experience**
- Configured monorepo with npm workspaces
- Set up hot module replacement for fast iteration
- Implemented TypeScript strict mode across entire codebase
- Created comprehensive documentation and code comments

---

## 🤝 Contributing

Contributions are welcome! This project is licensed under BUSL-1.1, which allows:
- ✅ Non-commercial use
- ✅ Development and testing
- ✅ Contributions and pull requests
- ⚠️ Production use requires commercial license (or wait until 2029 when it converts to Apache 2.0)

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 📋 Project Status

### Current Version: v1.0.0 (Open Source Release)

**What's Included:**
- ✅ Full UI source code with all components
- ✅ Complete backend structure and API routes
- ✅ Basic Gemini AI integration (text extraction, translation, image generation)
- ✅ Electron desktop application framework
- ✅ Comprehensive documentation

**What's Proprietary:**
- 🔒 Advanced prompt engineering techniques
- 🔒 Production optimization algorithms
- 🔒 Enterprise features and integrations
- 🔒 Latest experimental capabilities (v2.0+)

See [OPEN-SOURCE-STRATEGY.md](OPEN-SOURCE-STRATEGY.md) for details on what's open vs. proprietary.

---

## 📄 License

This project is licensed under the **Business Source License 1.1 (BUSL-1.1)**.

### Quick Summary:
- ✅ **Free for**: Personal projects, education, research, non-production development
- ⚠️ **Requires license for**: Production commercial use
- 🔄 **Converts to Apache 2.0**: On January 1, 2029 (fully open source)

See the [LICENSE](LICENSE) file for the complete license text.

For commercial licensing inquiries, please open an issue or contact the maintainers.

---

## 🌟 Showcase

### Use Cases
- **Manga/Comic Translation**: Translate Japanese manga to English while preserving artistic style
- **Product Localization**: Adapt product images for international markets
- **Educational Materials**: Translate textbooks and learning materials
- **Social Media**: Create multilingual content for global audiences
- **Game Localization**: Translate game UI and assets

### Performance Metrics
- Text extraction: ~2-5 seconds per image
- Translation: ~1-2 seconds per batch (10 texts)
- Image generation: ~10-30 seconds depending on complexity and size
- Supports images up to 20 megapixels

---

## 🙏 Acknowledgments

- **Google Gemini AI** - Powering the intelligent text extraction and translation
- **React Team** - For the amazing UI framework
- **TypeScript Team** - For type safety and developer experience
- **Electron Community** - For cross-platform desktop capabilities
- **Open Source Community** - For the incredible tools and libraries

---

## 📞 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/dustindo129-dot/monkey-translate/issues)
- **Discussions**: [GitHub Discussions](https://github.com/dustindo129-dot/monkey-translate/discussions)
- **Commercial Licensing**: Open an issue with the `licensing` label
- **Developer**: Dustin Do

---

<div align="center">

**Built with ❤️ by Dustin Do using TypeScript, React, and AI**

[⭐ Star this repo](https://github.com/dustindo129-dot/monkey-translate) if you find it useful!

</div>
