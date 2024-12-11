'use client'
import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [showOverlay, setShowOverlay] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowOverlay(true)
  }

  return (
    <div className={styles.form}>
      <div className={styles.columnLeft}>
        <h1 className={styles.title}>Contactez-nous !</h1>

        <div className={styles.infoBlocks}>
          <div className={styles.infoBlock}>
            <p className={styles.infoTitle}>Adresse</p>
            <p className={styles.infoContent}>123 Rue Exemple, 75000 Paris</p>
          </div>
          <div className={styles.infoBlock}>
            <p className={styles.infoTitle}>Téléphone</p>
            <p className={styles.infoContent}>+33 1 23 45 67 89</p>
          </div>
          <div className={styles.infoBlock}>
            <p className={styles.infoTitle}>Email</p>
            <p className={styles.infoContent}>contact@exemple.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.inputSection}>
          <h2 className={styles.inputTitle}>Laissez-nous un message</h2>
          
          <p>Nom Prénom</p>
          <input type="text" className={styles.input} placeholder="Votre nom et prénom" required />

          <p>Votre adresse mail</p>
          <input type="email" className={styles.input} placeholder="Votre adresse mail" required />

          <p>Objet du message</p>
          <input type="text" className={styles.input} placeholder="Objet" required />

          <p>Message</p>
          <textarea className={styles.messageBox} placeholder="Votre message" required />
          
          <button type="submit" className={styles.submitButton}>Envoyer</button>
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
            <button className={styles.overlayButton} onClick={() => setShowOverlay(false)}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  )
}