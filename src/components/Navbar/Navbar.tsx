'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <img src="/Img/TEMP_Logo.png" alt="Logo" />
      </Link>
      
      <button 
        className={`${styles.toggle} ${isMenuOpen ? styles.active : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      
      <ul className={`${styles.links} ${isMenuOpen ? styles.active : ''}`}>
        <li><Link href="/" onClick={handleLinkClick}>Accueil</Link></li>
        <li><Link href="/annonces" onClick={handleLinkClick}>Annonces</Link></li>
        <li><Link href="/#APROPOS_Container" onClick={handleLinkClick}>A propos</Link></li>
        <li><Link href="/contact" onClick={handleLinkClick}>Contact</Link></li>
        <li><Link href="/#PARTENAIRES_Container" onClick={handleLinkClick}>Partenaires</Link></li>
      </ul>
    </nav>
  )
}