import Image from 'next/image'
import Link from 'next/link'

export default function OfferPage() {

  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-gray-100">
    <main className="flex w-9/12 flex-1 p-8 bg-white rounded shadow-lg pt-20">
      <div className="w-1/2 pr-8 relative m-4">
        <Image src="/images/e-scooter.jpg" alt="About Us Image" layout="fill" objectFit="cover" className="rounded" />
      </div>

      <div className="w-1/2 text-center">
        <h1 className="text-6xl font-bold mt-6">
            E-Scooter
        </h1>

        <p className="mt-6 text-2xl leading-relaxed">
        E-Scooter bieten viele Vorteile, die sie zu einer beliebten Wahl für die Fortbewegung machen. Mit ihrer Flexibilität ermöglichen sie es den Nutzern, schnell von einem Ort zum anderen zu gelangen. Dank ihres elektrischen Antriebs sind sie umweltfreundlich und tragen zur Reduzierung der Luftverschmutzung bei. E-Scooter helfen auch, Zeit zu sparen, da sie inmitten des Verkehrs leicht manövrieren können. Darüber hinaus sind sie in der Regel kostengünstiger im Vergleich zu anderen Verkehrsmitteln. Die Nutzung von E-Scootern fördert auch die körperliche Aktivität, da sie eine aktive Form der Fortbewegung bieten. Sie sind bequem und machen Spaß, und ermöglichen es den Menschen, die Stadt auf unterhaltsame Weise zu erkunden. E-Scooter sind besonders nützlich, um die letzte Meile zu bewältigen und die Lücke zwischen öffentlichen Verkehrsmitteln und dem endgültigen Ziel zu schließen. Es ist jedoch wichtig, die Verkehrsregeln zu beachten, um die Sicherheit aller Verkehrsteilnehmer zu gewährleisten.
        </p>

        <Link className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white p-4 m-4" href="https://www.li.me/">
            Zeige mehr
        </Link>

      </div>
    </main>
  </div>
  )
}
