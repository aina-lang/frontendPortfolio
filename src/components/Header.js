import React from "react";
import Logo from "../assets/logo.png";
export default function Header() {
  return (
    <header className=" py-5  fixed w-full z-[9999] bg-gray-grain" id="header">
      <div className="container mx-auto">
        <div className="flex justify-between  px-10 md:px-0 lg:px-0 items-center">
          <a href="#" className="text-gray-400 font-bold text-2xl">
            {/* <img className="h-8" src={"Logo"} alt="ayna logo"/>
             */}
            AI<span className="text-[#6366f1]">NA</span>
          </a>
          <button className="text-[#6366f1] font-semibold">Work With me</button>
          <div id="navCollapaseHumberger" className="  w-[40px]  space-y-1 hidden cursor-pointer">
            <div className="lineHumberger  w-[90%] h-[5px] bg-gray-500 rounded-md ml-1"></div>
            <div className="lineHumberger w-[80%] h-[5px] bg-gray-500 rounded-md ml-2"></div>
            <div className="lineHumberger w-full h-[5px] bg-gray-500 rounded-md"></div>
          </div>

        </div>
      </div>
    </header>
  );
}
