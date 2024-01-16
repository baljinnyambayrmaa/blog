import Image from "next/image";
import { TrendingData } from "./TrendingData";
export const Trending = (props) => {
  const { imgsrc, text } = props;
  return (
    <div className="relative w-[289px]">
        <Image src={imgsrc} width={289} height={320} />
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
