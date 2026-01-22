import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

console.log('=== Environment Variables Test ===');
console.log('EMAIL_USER:', process.env.EMAIL_USER ? '✅ Set' : '❌ Not set');
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '✅ Set (length: ' + process.env.EMAIL_PASS.length + ')' : '❌ Not set');
console.log('PORT:', process.env.PORT || 'Using default');
console.log('\nFull EMAIL_USER value:', process.env.EMAIL_USER);
console.log('===================================');
