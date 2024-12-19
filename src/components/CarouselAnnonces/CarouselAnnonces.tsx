'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
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
  const [showOverlay, setShowOverlay] = useState(false)
  const [selectedItem, setSelectedItem] = useState(items[0])
  const [currentIndex, setCurrentIndex] = useState(0)
  const controls = useAnimation()

  const openOverlay = (item: typeof items[0]) => {
    setSelectedItem(item)
    setShowOverlay(true)
    document.body.classList.add(styles.bodyLock)
  }

  const closeOverlay = () => {
    setShowOverlay(false)
    document.body.classList.remove(styles.bodyLock)
  }
  const scroll = async (direction: 'left' | 'right') => {
    const itemWidth = window.innerWidth * 0.4
    const maxIndex = items.length - Math.floor(window.innerWidth / itemWidth)
    
    let newIndex = direction === 'left' 
      ? Math.max(0, currentIndex - 1)
      : Math.min(maxIndex, currentIndex + 1)
    
    setCurrentIndex(newIndex)
    
    await controls.start({
      x: -newIndex * itemWidth,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    })
  }

  const onDragEnd = (event: any, info: any) => {
    const itemWidth = window.innerWidth * 0.4
    const draggedDistance = info.offset.x
    const maxIndex = items.length - Math.floor(window.innerWidth / itemWidth)

    if (Math.abs(draggedDistance) > itemWidth / 2) {
      const direction = draggedDistance > 0 ? 'left' : 'right'
      let newIndex = direction === 'left'
        ? Math.max(0, currentIndex - 1)
        : Math.min(maxIndex, currentIndex + 1)
      
      setCurrentIndex(newIndex)
      controls.start({
        x: -newIndex * itemWidth,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30
        }
      })
    } else {
      // Snap back to current position
      controls.start({
        x: -currentIndex * itemWidth,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30
        }
      })
    }
  }

  return (
    <section id={`section-${type}`} className={styles.carouselSection}>
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)}s</h2>
      <motion.div className={styles.carousel}>
        <button 
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => scroll('left')}
          aria-label="Previous items"
        >
          <span className={styles.arrowIcon}></span>
        </button>

        <motion.div 
          className={styles.carouselItems}
          drag="x"
          dragConstraints={{
            left: -((items.length - 2) * window.innerWidth * 0.4),
            right: 0
          }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          onDragEnd={onDragEnd}
          animate={controls}
        >
          {items.map((item) => (
            <motion.div 
              key={item.id}
              className={styles.carouselItem}
              onClick={() => openOverlay(item)}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <button 
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => scroll('right')}
          aria-label="Next items"
        >
          <span className={styles.arrowIcon}></span>
        </button>
      </motion.div>

      {/* Overlay remains the same */}
      <div className={`${styles.overlay} ${showOverlay ? styles.active : ''}`}>
        <div className={styles.overlayContent}>
          <button 
            className={styles.overlayClose}
            onClick={closeOverlay}
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