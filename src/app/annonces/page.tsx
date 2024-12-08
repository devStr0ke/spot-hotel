import CarouselAnnonces from '@/components/CarouselAnnonces'

const hotels = [
  {
    id: 1,
    image: '/Img/ANNONCES_Hotel001.png',
    title: 'Nom du lieu',
    description: 'Courte description du lieu'
  },
  {
    id: 2,
    image: '/Img/ANNONCES_Hotel002.png',
    title: 'Nom du lieu',
    description: 'Courte description du lieu'
  },
  {
    id: 3,
    image: '/Img/ANNONCES_Hotel003.png',
    title: 'Nom du lieu',
    description: 'Courte description du lieu'
  },
  {
    id: 4,
    image: '/Img/ANNONCES_Hotel004.png',
    title: 'Nom du lieu',
    description: 'Courte description du lieu'
  },
  {
    id: 5,
    image: '/Img/ANNONCES_Hotel001.png',
    title: 'Nom du lieu',
    description: 'Courte description du lieu'
  },
  // Add more hotels...
]

const restaurants = [
  {
    id: 1,
    image: '/Img/ANNONCES_Restau001.png',
    title: 'Nom du lieu',
    description: 'Courte description du lieu'
  },
  {
    id: 2,
    image: '/Img/ANNONCES_Restau002.png',
    title: 'Nom du lieu',
    description: 'Courte description du lieu'
  },
  {
    id: 3,
    image: '/Img/ANNONCES_Restau003.png',
    title: 'Nom du lieu',
    description: 'Courte description du lieu'
  },
  {
    id: 4,
    image: '/Img/ANNONCES_Restau004.png',
    title: 'Nom du lieu',
    description: 'Courte description du lieu'
  },
  {
    id: 5,
    image: '/Img/ANNONCES_Restau001.png',
    title: 'Nom du lieu',
    description: 'Courte description du lieu'
  },
  // Add more restaurants...
]

const terrains = [
  {
    id: 1,
    image: '/Img/ANNONCES_Terrain001.png',
    title: 'Nom du lieu',
    description: 'Courte description du lieu'
  },
  {
    id: 2,
    image: '/Img/ANNONCES_Terrain002.png',
    title: 'Nom du lieu',
    description: 'Courte description du lieu'
  },
  {
    id: 3,
    image: '/Img/ANNONCES_Terrain003.png',
    title: 'Nom du lieu',
    description: 'Courte description du lieu'
  },
  {
    id: 4,
    image: '/Img/ANNONCES_Terrain004.png',
    title: 'Nom du lieu',
    description: 'Courte description du lieu'
  },
  {
    id: 5,
    image: '/Img/ANNONCES_Terrain001.png',
    title: 'Nom du lieu',
    description: 'Courte description du lieu'
  },
  // Add more terrains...
]

export default function Annonces() {
  return (
    <main>
      <div className="section-navigation">
        <h2>Annonces</h2>
        <div className="section-links">
          <a href="#section-hotel">Hôtels</a>
          <a href="#section-restaurant">Restaurants</a>
          <a href="#section-terrain">Terrains</a>
        </div>
      </div>

      <CarouselAnnonces type="hotel" items={hotels} />
      <CarouselAnnonces type="restaurant" items={restaurants} />
      <CarouselAnnonces type="terrain" items={terrains} />
    </main>
  )
}