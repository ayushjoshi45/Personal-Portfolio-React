/**
 * Email Configuration
 */

// Function to get email config (evaluated at runtime, not import time)
export const getEmailConfig = () => {
  // Debug logging
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('⚠️  Warning: EMAIL_USER or EMAIL_PASS environment variables are not set!');
    console.log('EMAIL_USER:', process.env.EMAIL_USER ? '✓ Set' : '✗ Not set');
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '✓ Set' : '✗ Not set');
  }
  
  return {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  };
};

// Legacy export for backward compatibility
export const emailConfig = getEmailConfig();

export const getEmailOptions = () => ({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
});

// Legacy export for backward compatibility
export const emailOptions = getEmailOptions();
