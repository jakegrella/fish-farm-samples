export function formatPrice(priceCents: number) {
  return priceCents === 0
    ? 'Free'
    : (priceCents / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
}
