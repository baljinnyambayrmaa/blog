import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { News } from "@/components/News";
import { TrendingData } from "@/components/TrendingData";
import { BlogData } from "@/components/BlogData";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <div className="flex w-[326px] md:w-full flex-col gap-[100px]">
      <Header />
      <News/>
      <TrendingData />
      <BlogData data={data} />
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`https://dev.to/api/articles/`);

  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
