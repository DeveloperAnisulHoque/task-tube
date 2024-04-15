"use client";
import React, { useState } from "react";
import Button from "../Button/Button";
import cn from "@/utils/cn";
import { ChevronDown, ChevronLeft } from "lucide-react";
interface PropsCategory {
  data: string[];
}
const Categorys: React.FC<PropsCategory> = ({ data }) => {
  const [active, setActive] = useState("All");
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap  gap-3 transition-transform w-[max-content]">
        {data.map((item, key) => (
          <div key={key} onClick={() => setActive(item)}>
            <Button
              className={cn(
                `rounded-lg py-1 px-4   whitespace-nowrap bg-gray-200    w-auto h-auto duration-150`,
                {
                  "bg-[#030303] text-white hover:bg-[#030303] ": active == item,
                }
              )}
            >
              {item}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorys;
