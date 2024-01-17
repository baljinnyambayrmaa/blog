import Image from "next/image";
import { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

export const News=() => {
    const images=["/Image.png", "/Mountain.png"]

    const [currentIndex, setCurrentIndex]=useState(0);

    const handelNext= () => {
        setCurrentIndex((prevIndex)=>(prevIndex + 1) % images.length);
    };

    const handePrev=() => {
        setCurrentIndex((prevIndex)=> 
            prevIndex=== 0 ? images.length -1 : prevIndex -1
        );
    };
    return (
        <div className=" hidden md:flex flex-col mx-auto  ">
            <div className="relative">
                <div>
                    <Image 
                    width={1216} 
                    height={600}
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`} />
                </div>
                
                <div className="flex items-center justify-end">
                    <button className="w-10 h-10 border-2 border-slate-300 rounded-[10px] flex items-center justify-center "><GrFormPrevious size={30}/></button>
                    <button className="w-10 h-10 border-2 border-slate-300 rounded-[10px] flex items-center justify-center "> <GrFormNext size={30}/></button>
                </div>
                
                <div className="flex p-10 flex-col bg-white w-[598px] gap-8 absolute bottom-3 left-2 rounded-md">
                    <div className="flex flex-col gap-4 ">
                        <p onClick={handePrev} className="px-[10px] bg-[#4B6BFB] w-[97px]  text-white rounded-xl text-[14px]">Technology</p>
                        <p onClick={handelNext} className="text-[36px] workSansText ">Grid system for better Design User Interface</p>
                    </div>
                    <p className="text-[14] workSansText text-[#97989F]">August 20, 2022</p>
                </div>
            </div>

        </div>
    )
}