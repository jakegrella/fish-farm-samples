import React from 'react'
import './globals.css'
import { ibmPlexSans, mozillaText } from '@/utils/fonts'
import Header from './components/Header'

export const metadata = {
  description: 'Unique and highly specific loops and one shots.',
  title: 'Fish Farm Samples',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${ibmPlexSans.className} p-4 flex flex-col`}>
        <Header />
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
