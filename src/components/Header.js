import React from "react";
import Logo from "../assets/logo.png";
export default function Header() {
  return (
    <header className=" py-5 bg-[#2F4858]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-10 md:px-0 lg:px-0">
          <a href="#" className="text-white font-bold text-2xl">
            {/* <img className="h-8" src={"Logo"} alt="ayna logo"/>
             */}
            AI<span className="text-[#FB923C]">NA</span>
          </a>
          <button className="text-[#FB923C] font-semibold">Work With me</button>
        </div>
      </div>
    </header>
  );
}
