import Image from 'next/image'
import Link from 'next/link'

export default function OfferPage() {

  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-gray-100">
    <main className="flex w-9/12 flex-1 p-8 bg-white rounded shadow-lg pt-20">
      <div className="w-1/2 pr-8 relative m-4">
        <Image src="/images/Gleis2.JPG" alt="About Us Image" layout="fill" objectFit="cover" className="rounded" />
      </div>

      <div className="w-1/2 text-center">
        <h1 className="text-6xl font-bold mt-6">
            Zug
        </h1>

        <p className="mt-6 text-2xl leading-relaxed">
        Züge sind eine bevorzugte Transportoption für viele Menschen, da sie eine Reihe von Vorteilen bieten. Mit ihrem Komfort und der Möglichkeit, sich während der Fahrt frei zu bewegen, ermöglichen Züge eine entspannte Reise. Sie sind in der Regel mit bequemen Sitzen, ausreichend Beinfreiheit und oft auch WLAN-Verbindungen ausgestattet. Züge sind auch für ihre Effizienz bekannt, da sie einen festen Fahrplan haben und in der Regel pünktlich fahren. Dies erleichtert es den Reisenden, ihre Zeit besser zu planen und Verbindungen zu anderen Verkehrsmitteln zu erreichen. Ein weiterer Vorteil von Zugreisen ist ihre Umweltfreundlichkeit. Im Vergleich zu Autos oder Flugzeugen verursachen Züge weniger CO2-Emissionen und tragen zur Reduzierung der Luftverschmutzung bei. Sie sind eine nachhaltige Option für umweltbewusste Reisende. Züge bieten auch eine große Kapazität und können eine große Anzahl von Passagieren befördern. Dies macht sie besonders effizient für Pendler- und Fernverkehrsverbindungen. Darüber hinaus ermöglichen Zugreisen oft einen Panoramablick auf die vorbeiziehende Landschaft und bieten eine angenehme Möglichkeit, die Reisezeit zu genießen. Mit ihren bequemen Verbindungen zu anderen Verkehrsmitteln erleichtern Züge den nahtlosen Übergang zu anderen Orten und Zielen. Die Sicherheit der Passagiere ist ebenfalls ein wichtiger Aspekt, da Züge strengen Sicherheitsstandards unterliegen und regelmäßig gewartet werden. Insgesamt bieten Zugreisen eine komfortable, zuverlässige und umweltfreundliche Option für Reisende und ermöglichen es ihnen, die Fahrt zu genießen und ihre Ziele effizient zu erreichen.        </p>

        <Link className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white p-4 m-4" href="https://www.sbb.ch/de/abos-billette.html">
            Zeige mehr
        </Link>

      </div>
    </main>
  </div>
  )
}
