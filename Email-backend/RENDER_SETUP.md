# Render Deployment Setup Guide

## Your Backend URL
🌐 **https://personal-portfolio-react-backend.onrender.com**

## Current Issue
Render is blocking SMTP connections (port 587/465) causing "Connection timeout" errors.

## ✅ Immediate Steps to Fix

### 1. Update Environment Variables on Render

Go to: [Render Dashboard](https://dashboard.render.com/) → Your Service → **Environment**

Add these variables:
```
EMAIL_USER = ayushjoshi3725@gmail.com
EMAIL_PASS = your-16-character-app-password
PORT = 8000
NODE_ENV = production
```

### 2. Verify Build Settings

Go to: **Settings** tab

- **Build Command:** `npm install`
- **Start Command:** `npm start` or `node index.js`
- **Root Directory:** `Email-backend` (if your repo has multiple folders)

### 3. Test Your Backend

After redeploying, test these URLs:

**Health Check:**
```
https://personal-portfolio-react-backend.onrender.com/health
```
Should return: `{"success":true,"message":"Healthy"}`

**Send Email (POST request):**
```
https://personal-portfolio-react-backend.onrender.com/sendMail
```
Body:
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "message": "This is a test message"
}
```

### 4. Update Your Frontend

In your React frontend, update the API URL to:
```javascript
const API_URL = "https://personal-portfolio-react-backend.onrender.com/sendMail";
```

## 🚨 If SMTP Still Fails on Render

Many cloud platforms (Render, Vercel, Railway) **block SMTP ports** for security. If you still get timeout errors, use one of these alternatives:

### Option A: SendGrid (Recommended)
- Free tier: 100 emails/day
- Sign up: https://sendgrid.com/
- No SMTP needed, uses HTTP API
- Works perfectly on Render

### Option B: Resend
- Free tier: 100 emails/day  
- Sign up: https://resend.com/
- Modern, simple API
- Great for portfolios

### Option C: Brevo (formerly Sendinblue)
- Free tier: 300 emails/day
- Sign up: https://www.brevo.com/
- SMTP and API available

## 📧 Test Email Command

You can test locally first:
```bash
cd Email-backend
npm start
```

Then use curl or Postman:
```bash
curl -X POST http://localhost:8000/sendMail \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

## 🔍 Debug Render Logs

Check your Render logs to see the actual error:
1. Go to your service dashboard
2. Click on "Logs" tab
3. Look for SMTP errors or connection timeouts

## ✨ Pro Tip

For production, I highly recommend **SendGrid** or **Resend** instead of SMTP. They're:
- More reliable
- Faster
- Better deliverability
- No port blocking issues
- Free tier is sufficient for portfolio sites

Would you like help setting up SendGrid or Resend?
