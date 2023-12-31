import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/Footer'
import { Inter } from 'next/font/google'
import "./styles.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-slate-950 h-lvh'>
          <NavBar />
          {children}
          <Footer />
        </div>
        </body>
    </html>
  )
}
