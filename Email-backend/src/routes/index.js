/**
 * Routes Index
 */

import express from 'express';
import emailRoutes from './email.routes.js';
import healthRoutes from './health.routes.js';

const router = express.Router();

// Health check
router.use('/health', healthRoutes);

// Email routes
router.use('/email', emailRoutes);

// Legacy route for backward compatibility
router.post('/sendMail', (req, res, next) => {
  req.url = '/email/send';
  emailRoutes.handle(req, res, next);
});

export default router;
