'use client'

import Script from 'next/script'

export default function CreateLemonSqueezyScript() {
  return (
    <Script
      src="https://app.lemonsqueezy.com/js/lemon.js"
      onReady={() => {
        // @ts-expect-error LemonSqueezy global is not typed
        return window.createLemonSqueezy()
      }}
    />
  )
}
