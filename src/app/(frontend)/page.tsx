import config from '@/payload.config'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import React from 'react'
import { formatPrice } from '@/utils/formatPrice'
import './globals.css'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const packs = await payload.find({
    collection: 'packs',
    limit: 100,
    depth: 1,
  })

  return (
    <div>
      <div className="flex flex-col gap-4 mx-auto max-w-3xl">
        {packs.docs.map((pack) => {
          if (typeof pack.front_cover === 'number') return null
          return (
            <Link href={`/packs/${pack.slug}`} key={pack.slug} className="flex gap-4">
              <div className="relative h-full aspect-square">
                <Image
                  src={pack.front_cover.url!} // Ensure front_cover is not null
                  alt={`Cover art of sample pack ${pack.name}`}
                  height={200}
                  width={200}
                />
              </div>
              <div>
                <h3>{pack.name}</h3>
                <p>{pack.short_description}</p>
                <h3 className="mt-2">{formatPrice(pack.price_cents)}</h3>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
