import { Header } from "./Header"
import { Footer } from "./Footer"
import { Input } from "postcss"
export const ContactUs=() => {
    return (
        <div>
            <div className="w-full flex justify-center">
                <div className="md:w-[895px] md:h-[895px] flex flex-col justify-center items-center gap-[30px]  max-auto">
                    <div className="flex-col flex items-center gap-[20px]  mx-auto">
                        <div className="flex-col flex gap-[20px] w-[624px]">
                            <p className="workSansText text-[36px]">Contact Us</p>
                            <p className="text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                        <div className="flex gap-[50px]">
                            <div className="border rounded-md p-[16px] flex flex-col gap-[10px] w-[294px] h-[133px]">
                                <p className="workSansText text-[24px]">Address</p>
                                <p className="text-[18px]">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                            </div>
                            <div className="border rounded-md p-[16px] flex flex-col gap-[10px] w-[294px] h-[133px]">
                                <p className="text-[24px] workSansText">Contact</p>
                                <p className="text-[18px]">313-332-8662
                                info@email.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F6F6F7] pl-[35px] pt-[29px] pr-[130px] pb-[26px] flex flex-col gap-[24px] ">
                        <p className="text-[18px] workSansText">Leave a Message</p>
                        <div className="flex flex-col w-[478px] h-[317px] justify-between">
                            <div className="flex justify-between">
                                <input type="text" placeholder="Your Name" className="md:w-[225px] md:h-[38px] rounded-ml"/>
                                <input type="email" placeholder="Your Email" className="md:w-[225px] md:h-[38px]  rounded-ml"/>
                            </div>
                            <div className="flex flex-col gap-[25px]">
                                <input type="text" placeholder="Subject"  className=" rounded-ml h-[35px]"/>
                                <input type="text" placeholder="Write a message" className="md:w-[478px] md:h-[134px]  rounded-ml" />
                            </div>
                            <div className="bg-[#4B6BFB] w-[130px] h-[40px] px-4 py-[10px] text-[14px] rounded-md text-white  rounded-ml">
                                <button>Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}