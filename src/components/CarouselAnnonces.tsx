'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
    <section id={`section-${type}`} className="Ann_carousel-section">
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)}s</h2>
      <div className="Ann_carousel">
        <div 
          className="Ann_carousel-items"
          style={{
            transform: `translateX(-${currentSlide * 30}vw)`
          }}
        >
          {items.map((item) => (
            <div 
              key={item.id}
              className="Ann_carousel-item"
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
        
        <div className="Ann_carousel-dots">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className={`Ann_dot ${currentSlide === i ? 'active' : ''}`}
              onClick={() => scrollCarousel(i)}
            />
          ))}
        </div>
      </div>

      {showOverlay && (
        <div className="Ann_overlay">
          <div className="Ann_overlay-content">
            <button 
              className="Ann_overlay-close"
              onClick={() => setShowOverlay(false)}
            >
              ×
            </button>
            <div className="Ann_overlay-text">
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.description}</p>
              <Link href="/contact" className="Ann_overlay-button">
                Contactez-nous
              </Link>
            </div>
            <Image
              id="Ann_overlay-image"
              src={selectedItem.image}
              alt={selectedItem.title}
              width={500}
              height={300}
            />
          </div>
        </div>
      )}
    </section>
  )
}