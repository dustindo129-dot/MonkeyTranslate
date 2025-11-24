# Building MonkeyTranslate Desktop App

This guide explains how to build MonkeyTranslate as a standalone desktop application that users can install without needing Node.js or any development tools.

## Quick Start

### 1. Install Dependencies

```bash
npm run install:all
```

### 2. Build for Your Platform

**Windows (Folder):**
```bash
npm run pack:win
```

**macOS (Folder):**
```bash
npm run pack:mac
```

**Linux (Folder):**
```bash
npm run pack:linux
```

The packaged applications will be in the `dist/` folder.

### Alternative: Installer Packages (May require Windows Admin)
If you need installer packages and have admin privileges:

**Windows (.exe installer):**
```bash
npm run build:win
```

**macOS (.dmg):**
```bash
npm run build:mac
```

**Linux (.AppImage):**
```bash
npm run build:linux
```

## What Gets Created

- **Windows**: An installer (.exe) that creates a desktop app
- **macOS**: A .dmg file containing the app
- **Linux**: An .AppImage portable executable

## User Experience

When users run the desktop app:

1. **First Launch**: They'll see an API key dialog where they can:
   - Click "Get API Key" to open Google AI Studio
   - Enter their Gemini API key
   - Click "Save & Continue"

2. **Subsequent Launches**: The app opens directly with their saved API key

3. **Menu Options**: Users can reconfigure the API key via File → Configure API Key

## Key Features

- ✅ **No Installation Required**: Users don't need Node.js, npm, or any dev tools
- ✅ **Single Executable**: Just double-click the .exe to run
- ✅ **Persistent Storage**: API keys are saved securely to user data folder
- ✅ **Auto-Updates**: Easy to distribute new versions
- ✅ **Native Feel**: Runs as a desktop app, not in browser
- ✅ **Offline Capable**: Works without internet for local processing

## Development

### Test in Electron (Development Mode)

```bash
npm run electron:dev
```

This starts both the server and opens Electron with hot reload.

### Just Run Electron

```bash
npm run electron
```

This runs Electron against built files (requires `npm run build:all` first).

## Troubleshooting

### Build Issues

1. **Missing Dependencies**: Run `npm run install:all`
2. **TypeScript Errors**: Check server builds with `cd server && npm run build`
3. **Client Build Fails**: Check client builds with `cd client && npm run build`

### Runtime Issues

1. **Server Won't Start**: Check if port 3001 is available
2. **API Key Not Saving**: Check user permissions in home directory
3. **Images Not Loading**: Ensure client is built with correct base path

### Platform-Specific

**Windows:**
- Requires NSIS installer on build machine for creating installers
- Icons should be .ico format (auto-converted from .png)

**macOS:**
- Requires code signing for distribution (not needed for personal use)
- Use `--publish=never` to avoid upload attempts

**Linux:**
- AppImage works on most distributions
- No special requirements for building

## Distribution

The built executables are completely portable and can be:
- Shared via cloud storage
- Distributed via website download
- Put on USB drives
- Sent via email (if size permits)

Users just need to:
1. Download the file
2. Double-click to install/run
3. Enter their Gemini API key on first launch

## File Structure

```
dist/
├── MonkeyTranslate Setup 1.0.0.exe    # Windows installer
├── MonkeyTranslate-1.0.0.dmg          # macOS disk image
└── MonkeyTranslate-1.0.0.AppImage     # Linux portable app
```
