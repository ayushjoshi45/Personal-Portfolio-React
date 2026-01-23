/**
 * CORS Configuration
 */

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [
  'https://ayush-portfolio-react-js.netlify.app',
  'http://localhost:3000',
  'http://localhost:5173',
  'http://ayushjoshi.tech',
  'https://ayushjoshi.tech',
  'http://www.ayushjoshi.tech',
  'https://www.ayushjoshi.tech',
];

export const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, postman)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  optionsSuccessStatus: 200,
};
