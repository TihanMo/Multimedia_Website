import Image from 'next/image'
import Link from 'next/link'

export default function OfferPage() {

  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-gray-100">
    <main className="flex w-9/12 flex-1 p-8 bg-white rounded shadow-lg pt-20">
      <div className="w-1/2 pr-8 relative m-4">
        <Image src="/images/velo.jpg" alt="About Us Image" layout="fill" objectFit="cover" className="rounded" />
      </div>

      <div className="w-1/2 text-center">
        <h1 className="text-6xl font-bold mt-6">
            Auto
        </h1>

        <p className="mt-6 text-2xl leading-relaxed">
        Fahrradfahren bietet eine Vielzahl von Vorteilen. Es ist eine gesunde und umweltfreundliche Transportmethode, die die Fitness fördert und zur Reduzierung der Luftverschmutzung beiträgt. Fahrradfahren ist kostengünstig und spart Geld für Kraftstoff, Versicherungen und Parkgebühren. Mit dem Fahrrad kann man flexibel durch den Verkehr navigieren und oft schneller vorankommen als mit dem Auto. Es reduziert Stress und bietet die Möglichkeit, die Umgebung zu erkunden und neue Orte zu entdecken. Fahrradfahren fördert soziale Interaktionen, da man gemeinsam mit anderen radeln oder an Radveranstaltungen teilnehmen kann. Parkmöglichkeiten sind in der Regel leicht zu finden, und das Fahrrad ermöglicht eine enge Verbindung zur Natur. Nicht zu vergessen ist der Spaßfaktor, da Fahrradfahren Freude und ein Gefühl der Freiheit vermittelt. Es ist jedoch wichtig, stets die Verkehrsregeln zu beachten, auf die eigene Sicherheit zu achten und angemessene Schutzmaßnahmen zu ergreifen.
        </p>

        <Link className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white p-4 m-4" href="https://fahrradbaustolz.ch/de/blog">
            Zeige mehr
        </Link>

      </div>
    </main>
  </div>
  )
}
