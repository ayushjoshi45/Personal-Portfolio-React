/**
 * Gmail API Service (Alternative to SMTP for platforms like Render)
 */

import { google } from 'googleapis';
import nodemailer from 'nodemailer';

class GmailAPIService {
  constructor() {
    this.transporter = null;
  }

  /**
   * Create OAuth2 client
   */
  createOAuth2Client() {
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    });

    return oauth2Client;
  }

  /**
   * Get or create transporter using Gmail API
   */
  async getTransporter() {
    if (!this.transporter) {
      const oauth2Client = this.createOAuth2Client();
      const accessToken = await oauth2Client.getAccessToken();

      this.transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.EMAIL_USER,
          clientId: process.env.GMAIL_CLIENT_ID,
          clientSecret: process.env.GMAIL_CLIENT_SECRET,
          refreshToken: process.env.GMAIL_REFRESH_TOKEN,
          accessToken: accessToken.token,
        },
      });
    }
    return this.transporter;
  }

  /**
   * Verify connection
   */
  async verifyConnection() {
    try {
      const transporter = await this.getTransporter();
      await transporter.verify();
      console.log('✅ Gmail API is ready to send messages');
      return true;
    } catch (error) {
      console.error('❌ Gmail API connection failed:', error.message);
      return false;
    }
  }

  /**
   * Send contact email
   */
  async sendContactEmail({ name, email, message }) {
    try {
      const transporter = await this.getTransporter();
      const emailUser = process.env.EMAIL_USER;

      const mailOptions = {
        from: `"${name}" <${emailUser}>`,
        to: emailUser,
        replyTo: email,
        subject: `Portfolio Contact: Message from ${name}`,
        text: `
Name: ${name}
Email: ${email}

Message:
${message}
        `,
        html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #6200EE; color: white; padding: 20px; text-align: center; }
    .content { background-color: #f4f4f4; padding: 20px; margin: 20px 0; }
    .footer { text-align: center; color: #666; font-size: 12px; }
    .info-row { margin: 10px 0; }
    .label { font-weight: bold; color: #6200EE; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Portfolio Contact Message</h2>
    </div>
    <div class="content">
      <div class="info-row">
        <span class="label">From:</span> ${name}
      </div>
      <div class="info-row">
        <span class="label">Email:</span> ${email}
      </div>
      <div class="info-row">
        <span class="label">Message:</span>
        <p>${message.replace(/\n/g, '<br>')}</p>
      </div>
    </div>
    <div class="footer">
      <p>This email was sent from your portfolio contact form</p>
    </div>
  </div>
</body>
</html>
        `,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('📧 Email sent successfully:', info.messageId);
      return info;
    } catch (error) {
      console.error('❌ Error sending email:', error);
      throw error;
    }
  }
}

export default new GmailAPIService();
