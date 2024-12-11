import Image from 'next/image'
import ContactForm from '@/components/ContactForm/ContactForm'
import styles from './contact.module.css'

export default function Contact() {
  return (
    <div className={styles.bodyLike}>
      <div className={styles.page}>
        <div className={styles.image}>
          <Image
            src="/Img/CONTACT_contact.png"
            alt="Contact"
            width={2000}
            height={2000}
            priority
          />
        </div>
        <div className={styles.form}>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}