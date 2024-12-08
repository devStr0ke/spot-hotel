import CarouselAnnonces from '@/components/CarouselAnnonces'

const hotels = [
  {
    id: 1,
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
  // Add more restaurants...
]

const terrains = [
  {
    id: 1,
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