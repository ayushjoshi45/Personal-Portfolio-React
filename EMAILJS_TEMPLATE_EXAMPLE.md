# 📋 EmailJS Template - Exact Settings

## What Your Template Should Look Like in EmailJS Dashboard

---

## 🎯 Template Settings Page

When you're in the EmailJS template editor, here's what each field should contain:

### 1️⃣ **To Email**
```
ayushjoshi3725@gmail.com
```
*(Replace with YOUR email where you want to receive messages)*

---

### 2️⃣ **From Name**
```
{{from_name}}
```
⚠️ **Important:** Keep the `{{}}` curly braces! This is a variable.

---

### 3️⃣ **From Email**
```
noreply@emailjs.com
```
*Keep this as default, or use the email from your connected service*

---

### 4️⃣ **Reply To** ⭐ **CRITICAL**
```
{{from_email}}
```
⚠️ **Important:** This allows you to reply directly to the person who sent the message!

---

### 5️⃣ **Subject**
```
New Message from {{from_name}} - Portfolio Contact Form
```

---

### 6️⃣ **Content**

Select **"HTML Editor"** tab (not "Text Editor")

Then paste this:

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

---

## 📸 Visual Reference

### What You'll See in EmailJS Dashboard:

```
┌─────────────────────────────────────────────┐
│  Email Template Editor                      │
├─────────────────────────────────────────────┤
│                                             │
│  Template Name: Portfolio Contact Form      │
│                                             │
│  ┌────────────────────────────────────┐   │
│  │ Settings  │ Content  │ Test It     │   │
│  └────────────────────────────────────┘   │
│                                             │
│  To Email:                                  │
│  ┌─────────────────────────────────────┐  │
│  │ ayushjoshi3725@gmail.com            │  │
│  └─────────────────────────────────────┘  │
│                                             │
│  From Name:                                 │
│  ┌─────────────────────────────────────┐  │
│  │ {{from_name}}                       │  │
│  └─────────────────────────────────────┘  │
│                                             │
│  From Email:                                │
│  ┌─────────────────────────────────────┐  │
│  │ noreply@emailjs.com                 │  │
│  └─────────────────────────────────────┘  │
│                                             │
│  Reply To:                                  │
│  ┌─────────────────────────────────────┐  │
│  │ {{from_email}}                      │  │
│  └─────────────────────────────────────┘  │
│                                             │
│  Subject:                                   │
│  ┌─────────────────────────────────────┐  │
│  │ New Message from {{from_name}} ...  │  │
│  └─────────────────────────────────────┘  │
│                                             │
│  Content:                                   │
│  [Text Editor] [HTML Editor] ←SELECT THIS  │
│  ┌─────────────────────────────────────┐  │
│  │ <!DOCTYPE html>                     │  │
│  │ <html>                              │  │
│  │ ... (paste HTML code here)          │  │
│  └─────────────────────────────────────┘  │
│                                             │
│               [Save]  [Test It]             │
└─────────────────────────────────────────────┘
```

---

## 🎨 Alternative: Simple Text-Only Template

If you prefer a simple text email (no HTML styling):

### Select "Text Editor" tab and paste:

```
New Contact Form Submission

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

From: {{from_name}}
Email: {{from_email}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Message:

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was sent from your portfolio contact form.
You can reply directly to {{from_email}}
```

---

## ✅ Quick Verification Checklist

After setting up your template, verify:

- [ ] **To Email** = Your actual email address (no variables here)
- [ ] **From Name** = `{{from_name}}` (with curly braces)
- [ ] **Reply To** = `{{from_email}}` (with curly braces) ⭐ Most important!
- [ ] **Subject** = Contains `{{from_name}}` variable
- [ ] **Content** = HTML editor selected (not text)
- [ ] **Content** = Contains `{{from_name}}`, `{{from_email}}`, and `{{message}}` variables
- [ ] **Template saved** = Click "Save" button
- [ ] **Template ID copied** = You'll need this for `.env` file

---

## 🧪 Test Your Template

### In EmailJS Dashboard:

1. Click the **"Test It"** tab in your template editor
2. You'll see test fields. Fill them like this:

```
from_name: John Doe
from_email: john@example.com
message: Hi Ayush, I'd like to hire you for a project!
```

3. Click **"Send Test Email"**
4. Check your inbox (the email in "To Email" field)
5. You should receive a beautifully formatted email!

### What You Should Receive:

```
Subject: New Message from John Doe - Portfolio Contact Form
From: John Doe

[Beautiful HTML formatted email with:]
- Header with gradient background
- Name: John Doe
- Email: john@example.com
- Message: Hi Ayush, I'd like to hire you for a project!
```

---

## 🎯 Pro Tips

### 1. Add Auto-Reply (Optional)
You can create a second template for auto-replies to users:
- Template sends to `{{from_email}}`
- Content: "Thanks for reaching out! I'll get back to you soon."

### 2. Custom Variables
Add more variables if needed:
```javascript
// In your code:
phone: data.phone,  // Add phone field

// In template:
Phone: {{phone}}
```

### 3. Formatting Tips
- Use `<br>` for line breaks in HTML
- Use `<strong>` for bold text
- Use `<p>` tags for paragraphs
- Keep it simple and readable

---

## 🆘 Common Mistakes to Avoid

❌ **WRONG:**
```
Reply To: from_email          (Missing {{}})
From Name: from name          (Space, no {{}})
Subject: New Message          (No variable)
```

✅ **CORRECT:**
```
Reply To: {{from_email}}      (With {{}})
From Name: {{from_name}}      (With {{}})
Subject: New Message from {{from_name}}
```

---

## 📱 What the Email Will Look Like

When someone fills your contact form, you'll receive:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
From: portfolio@yourdomain.com
To: ayushjoshi3725@gmail.com
Reply-To: john@example.com  ← Click reply, it goes to sender!
Subject: New Message from John Doe - Portfolio Contact Form
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Beautiful formatted HTML email]

🎉 New Contact Form Message!

You've received a new message from your portfolio website.

👤 Name:
John Doe

✉️ Email:
john@example.com

💬 Message:
Hi Ayush, I love your portfolio! I'd like to discuss
a project with you. Are you available next week?

─────────────────────────────────
This email was sent from your portfolio contact form.
Reply directly to this email to respond to John Doe
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

When you click "Reply", it automatically replies to `john@example.com` (the person who filled the form)!

---

## 🎉 Done!

Your template is ready! Now:
1. Copy your Template ID
2. Add it to `.env` file
3. Test your contact form
4. Receive emails in 1-3 seconds! ⚡

