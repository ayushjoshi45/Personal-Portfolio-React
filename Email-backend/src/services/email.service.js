/**
 * Email Service
 */

import nodemailer from 'nodemailer';
import { getEmailConfig, getEmailOptions } from '../config/email.config.js';

class EmailService {
  constructor() {
    // Don't create transporter in constructor
    this.transporter = null;
  }
  
  /**
   * Get or create transporter (lazy initialization)
   */
  getTransporter() {
    if (!this.transporter) {
      this.transporter = nodemailer.createTransport(getEmailConfig());
    }
    return this.transporter;
  }

  /**
   * Verify email configuration
   */
  async verifyConnection() {
    try {
      await this.getTransporter().verify();
      console.log('✅ SMTP server is ready to send messages');
      return true;
    } catch (error) {
      console.error('❌ SMTP connection failed:', error.message);
      return false;
    }
  }

  /**
   * Send contact form email
   */
  async sendContactEmail({ name, email, message }) {
    try {
      const emailOptions = getEmailOptions();
      const mailOptions = {
        from: `"${name}" <${emailOptions.from}>`,
        to: emailOptions.to,
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

      const info = await this.getTransporter().sendMail(mailOptions);
      console.log('📧 Email sent successfully:', info.messageId);
      return info;
    } catch (error) {
      console.error('❌ Error sending email:', error);
      throw error;
    }
  }
}

export default new EmailService();
