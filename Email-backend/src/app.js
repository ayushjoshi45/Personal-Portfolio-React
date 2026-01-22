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
import { sendContactEmail } from './controllers/email.controller.js';
import { validateContactForm } from './middleware/validation.middleware.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(requestLogger);

// Routes
app.use('/api', routes);

// Legacy route at root level for backward compatibility
app.post('/sendMail', validateContactForm, sendContactEmail);

// Error Handling
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
