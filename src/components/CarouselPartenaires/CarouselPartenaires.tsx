'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './CarouselPartenaires.module.css'

const partners = [
    {
      id: 1,
      image: '/Img/ACCUEIL_Partenaire001.png',
      title: 'Partenaire 1',
      description: 'Description 1'
    },
    {
      id: 2,
      image: '/Img/ACCUEIL_Partenaire002.png',
      title: 'Partenaire 2',
      description: 'Description 2'
    },
    {
      id: 3,
      image: '/Img/ACCUEIL_Partenaire003.png',
      title: 'Partenaire 3',
      description: 'Description 3'
    },
    {
      id: 4,
      image: '/Img/ACCUEIL_Partenaire004.png',
      title: 'Partenaire 4',
      description: 'Description 4'
    },
    {
      id: 5,
      image: '/Img/ACCUEIL_Partenaire005.png',
      title: 'Partenaire 5',
      description: 'Description 5'
    },
    {
      id: 6,
      image: '/Img/ACCUEIL_Partenaire006.png',
      title: 'Partenaire 6',
      description: 'Description 6'
    }
  ]

export default function CarouselPartenaires() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => 
        current >= partners.length - 3 ? 0 : current + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className={styles.wrapper}>
        <div 
          className={styles.carousel}
          style={{
            transform: `translateX(-${currentIndex * (100/3)}%)`
          }}
        >
          {partners.map((partner) => (
            <div key={partner.id} className={styles.item}>
              <div className={styles.itemContent}>
                <Image 
                  src={partner.image}
                  alt={partner.title}
                  width={2000}
                  height={2000}
                />
                <h3>{partner.title}</h3>
                <p>{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.indicators}>
        {[...Array(partners.length - 2)].map((_, i) => (
          <span 
            key={i}
            className={`${styles.dot} ${currentIndex === i ? styles.active : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </>
  )
}