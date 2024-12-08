import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <div className="contact_BodyLike">
      <div className="contact-page">
        <div className="contact-image">
          <Image
            src="/Img/CONTACT_contact.png"
            alt="Contact"
            width={600}
            height={400}
            priority
          />
        </div>
        <ContactForm />
      </div>
    </div>
  )
}