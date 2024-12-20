import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  recipient: 'mme' | 'mr';
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
  recipient
}) => (
  <div>
    <h1 className='text-2xl font-bold bg-red-500'>Nouveau message de contact</h1>
    <p>De : {name}</p>
    <p>Email : {email}</p>
    <p>Destinataire : {recipient === 'mme' ? 'Mme Giroud' : 'Mr Deniaux'}</p>
    <p>Objet : {subject}</p>
    <div>
      <h2>Message :</h2>
      <p>{message}</p>
    </div>
  </div>
);