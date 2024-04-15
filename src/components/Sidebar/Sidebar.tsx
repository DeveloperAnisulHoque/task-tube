"use client";
import cn from "@/utils/cn";
import {
  Clapperboard,
  FireExtinguisher,
  Flame,
  History,
  Home,
  Library,
  Menu,
  Music2,
  PlaySquare,
  Repeat,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import React, { ElementType, ReactNode } from "react";
import { useSidebarContext } from "../../context/SidebarContext";
import Button from "../Button/Button";
import Image from "next/image";

const Sidebar = () => {
  const { isLargeOpen, isSmallOpen, toggle, close } = useSidebarContext();
  return (
    <>
      {/* <====================mobile sidebar ==================> */}
      <aside
        className={`sticky top-0 overflow-y-auto hidden   pb-4 md:flex flex-col ml-1  
          ${isLargeOpen ? " lg:hidden" : "lg:flex"}`}
      >
        <SmallSidbarItem Icon={Home} title="Home" url="/" />
        <SmallSidbarItem Icon={Repeat} title="Shorts" url="/" />
        <SmallSidbarItem Icon={Clapperboard} title="Subscriptions" url="/" />
      </aside>{" "}
      {isSmallOpen && (
        <div
          onClick={close}
          className="lg:hidden fixed inset-0 z-40 bg-gray-800 opacity-50"
        />
      )}
      {/* <=====================desktop sidbar====================> */}
      <aside
        className={`w-56  lg:sticky absolute top-0 overflow-y-auto  pb-4 flex-col gap-2 px-2 
${isLargeOpen ? "lg:flex" : "lg:hidden"}  ${
          isSmallOpen
            ? "flex z-50 bg-white   h-screen lg:h-auto  max-h-screen"
            : "hidden"
        }     `}
      >
        <div
          className={cn(
            "flex p-2 sticky top-0 bg-white lg:hidden gap-4 items-center flex-shrink-0"
          )}
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
        <LargeSidbarComponent>
          <LargeSidbarItem Icon={Home} url="/" title="Home" isActive />
          <LargeSidbarItem Icon={Clapperboard} url="/" title="Subscriptions" />
        </LargeSidbarComponent>
        <hr />{" "}
        <LargeSidbarComponent title="You">
          <LargeSidbarItem Icon={Library} url="/" title="Library" />
          <LargeSidbarItem Icon={History} url="/" title="History" />
          <LargeSidbarItem Icon={PlaySquare} url="/" title="Your Videos" />
        </LargeSidbarComponent>
        <hr />{" "}
        <LargeSidbarComponent title="Explore">
          <LargeSidbarItem Icon={Flame} url="/" title="Trending" />
          <LargeSidbarItem Icon={ShoppingBag} url="/" title="Shoping" />
          <LargeSidbarItem Icon={Music2} url="/" title="Music" />
        </LargeSidbarComponent>
        <hr />{" "}
        <LargeSidbarComponent title="Explore">
          <LargeSidbarItem Icon={Flame} url="/" title="Trending" />
          <LargeSidbarItem Icon={ShoppingBag} url="/" title="Shoping" />
          <LargeSidbarItem Icon={Music2} url="/" title="Music" />
        </LargeSidbarComponent>
      </aside>
    </>
  );
};

export default Sidebar;

// small sidebar props
type SmallSidebarItemProps = { Icon: ElementType; title: string; url: string };

// small sidebar component
function SmallSidbarItem({ Icon, title, url }: SmallSidebarItemProps) {
  return (
    <Link
      className=" py-3 px-1 flex flex-col items-center gap-1 hover:bg-gray-200 rounded-lg"
      href={url}
    >
      <Icon className="w-7 h-7 p-1  " />

      <p className="text-xs">{title}</p>
    </Link>
  );
}
// small sidebar props
type LargeSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
  isActive?: boolean;
};

// small sidebar item
function LargeSidbarItem({
  Icon,
  title,
  url,
  isActive,
}: LargeSidebarItemProps) {
  return (
    <Link
      className={cn(
        "w-full flex mb-1 items-center rounded-lg hover:bg-gray-200 gap-4 px-3 py-2",
        { "font-bold bg-gray-200 hover:bg-gray-300": isActive }
      )}
      href={url}
    >
      <Icon className="w-7 h-7 p-1  " />

      <p className="whitespace-nowrap text-sm overflow-hidden text-ellipsis">
        {title}
      </p>
    </Link>
  );
}
// small sidebar props
type LargeSidebarComponentProps = {
  children: ReactNode;
  title?: string;
};

// small sidebar component
function LargeSidbarComponent({ children, title }: LargeSidebarComponentProps) {
  return (
    <div>
      {title && <div className="ml-2 mt-2 text-lg mb-1">{title}</div>}

      {children}
    </div>
  );
}
