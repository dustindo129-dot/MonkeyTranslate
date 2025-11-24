# GitHub Release Guide - Step-by-Step

This is your complete guide to creating GitHub releases with multiple platform builds.

## 🎯 Goal

Publish MonkeyTranslate so users can download:
- 🪟 Windows `.exe` file
- 🍎 macOS `.dmg` file
- 🐧 Linux `.AppImage` file

All from one GitHub release page!

---

## 📋 Pre-Release Checklist

Before you start:
- [ ] Code is committed and pushed to GitHub
- [ ] Version number updated in `package.json`
- [ ] `CHANGELOG.md` updated with release notes
- [ ] All builds tested locally

---

## 🔨 Step 1: Build All Platforms

### Option A: Build Locally (Recommended for First Release)

If you're on **Windows**:
```bash
# You can build Windows + Linux
npm run build:win
npm run build:linux

# For macOS, you'll need access to a Mac or use CI
```

If you're on **macOS**:
```bash
# You can build all three platforms!
npm run build:win    # Requires Wine: brew install wine
npm run build:mac
npm run build:linux
```

If you're on **Linux**:
```bash
# You can build Windows + Linux
npm run build:win    # Requires Wine
npm run build:linux

# For macOS, you'll need access to a Mac or use CI
```

### Option B: Use GitHub Actions (Automated)

Create `.github/workflows/release.yml` (see [Automated Builds](#automated-builds-optional) below).

---

## 📦 Step 2: Locate Your Build Files

After building, check your `dist/` folder:

```
dist/
├── MonkeyTranslate Setup 1.0.0.exe          ← Upload this (Windows)
├── MonkeyTranslate-1.0.0.dmg                ← Upload this (macOS)
├── MonkeyTranslate-1.0.0.AppImage           ← Upload this (Linux)
├── win-unpacked/                             ← Don't upload
├── builder-debug.yml                         ← Don't upload
└── builder-effective-config.yaml             ← Don't upload
```

**Files to upload to GitHub:**
- ✅ The `.exe` file (Windows)
- ✅ The `.dmg` file (macOS)
- ✅ The `.AppImage` file (Linux)

**Rename files for clarity (optional but recommended):**
```bash
# Make names consistent and platform-clear
mv "MonkeyTranslate Setup 1.0.0.exe" "MonkeyTranslate-1.0.0-Windows.exe"
mv "MonkeyTranslate-1.0.0.dmg" "MonkeyTranslate-1.0.0-macOS.dmg"
mv "MonkeyTranslate-1.0.0.AppImage" "MonkeyTranslate-1.0.0-Linux.AppImage"
```

---

## 🏷️ Step 3: Create a Git Tag

GitHub releases are tied to git tags.

```bash
# Create a tag for version 1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0 - Initial public release"

# Push the tag to GitHub
git push origin v1.0.0
```

**Tag naming convention:**
- Use `v` prefix: `v1.0.0`, `v1.1.0`, `v2.0.0`
- Follow semantic versioning: `vMAJOR.MINOR.PATCH`

---

## 🚀 Step 4: Create GitHub Release

### Navigate to Releases

1. Go to your GitHub repository: `https://github.com/dustindo129-dot/monkey-translate`
2. Click **"Releases"** (right sidebar or under Code tab)
3. Click **"Create a new release"** or **"Draft a new release"**

### Fill in Release Information

#### Choose a tag
- Select `v1.0.0` from dropdown (or create new tag)
- **Target**: `main` branch

#### Release title
```
v1.0.0 - "Sunset" - Initial Public Release
```

#### Release description

Use markdown formatting:

```markdown
# 🎉 MonkeyTranslate v1.0.0 - Initial Release

AI-powered image translation platform built with React, TypeScript, and Google Gemini AI.

## 📥 Download

Choose your platform:

- 🪟 **Windows**: `MonkeyTranslate-1.0.0-Windows.exe` - Just double-click and run!
- 🍎 **macOS**: `MonkeyTranslate-1.0.0-macOS.dmg` - Drag to Applications folder
- 🐧 **Linux**: `MonkeyTranslate-1.0.0-Linux.AppImage` - Make executable and run

> **Note**: You'll need a [Google Gemini API key](https://aistudio.google.com/app/apikey) (free) to use the app.

## ✨ Features

- 📤 Batch image upload and processing
- 🔍 AI-powered text extraction from images
- 🌍 Translation to 100+ languages using Gemini AI
- 🎨 Style-preserving image regeneration
- 🖥️ Cross-platform desktop application
- 🔑 Privacy-first (API keys stored locally)

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Backend**: Node.js, Express, Gemini AI
- **Desktop**: Electron 28
- **AI**: Google Gemini 2.5 Pro & 3 Pro (OSS version uses 1.5 Flash)

## 📖 Usage

1. **Download** the app for your platform
2. **Launch** the application
3. **Enter your Gemini API key** when prompted
4. **Upload images** and start translating!

## 🐛 Known Issues

- Windows: May show SmartScreen warning (click "More info" → "Run anyway")
- macOS: May require right-click → Open on first launch
- Linux: May need `chmod +x` to make AppImage executable

## 📚 Documentation

- [Full Documentation](https://github.com/dustindo129-dot/monkey-translate#readme)
- [Building from Source](https://github.com/dustindo129-dot/monkey-translate/blob/main/BUILDING.md)
- [Contributing Guide](https://github.com/dustindo129-dot/monkey-translate/blob/main/CONTRIBUTING.md)

## 📄 License

Business Source License 1.1 (BUSL-1.1)
- Free for personal, educational, and non-commercial use
- Converts to Apache 2.0 on 2029-01-01

## 🙏 Acknowledgments

Built with ❤️ by **Dustin Do**

Powered by Google Gemini AI, React, and the open-source community.

---

**First time using MonkeyTranslate?** Check out the [Quick Start Guide](https://github.com/dustindo129-dot/monkey-translate#-quick-start).

**Found a bug?** [Report it here](https://github.com/dustindo129-dot/monkey-translate/issues).

**Want to contribute?** See [CONTRIBUTING.md](https://github.com/dustindo129-dot/monkey-translate/blob/main/CONTRIBUTING.md).
```

#### Upload build files

**Drag and drop** your build files into the **"Attach binaries"** section:
1. `MonkeyTranslate-1.0.0-Windows.exe`
2. `MonkeyTranslate-1.0.0-macOS.dmg`
3. `MonkeyTranslate-1.0.0-Linux.AppImage`

**Important:**
- Keep file names clear (include version and platform)
- Don't upload the `*-unpacked` folders
- File size limit: 2GB per file (you're well under this)

#### Options

- [ ] **Set as a pre-release** - Check this if it's a beta/alpha version
- [ ] **Set as the latest release** - Check this for your main release
- [ ] **Create a discussion** - Optional, enables discussion thread

#### Publish

Click **"Publish release"**! 🎉

---

## 🎨 Example Release Page

Here's what users will see:

```
┌─────────────────────────────────────────────────────┐
│ dustindo129-dot/monkey-translate                    │
│ v1.0.0 - "Sunset" - Initial Public Release  Latest │
│ ──────────────────────────────────────────────      │
│ [Release description with markdown formatting]      │
│                                                      │
│ Assets:                                              │
│ 📦 MonkeyTranslate-1.0.0-Windows.exe    (187 MB)   │
│ 📦 MonkeyTranslate-1.0.0-macOS.dmg      (205 MB)   │
│ 📦 MonkeyTranslate-1.0.0-Linux.AppImage (178 MB)   │
│ 📦 Source code (zip)                                 │
│ 📦 Source code (tar.gz)                              │
│                                                      │
│ + This release includes 3 assets                     │
└─────────────────────────────────────────────────────┘
```

---

## 🔗 Step 5: Link to Release in README

Your README already has this link:
```markdown
👉 [**Download Latest Release**](https://github.com/dustindo129-dot/monkey-translate/releases/latest)
```

This automatically points to your newest release! No need to update for each version.

---

## 🤖 Automated Builds (Optional)

For future releases, automate building with GitHub Actions.

### Create `.github/workflows/release.yml`:

```yaml
name: Build and Release

# Trigger on version tags
on:
  push:
    tags:
      - 'v*'

jobs:
  # Job 1: Build on Windows
  build-windows:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm run install:all

      - name: Build Windows
        run: npm run build:win

      - name: Upload Windows build
        uses: actions/upload-artifact@v3
        with:
          name: windows-build
          path: dist/*.exe

  # Job 2: Build on macOS
  build-macos:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm run install:all

      - name: Build macOS
        run: npm run build:mac
        env:
          # Skip code signing in CI
          CSC_IDENTITY_AUTO_DISCOVERY: false

      - name: Upload macOS build
        uses: actions/upload-artifact@v3
        with:
          name: macos-build
          path: dist/*.dmg

  # Job 3: Build on Linux
  build-linux:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm run install:all

      - name: Build Linux
        run: npm run build:linux

      - name: Upload Linux build
        uses: actions/upload-artifact@v3
        with:
          name: linux-build
          path: dist/*.AppImage

  # Job 4: Create Release with all builds
  create-release:
    needs: [build-windows, build-macos, build-linux]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Download all builds
        uses: actions/download-artifact@v3

      - name: Create Release
        uses: softprops/action-gh-release@v1
        with:
          files: |
            windows-build/*.exe
            macos-build/*.dmg
            linux-build/*.AppImage
          body: |
            # 🎉 MonkeyTranslate ${{ github.ref_name }}

            Download the app for your platform below!

            See [CHANGELOG.md](https://github.com/dustindo129-dot/monkey-translate/blob/main/CHANGELOG.md) for full release notes.
          draft: false
          prerelease: false
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### How to use automated builds:

1. Save the file above as `.github/workflows/release.yml`
2. Commit and push to GitHub
3. Create a tag: `git tag v1.0.1 && git push origin v1.0.1`
4. GitHub Actions automatically:
   - Builds all platforms
   - Creates GitHub release
   - Uploads all files
5. You just sit back and relax! ☕

---

## 📊 After Publishing

### Check Your Release Page

Visit: `https://github.com/dustindo129-dot/monkey-translate/releases`

### Share Your Release

**LinkedIn:**
```
🎉 Excited to announce MonkeyTranslate v1.0.0 is now available!

AI-powered image translation platform built with React, TypeScript, and Google Gemini AI.

Download for Windows, macOS, or Linux:
https://github.com/dustindo129-dot/monkey-translate/releases/latest

#OpenSource #TypeScript #React #AI #SoftwareEngineering
```

**Twitter/X:**
```
🚀 MonkeyTranslate v1.0.0 is live!

Translate images to 100+ languages using AI
Built with React + TypeScript + Gemini AI
Cross-platform desktop app

Download: https://github.com/dustindo129-dot/monkey-translate/releases/latest

#AI #OpenSource #TypeScript
```

### Monitor Downloads

GitHub shows download counts on your release page!

---

## 🐛 Troubleshooting

### Build files are too large

```bash
# Enable compression in package.json:
"build": {
  "compression": "maximum"
}
```

### GitHub Actions build fails

```bash
# Check the Actions tab on GitHub
# Look for error messages in build logs
# Common fixes:
# - Update Node.js version
# - Check dependency installations
# - Verify build scripts in package.json
```

### macOS build shows "damaged" error

```bash
# This happens without code signing
# Users can bypass: Right-click → Open
# Or get Apple Developer account for proper signing
```

### Windows SmartScreen warning

```bash
# Expected for unsigned apps
# Users can bypass: "More info" → "Run anyway"
# Or purchase code signing certificate
```

---

## ✅ Release Checklist

Before creating a release:

- [ ] All code tested and working
- [ ] Version bumped in `package.json`
- [ ] CHANGELOG.md updated
- [ ] Git tag created and pushed
- [ ] All platforms built successfully
- [ ] Each platform tested locally
- [ ] Build files renamed clearly
- [ ] Release notes written
- [ ] GitHub release created
- [ ] Build files uploaded
- [ ] Release published (not draft)
- [ ] Release page checked
- [ ] Download links work
- [ ] README updated (if needed)
- [ ] Announced on social media

---

## 🎯 Future Releases

For subsequent releases:

1. **Update version**: `package.json` → `1.0.1`, `1.1.0`, etc.
2. **Update changelog**: `CHANGELOG.md`
3. **Create tag**: `git tag v1.0.1`
4. **Build**: `npm run build:electron`
5. **Create release**: Follow this guide
6. **Or use GitHub Actions**: Just push the tag!

---

## 📚 Additional Resources

- [Electron Builder Docs](https://www.electron.build/)
- [GitHub Releases Guide](https://docs.github.com/en/repositories/releasing-projects-on-github)
- [Semantic Versioning](https://semver.org/)
- [GitHub Actions](https://docs.github.com/en/actions)

---

**Need help?** Open an issue on GitHub!

**Built by Dustin Do** | [GitHub](https://github.com/dustindo129-dot/monkey-translate)

