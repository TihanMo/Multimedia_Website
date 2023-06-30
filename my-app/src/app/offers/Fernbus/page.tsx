import Image from 'next/image'
import Link from 'next/link'

export default function OfferPage() {

  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-gray-100">
    <main className="flex w-9/12 flex-1 p-8 bg-white rounded shadow-lg pt-20">
      <div className="w-1/2 pr-8 relative m-4">
        <Image src="/images/Fernbus.jpg" alt="About Us Image" layout="fill" objectFit="cover" className="rounded" />
      </div>

      <div className="w-1/2 text-center">
        <h1 className="text-6xl font-bold mt-6">
            Fernbus
        </h1>

        <p className="mt-6 text-2xl leading-relaxed">
        Fernbusse bieten eine Vielzahl von Vorteilen für Reisende. Sie sind eine kostengünstige Option, insbesondere für lange Strecken, da die Fahrpreise oft niedriger sind als bei anderen Verkehrsmitteln. Die Flexibilität der Abfahrtszeiten und Routen ermöglicht es den Reisenden, den Fahrplan nach ihren Bedürfnissen anzupassen. Fernbusse bieten auch Komfortmerkmale wie bequeme Sitze, Klimaanlage und WLAN, um eine angenehme Reiseerfahrung zu gewährleisten. Ein weiterer Vorteil ist die Umweltfreundlichkeit, da Fernbusse in der Regel einen geringeren CO2-Ausstoß haben als andere Transportmittel. Das Reisen mit Fernbussen bietet auch die Möglichkeit, neue Menschen kennenzulernen und ein gemeinschaftliches Erlebnis zu schaffen. Die zentrale Lage der Haltestellen erleichtert den Zugang zu Zielen und den Umstieg auf andere Verkehrsmittel. Auf der Reise kann man die Landschaft und Sehenswürdigkeiten entlang der Route genießen. Fernbusse bieten ausreichend Stauraum für Gepäck und sind oft barrierefrei zugänglich. Es ist jedoch wichtig zu beachten, dass die Reisezeit mit Fernbussen länger sein kann und eine rechtzeitige Buchung empfehlenswert ist, um die besten Preise und Sitzplatzoptionen zu erhalten.
        </p>

        <Link className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white p-4 m-4" href="https://www.flixbus.ch/">
            Zeige mehr
        </Link>

      </div>
    </main>
  </div>
  )
}
