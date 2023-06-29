import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import OfferCard from './OfferCard'

export default function Home() {
  return (
    <div>
      <section className="relative h-screen">
        <Head>
          <title>Komm An!</title>
        </Head>

        <div className="absolute inset-0 overflow-hidden">
          <Image src="/background.jpg" fill={true} style={{objectFit:"cover"}} alt="Background" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl mb-4">Wilkommen zu Komm An!</h1>
          <Link className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white" href="#more">
            Zeige mehr
          </Link>
        </div>
      </section>

      <section id="offers" className="h-screen bg-gray-100 flex flex-wrap justify-center items-center px-4 md:px-0">
        <OfferCard title="Taxi" imageUrl="/Taxi.jpg" imageAlt="Taxi" />
        <OfferCard title="Fernbus" imageUrl="/Fernbus.jpg" imageAlt="Fernbus" />
        <OfferCard title="Fernbus" imageUrl="/Fernbus.jpg" imageAlt="Fernbus" />
        <OfferCard title="Fernbus" imageUrl="/Fernbus.jpg" imageAlt="Fernbus" />
        <OfferCard title="Fernbus" imageUrl="/Fernbus.jpg" imageAlt="Fernbus" />
        <OfferCard title="Fernbus" imageUrl="/Fernbus.jpg" imageAlt="Fernbus" />
        <OfferCard title="Fernbus" imageUrl="/Fernbus.jpg" imageAlt="Fernbus" />
        <OfferCard title="Fernbus" imageUrl="/Fernbus.jpg" imageAlt="Fernbus" />
      </section>
    </div>
  )
}