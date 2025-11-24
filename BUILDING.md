# Building MonkeyTranslate for All Platforms

This guide explains how to build MonkeyTranslate desktop applications for Windows, macOS, and Linux.

## 📋 Table of Contents
- [Prerequisites](#prerequisites)
- [Quick Build](#quick-build)
- [Platform-Specific Builds](#platform-specific-builds)
- [Build Output](#build-output)
- [Cross-Platform Building](#cross-platform-building)
- [Troubleshooting](#troubleshooting)
- [GitHub Release Setup](#github-release-setup)

---

## Prerequisites

### All Platforms
- **Node.js 18+** installed
- **npm** (comes with Node.js)
- Clean install of dependencies: `npm run install:all`

### Platform-Specific Requirements

#### Building for Windows
- **Windows**: No additional requirements
- **macOS/Linux**: Install Wine to cross-compile for Windows
  ```bash
  # macOS
  brew install wine

  # Ubuntu/Debian
  sudo dpkg --add-architecture i386
  sudo apt-get update
  sudo apt-get install wine wine32 wine64
  ```

#### Building for macOS
- **macOS**: Xcode Command Line Tools
  ```bash
  xcode-select --install
  ```
- **Windows/Linux**: Cannot cross-compile for macOS (need actual macOS machine)

#### Building for Linux
- **Linux**: No additional requirements
- **Windows/macOS**: Can cross-compile for Linux

---

## Quick Build

### Build for Your Current Platform

```bash
# 1. Make sure all dependencies are installed
npm run install:all

# 2. Build the app for your current OS
npm run build:electron
```

This will automatically detect your platform and build the appropriate version.

---

## Platform-Specific Builds

### Windows Build (Portable .exe)

```bash
# From project root
npm run build:win

# Or use the more specific command
npm run build:win-portable

# Output: dist/MonkeyTranslate-{version}-win.exe
```

**What you get:**
- Single `.exe` file (portable - no installation needed)
- Approximately 150-200 MB
- Works on Windows 10 and 11 (64-bit)

### macOS Build (.dmg)

```bash
# From project root (must be on macOS)
npm run build:mac

# Output: dist/MonkeyTranslate-{version}.dmg
```

**What you get:**
- `.dmg` installer
- Drag-and-drop to Applications folder
- Works on macOS 10.13+ (High Sierra and newer)

**Note:** macOS builds require code signing for distribution. See [Code Signing](#code-signing) below.

### Linux Build (AppImage)

```bash
# From project root
npm run build:linux

# Output: dist/MonkeyTranslate-{version}.AppImage
```

**What you get:**
- Self-contained `.AppImage` file
- No installation required
- Works on most Linux distributions

**To use the AppImage:**
```bash
chmod +x MonkeyTranslate-{version}.AppImage
./MonkeyTranslate-{version}.AppImage
```

### Build All Platforms at Once

```bash
# This will build for Windows, macOS, and Linux
npm run build:electron

# Note: macOS builds only work on macOS machines
# Other platforms can be built from any OS (with Wine for Windows)
```

---

## Build Output

After building, check the `dist/` folder:

```
dist/
├── MonkeyTranslate-1.0.0.exe          # Windows portable
├── MonkeyTranslate-1.0.0.dmg          # macOS installer
├── MonkeyTranslate-1.0.0.AppImage     # Linux AppImage
├── win-unpacked/                       # Windows unpacked (for testing)
├── mac/                                # macOS unpacked (for testing)
├── linux-unpacked/                     # Linux unpacked (for testing)
└── builder-*.yml                       # Build metadata
```

**Files to distribute:**
- ✅ `.exe` file for Windows
- ✅ `.dmg` file for macOS
- ✅ `.AppImage` file for Linux
- ❌ Don't distribute the `*-unpacked` folders (dev use only)

---

## Cross-Platform Building

### From Windows

```bash
# Can build:
✅ Windows (native)
✅ Linux (cross-compile)
❌ macOS (not possible)

# Commands:
npm run build:win      # Native Windows
npm run build:linux    # Linux AppImage
```

### From macOS

```bash
# Can build:
✅ macOS (native)
✅ Windows (with Wine)
✅ Linux (cross-compile)

# Commands:
npm run build:mac      # Native macOS
npm run build:win      # Windows (requires Wine)
npm run build:linux    # Linux AppImage

# Install Wine first:
brew install wine
```

### From Linux

```bash
# Can build:
✅ Linux (native)
✅ Windows (with Wine)
❌ macOS (not possible)

# Commands:
npm run build:linux    # Native Linux
npm run build:win      # Windows (requires Wine)
```

---

## Build Configuration

### Current Configuration (package.json)

```json
{
  "build": {
    "appId": "com.monkeytranslate.app",
    "productName": "MonkeyTranslate",
    "win": {
      "target": "portable",
      "icon": "client/public/logo.png"
    },
    "mac": {
      "target": "dmg",
      "icon": "client/public/logo.png",
      "category": "public.app-category.utilities"
    },
    "linux": {
      "target": "AppImage",
      "icon": "client/public/logo.png",
      "category": "Utility"
    }
  }
}
```

### Customizing Builds

Edit `package.json` under the `build` section:

```json
// Windows: Create installer instead of portable
"win": {
  "target": "nsis",  // or "portable" for single .exe
  "icon": "icon.ico"
}

// macOS: Multiple targets
"mac": {
  "target": ["dmg", "zip"],
  "icon": "icon.icns"
}

// Linux: Different package formats
"linux": {
  "target": ["AppImage", "deb", "rpm"],
  "icon": "icon.png"
}
```

---

## Code Signing

### macOS Code Signing (Required for Distribution)

Without code signing, users will see "App is from an unidentified developer" warning.

**Option 1: Developer Certificate (Recommended)**
```bash
# Get Apple Developer account ($99/year)
# Download certificate from developer.apple.com

# Add to package.json:
"mac": {
  "target": "dmg",
  "identity": "Developer ID Application: Your Name (TEAMID)"
}

# Build will automatically sign
npm run build:mac
```

**Option 2: Self-Signed (Testing Only)**
```bash
# Users must right-click → Open to bypass Gatekeeper
# Not recommended for public distribution
```

### Windows Code Signing (Optional)

Windows SmartScreen may warn about unsigned apps.

**Option 1: Code Signing Certificate**
```bash
# Purchase certificate from CA (e.g., DigiCert, Comodo)
# Add to package.json:
"win": {
  "certificateFile": "path/to/cert.pfx",
  "certificatePassword": "password"
}
```

**Option 2: Extended Validation (EV) Certificate**
- Best option for avoiding SmartScreen warnings
- More expensive but builds reputation faster

---

## Troubleshooting

### Build Fails on Windows

**Error: `spawn wine ENOENT`**
```bash
# Wine not installed (needed for Windows builds on macOS/Linux)
# On macOS:
brew install wine

# On Linux:
sudo apt-get install wine wine64
```

**Error: `Cannot find module 'electron'`**
```bash
# Dependencies not installed
npm run install:all
```

### Build Fails on macOS

**Error: `Code signing required`**
```bash
# Disable code signing for development:
export CSC_IDENTITY_AUTO_DISCOVERY=false
npm run build:mac
```

**Error: `xcrun: error: invalid active developer path`**
```bash
# Install Xcode Command Line Tools:
xcode-select --install
```

### Build Fails on Linux

**Error: `ENOSPC: System limit for number of file watchers reached`**
```bash
# Increase file watcher limit:
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

### Large Build Size

**Reduce build size:**
```json
// In package.json:
"build": {
  "compression": "maximum",  // Change from "store" to "maximum"
  "asar": true,
  "npmRebuild": true
}
```

### Build is Slow

**Speed up builds:**
```bash
# Skip compression during development
npm run pack:win   # Uses electron-packager (faster, no compression)
npm run pack:mac
npm run pack:linux

# Only use electron-builder for final release builds
```

---

## GitHub Release Setup

### Step 1: Build All Versions

```bash
# On macOS (can build all platforms):
npm run build:win
npm run build:mac
npm run build:linux

# On Windows (can build Windows + Linux):
npm run build:win
npm run build:linux
# (Use macOS VM or CI for macOS build)

# On Linux (can build Windows + Linux):
npm run build:win
npm run build:linux
# (Use macOS VM or CI for macOS build)
```

### Step 2: Test Each Build

Before releasing, test each platform:

**Windows:**
```bash
# Run the .exe file
./dist/MonkeyTranslate-1.0.0.exe
```

**macOS:**
```bash
# Mount the .dmg and run
open dist/MonkeyTranslate-1.0.0.dmg
```

**Linux:**
```bash
# Make executable and run
chmod +x dist/MonkeyTranslate-1.0.0.AppImage
./dist/MonkeyTranslate-1.0.0.AppImage
```

### Step 3: Create GitHub Release

1. **Tag your release:**
   ```bash
   git tag -a v1.0.0 -m "Release v1.0.0"
   git push origin v1.0.0
   ```

2. **Go to GitHub → Releases → Create new release**

3. **Fill in release information:**
   - **Tag**: v1.0.0
   - **Title**: v1.0.0 - Initial Release
   - **Description**: Copy from CHANGELOG.md

4. **Upload build files:**
   - Drag and drop from `dist/` folder:
     - `MonkeyTranslate-1.0.0.exe` (Windows)
     - `MonkeyTranslate-1.0.0.dmg` (macOS)
     - `MonkeyTranslate-1.0.0.AppImage` (Linux)

5. **Publish release!**

### Step 4: Update README Links

The "Download Latest Release" button will automatically link to the newest release:
```markdown
[**Download Latest Release**](https://github.com/dustindo129-dot/monkey-translate/releases/latest)
```

---

## Automated Builds (GitHub Actions)

For future releases, automate builds with GitHub Actions:

Create `.github/workflows/build.yml`:

```yaml
name: Build Apps

on:
  push:
    tags:
      - 'v*'

jobs:
  build:
    strategy:
      matrix:
        os: [windows-latest, macos-latest, ubuntu-latest]

    runs-on: ${{ matrix.os }}

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm run install:all

      - name: Build Windows
        if: matrix.os == 'windows-latest'
        run: npm run build:win

      - name: Build macOS
        if: matrix.os == 'macos-latest'
        run: npm run build:mac

      - name: Build Linux
        if: matrix.os == 'ubuntu-latest'
        run: npm run build:linux

      - name: Upload artifacts
        uses: actions/upload-artifact@v3
        with:
          name: ${{ matrix.os }}-build
          path: dist/*.{exe,dmg,AppImage}
```

This will automatically build all platforms when you push a tag.

---

## Build Checklist

Before releasing:

- [ ] Updated version in `package.json`
- [ ] Updated version in `CHANGELOG.md`
- [ ] Tested app on development mode
- [ ] Built all platforms successfully
- [ ] Tested each platform build
- [ ] Files are under GitHub's 2GB limit
- [ ] Created git tag (`git tag v1.0.0`)
- [ ] Pushed tag to GitHub
- [ ] Created GitHub release
- [ ] Uploaded all platform builds
- [ ] Updated README download links
- [ ] Announced release

---

## File Size Reference

Typical build sizes:
- Windows (portable): 150-200 MB
- macOS (dmg): 180-220 MB
- Linux (AppImage): 150-200 MB

**Note:** Electron apps are large because they bundle Chromium and Node.js.

---

## Questions?

- **Build issues?** Check [Troubleshooting](#troubleshooting)
- **GitHub release help?** See [GitHub Release Setup](#github-release-setup)
- **Need help?** Open an issue on GitHub

---

**Built by Dustin Do** | [GitHub](https://github.com/dustindo129-dot/monkey-translate)

