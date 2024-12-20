import { EmailTemplate } from '@/components/EmailTemplate/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAILS = {
  mme: 'c.giroud@spot-hotel.com', // Replace with actual email
  mr: 't.deniau@spot-hotel.com'    // Replace with actual email
};

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, email, subject, message, recipient } = formData;

    const { data, error } = await resend.emails.send({
      from: 'no-reply@spothotels-chr.com',
      to: [RECIPIENT_EMAILS[recipient as keyof typeof RECIPIENT_EMAILS]],
      subject: `Nouveau message: ${subject}`,
      react: EmailTemplate({ 
        name, 
        email, 
        subject, 
        message, 
        recipient 
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}