'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [showOverlay, setShowOverlay] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowOverlay(true)
    // Add form submission logic here
  }

  return (
    <div className="contact-form">
      <div className="form-column-left">
        <h1 className="form-title">Contactez-nous !</h1>

        <div className="info-blocks">
          <div className="info-block">
            <p className="info-title">Adresse</p>
            <p className="info-content">123 Rue Exemple, 75000 Paris</p>
          </div>
          <div className="info-block">
            <p className="info-title">Téléphone</p>
            <p className="info-content">+33 1 23 45 67 89</p>
          </div>
          <div className="info-block">
            <p className="info-title">Email</p>
            <p className="info-content">contact@exemple.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="input-section">
          <h2 className="input-title">Laissez-nous un message</h2>
          
          <p>Nom Prénom</p>
          <input type="text" className="input-line" placeholder="Votre nom et prénom" required />

          <p>Votre adresse mail</p>
          <input type="email" className="input-line" placeholder="Votre adresse mail" required />

          <p>Objet du message</p>
          <input type="text" className="input-line" placeholder="Objet" required />

          <p>Message</p>
          <textarea className="input-line message-box" placeholder="Votre message" required />
          
          <button type="submit" className="submit-button">Envoyer</button>
        </form>
      </div>

      <div className="form-column-right">
        <div className="info-section">
          <div className="contact-detail">
            <p>Reseau social 1 :</p>
            <p>XXXXXXXXXXXXXXXXX</p>
          </div>
          <div className="contact-detail">
            <p>Reseau social 2 :</p>
            <p>XXXXXXXXXXXXXXXXX</p>
          </div>
          <div className="contact-detail">
            <p>Reseau social 3 :</p>
            <p>XXXXXXXXXXXXXXXXX</p>
          </div>
        </div>
      </div>

      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <h2>Merci !</h2>
            <p>Nous vous répondrons dans les plus brefs délais.</p>
            <button onClick={() => setShowOverlay(false)}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  )
}