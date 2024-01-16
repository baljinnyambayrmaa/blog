import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-slate-100 flex justify-center workSansText">
      <div className="flex py-[64px] align-center flex-col gap-[30px] md:gap-[25px] ">
        <div className="flex md:flex gap-[30px] justify-center-between w-full md:w-[1215px]">
          <div className="flex flex-col w-[289px] gap-6">
            <div className=" hidden md:flex md:w-[289px] flex-col gap-[12px]">
              <p className="text-black size-[18px]">About</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="hidden md:flex flex-col">
              <p>Email : info@jstemplate.net</p>
              <p>Phone : 880 123 456 789</p>
            </div>
          </div>
          <div className="md:flex flex-col hidden text-center w-full md:w-[591px]">
            <p>Home</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
          <div className="flex justify-center gap-[20px] w-full ">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
        <div className="flex gap-14 justify-center">
          <div className="flex">
            <Image width={48} height={48} src="/Logo1.png" />
            <div>
              <div className="flex">
                <p>Meta</p>
                <p>BLog</p>
              </div>
              <p>© All Rights Reserved.</p>
            </div>
          </div>
          <div className="hidden md:flex gap-4 w-[921px] justify-end">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
