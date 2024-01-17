
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { News } from '@/components/News'
import { TrendingData } from '@/components/TrendingData'
import { BlogData } from '@/components/BlogData'
import { Footer } from '@/components/Footer'
import Carousel from '@/components/Caruosel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className="flex w-[326px] md:w-full flex-col gap-[100px]">
        <Header/>
        <News/>
        <TrendingData/>
        <BlogData/>
        <Footer/>
      </div>
  )
}
