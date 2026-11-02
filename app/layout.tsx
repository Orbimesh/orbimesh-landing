import './global.css'
import { ReactNode } from 'react'

// The two typefaces load from Google Fonts at view time, not at build time: a build then
// fetches nothing and cannot fail on a cold cache. The families are named in global.css.
const FONTS =
  'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Source+Serif+4:wght@400;600&display=swap'

export const metadata = {
  title: 'OneMynd | Your systems keep the record. Your people keep the day.',
  description:
    'OneMynd gives the day to department agents. They read what arrives in your inboxes, work the task against your records, and propose. Nothing is written until a person taps.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS} />
      </head>
      <body>{children}</body>
    </html>
  )
}
