import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(express.json());

// Allowed origins
const allowedOrigins = [
  "https://ayush-portfolio-react-js.netlify.app",
  "http://localhost:3000",
  "http://localhost:5173",
  "http://ayushjoshi.tech",
  "https://ayushjoshi.tech",
  "http://www.ayushjoshi.tech",
  "https://www.ayushjoshi.tech"
];

// CORS configuration
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true
  })
);

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Health check routes
app.get("/", (req, res) => {
  res.json({ 
    success: true, 
    message: "Portfolio Email API is running", 
    timestamp: new Date().toISOString() 
  });
});

app.get("/health", (req, res) => {
  res.json({ 
    success: true, 
    message: "Healthy", 
    timestamp: new Date().toISOString() 
  });
});

// Send email endpoint
app.post("/sendMail", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "All fields are required" 
      });
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6200EE;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <p><strong>Message:</strong></p>
            <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">This email was sent from your portfolio contact form.</p>
        </div>
      `,
    });

    console.log("Email sent successfully:", data);
    res.status(200).json({ 
      success: true, 
      message: "Email sent successfully" 
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to send email. Please try again." 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: "Something went wrong!" 
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`\n✅ Server running on port ${PORT}`);
  console.log(`📧 Using Resend for email delivery`);
  console.log(`⏰ Started at: ${new Date().toLocaleString()}\n`);
});
