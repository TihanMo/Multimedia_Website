import Head from 'next/head'

export default function page() {
    return (
      <div className="max-w-xl mx-auto mt-10 px-4 py-8 bg-white shadow-md">
        <Head>
            <title>Komm An! - Kontakt</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontaktiere uns</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
            <input className="mt-1 block w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" id="name" />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input className="mt-1 block w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="email" id="email" />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="message">Nachricht</label>
            <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" id="message"></textarea>
          </div>
  
          <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Submit</button>
        </form>
      </div>
    )
  }
  
