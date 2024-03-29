import Image from "next/image"
import { useRouter } from "next/router";
export const AllBlog = (props) => {
    const {
        img="",
         text="Technology",
         title="",
         date="",
        articleID="",
        }= props;
    const router = useRouter();
    const handeClick=()=> {
        router.push('/blog/${articleID}');
    };

    return (
        <div className="flex workSansText">
            <div className="flex flex-col md:flex-wrap w-[326px] md:w-[392px] gap-4 p-4 border rounded-2xl">
                <Image width={360} height={240} src={img} className=""/>
                <div className="w-full flex">
                    <p className="text-[#4B6BFB] rounded-xl bg-[#4B6BFB0D] px-[10px] py-[2px] size-[14px}">{text}</p>
                </div>
                <div className="w-full flex">
                    <p className=" text-[181A2A]">{title}</p>
                </div>
                <div>
                    <p>{date}</p>
                </div>
            </div>
        </div>
        
    )
}