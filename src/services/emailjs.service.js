/**
 * EmailJS Service Layer
 * Client-side email sending using EmailJS
 * BENEFITS:
 * - Instant email delivery (no backend needed)
 * - No server cold starts or timeouts
 * - 200 emails/month free tier
 * - Works directly from browser
 */

import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};

/**
 * Initialize EmailJS with public key
 */
const initEmailJS = () => {
  if (!EMAILJS_CONFIG.PUBLIC_KEY) {
    console.warn('⚠️ EmailJS Public Key not found in environment variables');
    return false;
  }
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  return true;
};

/**
 * EmailJS Service Methods
 */
export const emailJSService = {
  /**
   * Send contact form email using EmailJS
   * @param {Object} data - Form data (name, email, message)
   * @returns {Promise}
   */
  sendEmail: async (data) => {
    try {
      // Validate configuration
      if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID) {
        throw new Error('EmailJS configuration is incomplete. Please check your environment variables.');
      }

      // Initialize EmailJS
      if (!initEmailJS()) {
        throw new Error('Failed to initialize EmailJS. Please check your public key.');
      }

      console.log('📧 Sending email via EmailJS...');
      console.log('Data:', { name: data.name, email: data.email });

      // Prepare template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: 'Ayush Joshi', // Your name
        reply_to: data.email,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log('✅ Email sent successfully:', response);
      return {
        success: true,
        message: 'Email sent successfully!',
        response,
      };
    } catch (error) {
      console.error('❌ EmailJS Error:', error);
      
      // Handle specific EmailJS errors
      if (error.text) {
        throw new Error(`Failed to send email: ${error.text}`);
      }
      
      throw new Error(error.message || 'Failed to send email. Please try again.');
    }
  },

  /**
   * Send email using a form element (alternative method)
   * @param {HTMLFormElement} form - Form element
   * @returns {Promise}
   */
  sendEmailFromForm: async (form) => {
    try {
      if (!initEmailJS()) {
        throw new Error('Failed to initialize EmailJS. Please check your public key.');
      }

      console.log('📧 Sending email from form via EmailJS...');

      const response = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form
      );

      console.log('✅ Email sent successfully:', response);
      return {
        success: true,
        message: 'Email sent successfully!',
        response,
      };
    } catch (error) {
      console.error('❌ EmailJS Error:', error);
      throw new Error(error.text || error.message || 'Failed to send email. Please try again.');
    }
  },

  /**
   * Check if EmailJS is properly configured
   * @returns {boolean}
   */
  isConfigured: () => {
    return !!(
      EMAILJS_CONFIG.PUBLIC_KEY &&
      EMAILJS_CONFIG.SERVICE_ID &&
      EMAILJS_CONFIG.TEMPLATE_ID
    );
  },

  /**
   * Get configuration status (for debugging)
   * @returns {Object}
   */
  getConfigStatus: () => {
    return {
      publicKey: !!EMAILJS_CONFIG.PUBLIC_KEY,
      serviceId: !!EMAILJS_CONFIG.SERVICE_ID,
      templateId: !!EMAILJS_CONFIG.TEMPLATE_ID,
      isReady: emailJSService.isConfigured(),
    };
  },
};

export default emailJSService;
