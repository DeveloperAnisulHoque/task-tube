import Button from "@/components/Button/Button";
import Categorys from "@/components/Categorys/Categorys";
import { data, videoData } from "@/demoData/data";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-x-hidden px-4 md:px-8 pb-4">

      {/* <================categorys div=====================> */}
      <div className="sticky top-0 bg-white z-10 pb-4">
        <Categorys data={data} />
      </div>{" "}


      {/* <================== post div==================> */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-3">
        {videoData.map((item, key) => {
          return (
            <div
              key={key}
              className="flex flex-col gap-2  h-[330px]  group hover:bg-[#DDE8EB] p-2 rounded-xl duration-300"
            >
              <Link href={"/"} className="relative">
                <Image
                  src={item.thumbnail}
                  width={500}
                  height={500}
                  alt="video"
                  className="  w-full h-[200px] object-cover rounded-xl group-hover:rounded-none duration-300"
                />
                <div className="absolute bottom-1 right-1 bg-gray-800 text-gray-100 text-xs px-2 bg-opacity-90 rounded">
                  {item.duration}
                </div>
              </Link>

              <div className=" pb-3">
                <div className="flex  h-8    px-2   ">
                  <Link href={"/"} className="w-2/12 mt-2">
                    <Image
                      src={item.channelLogo}
                      width={100}
                      height={100}
                      alt="video"
                      className="   w-9 h-9 object-cover rounded-full "
                    />
                  </Link>
                  <Link href={"/"} className=" w-10/12">
                    <h2 className="font-bold   min-h-fit  max-h-12 overflow-hidden  ">
                      {item.title}
                    </h2>
                    <h2 className="text-sm font-semibold text-gray-500   ">
                      {item.channelName}
                    </h2>
                    <div className=" text-sm space-x-2 font-semibold text-gray-500   ">
                      <span>{item.views}</span> .<span>{item.timeAgo} ago</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
