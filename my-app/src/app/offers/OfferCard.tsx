import Link from 'next/link'
import Image from 'next/image'

type OfferCardProps = {
  title: string,
  imageUrl: string,
  imageAlt: string,
}

const OfferCard = ({ title, imageUrl, imageAlt }: OfferCardProps) => {
  return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <Link href={`offers/${title}`}>
            <div className="border rounded shadow hover:shadow-lg overflow-hidden">
              <div className="relative h-60">
                <Image src={imageUrl} alt={imageAlt} layout='fill' objectFit='cover' />
              </div>
              <h2 className="text-center text-xl p-4">{title}</h2>
            </div>
          </Link>
        </div>
  )
}

export default OfferCard

