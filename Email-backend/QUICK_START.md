# 🚀 Quick Start Guide

## Your Deployed Backend
**URL:** https://personal-portfolio-react-backend.onrender.com

## ⚡ Steps to Get Email Working on Render

### Step 1: Set Environment Variables on Render

1. Go to: https://dashboard.render.com/
2. Select your service: `personal-portfolio-react-backend`
3. Click **Environment** in the left sidebar
4. Add these variables:

| Key | Value |
|-----|-------|
| `EMAIL_USER` | `ayushjoshi3725@gmail.com` |
| `EMAIL_PASS` | Your 16-character Gmail App Password |
| `PORT` | `8000` |
| `NODE_ENV` | `production` |

5. Click **Save Changes**

### Step 2: Get Gmail App Password

If you don't have an App Password yet:

1. Go to: https://myaccount.google.com/security
2. Enable **2-Step Verification** (if not enabled)
3. Go to: https://myaccount.google.com/apppasswords
4. Create a new App Password for "Mail"
5. Copy the 16-character password (no spaces)
6. Paste it in Render's `EMAIL_PASS` variable

### Step 3: Deploy Changes

1. **Commit and push** your changes:
   ```bash
   cd Email-backend
   git add .
   git commit -m "Update email config for Render deployment"
   git push
   ```

2. Render will **auto-deploy** (or click "Manual Deploy")

### Step 4: Test Your Backend

Run this command to test:
```bash
npm run test:prod
```

Or manually test:
```bash
curl https://personal-portfolio-react-backend.onrender.com/health
```

### Step 5: Update Your Frontend

In your React app, update the API endpoint:

```javascript
// Before
const API_URL = "http://localhost:8000/sendMail";

// After
const API_URL = "https://personal-portfolio-react-backend.onrender.com/sendMail";
```

## 🧪 Local Testing

Test locally before deploying:
```bash
npm start
npm run test:local
```

## 📝 Frontend Integration Example

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('https://personal-portfolio-react-backend.onrender.com/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });
    
    const data = await response.json();
    
    if (data.success) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  }
};
```

## ⚠️ Troubleshooting

### Issue: "Connection timeout"
**Solution:** Render might be blocking SMTP ports. Options:
1. Try the updated code (now uses port 465 with SSL)
2. Use SendGrid (recommended for production)
3. Use Resend or Brevo

### Issue: "Missing credentials"
**Solution:** Check that environment variables are set correctly on Render

### Issue: "No recipients defined"
**Solution:** Verify `EMAIL_USER` is set in Render environment variables

## 🎯 Next Steps

If SMTP continues to fail on Render:
1. See `DEPLOYMENT.md` for SendGrid setup
2. SendGrid is FREE (100 emails/day) and more reliable
3. I can help you set it up if needed

## 📊 Monitor Your Service

- **Logs:** https://dashboard.render.com/ → Your Service → Logs
- **Metrics:** Check the Metrics tab for uptime and performance
