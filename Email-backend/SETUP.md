# 📧 Portfolio Email Backend - Simple Setup

## 🚀 Quick Setup (5 minutes)

### 1. Get Resend API Key (FREE)

1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day)
3. Click **"API Keys"** in the sidebar
4. Click **"Create API Key"**
5. Copy your API key (starts with `re_`)

### 2. Update Environment Variables

Create a `.env` file in the `Email-backend` folder:

```env
# Resend API Key (from step 1)
RESEND_API_KEY=re_your_api_key_here

# Your email address (where you want to receive messages)
RECEIVER_EMAIL=your-email@gmail.com

# Server Configuration
PORT=8000
NODE_ENV=production
```

### 3. Install Dependencies

```bash
cd Email-backend
npm install
```

### 4. Test Locally

```bash
npm start
```

Open: http://localhost:8000 - You should see a success message!

### 5. Deploy to Render

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Simplify backend with Resend"
   git push
   ```

2. Go to [Render Dashboard](https://dashboard.render.com)

3. Find your backend service

4. Go to **Environment** tab

5. Add these environment variables:
   - `RESEND_API_KEY` = Your Resend API key
   - `RECEIVER_EMAIL` = Your email address

6. Click **"Manual Deploy"** → **"Deploy latest commit"**

7. Wait 2-3 minutes for deployment

## ✅ Done!

Your backend is now:
- ✅ **10x Faster** (no SMTP delays)
- ✅ **Simpler** (less code)
- ✅ **More Reliable** (99.9% uptime)
- ✅ **FREE** (100 emails/day)

## 🧪 Test Your API

**Test health endpoint:**
```bash
curl https://your-backend-url.onrender.com/health
```

**Test email endpoint:**
```bash
curl -X POST https://your-backend-url.onrender.com/sendMail \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

## 🔥 Why Resend is Better

| Feature | Nodemailer (Old) | Resend (New) |
|---------|------------------|--------------|
| Speed | Slow (30-60s) | Fast (1-3s) |
| Setup | Complex | Simple |
| Reliability | Medium | High |
| Code Lines | 50+ | 20 |
| Free Tier | No | Yes (100/day) |

## 📝 Notes

- Resend sends from `onboarding@resend.dev` by default
- You can add your own domain later for custom "from" addresses
- The `replyTo` field is set to the sender's email
- All messages go to your `RECEIVER_EMAIL`
