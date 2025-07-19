import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { fullName, contactNumber, email, plan } = data;

    if (!fullName || !contactNumber || !email || !plan) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Configure Nodemailer transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail app password or OAuth token
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to the same Gmail account
      subject: 'New Plan Application Submission',
      text: `
        New plan application received:

        Full Name: ${fullName}
        Contact Number: ${contactNumber}
        Email Address: ${email}
        Plan Selected: ${plan}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Application sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send application' }, { status: 500 });
  }
}
