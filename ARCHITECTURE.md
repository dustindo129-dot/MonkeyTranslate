# MonkeyTranslate Architecture

This document describes the architecture and technical design of MonkeyTranslate.

## Overview

MonkeyTranslate is a full-stack web application with a React frontend and Node.js backend, designed to extract text from images, translate it, and regenerate images with the translated text.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                      Browser (Client)                    │
│  ┌──────────────────────────────────────────────────┐  │
│  │           React + TypeScript + Vite              │  │
│  │  ┌────────────┐  ┌─────────────┐  ┌──────────┐  │  │
│  │  │  App.tsx   │  │ Components  │  │ Services │  │  │
│  │  │  (Main)    │  │ - Upload    │  │ - API    │  │  │
│  │  │            │  │ - PageList  │  │ - Types  │  │  │
│  │  │            │  │ - Editor    │  │          │  │  │
│  │  │            │  │ - WorkPanel │  │          │  │  │
│  │  └────────────┘  └─────────────┘  └──────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                           │
                           │ HTTP/REST API
                           │ (port 5173 → 3001 proxy)
                           ↓
┌─────────────────────────────────────────────────────────┐
│                   Server (Backend)                       │
│  ┌──────────────────────────────────────────────────┐  │
│  │          Node.js + Express + TypeScript          │  │
│  │  ┌────────────┐  ┌─────────────┐  ┌──────────┐  │  │
│  │  │  Routes    │  │  Services   │  │  Types   │  │  │
│  │  │  - /pages  │  │  - Gemini   │  │          │  │  │
│  │  │  - /health │  │  - Image    │  │          │  │  │
│  │  │            │  │    Renderer │  │          │  │  │
│  │  └────────────┘  └─────────────┘  └──────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                           │
                           │ REST API Calls
                           │ (HTTPS)
                           ↓
┌─────────────────────────────────────────────────────────┐
│              Google Gemini API (External)                │
│  ┌──────────────────────────────────────────────────┐  │
│  │  - gemini-2.0-flash-exp                          │  │
│  │  - Text extraction (OCR)                         │  │
│  │  - Translation                                   │  │
│  │  - Image understanding                           │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## Component Breakdown

### Frontend (Client)

#### Technology Stack
- **React 18**: UI framework with hooks
- **TypeScript**: Type safety
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first styling
- **React Query**: Server state management
- **Axios**: HTTP client
- **React Dropzone**: File upload interface

#### Key Components

1. **App.tsx** - Main application component
   - Manages global state (pages, selected page)
   - Handles API health checks
   - Orchestrates component rendering

2. **ApiKeyModal.tsx** - API key setup guide
   - Shows instructions for getting a Gemini API key
   - Displays when API key is not configured

3. **UploadZone.tsx** - File upload interface
   - Drag-and-drop support
   - Multiple file selection
   - File validation

4. **PageList.tsx** - Thumbnail list of uploaded images
   - Shows all uploaded pages
   - Page selection
   - Page deletion

5. **PageEditor.tsx** - Main editing interface
   - Image preview
   - Toolbar with actions (Extract, Generate, Download)
   - Work panel integration

6. **WorkPanel.tsx** - Text regions management
   - Lists all detected text regions
   - Auto-translate dropdown
   - Region editing interface

7. **TextRegionItem.tsx** - Individual text region
   - Shows original and translated text
   - Inline editing
   - Visual feedback

#### Services

**api.ts** - API client
- Wraps all backend endpoints
- Type-safe requests and responses
- Centralized error handling

### Backend (Server)

#### Technology Stack
- **Node.js**: Runtime environment
- **Express**: Web framework
- **TypeScript**: Type safety
- **Multer**: File upload handling
- **Sharp**: Image processing
- **Google Generative AI SDK**: Gemini API integration

#### Key Files

1. **server.ts** - Main server file
   - Express app setup
   - Middleware configuration
   - Route mounting
   - Error handling

2. **routes/pages.ts** - API endpoints
   - `POST /api/pages` - Upload images
   - `GET /api/pages/:id/image` - Serve images
   - `POST /api/pages/:id/extract` - Extract text
   - `POST /api/translate` - Translate texts
   - `POST /api/pages/:id/render` - Generate translated image
   - `GET /api/pages/:id` - Get page details
   - `DELETE /api/pages/:id` - Delete page

3. **services/geminiClient.ts** - Gemini API integration
   - `extractTextFromImage()` - OCR with bounding boxes
   - `translateTexts()` - Batch translation
   - `renderTranslatedImage()` - Image generation instructions

4. **services/imageRenderer.ts** - Image processing
   - Uses Sharp to overlay translated text
   - Creates SVG overlays for text
   - Attempts to match original styling

## Data Flow

### 1. Image Upload Flow

```
User selects files
    ↓
UploadZone (React)
    ↓
apiService.uploadImages()
    ↓
POST /api/pages (Express)
    ↓
Multer saves files to /uploads
    ↓
Pages stored in memory (Map)
    ↓
Response with page objects
    ↓
App state updated
    ↓
PageList displays thumbnails
```

### 2. Text Extraction Flow

```
User clicks "Extract Text"
    ↓
PageEditor.handleExtractText()
    ↓
apiService.extractText(pageId)
    ↓
POST /api/pages/:id/extract
    ↓
geminiClient.extractTextFromImage()
    ↓
Gemini API call with image
    ↓
JSON response with text regions
    ↓
Regions stored in page object
    ↓
WorkPanel displays regions
```

### 3. Translation Flow

```
User selects language & clicks "Auto-Translate"
    ↓
WorkPanel.handleAutoTranslate()
    ↓
apiService.translateTexts(texts, lang)
    ↓
POST /api/translate
    ↓
geminiClient.translateTexts()
    ↓
Gemini API call with texts
    ↓
Translations returned
    ↓
Page regions updated
    ↓
TextRegionItem shows translations
```

### 4. Image Generation Flow

```
User clicks "Generate Translated Image"
    ↓
PageEditor.handleGenerateImage()
    ↓
apiService.renderImage(pageId, regions)
    ↓
POST /api/pages/:id/render
    ↓
imageRenderer.renderWithTranslations()
    ↓
Sharp creates image with overlays
    ↓
Rendered image saved to disk
    ↓
Response with image URL
    ↓
Image preview updated
```

## Data Models

### Page
```typescript
interface Page {
  id: string;                    // Unique identifier (UUID)
  imageOriginalUrl: string;      // URL to access the image
  imagePreviewUrl?: string;      // Optional preview URL
  regions: TextRegion[];         // Detected text regions
  renderedImageUrl?: string;     // URL after rendering
  filename: string;              // Original filename
  uploadedAt: Date;             // Upload timestamp
}
```

### TextRegion
```typescript
interface TextRegion {
  id: string;                           // Unique identifier
  bbox: [number, number, number, number]; // [x1, y1, x2, y2] normalized 0-1
  original: string;                     // Original detected text
  translated: string;                   // Translated/replacement text
}
```

## Storage Strategy

### Current Implementation (Development)
- **In-memory storage**: `Map<string, Page>`
- **File system**: Uploaded images in `/uploads` directory
- **Pros**: Simple, no database needed
- **Cons**: Data lost on server restart

### Production Recommendations
- **Database**: PostgreSQL, MongoDB, or MySQL
- **Object Storage**: AWS S3, Azure Blob, or Google Cloud Storage
- **Session Management**: Redis for caching
- **Considerations**:
  - Persistence across restarts
  - Scalability for multiple users
  - Backup and recovery

## API Design

### RESTful Principles
- Resource-based URLs (`/api/pages/:id`)
- HTTP verbs (GET, POST, DELETE)
- JSON request/response format
- Proper status codes (200, 400, 404, 500)

### Error Handling
- Consistent error format: `{ error: "message" }`
- Appropriate HTTP status codes
- Server-side logging
- Client-side error display

## Security Considerations

### Current Implementation
- API key stored in server-side `.env` file
- Never exposed to client
- File upload validation (type, size)
- Input sanitization

### Production Recommendations
1. **Authentication**: Add user authentication (JWT, OAuth)
2. **Rate Limiting**: Prevent API abuse
3. **File Scanning**: Virus/malware scanning
4. **HTTPS**: Encrypt all traffic
5. **CORS**: Restrict allowed origins
6. **Input Validation**: Strict validation on all endpoints
7. **API Key Rotation**: Regular key updates
8. **Logging**: Audit trails for security events

## Performance Optimization

### Current Optimizations
- React Query caching
- Image compression with Sharp
- Lazy loading of components
- Efficient re-rendering with React hooks

### Future Optimizations
1. **Image CDN**: Serve images from CDN
2. **Lazy Loading**: Load images on demand
3. **Pagination**: For large numbers of pages
4. **WebWorkers**: Offload heavy processing
5. **Caching**: Redis for API responses
6. **Compression**: Gzip/Brotli for responses
7. **Database Indexing**: For faster queries

## Deployment Architecture

### Local Development
```
localhost:5173 (Vite dev server)
      ↓ proxy
localhost:3001 (Express server)
      ↓
Gemini API
```

### Production (Recommended)
```
User → CloudFlare/CDN → Load Balancer
                             ↓
                      [Node.js Servers]
                             ↓
                    [PostgreSQL + Redis]
                             ↓
                      [Object Storage]
                             ↓
                        Gemini API
```

## Technology Choices Rationale

### Why React?
- Component-based architecture
- Large ecosystem
- Great developer experience
- Fast with virtual DOM

### Why Vite?
- Extremely fast HMR (Hot Module Replacement)
- Modern build tool
- Better than Create React App
- Native ES modules

### Why Tailwind CSS?
- Utility-first approach
- No CSS conflicts
- Fast development
- Consistent design system

### Why Express?
- Minimal and flexible
- Large ecosystem
- Well-documented
- Easy to learn

### Why Sharp?
- Fast image processing
- Native performance
- Wide format support
- Active maintenance

### Why TypeScript?
- Type safety
- Better IDE support
- Catches errors early
- Self-documenting code

## Future Architecture Considerations

### Microservices
For scaling, could split into:
- **Upload Service**: Handle file uploads
- **OCR Service**: Text extraction
- **Translation Service**: Text translation
- **Rendering Service**: Image generation

### Electron App
For desktop distribution:
- Package frontend + backend together
- No separate server needed
- Native OS integration
- Better user experience for local use

### Mobile App
Considerations for React Native:
- Reuse React components
- Native camera integration
- Offline mode support
- Push notifications for batch processing

## Contributing to Architecture

When making architectural changes:
1. Update this document
2. Consider backward compatibility
3. Add tests for new patterns
4. Document breaking changes
5. Update deployment guides

## Questions?

For architecture discussions, open a GitHub issue with the `architecture` label.

