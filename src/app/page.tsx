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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus vestibulum purus, a maximus mauris tempus ac.
            In nec mauris ut quam molestie maximus. Praesent venenatis gravida urna, eget eleifend ante lobortis id. Proin elementum vitae sapien at finibus.
            Mauris nec ex arcu. Praesent et magna bibendum, rutrum nulla eu, ultrices nisl.
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
          <h1>Un savoir-faire reconnu et une approche sur-mesure !</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus vestibulum purus, a maximus mauris tempus ac.
            In nec mauris ut quam molestie maximus. Praesent venenatis gravida urna, eget eleifend ante lobortis id. Proin elementum vitae sapien at finibus.
            Mauris nec ex arcu. Praesent et magna bibendum, rutrum nulla eu, ultrices nisl. Aenean tincidunt eu quam ut tristique.
            Morbi dolor felis, dignissim vitae justo ac, placerat vulputate nisl. Donec nibh mi, facilisis a faucibus id, facilisis sit amet diam.
            In nec erat malesuada, sagittis felis a, commodo metus. Proin sed felis quis libero posuere fermentum ac et libero.
          </p>

          <div className="APROPOS_xp">
            <div className="xp-square">
              <p>Experts immo&apos; depuis</p>
              <h3>2006</h3>
            </div>
            <div className="xp-square">
              <p>Hôtelier de métier depuis</p>
              <h3>1993</h3>
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