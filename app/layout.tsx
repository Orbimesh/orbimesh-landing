import './global.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Orbimesh | AI Agent Orchestration',
  description: 'A central brain for business automation.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}