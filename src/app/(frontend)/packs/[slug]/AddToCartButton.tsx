'use client'

import { mozillaText } from '@/utils/fonts'
import useCartStore, { CartState } from '@/utils/cartStore'
import { useEffect, useState } from 'react'

export default function AddToCartButton(props: { slug: string }) {
  const { slug } = props
  const cart = useCartStore((state: CartState) => state.cart)
  const updateCart = useCartStore((state: CartState) => state.updateCart)
  const [buttonText, setButtonText] = useState('Add to Cart')
  const [buttonDisabled, setButtonDisabled] = useState(false)

  function handleAddPackToCart() {
    if (!cart.includes(slug)) updateCart([...cart, slug])
  }

  useEffect(() => {
    if (cart.includes(slug)) {
      setButtonText('In Cart')
      setButtonDisabled(true)
    }
  }, [cart, slug])

  return (
    <button
      className={`${mozillaText.className} bg-black !text-white w-fit px-2 py-1 hover:bg-gray-700 hover:cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300`}
      onClick={handleAddPackToCart}
      disabled={buttonDisabled}
    >
      {buttonText}
    </button>
  )
}
