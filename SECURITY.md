# Security Policy

## Supported Versions

Currently supported versions of MonkeyTranslate:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of MonkeyTranslate seriously. If you discover a security vulnerability, please follow these steps:

### 🔒 Please Do NOT:
- Open a public GitHub issue
- Disclose the vulnerability publicly before we've had a chance to address it
- Exploit the vulnerability for any reason

### ✅ Please DO:
1. **Report privately** by opening a GitHub Security Advisory at:
   https://github.com/dustindo129-dot/monkey-translate/security/advisories/new

2. **Include in your report**:
   - Type of vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if you have one)
   - Your contact information

3. **Allow time for response**:
   - We will acknowledge receipt within 48 hours
   - We will provide an initial assessment within 7 days
   - We will work with you to understand and resolve the issue

### Security Considerations

#### API Keys
- API keys should NEVER be committed to git
- Use `.env` files (which are git-ignored) for local development
- In production, use environment variables or secrets management
- The desktop app stores API keys locally in encrypted storage

#### File Uploads
- File size limits are enforced (default 10MB)
- File types are restricted to images only
- Uploaded files are stored temporarily and should be cleaned up
- File paths are validated to prevent directory traversal

#### AI API Integration
- API responses are validated before processing
- Malicious prompt injection is mitigated through input sanitization
- Rate limiting should be implemented in production

#### Known Limitations
- The open-source version uses basic Sharp text overlay (not a security issue)
- No authentication system (single-user desktop app)
- No encrypted data storage beyond API keys

### Bug Bounty
Currently, we do not have a bug bounty program. Security research is appreciated, and we will publicly credit researchers who responsibly disclose vulnerabilities (with their permission).

### Security Updates
Security patches will be released as soon as possible after a vulnerability is confirmed. Updates will be announced through:
- GitHub Security Advisories
- GitHub Releases
- README.md updates

## Best Practices for Users

### When Using MonkeyTranslate:
1. **Protect Your API Key**
   - Never share your Gemini API key
   - Rotate keys if you suspect compromise
   - Monitor your Google Cloud usage for anomalies

2. **Keep Software Updated**
   - Update to the latest version for security patches
   - Review changelog for security-related updates

3. **Be Cautious with Images**
   - Don't upload images containing sensitive information
   - Remember that images are sent to Google's Gemini API
   - Uploaded files are stored temporarily on your local machine

4. **Desktop App Security**
   - Download only from official GitHub releases
   - Verify file signatures/checksums (when provided)
   - Keep your operating system updated

5. **Review Source Code**
   - This project is open-source (BUSL-1.1)
   - You can audit the code for security concerns
   - Build from source if you prefer

## Development Security

### For Contributors:
1. **Never commit**:
   - API keys or credentials
   - `.env` files
   - User data or uploaded images
   - Proprietary code or algorithms

2. **Follow secure coding practices**:
   - Validate all user inputs
   - Sanitize data before processing
   - Use parameterized queries (if database is added)
   - Keep dependencies updated

3. **Dependencies**:
   - Regularly run `npm audit`
   - Update dependencies with security patches
   - Review dependency licenses

### Security Checklist for PRs:
- [ ] No credentials or secrets in code
- [ ] Input validation implemented
- [ ] Error messages don't leak sensitive info
- [ ] Dependencies are up to date
- [ ] No obvious security vulnerabilities

## Contact

For security-related questions or concerns:
- **GitHub Security Advisory**: Preferred method for vulnerabilities
- **GitHub Issues**: For general security questions (not vulnerabilities)
- **Email**: khongbuoncuoi69@gmail.com (for sensitive matters)

---

**Thank you for helping keep MonkeyTranslate secure!** 🔒

