/**
 * Test Contact Form Email
 */

const BACKEND_URL = process.argv[2] || 'http://localhost:8000';

async function testContactForm() {
  console.log('\n🧪 Testing Contact Form Email...\n');
  console.log(`📡 Backend URL: ${BACKEND_URL}\n`);
  
  try {
    const response = await fetch(`${BACKEND_URL}/sendMail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Ayush Joshi (Test)',
        email: 'test@example.com',
        message: 'This is a test message from the contact form. If you receive this, your contact form is working perfectly!',
      }),
    });
    
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Contact form email sent successfully!');
      console.log('📬 Response:', data);
      console.log('\n📥 Check your email at: ayushjoshi3725@gmail.com');
      console.log('⚠️  IMPORTANT: Check SPAM folder if not in inbox!\n');
    } else {
      console.error('❌ Error:', data);
    }
  } catch (error) {
    console.error('❌ Failed to send:', error.message);
  }
}

testContactForm();
