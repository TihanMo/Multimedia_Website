import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import OfferCard from './offers/OfferCard'

export default function Home() {
  return (
    <div>
      <section className="relative h-screen">
        <Head>
          <title>Komm An!</title>
        </Head>

        <div className="absolute inset-0 overflow-hidden">
          <Image src="/images/background.jpg" fill={true} style={{objectFit:"cover"}} alt="Background" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h1 className="text-6xl mb-4">Wilkommen zu Komm An!</h1>
          <Link className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white" href="#offers">
            Zeige mehr
          </Link>
        </div>
      </section>

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
  )
}