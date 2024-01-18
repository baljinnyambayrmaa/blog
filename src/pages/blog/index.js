import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogData } from "@/components/BlogData";

export default function Blog({data}) {
    return (
        <div>
            <Header/>
            <BlogData data={data}/>
            <Footer/>
        </div>
    )
};
export const getStaticProps = async () => {
    const response = await fetch(`https://dev.to/api/articles/`);
  
    const data = await response.json();
  
    return {
      props: {
        data,
      },
    };
  };