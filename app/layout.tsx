import './global.css'
import { ReactNode } from 'react'

// The two typefaces load from Google Fonts at view time, not at build time: a build then
// fetches nothing and cannot fail on a cold cache. The families are named in global.css.
const FONTS =
  'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Source+Serif+4:wght@400;600&display=swap'

export const metadata = {
  title: 'OneMynd | Agents that do the work, and connect the departments.',
  description:
    'One agent per department, from enquiry to cash. They read the unstructured, get the task done against your records, hand it to the next desk, and get smarter as they work.',
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
