import Image from "next/image";
import { AllBlog } from "./AllBlog";
export const BlogData = (props) => {
  const blogs = [
    {
      img: "/Mountain.png",
      text: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      img: "/Mountain.png",
      text: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      img: "/Mountain.png",
      text: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      img: "/Mountain.png",
      text: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      img: "/Mountain.png",
      text: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      img: "/Mountain.png",
      text: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      img: "/Mountain.png",
      text: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      img: "/Mountain.png",
      text: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      img: "/Mountain.png",
      text: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
  ];
  return (
    <div className="flex gap-[32px] w-[1216px] flex-col mx-auto items-center">
      <div className="flex flex-col w-full gap-[32px] ">
        <p className=" workSansText text-[24px]">All blog post</p>
        <div className=" hidden justify-between md:flex gap-[30]">
          <div className="gap-5 flex workSansText">
            <p>All</p>
            <p>Design</p>
            <p>Travel</p>
            <p>Fashion</p>
            <p>Technology</p>
            <p>Branding</p>
          </div>
          <div className="workSansText">
            <p>View all</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className=" flex justify-center flex-col md:flex-row md:flex-wrap gap-4 mt-10">
          {blogs.map((el, i) => {
            return (
              <AllBlog
                img={el.img}
                text={el.text}
                title={el.title}
                date={el.date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
