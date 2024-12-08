'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function CarouselPartenaires() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalItems = 6 // Number of partners
  const itemsPerView = 3

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => 
        current >= totalItems / itemsPerView - 1 ? 0 : current + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="Acc_carousel-container" id="PARTENAIRES_Container">
      <h2>Ils nous font confiance :</h2>
      <div className="Acc_carousel-wrapper">
        <div 
          className="Acc_carousel"
          style={{
            transform: `translateX(-${currentIndex * (100 / (totalItems / itemsPerView))}%)`
          }}
        >
          {/* Add your carousel items here */}
        </div>
      </div>
      
      <div className="Acc_carousel-indicators">
        {[...Array(4)].map((_, i) => (
          <span 
            key={i}
            className={`Acc_dot ${currentIndex === i ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}