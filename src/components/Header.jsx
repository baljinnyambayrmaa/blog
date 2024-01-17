import Image from "next/image";
import { Search } from "./SearchBar";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";


export const Header = () => {
  return (
    <div className="flex md:text-center justify-between w-[390px] md:mx-auto md:w-[1130px] items-center p-[20px] md:py-8 workSansText">
      <Image width={158} height={36} src="/Logo.png" className="" />
      <div className="md:flex hidden justify-center gap-10">
        <Link href={"/"}>Home</Link>
        <Link href={"blog"}>Blog</Link>
        <Link href={"contact"}>Contact</Link>
      </div>
        <Search />
        <FiMenu size={32} className="md:hidden"/>
    </div>
  );
};
