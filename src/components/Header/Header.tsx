"use client";
import React, { useState } from "react";
import Button from "../Button/Button";
import {
  ArrowLeft,
  Bell,
  Menu,
  Mic,
  MoveLeft,
  Search,
  User,
  Video,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import cn from "@/utils/cn";
import { useSidebarContext } from "../../context/SidebarContext";

const Header: React.FC = () => {
  const [showSearchBar, setShowSearchBar] = useState<Boolean>(false);
  const { toggle } = useSidebarContext();
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      {/* <============logo div =================> */}
      <div
        className={cn("flex gap-4 items-center flex-shrink-0", {
          "hidden md:flex": showSearchBar,
        })}
      >
        <div onClick={toggle}>
          <Button className="">
            <Menu />
          </Button>
        </div>
        <Link href={"/"}>
          <Image
            src={require("@/assets/logo.png")}
            width={100}
            height={20}
            alt="youtube"
            className="h-[20px] w-auto"
          />
        </Link>
      </div>

      {/* <=============== serarch bar ====================> */}
      <div
        className={cn(" hidden md:flex   gap-4 flex-grow justify-center", {
          flex: showSearchBar,
        })}
      >
        <div
          className={cn("hidden ", { "block md:hidden": showSearchBar })}
          onClick={() => setShowSearchBar(false)}
        >
          <Button>
            <ArrowLeft />
          </Button>
        </div>
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 py-1 px-4 text-lg rounded-l-full  shadow-inner shadow-gray-200 outline-none focus:border-blue-700"
          />
          <Button className="py-2 w-16 px-4  bg-[#f0f0f093] hover:bg-[#F0F0F0] border border-l-0 border-gray-300 rounded-none rounded-r-full flex-shrink-0 ">
            <Search />
          </Button>
        </div>
        <Button className="bg-gray-200">
          <Mic />
        </Button>
      </div>
      {/* <=================== account div====================> */}
      <div
        className={cn("flex flex-shrink-0 md:gap-2", {
          "hidden md:flex": showSearchBar,
        })}
      >
        <div onClick={() => setShowSearchBar(true)}>
          <Button className="md:hidden ">
            <Search />
          </Button>
        </div>
        <Button className=" md:hidden">
          <Mic />
        </Button>
        <Button className="bg">
          <Video />
        </Button>
        <Button className="bg">
          <Bell />
        </Button>
        <Button className="bg">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default Header;
