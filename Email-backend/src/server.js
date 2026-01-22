/**
 * Server Entry Point
 */

import dotenv from 'dotenv';

// Load environment variables FIRST before importing anything else
dotenv.config();

import app from './app.js';
import emailService from './services/email.service.js';

// Verify email connection
await emailService.verifyConnection();

const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Start server
const server = app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║   🚀 Server Running                    ║
║   📡 Port: ${PORT}                       ║
║   🌍 Environment: ${NODE_ENV}          ║
║   ⏰ Started: ${new Date().toLocaleString()}  ║
╚════════════════════════════════════════╝
  `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('✅ HTTP server closed');
  });
});

process.on('SIGINT', () => {
  console.log('👋 SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('✅ HTTP server closed');
    process.exit(0);
  });
});
