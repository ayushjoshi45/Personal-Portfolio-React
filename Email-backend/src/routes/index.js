/**
 * Routes Index
 */

import express from 'express';
import emailRoutes from './email.routes.js';
import healthRoutes from './health.routes.js';
import { sendContactEmail } from '../controllers/email.controller.js';
import { validateContactForm } from '../middleware/validation.middleware.js';

const router = express.Router();

// Health check
router.use('/health', healthRoutes);

// Email routes
router.use('/email', emailRoutes);

// Legacy route for backward compatibility
router.post('/sendMail', validateContactForm, sendContactEmail);

export default router;
