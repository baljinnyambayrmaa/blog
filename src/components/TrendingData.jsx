import Image from "next/image"
import { Trending } from "./Trending"
export const TrendingData=() => {
    const Cards=[
        {
            imgsrc:"/Mountain.png",
            text:"The Impact of Technology on the Workplace: How Technology is Changing",
        },
        {
            imgsrc:"/Mountain.png",
            text:"The Impact of Technology on the Workplace: How Technology is Changing"
        },
        {
            imgsrc:"/Mountain.png",
            text:"The Impact of Technology on the Workplace: How Technology is Changing"
        },
        {
            imgsrc:"/Mountain.png",
            text:"The Impact of Technology on the Workplace: How Technology is Changing"
        },
    ]
    return (
        
            <div className="flex flex-col mx-auto md:w-[1231px] gap-[32px]">
                <p className="text-[24px] workSansText">Trending</p>
                <div className="w-full justify-between md:flex">
                    {Cards.map((el, i)=>{
                            return (<Trending 
                                imgsrc={el.imgsrc}
                                text={el.text}
                            />)
                        })}
                </div>

            </div>
        

         )
}







