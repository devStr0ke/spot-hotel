'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo">
        {/* Logo here */}
      </Link>
      
      <button 
        className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="line"></span>
        <span className="line"></span>
      </button>
      
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/annonces">Annonces</Link></li>
        <li><Link href="/#APROPOS_Container">A propos</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/#PARTENAIRES_Container">Partenaires</Link></li>
      </ul>
    </nav>
  )
}