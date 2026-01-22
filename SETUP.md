# Setup Guide

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Frontend Setup

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

Edit `.env` file:
```env
VITE_API_BASE_URL=http://localhost:8000
VITE_APP_NAME=Portfolio
VITE_APP_VERSION=1.0.0
```

```bash
# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5173`

### 3. Backend Setup

```bash
# Navigate to backend directory
cd Email-backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

Edit `Email-backend/.env` file:
```env
PORT=8000
NODE_ENV=development
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ALLOWED_ORIGINS=http://localhost:5173
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5
```

```bash
# Start development server
npm run dev
```

The backend will be available at `http://localhost:8000`

## 📧 Gmail Configuration

To enable email functionality:

1. **Enable 2-Factor Authentication**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Other (Custom name)"
   - Copy the 16-character password

3. **Update .env**
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=xxxx xxxx xxxx xxxx  # Your app password
   ```

## 🎨 Customization

### Update Personal Information

1. **Edit Constants** - `src/config/constants.js`
   ```javascript
   export const SOCIAL_LINKS = {
     GITHUB: 'https://github.com/yourusername',
     LINKEDIN: 'https://linkedin.com/in/yourusername',
   };
   ```

2. **Update Projects** - `src/components/Project/Project.jsx`
   ```javascript
   const details = [
     {
       img: YourImage,
       projectname: 'Your Project',
       projectdes: 'Description...',
       demo: 'https://demo-link.com',
       sourceCode: 'https://github.com/...',
     },
   ];
   ```

3. **Update Skills** - `src/components/Skills/Skills.jsx`
   ```javascript
   const skills = [
     {
       name: 'Your Skill',
       color: '#colorcode',
       logo: 'url-to-logo',
     },
   ];
   ```

4. **Update About** - `src/components/About/About.jsx`
   - Edit the content directly in the component

### Change Colors

Edit `src/config/constants.js`:
```javascript
export const THEME_COLORS = {
  PRIMARY: '#6200EE',           // Main purple color
  PRIMARY_HOVER: '#7B1EFF',     // Hover state
  BACKGROUND: '#0B0B0B',        // Dark background
  CARD_BG: '#222222',           // Card background
  CARD_BG_LIGHT: '#333333',     // Light card bg
};
```

## 📦 Production Build

### Frontend

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The build files will be in the `dist` folder.

### Backend

```bash
cd Email-backend
npm start
```

## 🌐 Deployment

### Frontend - Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add environment variables in Netlify dashboard

### Frontend - Vercel

```bash
npm i -g vercel
vercel
```

### Backend - Render

1. Push your code to GitHub
2. Go to [Render](https://render.com)
3. Click "New +" → "Web Service"
4. Connect your repository
5. Settings:
   - Root Directory: `Email-backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Add environment variables

### Backend - Railway

1. Go to [Railway](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Select your repository
4. Add environment variables
5. Deploy

## 🐛 Troubleshooting

### Port Already in Use

**Frontend:**
```bash
# Kill process on port 5173
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5173 | xargs kill -9
```

**Backend:**
```bash
# Kill process on port 8000
# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:8000 | xargs kill -9
```

### Email Not Sending

1. Check Gmail app password is correct
2. Verify 2FA is enabled
3. Check SMTP settings in `Email-backend/src/config/email.config.js`
4. Check console logs for errors

### CORS Errors

1. Verify backend URL in frontend `.env`:
   ```env
   VITE_API_BASE_URL=http://localhost:8000
   ```

2. Verify allowed origins in backend `.env`:
   ```env
   ALLOWED_ORIGINS=http://localhost:5173,https://your-domain.com
   ```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Or for backend
cd Email-backend
rm -rf node_modules package-lock.json
npm install
```

## 📚 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable UI components
│   │   ├── Header/          # Header & Navigation
│   │   ├── Hero/            # Hero section
│   │   ├── Project/         # Projects showcase
│   │   ├── Skills/          # Skills grid
│   │   ├── About/           # About section
│   │   └── Contact/         # Contact form
│   ├── config/              # App configuration
│   ├── hooks/               # Custom React hooks
│   ├── layouts/             # Layout components
│   ├── services/            # API services
│   ├── utils/               # Images and utilities
│   ├── App.jsx              # Main app
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
│
├── Email-backend/
│   └── src/
│       ├── config/          # Server config
│       ├── controllers/     # Route handlers
│       ├── middleware/      # Express middleware
│       ├── routes/          # API routes
│       ├── services/        # Business logic
│       ├── app.js           # Express setup
│       └── server.js        # Server entry
│
├── public/                  # Static assets
├── .env.example             # Environment template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── tailwind.config.js       # Tailwind config
```

## 🔧 Development Tips

1. **Hot Reload**: Both frontend and backend support hot reload
2. **Linting**: Run `npm run lint` to check code quality
3. **Console Logs**: Check browser console and terminal for errors
4. **Network Tab**: Use browser DevTools to debug API calls

## 📝 Scripts Reference

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend
```bash
npm run dev      # Start with nodemon (auto-restart)
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🤝 Need Help?

- Check the [Issues](https://github.com/yourusername/portfolio/issues) page
- Read the main [README.md](README.md)
- Contact: your-email@example.com

## 📄 License

This project is licensed under the MIT License.
