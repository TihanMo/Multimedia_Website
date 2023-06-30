import Image from 'next/image'
import Link from 'next/link'

export default function OfferPage() {

  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-gray-100">
    <main className="flex w-9/12 flex-1 p-8 bg-white rounded shadow-lg pt-20">
      <div className="w-1/2 pr-8 relative m-4">
        <Image src="/images/Taxi.jpg" alt="About Us Image" layout="fill" objectFit="cover" className="rounded" />
      </div>

      <div className="w-1/2 text-center">
        <h1 className="text-6xl font-bold mt-6">
          Taxi
        </h1>

        <p className="mt-6 text-2xl leading-relaxed">
          Taxis sind eine bequeme und zuverlässige Option für die Personenbeförderung. Sie stehen jederzeit zur Verfügung und können bequem überall gerufen werden. Mit professionellen Fahrern am Steuer kann man sich darauf verlassen, sicher und schnell ans Ziel zu gelangen. Die Flexibilität bei der Abfahrtszeit und dem Zielort ermöglicht es, die Fahrt individuell anzupassen. Taxis bieten auch Komfort, da sie oft mit klimatisierten Innenräumen und bequemen Sitzen ausgestattet sind. Die Sicherheit der Passagiere steht im Vordergrund, da Taxis den gesetzlichen Vorschriften entsprechen und über Sicherheitseinrichtungen verfügen. Zudem sind Taxis oft eine praktische Wahl für Menschen mit eingeschränkter Mobilität oder bei der Beförderung von Gepäck. Insgesamt bieten Taxis eine stressfreie und angenehme Möglichkeit, sich in der Stadt oder auf Reisen fortzubewegen.
        </p>

        <Link className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white p-4 m-4" href="https://www.taxi444.ch/">
            Zeige mehr
        </Link>

      </div>
    </main>
  </div>
  )
}
