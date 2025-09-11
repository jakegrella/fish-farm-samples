import config from '@/payload.config'
import Image from 'next/image'
import { getPayload } from 'payload'
import { formatPrice } from '@/utils/formatPrice'
import AddToCartButton from './AddToCartButton'

export default async function PackPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params

  const { slug } = params

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const data = await payload.find({
    collection: 'packs',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const pack = data.docs[0]

  if (typeof pack.front_cover === 'number' || typeof pack.preview_audio === 'number') return null

  return (
    <div className="pack-page flex flex-col gap-4 max-w-2xl mx-auto">
      <section className="sm:flex sm:gap-4">
        <div className="relative flex-shrink-0 w-full aspect-square sm:h-[200px] sm:w-[200px]">
          <Image
            src={pack.front_cover.url!}
            alt={`Cover art of sample pack ${pack.name}`}
            fill
            priority
            sizes="(max-width: 640px) 100vw, 400px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 text-pretty">
          <h1 className="!font-bold">{pack.name}</h1>
          <span>{formatPrice(pack.price_cents)}</span>
          <h2>{pack.short_description}</h2>
          {/* <>
            <Link
              href={buyLink}
              className={`${mozillaText.className} bg-black !text-white w-fit px-2 py-1 hover:bg-gray-700`}
            >
              Add to Cart
            </Link>
            <CreateLemonSqueezyScript />
          </> */}
          <AddToCartButton slug={slug} />
        </div>
      </section>
      <section>
        <audio
          src={pack.preview_audio.url!}
          controls
          controlsList="nodownload nofullscreen"
          className="w-full mt-4"
          preload="auto"
        />
        <p>{pack.long_description}</p>
      </section>
    </div>
  )
}
