# 📧 EmailJS Setup Guide - Complete Tutorial

## 🚀 Quick Overview
EmailJS allows you to send emails directly from your browser without a backend server. Setup takes only 5-10 minutes!

---

## Step 1: Create EmailJS Account

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** (Free plan: 200 emails/month)
3. Verify your email address
4. Log in to your dashboard

---

## Step 2: Add Email Service

1. In the EmailJS dashboard, click **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (Recommended - easiest setup)
   - **Outlook/Hotmail**
   - **Yahoo**
   - **Custom SMTP** (for other providers)

### For Gmail (Recommended):
1. Select **"Gmail"**
2. Click **"Connect Account"**
3. Sign in with your Gmail account
4. Allow EmailJS to send emails on your behalf
5. Give your service a name (e.g., "Portfolio Contact Form")
6. Click **"Create Service"**
7. **COPY YOUR SERVICE ID** (e.g., `service_abc123`) - you'll need this!

---

## Step 3: Create Email Template

This is the most important part! Here's exactly how to set it up:

### 3.1 Create New Template
1. Click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**

### 3.2 Template Settings

**Template Name:** `Portfolio Contact Form` (or any name you prefer)

### 3.3 Template Content

Copy and paste this **EXACTLY** into your template:

#### **Subject:**
```
New Message from {{from_name}} - Portfolio Contact Form
```

#### **Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 10px 10px 0 0;
            text-align: center;
        }
        .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 10px 10px;
        }
        .info-box {
            background: white;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #667eea;
        }
        .label {
            color: #667eea;
            font-weight: bold;
            margin-bottom: 5px;
        }
        .value {
            color: #333;
            font-size: 16px;
        }
        .message-box {
            background: white;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border: 1px solid #e0e0e0;
        }
        .footer {
            text-align: center;
            color: #666;
            font-size: 12px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 New Contact Form Message!</h1>
        </div>
        
        <div class="content">
            <p>You've received a new message from your portfolio website.</p>
            
            <div class="info-box">
                <div class="label">👤 Name:</div>
                <div class="value">{{from_name}}</div>
            </div>
            
            <div class="info-box">
                <div class="label">✉️ Email:</div>
                <div class="value">{{from_email}}</div>
            </div>
            
            <div class="message-box">
                <div class="label">💬 Message:</div>
                <div class="value">{{message}}</div>
            </div>
            
            <div class="footer">
                <p>This email was sent from your portfolio contact form.</p>
                <p>Reply directly to this email to respond to {{from_name}}</p>
            </div>
        </div>
    </div>
</body>
</html>
```

#### **Important Settings to Configure:**

1. **To Email:** Enter your email address (e.g., `ayushjoshi3725@gmail.com`)
   - This is where you'll RECEIVE the contact form messages

2. **From Name:** `{{from_name}}`
   - This will show the sender's name

3. **From Email:** Keep as default or use `noreply@emailjs.com`

4. **Reply-To:** `{{from_email}}`
   - **IMPORTANT:** This allows you to reply directly to the person who filled the form!

5. **BCC/CC:** Leave empty (optional)

### 3.4 Template Variables Explained

These are the placeholders that will be replaced with actual data:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | Sender's name from the form | "John Doe" |
| `{{from_email}}` | Sender's email from the form | "john@example.com" |
| `{{message}}` | The message content | "I'd like to discuss a project..." |
| `{{to_name}}` | Your name (optional) | "Ayush Joshi" |

### 3.5 Save Template
1. Click **"Save"** at the top right
2. **COPY YOUR TEMPLATE ID** (e.g., `template_xyz789`) - you'll need this!

---

## Step 4: Get Your Public Key

1. Click on your **username** (top right corner)
2. Select **"Account"** from dropdown
3. Go to **"General"** tab
4. Find **"Public Key"** section
5. **COPY YOUR PUBLIC KEY** (e.g., `a1b2c3d4e5f6g7h8i9`) - you'll need 


---

## Step 5: Configure Your Project

### 5.1 Install EmailJS Package

```bash
npm install @emailjs/browser
```

### 5.2 Create/Update `.env` file

Create a `.env` file in your project root (or update existing one):

```env
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
```

**Replace with YOUR actual values from steps above!**

---

## Step 6: Update Your Contact Component

Replace the API call in your `Contact.jsx` with EmailJS:

```javascript
// Import EmailJS service instead of API service
import { emailJSService } from '../../services/emailjs.service';

// In your handleSubmit function:
const handleSubmit = async (formData) => {
  try {
    setToast({ message: 'Sending... ⏳', type: 'info' });
    await emailJSService.sendEmail(formData);
    setToast({ message: 'Message sent successfully! 🎉', type: 'success' });
  } catch (error) {
    const errorMessage = error.message || 'Failed to send message. Please try again. 😢';
    setToast({ message: errorMessage, type: 'error' });
    throw error;
  }
};
```

---

## 🎨 Advanced Template Options

### Option 1: Simple Plain Text Template
```
New message from {{from_name}}

Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

### Option 2: Professional HTML Template (Recommended - shown above)

### Option 3: Minimal HTML Template
```html
<h2>New Contact Form Message</h2>

<p><strong>From:</strong> {{from_name}} ({{from_email}})</p>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>
<p><small>Sent from portfolio contact form</small></p>
```

---

## 🧪 Testing Your Setup

### Test in EmailJS Dashboard:
1. Go to your template
2. Click **"Test It"** button
3. Fill in test values:
   - `from_name`: "Test User"
   - `from_email`: "test@example.com"
   - `message`: "This is a test message"
4. Click **"Send Test Email"**
5. Check your inbox!

### Test from Your Website:
1. Run your project: `npm run dev`
2. Go to contact form
3. Fill out and submit
4. You should receive email within 2-3 seconds! ⚡

---

## 📊 Template Variables Reference

### Available in Your Code:
When you call `emailJSService.sendEmail(data)`, these are sent:

```javascript
{
  from_name: data.name,      // {{from_name}} in template
  from_email: data.email,    // {{from_email}} in template
  message: data.message,     // {{message}} in template
  to_name: 'Ayush Joshi',   // {{to_name}} in template (optional)
  reply_to: data.email       // Used in Reply-To header
}
```

### How to Add More Variables:

1. **In Template:** Add `{{your_variable_name}}`
2. **In Code:** Add to `templateParams`:
```javascript
const templateParams = {
  from_name: data.name,
  from_email: data.email,
  message: data.message,
  your_variable_name: 'your value here', // Add this
};
```

---

## ⚡ Why EmailJS is Faster

| Method | Time | Why |
|--------|------|-----|
| **Resend (Backend)** | 30-60s | Server cold start on free tier |
| **EmailJS (Client)** | 1-3s | No server, direct from browser |

### Benefits:
- ✅ **Instant**: No backend server needed
- ✅ **No Cold Starts**: No waiting for server to wake up
- ✅ **Free**: 200 emails/month
- ✅ **Simple**: Just 3 credentials needed
- ✅ **Reliable**: 99.9% uptime

---

## 🔒 Security Notes

- Your public key is safe to expose (it's meant to be public)
- Service ID and Template ID are also safe to expose
- EmailJS has built-in rate limiting (prevents spam)
- You can add reCAPTCHA for extra protection

---

## 🐛 Troubleshooting

### "Failed to send email"
- ✅ Check all 3 environment variables are set correctly
- ✅ Make sure `.env` file is in project root
- ✅ Restart your dev server after adding .env

### "Template not found"
- ✅ Double-check Template ID matches exactly
- ✅ Make sure template is saved in EmailJS dashboard

### "Service not found"
- ✅ Verify Service ID is correct
- ✅ Check email service is connected in EmailJS

### Not receiving emails?
- ✅ Check spam folder
- ✅ Verify "To Email" in template settings
- ✅ Test template in EmailJS dashboard first

### Variables not showing?
- ✅ Variable names must match EXACTLY (case-sensitive)
- ✅ Use `{{variable_name}}` format (double curly braces)

---

## 📝 Quick Checklist

- [ ] Created EmailJS account
- [ ] Connected email service (Gmail recommended)
- [ ] Created email template with correct variables
- [ ] Copied Service ID
- [ ] Copied Template ID
- [ ] Copied Public Key
- [ ] Added all 3 IDs to `.env` file
- [ ] Installed `@emailjs/browser` package
- [ ] Updated Contact component to use EmailJS
- [ ] Tested and received email successfully

---

## 🎉 You're Done!

Your contact form now sends emails **instantly** without any backend server!

**Need help?** Check the troubleshooting section above or visit [EmailJS Docs](https://www.emailjs.com/docs/)
