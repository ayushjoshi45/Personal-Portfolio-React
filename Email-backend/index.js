import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
// app.use(cors());

const allowedOrigins = [
  "https://ayush-portfolio-react-js.netlify.app",
  "http://localhost:3000",
  "http://localhost:5173",
  "http://ayushjoshi.tech",
  "https://ayushjoshi.tech",
  "http://www.ayushjoshi.tech",
  "https://www.ayushjoshi.tech"
];

// Enable CORS for only your frontend
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
  })
);

// Create transporter using Gmail service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use SSL for better compatibility with cloud platforms
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});


// Verify transporter
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP connection failed:", error);
  } else {
    console.log("SMTP server is ready to send messages");
  }
});

// Health check route
app.get("/", (req, res) => {
  res.json({ success: true, message: "Email Backend is running", timestamp: new Date().toISOString() });
});

app.get("/health", (req, res) => {
  res.json({ success: true, message: "Healthy", timestamp: new Date().toISOString() });
});

// Email route
app.post("/sendMail", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // receive emails at your own Gmail
      subject: "New message from portfolio",
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    // console.log("Message sent:", info.messageId);

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
