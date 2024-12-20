import * as React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Link
} from "@react-email/components";

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
  <Html>
    <Head />
    <Preview>Nouveau message de contact - SpotHotels</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Heading style={headerText}>Nouveau message de contact</Heading>
        </Section>

        <Section style={content}>
          {/* Info rows with reduced spacing */}
          <Section style={infoRows}>
            <Section style={infoRow}>
              <Text style={label}>De :</Text>
              <Text style={value}>{name}</Text>
            </Section>

            <Section style={infoRow}>
              <Text style={label}>Email :</Text>
              <Text style={value}>{email}</Text>
            </Section>

            <Section style={infoRow}>
              <Text style={label}>Pour :</Text>
              <Text style={value}>
                {recipient === 'mme' ? 'Mme Giroud' : 'Mr Deniau'}
              </Text>
            </Section>

            <Section style={infoRow}>
              <Text style={label}>Objet :</Text>
              <Text style={value}>{subject}</Text>
            </Section>
          </Section>

          <Hr style={divider} />

          <Section style={messageSection}>
            <Heading as="h2" style={messageHeader}>Message :</Heading>
            <Text style={messageText}>{message}</Text>
          </Section>
        </Section>

        <Section style={footer}>
          <Text style={footerText}>
            Ce message a été envoyé via le formulaire de contact de{' '}
            <Link href="https://spothotels-chr.com" style={link}>
              SpotHotels
            </Link>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Updated styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const header = {
  backgroundColor: '#1a2236',
  padding: '24px',
  borderTopLeftRadius: '4px',
  borderTopRightRadius: '4px',
};

const headerText = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0',
};

const content = {
  padding: '24px',
};

// New style for the info rows container
const infoRows = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '4px', // Reduced spacing between rows
};

const infoRow = {
  display: 'flex',
  alignItems: 'center',
  minHeight: '24px', // Ensures consistent height
};

const label = {
  color: '#666666',
  fontWeight: 'bold',
  width: '100px',
  marginRight: '12px',
  fontSize: '14px', // Slightly smaller font
};

const value = {
  color: '#1a2236',
  flex: '1',
  fontSize: '14px', // Slightly smaller font
};

const divider = {
  margin: '24px 0',
  borderTop: '1px solid #e6ebf1',
};

const messageSection = {
  backgroundColor: '#f8fafc',
  padding: '16px',
  borderRadius: '4px',
};

const messageHeader = {
  fontSize: '18px',
  color: '#1a2236',
  marginBottom: '12px',
};

const messageText = {
  color: '#4a5568',
  whiteSpace: 'pre-wrap',
  margin: '0',
};

const footer = {
  textAlign: 'center' as const,
  padding: '0 24px',
};

const footerText = {
  fontSize: '14px',
  color: '#666666',
};

const link = {
  color: '#0070f3',
  textDecoration: 'none',
};

export default EmailTemplate;