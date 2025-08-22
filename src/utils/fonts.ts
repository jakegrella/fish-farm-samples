import { IBM_Plex_Sans, Mozilla_Text } from 'next/font/google'

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

export const mozillaText = Mozilla_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mozilla-text',
  display: 'swap',
})
