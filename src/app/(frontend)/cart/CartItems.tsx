'use client'

import { Pack } from '@/payload-types'
import useCartStore from '@/utils/cartStore'
import { formatPrice } from '@/utils/formatPrice'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function CartItems(props: { packs: Pack[] }) {
  const { packs } = props

  const cart = useCartStore((state) => state.cart)
  const updateCart = useCartStore((state) => state.updateCart)
  const [packsInCart, setPacksInCart] = useState<Pack[]>([])

  function handleRemovePackFromCart(slug: string) {
    const updatedPacksInCart = packsInCart
      .filter((pack: Pack) => pack.slug !== slug)
      .map((pack: Pack) => pack.slug)
    updateCart(updatedPacksInCart)
  }

  useEffect(() => {
    const filteredPacks = packs.filter((pack) => cart.includes(pack.slug))
    setPacksInCart(filteredPacks)
  }, [packs, cart])

  return packsInCart.length === 0 ? (
    <p>Your cart is empty.</p>
  ) : (
    <ul className="flex flex-col gap-4">
      {packsInCart.map((pack) => {
        if (typeof pack.front_cover === 'number' || typeof pack.preview_audio === 'number')
          return null
        return (
          <li key={pack.slug} className="flex gap-4">
            <div className="relative flex-shrink-0 aspect-square h-[100px] w-[100px]">
              <Image
                src={pack.front_cover.url!}
                alt={`Cover art of sample pack ${pack.name}`}
                fill
                priority
                sizes="(max-width: 640px) 100vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <h1 className="!font-bold">{pack.name}</h1>
              <span>{formatPrice(pack.price_cents)}</span>
              <button className="text-xs" onClick={() => handleRemovePackFromCart(pack.slug)}>
                Remove
              </button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
