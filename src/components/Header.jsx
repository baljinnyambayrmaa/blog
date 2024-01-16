import Image from "next/image";
import { Search } from "./SearchBar";
import { FiMenu } from "react-icons/fi";


export const Header = () => {
  return (
    <div className="flex md:text-center justify-between w-[390px] md:mx-auto md:w-[1130px] items-center p-[20px] md:py-8 workSansText">
      <Image width={158} height={36} src="/Logo.png" className="" />
      <div className="md:flex hidden justify-center gap-10">
        <h1>Home</h1>
        <h1>Blog</h1>
        <h1>Contact</h1>
      </div>
        <Search />
        <FiMenu size={32} className="md:hidden"/>
    </div>
  );
};
