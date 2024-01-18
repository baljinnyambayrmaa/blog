import axios from "axios";
import { AllBlog } from "./AllBlog";
import { BlogHeader } from "./BlogHeader";
import { useEffect, useState } from "react";
export const BlogData = (props) => {
  const { homeCheck = true, data } = props;
  const { loader, setLoader } = useState(true);
  const { page, setPage } = useState(homeCheck ? 9 : 30);
  console.log(data);
  const clickHandler = () => {
    setPage(page + 4);
  };
  const blogs = [
    { img: "/Mountain.png" },
    { img: "/Mountain.png" },
    { img: "/Mountain.png" },
    { img: "/Mountain.png" },
    { img: "/Mountain.png" },
    { img: "/Mountain.png" },
    { img: "/Mountain.png" },
    { img: "/Mountain.png" },
    { img: "/Mountain.png" },
  ];
  return (
    <div className="flex gap-[32px] w-[1216px] flex-col mx-auto items-center">
      <div className="flex flex-col w-full gap-[32px] ">
        <p className=" workSansText text-[24px]">All blog post</p>
        {homeCheck ? <BlogHeader /> : null}
      </div>
      <div className="w-full">
        <div className=" flex justify-center flex-col md:flex-row md:flex-wrap gap-4 mt-10">
          {loader && <div className="w-full bg-black">Loading...</div>}
          {data?.slice(5, 14).map((el, index) => {
            return (
              <AllBlog
                key={index}
                img={el.social_image}
                text={el.title}
                title={el.title}
                date={el.readable_publish_date}
                articleID={el.id}
              />
            );
          })}
        </div>
        <div
          className="w-[123px] h-[48px] flex items-center justify-center border [3px solid #E5E5E5] rounded-[6px] cursor-pointer"
          onClick={() => clickHandler()}
        >
          <p className="text-[#696A75] text-[16px] font-[500]">Load More</p>
        </div>
      </div>
    </div>
  );
};
