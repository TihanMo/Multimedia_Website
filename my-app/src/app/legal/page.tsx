import Head from 'next/head'

export default function Legal() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Komm An! - Rechtliches</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full max-w-3xl p-8 mx-auto mt-6 bg-white rounded shadow-md">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-8">
          Rechtliches
        </h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold text-blue-500">Lizenz</h2>
            <p>
              Diese Website ist unter der GPL 3.0 Lizenz lizenziert. Weitere Informationen zur GPL 3.0 Lizenz finden Sie <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800">hier</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-500">Datenschutz</h2>
                <p>
                Bei Komm An! legen wir großen Wert auf den Schutz Ihrer Daten und die Wahrung Ihrer Privatsphäre. Daher möchten wir Sie nachfolgend über den Umgang mit Ihren Daten informieren.
                </p>
                <p>
                In der Regel können Sie unsere Webseite besuchen, ohne dass wir persönliche Daten von Ihnen benötigen. Wir sammeln und verwenden keinerlei persönliche Daten.
                </p>
                <p>
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Sollten wir in Zukunft personenbezogene Daten sammeln (zum Beispiel, wenn Sie sich entscheiden, uns per E-Mail zu kontaktieren), erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                </p>
                <p>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </p>
                <p>
                Sollten wir in der Zukunft Änderungen an dieser Datenschutzerklärung vornehmen, werden wir diese auf dieser Seite aktualisieren. Bitte überprüfen Sie regelmäßig diese Datenschutzerklärung, um sicherzustellen, dass Sie mit den aktuellen Bedingungen einverstanden sind.
                </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-500">Impressum</h2>
            <p>
              Komm An!<br/>
              Tangensstrasse 86<br/>
              8000 Zürich<br/>
              Schweiz<br/>
              <a href="mailto:example@mail.com" className="text-blue-600 underline hover:text-blue-800">example@mail.com</a><br/>
              +41 123 456 78 90
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
