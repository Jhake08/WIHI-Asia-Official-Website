import nodemailer from 'nodemailer';

async function testEmail() {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: 'Test Email from Nodemailer',
      text: 'This is a test email to verify Nodemailer configuration.',
    });

    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending test email:', error);
  }
}

testEmail();
