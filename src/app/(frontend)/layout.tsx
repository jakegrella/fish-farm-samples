import React from 'react'
import './globals.css'
import Image from 'next/image'
import fish from '../../../public/fish-logo.svg'
import Link from 'next/link'
import { ibmPlexSans, mozillaText } from '@/utils/fonts'

export const metadata = {
  description: 'Unique and highly specific loops and one shots.',
  title: 'Fish Farm Samples',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${ibmPlexSans.className} p-4 flex flex-col`}>
        <header className="flex justify-center mb-10 md:mb-20">
          <Link href="/">
            <Image src={fish} alt="Fish Farm Samples logo" width={32} />
          </Link>
        </header>
        <main className="grow">{children}</main>
        <footer className="uppercase">
          <span className={`${mozillaText.className} text-gray-500 tracking-tight text-xs`}>
            © {new Date().getFullYear()} Fish Farm Samples.
          </span>
        </footer>
      </body>
    </html>
  )
}
