import { Input } from "postcss"
import { CiSearch } from "react-icons/ci";

export const Search = () => {
    return (
        <div className="md:flex hidden align-center p-2 items-center bg-gray-100 rounded-md ">
            <input type="text" placeholder="search" className="bg-gray-100"/>
            <CiSearch width={16} height={16}/>
        </div>
    )
}