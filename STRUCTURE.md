# Project Structure Documentation

## 📁 Complete Directory Structure

```
portfolio/
│
├── 📂 src/                                    # Frontend source code
│   │
│   ├── 📂 components/                         # React components
│   │   │
│   │   ├── 📂 common/                         # Reusable UI components
│   │   │   ├── Button.jsx                     # Reusable button component
│   │   │   ├── Input.jsx                      # Form input component
│   │   │   ├── Textarea.jsx                   # Textarea component
│   │   │   ├── Loading.jsx                    # Loading spinner
│   │   │   ├── Toast.jsx                      # Toast notifications
│   │   │   ├── ErrorBoundary.jsx              # Error boundary for error handling
│   │   │   └── index.js                       # Barrel export
│   │   │
│   │   ├── 📂 Header/                         # Header components
│   │   │   ├── Header.jsx                     # Main header component
│   │   │   └── Navigation.jsx                 # Navigation menu
│   │   │
│   │   ├── 📂 Hero/                           # Hero section
│   │   │   └── Hero.jsx                       # Landing hero section
│   │   │
│   │   ├── 📂 Project/                        # Projects section
│   │   │   └── Project.jsx                    # Project showcase cards
│   │   │
│   │   ├── 📂 Skills/                         # Skills section
│   │   │   └── Skills.jsx                     # Skills grid display
│   │   │
│   │   ├── 📂 About/                          # About section
│   │   │   └── About.jsx                      # About information
│   │   │
│   │   └── 📂 Contact/                        # Contact section
│   │       └── Contact.jsx                    # Contact form with API integration
│   │
│   ├── 📂 config/                             # Configuration files
│   │   └── constants.js                       # App-wide constants & config
│   │
│   ├── 📂 hooks/                              # Custom React hooks
│   │   ├── useForm.js                         # Form handling hook
│   │   └── useScrollToSection.js              # Smooth scroll hook
│   │
│   ├── 📂 layouts/                            # Layout components
│   │   └── MainLayout.jsx                     # Main app layout wrapper
│   │
│   ├── 📂 services/                           # API services
│   │   └── api.service.js                     # Centralized API calls
│   │
│   ├── 📂 utils/                              # Utility files & images
│   │   ├── hero.jpg                           # Hero section image
│   │   ├── jobPortel.png                      # Project image
│   │   ├── project2.png                       # Project image
│   │   └── RentalMarketplace.png              # Project image
│   │
│   ├── App.jsx                                # Main app component
│   ├── main.jsx                               # React entry point
│   └── index.css                              # Global styles with Tailwind
│
├── 📂 Email-backend/                          # Backend API server (Simple)
│   │
│   ├── index.js                               # Main server file (Express + Resend)
│   ├── test-backend.js                        # Backend testing script
│   ├── .env                                   # Environment variables (RESEND_API_KEY, RECEIVER_EMAIL)
│   ├── .env.template                          # Environment template
│   ├── .gitignore                             # Git ignore rules
│   ├── package.json                           # Backend dependencies
│   └── SETUP.md                               # Setup instructions
│
├── 📂 public/                                 # Static public assets
│   ├── DP_ROUND-preview.png                   # Favicon/Logo
│   └── vite.svg                               # Vite logo
│
├── .env.example                               # Frontend env template
├── .gitignore                                 # Git ignore rules
├── eslint.config.js                           # ESLint configuration
├── index.html                                 # HTML entry point
├── package.json                               # Frontend dependencies
├── postcss.config.js                          # PostCSS config
├── tailwind.config.js                         # Tailwind CSS config
├── vite.config.js                             # Vite configuration
├── README.md                                  # Main documentation
├── SETUP.md                                   # Setup guide
└── STRUCTURE.md                               # This file
```

## 🎯 Component Responsibilities

### Frontend Components

#### Common Components (`src/components/common/`)
- **Button.jsx**: Reusable button with variants (primary, secondary, outline)
- **Input.jsx**: Form input with validation and error display
- **Textarea.jsx**: Textarea with validation
- **Loading.jsx**: Loading spinner with customizable sizes
- **Toast.jsx**: Notification toast with auto-dismiss
- **ErrorBoundary.jsx**: Catches and handles React errors gracefully

#### Feature Components

**Header** (`src/components/Header/`)
- Header.jsx: Main header with logo, navigation, and actions
- Navigation.jsx: Responsive navigation menu

**Hero** (`src/components/Hero/`)
- Hero.jsx: Landing section with animated text and profile image

**Project** (`src/components/Project/`)
- Project.jsx: Project showcase with cards, images, and links

**Skills** (`src/components/Skills/`)
- Skills.jsx: Skills grid with icons and names

**About** (`src/components/About/`)
- About.jsx: About section with expandable details

**Contact** (`src/components/Contact/`)
- Contact.jsx: Contact form with API integration and validation

### Backend Structure (Simple)

#### Main File (`Email-backend/index.js`)
- **Express Server**: Lightweight server setup
- **Resend Integration**: Fast email delivery using Resend API
- **CORS Configuration**: Allows requests from allowed origins
- **Routes**: 
  - `GET /` - API status check
  - `GET /health` - Health check endpoint
  - `POST /sendMail` - Send contact form emails
- **Error Handling**: Built-in error middleware
- **Environment Variables**: RESEND_API_KEY, RECEIVER_EMAIL

## 🔄 Data Flow

### Contact Form Submission Flow

```
User fills form
    ↓
Contact.jsx (validates input)
    ↓
useForm hook (manages state)
    ↓
api.service.js (sends POST request)
    ↓
Express server (index.js)
    ↓
Validates request data
    ↓
Resend API (sends email in 1-3 seconds)
    ↓
Response sent back to frontend
    ↓
Toast notification shown to user
```

## 🎨 Styling Architecture

### Tailwind CSS Classes
- Uses utility-first approach
- Custom colors defined in `tailwind.config.js`
- Responsive breakpoints: `sm:`, `md:`, `lg:`

### Color Scheme
```javascript
{
  PRIMARY: '#6200EE',        // Purple - buttons, highlights
  PRIMARY_HOVER: '#7B1EFF',  // Lighter purple - hover states
  BACKGROUND: '#0B0B0B',     // Almost black - main bg
  CARD_BG: '#222222',        // Dark gray - cards
  CARD_BG_LIGHT: '#333333',  // Light gray - inputs
}
```

### Custom Animations
- `animate-slide-in`: Toast notifications
- Smooth scroll behavior
- Hover transitions on cards and buttons

## 🔐 Security Features

### Frontend
- Input sanitization in forms
- HTTPS in production
- Environment variable protection
- Error boundaries

### Backend
- Input validation and sanitization
- Rate limiting (5 requests per 15 minutes)
- CORS configuration
- Secure email handling
- Environment variable protection
- Error messages without sensitive data

## 📡 API Endpoints

### Health Check
```
GET /api/health
Response: { success: true, message: "Server is healthy", ... }
```

### Send Email
```
POST /api/email/send
Body: { name, email, message }
Response: { success: true, message: "Email sent successfully" }
```

### Legacy Support
```
POST /sendMail (redirects to /api/email/send)
```

## 🧪 Testing Strategy

### Frontend
- Error boundary testing
- Form validation testing
- API integration testing
- Responsive design testing

### Backend
- Input validation testing
- Rate limiting testing
- Email service testing
- Error handling testing

## 🚀 Performance Optimizations

### Frontend
- Code splitting (vendor chunk)
- Lazy loading components
- Image optimization
- Tailwind CSS purging

### Backend
- Rate limiting to prevent abuse
- Connection pooling for SMTP
- Error logging
- Graceful shutdown handling

## 📝 Configuration Files

### Frontend Config Files
- **vite.config.js**: Vite build configuration
- **tailwind.config.js**: Tailwind CSS customization
- **postcss.config.js**: PostCSS plugins
- **eslint.config.js**: Linting rules
- **.env**: Environment variables

### Backend Config Files
- **package.json**: Dependencies and scripts
- **.env**: Environment variables
- All config files in `src/config/`

## 🔧 Development Workflow

1. **Local Development**
   - Frontend: `npm run dev` (port 5173)
   - Backend: `npm run dev` (port 8000)

2. **Making Changes**
   - Edit component files
   - Hot reload automatically updates
   - Check console for errors

3. **Building for Production**
   - Frontend: `npm run build`
   - Backend: `npm start`

4. **Deployment**
   - Frontend → Netlify/Vercel
   - Backend → Render/Railway

## 📚 Best Practices

### Code Organization
- One component per file
- Group related files in folders
- Use barrel exports (index.js)
- Clear naming conventions

### Component Structure
```javascript
// Imports
import React from 'react';

// Component
const ComponentName = ({ props }) => {
  // State
  // Effects
  // Handlers
  // Render
  return (
    // JSX
  );
};

// Export
export default ComponentName;
```

### File Naming
- Components: PascalCase (Button.jsx)
- Utilities: camelCase (api.service.js)
- Config: lowercase with dots (vite.config.js)

## 🎓 Learning Resources

- React: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite: https://vitejs.dev
- Express: https://expressjs.com
- Nodemailer: https://nodemailer.com
