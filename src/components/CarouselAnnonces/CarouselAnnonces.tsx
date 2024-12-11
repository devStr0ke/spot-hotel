'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './CarouselAnnonces.module.css'

interface CarouselProps {
  type: 'hotel' | 'restaurant' | 'terrain'
  items: Array<{
    id: number
    image: string
    title: string
    description: string
  }>
}

export default function CarouselAnnonces({ type, items }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showOverlay, setShowOverlay] = useState(false)
  const [selectedItem, setSelectedItem] = useState(items[0])

  const scrollCarousel = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  const openOverlay = (item: typeof items[0]) => {
    setSelectedItem(item)
    setShowOverlay(true)
  }

  return (
    <section id={`section-${type}`} className={styles.carouselSection}>
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)}s</h2>
      <div className={styles.carousel}>
        <div 
          className={styles.carouselItems}
          style={{
            transform: `translateX(-${currentSlide * 30}vw)`
          }}
        >
          {items.map((item) => (
            <div 
              key={item.id}
              className={styles.carouselItem}
              onClick={() => openOverlay(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.dots}>
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${currentSlide === i ? styles.active : ''}`}
              onClick={() => scrollCarousel(i)}
            />
          ))}
        </div>
      </div>

      <div className={`${styles.overlay} ${showOverlay ? styles.active : ''}`}>
        <div className={styles.overlayContent}>
          <button 
            className={styles.overlayClose}
            onClick={() => setShowOverlay(false)}
          >
            ×
          </button>
          <div className={styles.overlayText}>
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.description}</p>
            <Link href="/contact" className={styles.overlayButton}>
              Contactez-nous
            </Link>
          </div>
          <Image
            className={styles.overlayImage}
            src={selectedItem.image}
            alt={selectedItem.title}
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  )
}