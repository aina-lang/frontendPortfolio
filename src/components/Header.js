import React from "react";
import Logo  from "../assets/logo.png"
export default function Header() {
  return (
    <header className=" py-5 bg-[#4A577E]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-10 md:px-0 lg:px-0">
          <a href="#">
            <img className="h-8" src={Logo} alt="ayna logo"/>
          </a>
          <button className="text-[#FB923C] font-semibold"> Work With me</button>
        </div>
      </div>
    </header>
  );
}
