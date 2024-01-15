import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AllBlog from "./AllBlog";
const Trending_Images = (props) => {
  const { imgsrc, text } = props;
  return (
    <div className="relative  rounded-xl  ">
      <Image
        className="w-[293px] h-[320px] object-scale-down "
        src={imgsrc}
        width={293}
        height={320}
      />
      <div className="w-[230px] h-[120px] gap-[16px] flex flex-col absolute top-[140px] bottom-[28px] left-[20px]">
        <div className="w-[97px] h-[28px] rounded-md bg-[#4B6BFB] flex justify-center items-center text-white">
          <p>Technolgy</p>
        </div>
        <div className="w-[230px] h-[76px]">
          <p className="text-[18px] text-white">{text}</p>
        </div>
      </div>
    </div>
  );
};
const Slides = [
  {
    imgsrc: "/Mountain.png",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    imgsrc: "/Mountain.png",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    imgsrc: "/Mountain.png",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    imgsrc: "/Mountain.png",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
];
 
const Content = () => {
  return (
    <div className="w-screen h-[3005px] flex flex-col items-center  ">
      <div className="w-[1216px] h-[651px] rounded-xl relative gap-[11px] ">
        <Image src="/Background.png" width={1216} height={600} />
        <div className="w-[598px] h-[252px] flex flex-col  justify-center items-center bg-white absolute border border-gray-600 rounded-md gap-[24px] top-[335px] left-[11px]">
          <div className="w-[518px] h-[124px] gap-[16px] flex flex-col ">
            <div className="w-[97px] h-[28px] rounded-md bg-[#4B6BFB] flex justify-center items-center text-white">
              <p>technology</p>
            </div>
            <div className="h-[80px] text-4xl leading-9">
              <strong>Grid system for better Design User Interface</strong>
            </div>
          </div>
          <p className="w-[126px] h-[24px] text-[#97989F] justify-items-start">
            August 20, 2022
          </p>
        </div>
        <div className=" flex justify-end ">
          <button className="border border-gray-900 w-[40px] h-[40px] rounded-[6px] flex items-center justify-center">
            <IoIosArrowBack width={7.5} height={15} />
          </button>
          <button className="border border-gray-900 w-[40px] h-[40px] rounded-[6px] flex items-center justify-center">
            <IoIosArrowForward width={7.5} height={15} />
          </button>
        </div>
      </div>
      <div className="w-[1231px] h-[390px] gap-[10px]">
        <strong className="flex justify-start text-[24px]">Trending</strong>
        <div className="w-[1232px] h-[320px] flex gap-[20px] ">
          {Slides.map((el, i) => {
            return (
              <div>
                <div>
                  <Trending_Images key={i} imgsrc={el.imgsrc} text={el.text} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
    
  );
};
export default Content;
