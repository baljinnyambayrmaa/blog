import Image from "next/image"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Trending } from "./Trending"
import { data } from "autoprefixer"
export const TrendingData=(props) => {
    const [data, setData]=useState([]);
    const [loader, setLoader]= useState(true);
    console.log(data)
    useEffect(() => {
        const url = "https://dev.to/api/articles?top=10&per_page=10";
        axios
          .get(url)
          .then((res) => {
            setData(res.data);
            setLoader(false);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            setLoader(false);
          });
      }, []);

    const Cards=[
        {
            imgsrc:"/Mountain.png",
            text:"The Impact of Technology on the Workplace: How Technology is Changing",
        },
        {
            imgsrc:"/Mountain.png",
            text:"The Impact of Technology on the Workplace: How Technology is Changing",
        },
        {
            imgsrc:"/Mountain.png",
            text:"The Impact of Technology on the Workplace: How Technology is Changing",
        },
        {
            imgsrc:"/Mountain.png",
            text:"The Impact of Technology on the Workplace: How Technology is Changing",
        },
        {
            imgsrc:"/Mountain.png",
            text:"The Impact of Technology on the Workplace: How Technology is Changing",
        },
        {
            imgsrc:"/Mountain.png",
            text:"The Impact of Technology on the Workplace: How Technology is Changing",
        },
 
    ]
    return (
            <div className="flex flex-col items-start gap-[30px] w-full md:w-[1216px] mx-auto overflow-auto scrollhide">
                <p className="text-[24px] workSansText sticky left-0">Trending</p>
                <div className="flex gap-[30px] px-[20px] ">   
                {loader && <div className="w-full bg-black">Loading...</div>} 
                    {data.map((el, index)=>{
                            return (<Trending 
                                key={index}
                                imgsrc={el.social_image}
                                text={el.title}
                                title={el.title}
                                articleID={el.id}
                            />)
                        })}
                </div>

            </div>
        

         )
}







