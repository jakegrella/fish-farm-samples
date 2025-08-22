import config from '@/payload.config'
import { getPayload } from 'payload'

import Link from 'next/link'
import { formatPrice } from '@/utils/formatPrice'
import CreateLemonSqueezyScript from './CreateLemonSqueezyScript'

function buyButtonText(price: number) {
  if (price === 0) return 'Free — Get Pack'
  return `${formatPrice(price)} — Buy Now`
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

  return (
    <div className="pack-page">
      <h1>{pack.name}</h1>
      <h2>{pack.short_description}</h2>
      <>
        <Link href={buyLink} className="">
          {buyButtonText(pack.price_cents)}
        </Link>
        <CreateLemonSqueezyScript />
      </>
    </div>
  )
}
