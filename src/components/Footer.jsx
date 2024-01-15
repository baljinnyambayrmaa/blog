import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer= () => {
    return (
        <div className="flex py-[64px] mx-auto flex-col gap-[25px]">
            <div className="flex gap-[20px]">
                <div  className="flex flex-col w-[289px] gap-6">
                    <div className="flex flex-col gap-[12px]">
                        <p className="text-black size-[18px]">About</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className="flex flex-col">
                        <p>Email : info@jstemplate.net</p>
                        <p>Phone : 880 123 456 789</p>
                    </div>
                </div>
                <div className="flex flex-col text-center w-[591px]">
                    <p>Home</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
                <div className="flex gap-[20px] ">
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaInstagram/>
                    <FaLinkedin/>
                </div>
            </div>
            <div className="flex gap-14 justify-center" >
                <div className="flex">
                    <Image width={48} height={48} src="/Logo1.png"/>
                    <div>
                        <div className="flex">
                            <p>Meta</p>
                            <p>BLog</p>
                        </div>
                        <p>© All Rights Reserved.</p>
                    </div>
                </div>
                <div className="flex gap-4 w-[921px] justify-end">
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
        </div>
    )
}