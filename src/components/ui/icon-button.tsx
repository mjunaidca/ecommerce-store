"use client";

import { MouseEventHandler } from "react";
import Button from "./button";
import { cn } from "@/lib/utlis";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({onClick, className, icon}) => {
  return (
    <div>
      <Button
        onClick={onClick}
        className={cn(
          "items-center justify-center flex rounded-full bg-white border shadow-md p-2 hover:scale-110 transition",
          className
        )}
      >
        {icon}
      </Button>
    </div>
  );
};

export default IconButton;
