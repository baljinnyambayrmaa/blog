import Image from "next/image";
import { useRouter } from "next/router";
export const Trending = (props) => {
  const { imgsrc="",
     text="" ,
    title="",
    articleID = "",} = props;
  const router= useRouter();
  const handeCLick= () => {
    router.push()
  }
  return (
    <div className="relative w-[289px] h-fit bg-black">

          <Image src={imgsrc} width={289} height={320}  className="h-[320px]" />
  
        <div className="w-[230px] h-[120px] absolute bottom-5 left-8 gap-[16px] flex flex-col">
            <p className="px-[10px] bg-[#4B6BFB] w-[97px]  text-white rounded-xl text-[14px]">
                Technology
            </p>
            <p className="text-[18px] workSansText text-white">
                {text}
            </p>
        </div>
    </div>
  );
};
