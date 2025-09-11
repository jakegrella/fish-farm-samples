'use client'

import useCartStore, { CartState } from '@/utils/cartStore'
import Link from 'next/link'

export function CartIcon() {
  const cart = useCartStore((state: CartState) => state.cart)

  return (
    <Link href="/cart" className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
        <path d="M17 6c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-2zm-5-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3z" />
      </svg>
      <span className="absolute top-[5px] left-[7px] text-xs !text-white">{cart.length}</span>
    </Link>
  )
}
