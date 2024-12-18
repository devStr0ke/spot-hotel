'use client'
import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [showOverlay, setShowOverlay] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    recipient: 'mme' // default value
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setShowOverlay(true)
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          recipient: 'mme'
        })
      } else {
        alert('Erreur lors de l\'envoi du message. Veuillez réessayer.')
      }
    } catch (error) {
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className={styles.form}>
      <div className={styles.columnLeft}>
        <h1 className={styles.title}>Contactez-nous !</h1>

        <div className={styles.infoBlocks}>
          <div className={styles.infoBlock}>
            <p className={styles.infoTitle}>Adresse</p>
            <p className={styles.infoContent}>2 Rue Jean Baptiste de Maille,<br/>11 400 Castelnaudary</p>
          </div>
          <div className={styles.infoBlock}>
            <p className={styles.infoTitle}>Téléphone</p>
            <p className={styles.infoContent}>Mme : 06 98 23 87 64</p>
            <p className={styles.infoContent}>Mr : 06 36 15 32 76</p>
          </div>
          <div className={styles.infoBlock}>
            <p className={styles.infoTitle}>Email</p>
            <p className={styles.infoContent}>Mme : contact@exemple.com</p>
            <p className={styles.infoContent}>Mr : contact@exemple.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.inputSection}>
          <h2 className={styles.inputTitle}>Laissez-nous un message</h2>
          
          <p>Nom Prénom</p>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input} 
            placeholder="Votre nom et prénom" 
            required 
          />

          <p>Votre adresse mail</p>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input} 
            placeholder="Votre adresse mail" 
            required 
          />

          <p>Objet du message</p>
          <input 
            type="text" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={styles.input} 
            placeholder="Objet" 
            required 
          />

          <p>Message</p>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.messageBox} 
            placeholder="Votre message" 
            required 
          />

          <p>Destinataire</p>
          <select 
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="mme">Mme Giroud</option>
            <option value="mr">Mr Deniaux</option>
          </select>
          
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
      </div>

      <div className={styles.columnRight}>
        <div className={styles.infoSection}>
          <div className={styles.contactDetail}>
            <p>Reseau social 1 :</p>
            <p>XXXXXXXXXXXXXXXXX</p>
          </div>
          <div className={styles.contactDetail}>
            <p>Reseau social 2 :</p>
            <p>XXXXXXXXXXXXXXXXX</p>
          </div>
          <div className={styles.contactDetail}>
            <p>Reseau social 3 :</p>
            <p>XXXXXXXXXXXXXXXXX</p>
          </div>
        </div>
      </div>

      {showOverlay && (
        <div className={`${styles.overlay} ${styles.active}`}>
          <div className={styles.overlayContent}>
            <h2>Merci !</h2>
            <p>Nous vous répondrons dans les plus brefs délais.</p>
            <button 
              className={styles.overlayButton} 
              onClick={() => setShowOverlay(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  )
}