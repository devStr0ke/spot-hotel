'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        {/* Logo here */}
      </Link>
      
      <button 
        className={`${styles.toggle} ${isMenuOpen ? styles.active : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      
      <ul className={`${styles.links} ${isMenuOpen ? styles.active : ''}`}>
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/annonces">Annonces</Link></li>
        <li><Link href="/#APROPOS_Container">A propos</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/#PARTENAIRES_Container">Partenaires</Link></li>
      </ul>
    </nav>
  )
}