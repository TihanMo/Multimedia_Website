import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="#" className="flex items-center py-4 px-2">
                  <Image src="/logo.png" alt="Logo" width={50} height={50} />
                  <span className="font-semibold text-gray-500 text-lg">Komm An!</span>
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold">Home</a>
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold">About</a>
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold">Services</a>
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold">Contact</a>
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-screen">
        <Head>
          <title>Komm An!</title>
        </Head>

        <div className="absolute inset-0 overflow-hidden">
          <Image src="/background.jpg" fill={true} style={{objectFit:"cover"}} alt="Background" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl mb-4">Wilkommen zu Komm An!</h1>
          <Link href="#more">
            <a className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white">Zeige mehr</a>
          </Link>
        </div>
      </section>

      <section id="more" className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl mb-4">More Content</h2>
          <p className="text-lg">Here is some more content. Feel free to replace this with whatever you need.</p>
        </div>
      </section>
    </div>
  )
}
