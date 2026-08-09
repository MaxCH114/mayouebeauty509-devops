import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";

const Logo = () => {
  return (
    <Link href="/" className="flex gap-3 items-center">
      <span className="text-3xl text-primary">
        <FaHeart />
      </span>

      <div className="leading-tight">
        <p className="text-xl font-bold whitespace-nowrap">
          Mayoue<span className="text-primary">Beauty</span>
        </p>

        <p className="text-[10px] font-medium tracking-[0.25em] text-muted-foreground">
          BEAUTY 509
        </p>
      </div>
    </Link>
  );
};

export default Logo;