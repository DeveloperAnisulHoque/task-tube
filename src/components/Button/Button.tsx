import React, { ReactNode } from "react";
import cn from "../../utils/cn";

//  interface
interface ButtonProps {
  //  prop
  className?: string;

  // Children
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button
      className={`${cn(
        "bg-transparent hover:bg-gray-300 p-2 duration-300 h-10 w-10 rounded-full flex items-center justify-center",
        className
      )}`}
    >
      {children}
    </button>
  );
};

export default Button;
