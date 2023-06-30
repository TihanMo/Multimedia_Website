import Image from 'next/image'
import Link from 'next/link'

export default function OfferPage() {
  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex w-9/12 flex-1 p-8 bg-white rounded shadow-lg pt-20">
        <div className="w-1/2 pr-8 relative m-4">
          <Image src="/images/Winterthur_Bus.png" alt="About Us Image" layout="fill" objectFit="cover" className="rounded" />
        </div>

        <div className="w-1/2 text-center">
          <h1 className="text-6xl font-bold mt-6">Auto</h1>

          <p className="mt-6 text-2xl leading-relaxed">
            Busfahren bietet Kostenersparnis, Umweltfreundlichkeit und Bequemlichkeit. Es ist ein sicheres Transportmittel und ermöglicht stressfreies Reisen. Zudem fördert es soziale Interaktionen und reduziert den Verkehr. Busse sind oft barrierefrei und tragen zu einem aktiven Lebensstil bei.
          </p>

          <a className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white p-4 m-4" href="https://www.sbb.ch/de/abos-billette.html">
            Zeige mehr
          </a>
        </div>
      </main>
    </div>
  )
}
