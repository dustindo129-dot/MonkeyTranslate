# Deployment Guide

This guide covers different deployment strategies for MonkeyTranslate.

## Deployment Options

### 1. Local Development (Recommended for Personal Use)

**Best for:** Personal use, testing, development

```bash
# Clone and setup
git clone https://github.com/yourusername/monkey-translate.git
cd monkey-translate
npm run install:all

# Configure
cp .env.example .env
# Add your GEMINI_API_KEY to .env

# Run
npm run dev
```

**Pros:**
- Free hosting
- Full control
- API key stays private
- No deployment complexity

**Cons:**
- Only accessible on your machine
- Requires Node.js installed

---

### 2. Desktop App with Electron (Recommended for Distribution)

**Best for:** Distributing to non-technical users

#### Setup Electron

1. Install Electron dependencies:
```bash
npm install --save-dev electron electron-builder
```

2. Create `electron/main.js`:
```javascript
const { app, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let mainWindow;
let serverProcess;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.loadURL('http://localhost:5173');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function startServer() {
  serverProcess = spawn('node', ['server/dist/server.js'], {
    env: { ...process.env },
  });
}

app.on('ready', () => {
  startServer();
  setTimeout(createWindow, 2000); // Wait for server to start
});

app.on('window-all-closed', () => {
  if (serverProcess) serverProcess.kill();
  app.quit();
});
```

3. Update `package.json`:
```json
{
  "main": "electron/main.js",
  "scripts": {
    "electron": "electron .",
    "electron:build": "electron-builder"
  },
  "build": {
    "appId": "com.monkeytranslate.app",
    "productName": "MonkeyTranslate",
    "directories": {
      "output": "dist-electron"
    },
    "files": [
      "electron/**/*",
      "server/dist/**/*",
      "client/dist/**/*"
    ],
    "mac": {
      "category": "public.app-category.productivity"
    },
    "win": {
      "target": "nsis"
    },
    "linux": {
      "target": "AppImage"
    }
  }
}
```

4. Build:
```bash
npm run build:all
npm run electron:build
```

**Pros:**
- Cross-platform (Windows, Mac, Linux)
- No browser required
- Bundled package
- Native feel

**Cons:**
- Larger file size (~100-200MB)
- More complex setup
- Update distribution needed

---

### 3. Self-Hosted Server (For Teams)

**Best for:** Small teams, controlled environments

#### Using Docker

1. Create `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY server/package*.json ./server/
COPY client/package*.json ./client/

# Install dependencies
RUN npm run install:all

# Copy source
COPY . .

# Build
RUN npm run build:all

EXPOSE 3001
EXPOSE 5173

CMD ["npm", "run", "dev"]
```

2. Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  monkeytranslate:
    build: .
    ports:
      - "3001:3001"
      - "5173:5173"
    env_file:
      - .env
    volumes:
      - ./uploads:/app/uploads
    restart: unless-stopped
```

3. Deploy:
```bash
docker-compose up -d
```

**Pros:**
- Consistent environment
- Easy to deploy
- Scalable
- Good for teams

**Cons:**
- Requires Docker knowledge
- Need to secure API key
- Network configuration needed

---

### 4. Cloud Deployment (Advanced)

**Best for:** Public-facing services, large scale

⚠️ **Warning:** Deploying publicly requires additional security measures!

#### Option A: Vercel (Frontend) + Railway (Backend)

**Frontend (Vercel):**
```bash
cd client
vercel
```

**Backend (Railway):**
1. Connect GitHub repo to Railway
2. Add environment variables (GEMINI_API_KEY)
3. Deploy server folder

**Important:** Add authentication and rate limiting!

#### Option B: AWS / Google Cloud / Azure

1. **Frontend:** Deploy to S3 + CloudFront / Cloud Storage + CDN
2. **Backend:** Deploy to EC2 / Cloud Run / App Service
3. **Database:** Add PostgreSQL for persistence
4. **Storage:** Use S3 / Cloud Storage for images

**Required changes:**
- Add user authentication (JWT/OAuth)
- Implement rate limiting
- Add database layer
- Secure API endpoints
- Add CORS configuration
- Implement file scanning
- Add monitoring and logging

---

## Security Checklist for Public Deployment

If you're deploying publicly, you MUST implement:

- [ ] **User Authentication** - Don't let anyone use your API key
- [ ] **Rate Limiting** - Prevent abuse (express-rate-limit)
- [ ] **API Key per User** - Let users provide their own keys
- [ ] **File Validation** - Check file types and sizes
- [ ] **File Scanning** - Scan for malware
- [ ] **HTTPS Only** - Use TLS certificates
- [ ] **CORS Restrictions** - Limit allowed origins
- [ ] **Input Sanitization** - Prevent injection attacks
- [ ] **Error Handling** - Don't expose sensitive info
- [ ] **Logging** - Track usage and errors
- [ ] **Monitoring** - Set up alerts
- [ ] **Backups** - Regular database backups
- [ ] **DDoS Protection** - CloudFlare or similar
- [ ] **Legal** - Terms of service, privacy policy

---

## Environment Variables

### Development
```env
GEMINI_API_KEY=your_key_here
PORT=3001
NODE_ENV=development
```

### Production
```env
GEMINI_API_KEY=your_key_here
PORT=3001
NODE_ENV=production
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
S3_BUCKET=...
JWT_SECRET=...
CORS_ORIGIN=https://yourdomain.com
```

---

## Scaling Considerations

### Single Server
- Good for: < 100 users
- Use PM2 for process management
- Add Nginx reverse proxy
- Enable compression

### Multiple Servers
- Load balancer (Nginx/HAProxy)
- Shared session store (Redis)
- Shared file storage (S3/NFS)
- Database clustering

### Microservices
- Separate services for:
  - Upload service
  - OCR service
  - Translation service
  - Rendering service
- Message queue (RabbitMQ/Redis)
- Service mesh (Istio)

---

## Monitoring

### Essential Metrics
- API response times
- Error rates
- Gemini API usage
- File storage usage
- Memory/CPU usage

### Recommended Tools
- **Application:** New Relic, Datadog
- **Server:** Prometheus + Grafana
- **Logs:** ELK Stack, Splunk
- **Uptime:** Pingdom, UptimeRobot
- **Errors:** Sentry, Rollbar

---

## Backup Strategy

### What to Backup
- Database (if using one)
- Uploaded images
- Environment configuration
- User data

### Backup Schedule
- **Critical data:** Hourly
- **Images:** Daily
- **Configuration:** On change
- **Full backup:** Weekly

---

## Cost Estimation

### Local/Desktop
- **Hosting:** Free
- **Gemini API:** $0 - $10/month (free tier + overage)
- **Total:** $0 - $10/month

### Self-Hosted Server
- **Server:** $5 - $50/month (DigitalOcean, Linode)
- **Gemini API:** $10 - $100/month
- **Storage:** $5 - $20/month
- **Total:** $20 - $170/month

### Cloud Enterprise
- **Compute:** $100 - $500/month
- **Database:** $50 - $200/month
- **Storage:** $20 - $100/month
- **CDN:** $20 - $100/month
- **Gemini API:** $100 - $1000/month
- **Total:** $290 - $1900/month

---

## Troubleshooting Deployment

### Port Already in Use
```bash
# Find process
lsof -i :3001
# Kill process
kill -9 <PID>
```

### Server Crashes on Start
- Check logs: `npm run dev:server`
- Verify .env file exists
- Check Node version (18+)
- Ensure dependencies installed

### Images Not Serving
- Check uploads folder permissions
- Verify file paths in database
- Check Nginx/proxy configuration

### High Memory Usage
- Limit concurrent requests
- Add image size limits
- Clear old uploads periodically
- Use streaming for large files

---

## Production Checklist

Before going live:

- [ ] All dependencies updated to latest stable
- [ ] .env file configured for production
- [ ] Database migrations run
- [ ] SSL certificates installed
- [ ] Domain DNS configured
- [ ] Backups configured and tested
- [ ] Monitoring and alerts set up
- [ ] Rate limiting implemented
- [ ] Authentication working
- [ ] Error handling tested
- [ ] Load testing completed
- [ ] Security audit performed
- [ ] Documentation updated
- [ ] Support system ready

---

## Need Help?

- 📖 See [SETUP_GUIDE.md](SETUP_GUIDE.md) for development
- 🏗️ See [ARCHITECTURE.md](ARCHITECTURE.md) for technical details
- 💬 Open a GitHub issue for deployment questions

---

**Recommendation:** For most users, start with local development or build an Electron app. Only deploy publicly if you understand the security implications and costs.

