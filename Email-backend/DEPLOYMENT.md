# Email Backend Deployment Guide

## Issue: SMTP Connection Timeout on Render

Render's free tier **blocks outbound SMTP connections** on ports 587 and 465. You have three options:

## Option 1: Use Port 465 with SSL (Try This First)

The code has been updated to use port 465 with SSL. 

**Steps:**
1. Go to Render Dashboard → Your Service → Settings
2. Update **Start Command** to: `npm start` (NOT `node index.js`)
3. Go to Environment tab
4. Add environment variables:
   - `EMAIL_USER=ayushjoshi3725@gmail.com`
   - `EMAIL_PASS=your-gmail-app-password`
   - `PORT=8000`
   - `NODE_ENV=production`
5. Click "Save Changes" and redeploy

## Option 2: Use SendGrid (Recommended)

SendGrid offers 100 free emails/day and works perfectly on Render.

**Steps:**
1. Sign up at: https://sendgrid.com/
2. Create an API key
3. Install: `npm install @sendgrid/mail`
4. Add to Render environment: `SENDGRID_API_KEY=your-key`
5. Update email service to use SendGrid

**Code example:**
```javascript
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: process.env.EMAIL_USER,
  from: process.env.EMAIL_USER,
  replyTo: email,
  subject: `Portfolio Contact: Message from ${name}`,
  text: message,
  html: htmlContent,
};

await sgMail.send(msg);
```

## Option 3: Use Resend (Modern Alternative)

Resend offers 100 free emails/day with a simple API.

**Steps:**
1. Sign up at: https://resend.com/
2. Get API key
3. Install: `npm install resend`
4. Add to Render environment: `RESEND_API_KEY=your-key`

**Code example:**
```javascript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: process.env.EMAIL_USER,
  reply_to: email,
  subject: `Portfolio Contact: Message from ${name}`,
  html: htmlContent,
});
```

## Recommended: Use SendGrid or Resend

For production deployments on platforms like Render, Vercel, or Railway, **use a transactional email service** instead of SMTP. They're more reliable and designed for cloud environments.
