import Script from 'next/script'
import { Fira_Sans } from 'next/font/google'
import './globals.css'

//* font
const Fira = Fira_Sans({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  style: ['italic', 'normal']

})
// * Metadata - head tag
export const metadata = {
  title: 'Best of Python',
  description: 'Find out what\' trending, or get inspired by open source projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={Fira.className}>
      <body>{children}</body>
    </html>
  )
}
