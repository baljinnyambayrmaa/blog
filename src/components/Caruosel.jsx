
import React, { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
 
const Carousel = () => {
  const images = ["/Image.png", "/Mountain.png"];
 
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
 
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
 
  return (
    <div className="hidden md:flex flex-col pl-16 justify-center items-end gap-3 mt-[100px]">
      <div>
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          width={1216}
          height={600}
          className="h-[600px]"
        />
      </div>
 
      <div className="flex  gap-3">
        {" "}
        <button
          className="p-3 border-solid border-[1px] border-[black]"
          onClick={handlePrev}
        >
          <GrFormPrevious className="text-[20px]" />
        </button>
        <button
          className="p-3 border-solid border-[1px] border-[black]"
          onClick={handleNext}
        >
          <GrFormNext className="text-[20px]" />
        </button>
        <div className="h-[292px] w-[598px] bg-slate-50 absolute z-10 left-[560px] bottom-[420px] rounded-xl px-[40px] py-[40px] flex flex-col gap-8">
          <p className="bg-[#4B6BFB] w-fit text-white px-[14px] py-[2px] rounded-[6px]">
            Tehnology
          </p>
          <h1 className="text-[36px] leading-[40px] font-bold">
            Grid system for better <br /> Design User Interface
          </h1>
          <h1 className="text-[#97989F] text-[16px]">August 20, 2022</h1>
        </div>
      </div>
    </div>
  );
};
 
export default Carousel;
 