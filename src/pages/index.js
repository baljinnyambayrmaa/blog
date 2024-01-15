
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { News } from '@/components/News'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className='flex flex-col'>
        <Header/>
        <News/>
      </div>

  )
}
