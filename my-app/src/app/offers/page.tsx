import OfferCard from './OfferCard'

export default function page() {
  return (
    <div>
      <div>
        <h1 className="text-6xl mb-4 p-4 m-4">Angebote</h1>
        <section id="offers" className="h-screen bg-gray-100 flex flex-wrap justify-center items-center px-4 md:px-0">
          <OfferCard title="Taxi" imageUrl="/images/Taxi.jpg" imageAlt="Taxi" />
          <OfferCard title="Fernbus" imageUrl="/images/Fernbus.jpg" imageAlt="Fernbus" />
          <OfferCard title="Auto" imageUrl="/images/Mercedes2.JPG" imageAlt="Strasse" />
          <OfferCard title="Zug" imageUrl="/images/Gleis2.JPG" imageAlt="Gleis" />
          <OfferCard title="Flugzeug" imageUrl="/images/Plane.png" imageAlt="Flugzeug" />
          <OfferCard title="E-Scooter" imageUrl="/images/e-scooter.jpg" imageAlt="E-Scooter" />
          <OfferCard title="Fahrrad" imageUrl="/images/velo.jpg" imageAlt="Fahrrad" />
          <OfferCard title="Bus" imageUrl="/images/Winterthur_Bus.png" imageAlt="Bus" />
        </section>
      </div>
    </div>
  )
}
