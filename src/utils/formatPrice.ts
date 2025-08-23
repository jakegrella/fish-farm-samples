export function formatPrice(priceCents: number) {
  if (priceCents === 0) return 'FREE'
  // if price is round to the dollar, show without decimals
  const isRoundDollar = priceCents % 100 === 0
  if (isRoundDollar) {
    return `$${priceCents / 100}`
  } else {
    return (priceCents / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  }
}
