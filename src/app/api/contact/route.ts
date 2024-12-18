import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, recipient } = await request.json();

    const recipientEmails = {
      'mme': 'samueltomar@hotmail.com',
      'mr': 'bakilovesjiujitsu@gmail.com'
    };

    const recipientEmail = recipientEmails[recipient as keyof typeof recipientEmails];

    const transporter = nodemailer.createTransport({
      host: 'smtp.mailgun.org',
      port: 587,
      auth: {
        user: process.env.MAILGUN_USER,
        pass: process.env.MAILGUN_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <noreply@spot-hotel.com>`,
      replyTo: 'samueltomar@hotmail.com',
      to: recipientEmail,
      subject: `Nouveau message de contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <title>Nouveau message</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #2c3e50;">Nouveau message via le formulaire de contact</h2>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px;">
                <p><strong>Nom:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Objet:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
              <p style="font-size: 12px; color: #666; margin-top: 20px;">
                Ce message a été envoyé depuis le formulaire de contact de votre site web.
              </p>
            </div>
          </body>
        </html>
      `,
      text: `
        Nouveau message via le formulaire de contact\n\n
        Nom: ${name}\n
        Email: ${email}\n
        Objet: ${subject}\n
        Message: ${message}
      `, // Add plain text version
      headers: {
        'X-Priority': '1', // Set priority
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}