import Image from 'next/image'
import Link from 'next/link'
import CarouselPartenaires from '@/components/CarouselPartenaires/CarouselPartenaires'

export default function Home() {
  return (
    <main className="accueil-page">
      {/* OFFRE_INT Section */}
      <div id="OFFRE_INT">
        <div className="text-content">
          <h1>Votre partenaire de confiance pour trouver le bien qui vous ressemble !</h1>
          <p>
          Chez Spot Hotel, nous mettons notre expertise de l'hôtellerie et de l'immobilier au service de vos projets. 
          Spécialisés dans les biens de prestige, nous vous accompagnons avec une approche personnalisée et humaine. 
          Que vous cherchiez à investir, vendre ou dénicher l'adresse parfaite, nous sommes là pour transformer vos 
          ambitions en réalité.
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

      {/* APROPOS Section */}
      <div id="APROPOS_Container">
        <Image 
          src="/Img/ACCUEIL_APropos.png"
          alt="À propos"
          width={500}
          height={300}
          priority
        />
        <div className="text-content">
          <h1 className='APROPOS_h1'>Un savoir-faire reconnu et une approche sur-mesure !</h1>
          <p className='APROPOS_p'>
          Avec des décennies d'expérience dans l'hôtellerie et l'immobilier, nous mettons un point d'honneur à 
          comprendre vos besoins. Chaque projet est une aventure que nous abordons avec rigueur et passion, 
          en vous proposant des solutions adaptées à vos ambitions. Grâce à notre réseau et notre expertise, 
          nous facilitons chaque étape pour faire de votre investissement une réussite sur-mesure.
          </p>

          <div className="APROPOS_xp">
            <div className="xp-square">
              <p>Experts immo&apos; depuis</p>
              <h3>2004</h3>
            </div>
            <div className="xp-square">
              <p>d'expérience dans l'hôtellerie</p>
              <h3>40 ans</h3>
            </div>
            <div className="xp-square">
              <p>Collaborateurs</p>
              <h3>+500</h3>
            </div>
          </div>
        </div>
      </div>

      {/* PARTENAIRES Section */}
      <div className="Acc_carousel-container" id="PARTENAIRES_Container">
        <h2>Ils nous font confiance :</h2>
        <CarouselPartenaires />
      </div>
    </main>
  )
}