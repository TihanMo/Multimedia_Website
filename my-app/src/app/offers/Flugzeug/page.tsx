import Image from 'next/image'
import Link from 'next/link'

export default function OfferPage() {

  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-gray-100">
    <main className="flex w-9/12 flex-1 p-8 bg-white rounded shadow-lg pt-20">
      <div className="w-1/2 pr-8 relative m-4">
        <Image src="/images/Plane.png" alt="About Us Image" layout="fill" objectFit="cover" className="rounded" />
      </div>

      <div className="w-1/2 text-center">
        <h1 className="text-6xl font-bold mt-6">
            Flugzeug
        </h1>

        <p className="mt-6 text-2xl leading-relaxed">
        Autofahren bietet zahlreiche Vorteile, darunter Komfort, Flexibilität und Zeitersparnis. Man kann bequem von einem Ort zum anderen gelangen, die Reiseroute selbst bestimmen und sich unabhängig von Fahrplänen bewegen. Zudem ermöglicht das Auto den Transport von Gegenständen und bietet eine bequeme und private Reisemöglichkeit. Man kann neue Orte entdecken, Kinder und Haustiere sicher transportieren und die Reisezeit effizient planen. Autofahren fördert soziale Interaktionen und bietet berufliche Flexibilität. Dennoch sollten wir auch die Nachteile wie Verkehr, Umweltbelastung und Kosten für Kraftstoff und Wartung im Blick behalten. Es ist wichtig, verantwortungsbewusst zu fahren und umweltfreundliche Alternativen zu prüfen.
        </p>

        <Link className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white p-4 m-4" href="https://www.swiss.com/ch/de/homepage">
            Zeige mehr
        </Link>

      </div>
    </main>
  </div>
  )
}
