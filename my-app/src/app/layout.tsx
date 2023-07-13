import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Komm An!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col h-full`}>
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between">
                <div className="flex space-x-7">
                  <div>
                    <a href="/" className="flex items-center py-4 px-2">
                      <Image src="/images/Logo.jpg" alt="Logo" width={50} height={50} />
                      <span className="font-semibold text-gray-500 text-lg p-4">Komm An!</span>
                    </a>
                  </div>

                  <div className="hidden md:flex items-center space-x-1">
                    <a href="/" className="py-4 px-2 text-gray-500 font-semibold">Home</a>
                    <a href="/offers" className="py-4 px-2 text-gray-500 font-semibold">Angebote</a>
                    <a href="/about" className="py-4 px-2 text-gray-500 font-semibold">Über Uns</a>
                    <a href="/contact" className="py-4 px-2 text-gray-500 font-semibold">Kontakt</a>
                    <a href="/legal" className="py-4 px-2 text-gray-500 font-semibold">Rechtliches</a>
                  </div>
                </div>
              </div>
            </div>
        </nav>
        <div className="flex-grow">
          {children}
        </div>
        <footer className="w-full py-4 bg-blue-600 text-white text-center text-xs">
          <p>
            Komm An! | Tangensstrasse 86 | 8000 Zürich | Schweiz | <a href="mailto:example@mail.com" className="underline hover:text-blue-300">example@mail.com</a> | +41 123 456 78 90
          </p>
        </footer>
      </body>
    </html>
  )
}