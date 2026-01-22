/**
 * Validation Middleware
 */

/**
 * Validate email format
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Sanitize string input
 */
const sanitizeString = (str) => {
  return str.trim().replace(/[<>]/g, '');
};

/**
 * Validate contact form data
 */
export const validateContactForm = (req, res, next) => {
  const { name, email, message } = req.body;

  // Check if all fields are present
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
      errors: {
        name: !name ? 'Name is required' : null,
        email: !email ? 'Email is required' : null,
        message: !message ? 'Message is required' : null,
      },
    });
  }

  // Validate name
  if (name.trim().length < 2 || name.trim().length > 100) {
    return res.status(400).json({
      success: false,
      message: 'Name must be between 2 and 100 characters',
    });
  }

  // Validate email
  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address',
    });
  }

  // Validate message
  if (message.trim().length < 10 || message.trim().length > 1000) {
    return res.status(400).json({
      success: false,
      message: 'Message must be between 10 and 1000 characters',
    });
  }

  // Sanitize inputs
  req.body.name = sanitizeString(name);
  req.body.email = sanitizeString(email);
  req.body.message = sanitizeString(message);

  next();
};
