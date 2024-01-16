
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { News } from '@/components/News'
import { TrendingData } from '@/components/TrendingData'
import { BlogData } from '@/components/BlogData'
import { Footer } from '@/components/Footer'
import { Detail } from '@/components/Detail'
import { ContactUs } from '@/components/ContactUs'
import { PageNotFound } from '@/components/PageNotFound'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className="flex w-[326px] md:w-full flex-col gap-[100px]">
        <Header/>
        <News/>
        <TrendingData/>
        <BlogData/>
        <Footer/>
        <PageNotFound/>
      </div>

  )
}
