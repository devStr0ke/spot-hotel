import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
      <Link href="/mentions-legales" className={styles.link}>
        Mentions légales
      </Link>
    </div>
  )
}