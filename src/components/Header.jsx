import Image   from "next/image";  
import { Search } from "./SearchBar";

export const Header=() => {
    return (
            <div className="flex  text-center justify-between w-[390px] mx-auto md:w-[1130px] items-center md:py-8">
                <Image width={158} height={36} src="/Logo.png" className=""/>
                <div className="flex justify-center gap-10">
                    <h1>Home</h1>
                    <h1>Blog</h1>
                    <h1>Contact</h1>
                </div>
                <Search/>
            </div>


    )
}