/**
 * Email Routes
 */

import express from 'express';
import { sendContactEmail } from '../controllers/email.controller.js';
import { validateContactForm } from '../middleware/validation.middleware.js';

const router = express.Router();

/**
 * POST /api/email/send
 * Send contact form email
 */
router.post('/send', validateContactForm, sendContactEmail);

export default router;
