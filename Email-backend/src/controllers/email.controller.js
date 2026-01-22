/**
 * Email Controller
 */

import emailService from '../services/email.service.js';

/**
 * Send contact form email
 */
export const sendContactEmail = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    await emailService.sendContactEmail({ name, email, message });

    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Error in sendContactEmail controller:', error);
    next(error);
  }
};
