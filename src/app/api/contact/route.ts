import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, recipient } = await request.json();

    // Map recipient selection to actual email addresses
    const recipientEmails = {
      'mme': 'samueltomar@hotmail.com', // Replace with actual email
      'mr': 'bakilovesjiujitsu@gmail.com'    // Replace with actual email
    };

    const transporter = nodemailer.createTransport({
      host: 'smtp.mailgun.org',
      port: 587,
      auth: {
        user: process.env.MAILGUN_USER,
        pass: process.env.MAILGUN_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: 'samueltomar@hotmail.com',
      subject: `Nouveau message de contact: ${subject}`,
      html: `
        <div style="font-size: 18px; line-height: 1.6;">
          <p><strong>Nouveau message via le formulaire de contact</strong></p>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Objet:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}