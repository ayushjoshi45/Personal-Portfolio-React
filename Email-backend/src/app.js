/**
 * Express App Configuration
 */

import express from 'express';
import cors from 'cors';
import { corsOptions } from './config/cors.config.js';
import { requestLogger } from './middleware/logger.middleware.js';
import { errorHandler, notFoundHandler } from './middleware/error.middleware.js';
import routes from './routes/index.js';
import emailService from './services/email.service.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(requestLogger);

// Initialize email service
await emailService.verifyConnection();

// Routes
app.use('/api', routes);

// Legacy route for backward compatibility
app.post('/sendMail', routes);

// Error Handling
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
