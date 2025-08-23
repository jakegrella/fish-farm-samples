import config from '@/payload.config'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import { mozillaText } from '@/utils/fonts'
import { formatPrice } from '@/utils/formatPrice'
import CreateLemonSqueezyScript from './CreateLemonSqueezyScript'

function buyButtonText(price: number) {
  if (price === 0) return 'Free — Get Pack'
  return `${formatPrice(price)} — BUY NOW`
}

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

  const buyLink = `${pack.buy_url}?embed=1&media=0&logo=0&desc=0`

  if (typeof pack.front_cover === 'number' || typeof pack.preview_audio === 'number') return null

  return (
    <div className="pack-page flex flex-col gap-4 max-w-2xl mx-auto">
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
      <h1 className="!font-bold">{pack.name}</h1>
      <h2>{pack.short_description}</h2>
      <>
        <Link
          href={buyLink}
          className={`${mozillaText.className} border w-fit px-2 py-1 hover:bg-gray-100`}
        >
          {buyButtonText(pack.price_cents)}
        </Link>
        <CreateLemonSqueezyScript />
      </>
      <audio
        src={pack.preview_audio.url!}
        controls
        controlsList="nodownload nofullscreen"
        className="w-full mt-4"
        preload="auto"
      />
      <p>{pack.long_description}</p>
    </div>
  )
}
