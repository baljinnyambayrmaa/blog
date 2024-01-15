
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { News } from '@/components/News'
import { Content } from 'next/font/google'
import { Trending } from '@/components/Trending'
import { AllBlog } from '@/components/AllBlog'
import { Footer } from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className="flex flex-col gap-[100px]">
        <Header/>
        <News/>
        <AllBlog/>
        <Footer/>
      </div>

  )
}
