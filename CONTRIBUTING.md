# Contributing to MonkeyTranslate

Thank you for your interest in contributing to MonkeyTranslate! This document provides guidelines and instructions for contributing.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (OS, Node version, browser)

### Suggesting Features

We welcome feature suggestions! Please open an issue with:
- A clear description of the feature
- Why it would be useful
- How it might work
- Any examples or mockups

### Submitting Pull Requests

1. **Fork the repository**

2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/monkey-translate.git
   cd monkey-translate
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed

5. **Test your changes**
   ```bash
   npm run dev
   ```
   - Test all affected functionality
   - Try edge cases

6. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add feature: description of your changes"
   ```
   - Use clear, descriptive commit messages
   - Reference issue numbers if applicable

7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Open a Pull Request**
   - Provide a clear description of the changes
   - Reference any related issues
   - Explain why the change is needed

## Development Guidelines

### Code Style

**TypeScript/JavaScript:**
- Use TypeScript for new files
- Follow existing formatting conventions
- Use meaningful variable names
- Add JSDoc comments for complex functions

**React Components:**
- Use functional components with hooks
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use TypeScript interfaces for props

**CSS/Tailwind:**
- Use Tailwind utility classes when possible
- Keep custom CSS minimal
- Follow mobile-first responsive design

### Project Structure

```
client/src/
  components/     # React components
  services/       # API client and utilities
  types.ts        # TypeScript types
  App.tsx         # Main app component

server/src/
  routes/         # Express routes
  services/       # Business logic
  types.ts        # TypeScript types
  server.ts       # Server entry point
```

### Commit Message Format

Use conventional commit format:

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(client): add batch translation support
fix(server): resolve image upload timeout issue
docs(readme): update installation instructions
```

## Areas for Contribution

### High Priority
- [ ] Improved image rendering with better font matching
- [ ] Support for more image formats
- [ ] Batch processing for multiple pages
- [ ] Progress indicators for long operations
- [ ] Better error handling and user feedback

### Medium Priority
- [ ] Electron app wrapper for desktop distribution
- [ ] Support for PDF files
- [ ] History/undo functionality
- [ ] Export as PDF
- [ ] Dark mode

### Nice to Have
- [ ] OCR accuracy improvements
- [ ] Custom font selection
- [ ] Text region manual adjustment
- [ ] Integration with other translation APIs
- [ ] Multi-user support

## Questions?

Feel free to:
- Open an issue for discussion
- Join our community discussions
- Reach out to maintainers

## License

By contributing to MonkeyTranslate, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing! 🙏

