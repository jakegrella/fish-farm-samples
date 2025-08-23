import config from '@/payload.config'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import React from 'react'
import { formatPrice } from '@/utils/formatPrice'
import './globals.css'
import { mozillaText } from '@/utils/fonts'

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
            <Link
              href={`/packs/${pack.slug}`}
              key={pack.slug}
              className="flex gap-2 items-stretch min-h-[100px] md:min-h-[200px] hover:bg-gray-100"
            >
              <div className="relative flex-shrink-0 h-[100px] w-[100px] md:h-[200px] md:w-[200px]">
                <Image
                  src={pack.front_cover.url!}
                  alt={`Cover art of sample pack ${pack.name}`}
                  height={200}
                  width={200}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <div>
                  <h2 className="text-pretty !font-bold">{pack.name}</h2>
                  <h3 className="break-words text-pretty text-xs">{pack.short_description}</h3>
                </div>
                <span className={`${mozillaText.className} text-gray-500 tracking-tight text-xs`}>
                  {formatPrice(pack.price_cents)}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
