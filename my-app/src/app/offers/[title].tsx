import { useRouter } from 'next/router'
import Image from 'next/image'

export default function OfferPage() {
  const router = useRouter()
  const { title } = router.query

  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-gray-100">
    <main className="flex w-9/12 flex-1 p-8 bg-white rounded shadow-lg pt-20">
      <div className="w-1/2 pr-8 relative m-4">
        <Image src="/images/Strasse.jpg" alt="About Us Image" layout="fill" objectFit="cover" className="rounded" />
      </div>

      <div className="w-1/2 text-center">
        <h1 className="text-6xl font-bold mt-6">
          {title}
        </h1>

        <p className="mt-6 text-2xl leading-relaxed">
        In diesem Abschnitt möchte ich meine Idee für die Firma vorstellen, die ich im Rahmen des Multimedia Website Auftrags realisieren konnte. Meine Idee ist es, den öffentlichen Verkehr der Schweiz zu präsentieren, da es unzählige Möglichkeiten gibt, in der Schweiz von einem Ort zum anderen zu gelangen.
        </p>

        <p className="mt-6 text-2xl leading-relaxed">
        Ich werde verschiedene Angebote von unterschiedlichen ÖV-Anbietern zusammenfassen und auf einer modernen Webseite präsentieren. Die Bilder für diese Webseite werde ich selbst aufnehmen und mit Photoshop bearbeiten. Der Name dieser Firma lautet Komm An!.
        </p>

        <p className="mt-6 text-2xl leading-relaxed">
        Komm An! ist mehr als nur ein Unternehmensname - er repräsentiert unsere Mission, den öffentlichen Verkehr der Schweiz für jeden zugänglich und verständlich zu machen. Unsere Webseite soll eine zentrale Plattform sein, auf der Nutzer alles finden können, was sie für ihre Reiseplanung benötigen, von Fahrplänen über Preise bis hin zu Sonderangeboten. Mit Komm An! wird die Planung Ihrer Reise so einfach wie nie zuvor.
        </p>
      </div>
    </main>
  </div>
  )
}
