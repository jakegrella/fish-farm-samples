import React from 'react'
import './globals.css'
import Image from 'next/image'
import fish from '../../../public/fish-logo.svg'
import Link from 'next/link'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="p-4">
        <main>
          <header className="flex justify-between items-start pb-20">
            <Link href="/">
              <Image src={fish} alt="Fish Farm Samples logo" width={48} />
            </Link>
            <h1 className="uppercase">Fish Farm Samples</h1>
          </header>
          {children}
        </main>
      </body>
    </html>
  )
}
