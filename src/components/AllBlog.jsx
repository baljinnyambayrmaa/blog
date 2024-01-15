import Image from "next/image"
export const AllBlog = () => {
    return (
        <div className="flex flex-col mx-auto">
            <div>
                <p>All blog post</p>
            </div>
            <div className="flex jusitfy-between">
                <div className="flex">
                    <li>axaxa</li>
                    <li>xaxxa</li>
                    <li>xaxaax</li>
                    <li>deded</li>
                    <li>dada</li>
                    <li>dpdood</li>
                </div>
                <div>
                    <p>View all</p>
                </div>
            </div>
            <div className="flex ">
                <div className="flex flex-col w-[392px] gap-4 p-4 border rounded-2xl">
                    <Image width={360} height={240} src="/Mountain.png" className=""/>
                    <div className="w-full flex">
                        <p className="text-[#4B6BFB] rounded-xl bg-[#4B6BFB0D] px-[10px] py-[2px] size-[14px}">Technology</p>
                    </div>
                    <div className="w-full flex">
                        <p className=" text-[181A2A]">The Impact of Technology on the Workplace: How Technology is Changing</p>
                    </div>
                    <div>
                        <p>August 20, 2022</p>
                    </div>
                </div>
            </div>
            <div className=" flex">
                <p className="border rounded-md px-5 py-3 ">Load More</p>
            </div>
        </div>
    )
}