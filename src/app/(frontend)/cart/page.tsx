import config from '@/payload.config'
import { getPayload } from 'payload'
import CartItems from './CartItems'

export default async function CartPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const data = await payload.find({
    collection: 'packs',
  })

  return (
    <main>
      <h1 className="mb-8">Cart</h1>
      <CartItems packs={data.docs} />
      <button className="mt-20 bg-black text-white px-4 py-2">Checkout</button>
    </main>
  )
}
