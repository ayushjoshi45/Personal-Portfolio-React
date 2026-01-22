/**
 * Test script to verify backend email functionality
 */

const BACKEND_URL = process.argv[2] || 'http://localhost:8000';

async function testHealthCheck() {
  console.log('\n🔍 Testing Health Check...');
  try {
    const response = await fetch(`${BACKEND_URL}/health`);
    const data = await response.json();
    console.log('✅ Health Check:', data);
    return true;
  } catch (error) {
    console.error('❌ Health Check Failed:', error.message);
    return false;
  }
}

async function testSendEmail() {
  console.log('\n📧 Testing Send Email...');
  try {
    const response = await fetch(`${BACKEND_URL}/sendMail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message from the test script.',
      }),
    });
    
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Email Sent Successfully:', data);
      return true;
    } else {
      console.error('❌ Email Failed:', data);
      return false;
    }
  } catch (error) {
    console.error('❌ Email Test Failed:', error.message);
    return false;
  }
}

async function runTests() {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`🚀 Testing Backend: ${BACKEND_URL}`);
  console.log('='.repeat(50));
  
  const healthOk = await testHealthCheck();
  
  if (healthOk) {
    await testSendEmail();
  } else {
    console.log('\n⚠️  Skipping email test - health check failed');
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('✨ Tests Complete');
  console.log('='.repeat(50) + '\n');
}

// Run tests
runTests().catch(console.error);
