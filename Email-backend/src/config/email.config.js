/**
 * Email Configuration
 */

export const emailConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};

export const emailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
};
