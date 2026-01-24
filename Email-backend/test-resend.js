import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

console.log('\n🔍 Testing Resend Configuration...\n');

// Check environment variables
console.log('✅ Environment Variables:');
console.log('   RESEND_API_KEY:', process.env.RESEND_API_KEY ? `Set (${process.env.RESEND_API_KEY.substring(0, 10)}...)` : '❌ NOT SET');
console.log('   RECEIVER_EMAIL:', process.env.RECEIVER_EMAIL || '❌ NOT SET');
console.log('');

if (!process.env.RESEND_API_KEY) {
  console.error('❌ ERROR: RESEND_API_KEY is not set in .env file');
  process.exit(1);
}

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
  try {
    console.log('📧 Sending test email...\n');
    
    const receiverEmail = process.env.RECEIVER_EMAIL || 'ayushjoshi3725@gmail.com';
    
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: receiverEmail,
      subject: 'Test Email from Portfolio Backend',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #6200EE;">🎉 Test Email Successful!</h2>
          <p>This is a test email from your portfolio backend.</p>
          <p><strong>If you receive this email, your Resend integration is working perfectly!</strong></p>
          <p>Sent to: <strong>${receiverEmail}</strong></p>
          <p>Time: ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    console.log('✅ Email sent successfully!');
    console.log('📬 Response from Resend:');
    console.log(JSON.stringify(data, null, 2));
    console.log('');
    console.log(`📥 Check your inbox at: ${receiverEmail}`);
    console.log('⚠️  If not in inbox, check SPAM folder!');
    console.log('');
    
  } catch (error) {
    console.error('❌ Error sending email:');
    console.error('   Message:', error.message);
    console.error('   Details:', error);
    console.log('');
    
    if (error.message.includes('API key')) {
      console.log('💡 TIP: Your Resend API key might be invalid.');
      console.log('   1. Go to https://resend.com/api-keys');
      console.log('   2. Create a new API key');
      console.log('   3. Update RESEND_API_KEY in .env file');
    }
  }
}

testEmail();
