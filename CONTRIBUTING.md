# Contributing to MonkeyTranslate 🤝

Thank you for your interest in contributing to MonkeyTranslate! This document provides guidelines and instructions for contributing to this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [License](#license)

---

## 📜 Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

**TL;DR**: Be respectful, inclusive, and professional in all interactions.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** and npm
- **Git** for version control
- **Google Gemini API key** for testing ([Get one free](https://aistudio.google.com/app/apikey))
- **Code editor** (VS Code recommended)

### Development Setup

1. **Fork the repository** on GitHub

2. **Clone your fork**:
   ```bash
   git clone https://github.com/your-username/monkey-translate.git
   cd monkey-translate
   ```

3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/original-owner/monkey-translate.git
   ```

4. **Install dependencies**:
   ```bash
   npm run install:all
   ```

5. **Set up environment**:
   ```bash
   cp .env.example .env
   # Edit .env and add your GEMINI_API_KEY
   ```

6. **Start development servers**:
   ```bash
   npm run dev
   ```

7. **Verify setup**:
   - Frontend should be running at http://localhost:5173
   - Backend should be running at http://localhost:3001
   - No TypeScript errors in console

---

## 🤝 How to Contribute

### Types of Contributions Welcome

#### 🐛 Bug Fixes
- Fix TypeScript errors or type issues
- Resolve UI/UX bugs
- Fix API integration issues
- Improve error handling

#### ✨ Features (Open Source Scope)
- UI/UX improvements
- New language support for internationalization
- Accessibility enhancements
- Documentation improvements
- Build and deployment improvements
- Developer experience enhancements

#### 📚 Documentation
- Improve README clarity
- Add code comments
- Create tutorials or guides
- Fix typos or broken links
- Add examples

#### 🧪 Testing
- Add unit tests
- Create integration tests
- Improve test coverage
- Fix flaky tests

### What NOT to Contribute

The following are outside the scope of open source contributions:

❌ **Proprietary Features**:
- Advanced Gemini prompt engineering
- Production optimization algorithms
- Enterprise features
- Branding and design assets

❌ **Architectural Changes**:
- Major refactoring without prior discussion
- Changes to core AI logic
- Database or storage layer additions

**Note**: If you're unsure, open an issue to discuss before starting work!

---

## 🔄 Pull Request Process

### Before You Start

1. **Check existing issues** to avoid duplicate work
2. **Create or comment on an issue** to discuss your idea
3. **Wait for maintainer approval** before starting significant work
4. **Fork and create a branch** from `main`

### Development Workflow

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

2. **Make your changes**:
   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic
   - Update documentation if needed

3. **Test your changes**:
   ```bash
   # Test frontend
   cd client && npm run build

   # Test backend
   cd server && npm run build

   # Test desktop app
   npm run build:win  # or build:mac, build:linux
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "type: description"
   ```

   **Commit Message Format**:
   - `feat: add new feature`
   - `fix: resolve bug in component`
   - `docs: update README`
   - `style: format code`
   - `refactor: restructure service layer`
   - `test: add unit tests`
   - `chore: update dependencies`

5. **Keep your fork updated**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create Pull Request**:
   - Go to GitHub and create PR from your fork
   - Fill out the PR template completely
   - Link related issues
   - Request review from maintainers

### Pull Request Requirements

✅ **Before submitting, ensure**:
- [ ] Code follows project style guidelines
- [ ] TypeScript compiles without errors (`npm run build:all`)
- [ ] No console errors or warnings
- [ ] All new code has appropriate comments
- [ ] Documentation is updated if needed
- [ ] Commit messages follow convention
- [ ] PR description clearly explains changes
- [ ] You've tested the changes locally

### Review Process

1. **Automated checks** will run (if CI/CD is configured)
2. **Maintainers will review** within 3-7 days
3. **Address feedback** if requested
4. **Approval** requires at least one maintainer
5. **Merge** will be done by maintainers

---

## 💻 Coding Standards

### TypeScript

- **Use TypeScript** for all new code
- **Enable strict mode** - no `any` types
- **Define interfaces** for data structures
- **Use enums** for constants
- **Document complex types** with JSDoc comments

```typescript
// ✅ Good
interface TextRegion {
  id: string;
  bbox: [number, number, number, number];
  original: string;
  translated: string;
}

// ❌ Bad
const region: any = { ... };
```

### React

- **Use functional components** with hooks
- **Destructure props** in component signature
- **Use TypeScript** for prop types
- **Extract complex logic** to custom hooks
- **Keep components small** and focused

```typescript
// ✅ Good
interface Props {
  page: Page;
  onUpdate: (page: Page) => void;
}

export const PageEditor = ({ page, onUpdate }: Props) => {
  // Component logic
};

// ❌ Bad
export const PageEditor = (props: any) => { ... };
```

### Styling

- **Use Tailwind CSS** utility classes
- **Follow existing patterns** for consistency
- **Use custom classes** sparingly
- **Support dark mode** with dark: variants
- **Make responsive** with sm:, md:, lg: breakpoints

```tsx
// ✅ Good
<button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-700
  text-white rounded-lg transition-colors">
  Click Me
</button>

// ❌ Bad
<button style={{ padding: '8px 16px', background: 'blue' }}>
  Click Me
</button>
```

### Backend

- **Use async/await** over callbacks
- **Handle errors** properly with try/catch
- **Validate input** on all endpoints
- **Use middleware** for reusable logic
- **Log errors** but not sensitive data

```typescript
// ✅ Good
app.post('/api/endpoint', async (req, res) => {
  try {
    const { input } = req.body;
    if (!input) {
      return res.status(400).json({ error: 'Input required' });
    }
    const result = await processInput(input);
    res.json({ result });
  } catch (error) {
    console.error('Error processing:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ❌ Bad
app.post('/api/endpoint', (req, res) => {
  const result = processInput(req.body.input);
  res.json(result);
});
```

### File Organization

- **Group by feature** not by type
- **Use index files** for clean imports
- **Keep files focused** - one component per file
- **Name files** with PascalCase for components, camelCase for utilities

```
✅ Good structure:
components/
  ├── PageEditor/
  │   ├── PageEditor.tsx
  │   ├── PageEditor.types.ts
  │   └── index.ts
  └── WorkPanel/
      ├── WorkPanel.tsx
      └── index.ts

❌ Bad structure:
components.tsx
types.ts
utils.ts
```

### Documentation

- **Add JSDoc comments** for functions
- **Document parameters** and return types
- **Explain "why"** not "what"
- **Update README** for user-facing changes

```typescript
/**
 * Extracts text regions from an image using Gemini AI.
 *
 * @param imagePath - Absolute path to the image file
 * @returns Array of detected text regions with bounding boxes
 * @throws Error if image cannot be processed or API fails
 */
async extractTextFromImage(imagePath: string): Promise<TextRegion[]> {
  // Implementation
}
```

---

## 📁 Project Structure

Understanding the project structure helps you navigate the codebase:

```
monkey-translate/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # UI components (contribute here!)
│   │   ├── contexts/      # React contexts
│   │   ├── services/      # API service layer
│   │   ├── i18n/          # Internationalization
│   │   └── types/         # TypeScript types
│   └── package.json
│
├── server/                # Express backend
│   ├── src/
│   │   ├── routes/        # API routes (contribute here!)
│   │   ├── services/      # Business logic (simplified OSS)
│   │   └── server.ts      # Express app
│   └── package.json
│
├── electron/              # Desktop app (contribute here!)
│   ├── main.js
│   └── preload.js
│
└── docs/                  # Documentation
```

---

## 🧪 Testing

### Manual Testing

Before submitting a PR, test these flows:

1. **Upload Flow**:
   - Upload single image
   - Upload multiple images
   - Try invalid file types
   - Try very large images

2. **Extraction Flow**:
   - Extract text from image with clear text
   - Try image with no text
   - Try image with complex layout

3. **Translation Flow**:
   - Translate to different languages
   - Edit translations manually
   - Save and cancel changes

4. **Generation Flow**:
   - Generate translated image
   - Compare with original
   - Download result

5. **Desktop App**:
   - Build and run executable
   - Test file dialogs
   - Verify settings persistence

### Automated Testing

*(Coming soon)*
- Unit tests with Jest
- Integration tests with React Testing Library
- E2E tests with Playwright

---

## 📄 License

### Understanding BUSL-1.1

By contributing, you agree that your contributions will be licensed under the same BUSL-1.1 license as the project.

**Key points**:
- ✅ Your code will be publicly visible
- ✅ Others can use it for non-production purposes
- ⚠️ Production use requires commercial license (until 2029)
- 🔄 Converts to Apache 2.0 in 4 years

**You retain copyright** to your contributions, but grant the project rights to use them under BUSL-1.1.

### Contributor License Agreement

By submitting a pull request, you certify that:
1. You have the right to submit the contribution
2. You grant the project rights to use your contribution under BUSL-1.1
3. Your contribution does not violate any third-party rights
4. You've read and agree to the Code of Conduct

---

## 💬 Communication

### Where to Ask Questions

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - General questions and discussions
- **Pull Request Comments** - Code-specific questions

### Response Times

- **Issues**: Maintainers will respond within 3-7 days
- **Pull Requests**: Initial review within 1 week
- **Security issues**: Report privately, response within 24-48 hours

---

## 🏆 Recognition

Contributors will be:
- Listed in the project's Contributors section
- Mentioned in release notes for significant contributions
- Given credit in commit history

---

## 📚 Additional Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Electron Documentation](https://www.electronjs.org/docs)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

## ❓ Need Help?

If you're stuck or have questions:
1. Check existing issues and documentation
2. Search GitHub Discussions
3. Open a new issue with the `question` label
4. Be patient - maintainers are volunteers!

---

**Thank you for contributing to MonkeyTranslate! 🙏**

Your contributions help make this project better for everyone. We appreciate your time and effort!

