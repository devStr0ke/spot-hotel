import Image from 'next/image'
import Link from 'next/link'
import CarouselPartenaires from '../components/CarouselPartenaires'

export default function Home() {
  return (
    <main>
      <div id="OFFRE_INT">
        <div className="text-content">
          <h1>Votre partenaire de confiance pour trouver le bien qui vous ressemble !</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <Link href="/annonces" className="OFFRE_INT_AnnoncesButton">
            voir les annonces
          </Link>
        </div>
        <Image 
          src="/Img/ACCUEIL_MainOffre.png"
          alt="Description de l'image"
          width={500}
          height={300}
          priority
        />
      </div>

      <div id="APROPOS_Container">
        {/* A propos content */}
      </div>

      <CarouselPartenaires />
    </main>
  )
}