import Image from "next/image";
import { GrPrevious } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

export const News=() => {
    return (
        <div className="flex flex-col mx-auto  ">
            <div className="relative">
                <Image width={1216} height={600} src="/Image.png" />
                <div className="flex p-10 flex-col bg-white w-[598px] gap-8 absolute bottom-3 left-2 rounded-md">
                    <div className="flex flex-col gap-4 ">
                        <p className="px-[10px] bg-[#4B6BFB] w-[97px]  text-white rounded-xl text-[14px]">Technology</p>
                        <p className="text-[36px] ">Grid system for better Design User Interface</p>
                    </div>
                    <p className="text-[14] text-[#97989F]">August 20, 2022</p>
                </div>
            </div>
            <div className="flex items-center justify-end">
                <div className="w-10 h-10 border-2 border-slate-300 rounded-[10px] flex items-center justify-center "><GrFormPrevious size={30}/></div>
                <div className="w-10 h-10 border-2 border-slate-300 rounded-[10px] flex items-center justify-center "> <GrFormNext size={30}/></div>
            </div>
        </div>
    )
}