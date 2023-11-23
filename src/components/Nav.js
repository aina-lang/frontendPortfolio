import React from "react";
import { Link } from "react-scroll";
import {
  BiClipboard,
  BiHomeAlt,
  BiSolidBriefcase,
  BiSolidContact,
  BiUser,
} from "react-icons/bi";
export default function Nav() {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 " id="navBottom">
      
      <div className="container mx-auto">
        <div className=" max-w-[320px] bg-black/20 h-[66px] backdrop-blur-2xl rounded-full lg:max-w-[460px] px-1  mx-auto  flex justify-between items-center text-white/50 text-2xl">
          <Link to="home" offset={-200} activeClass="active" smooth={true} spy={true}  className="cursor-pointer w-[60px]  h-[60px] flex items-center justify-center">
            <BiHomeAlt />
          </Link>
          <Link to="about" activeClass="active" smooth={true} spy={true}  className="cursor-pointer w-[60px]  h-[60px] flex items-center justify-center">
            <BiUser />
          </Link>
          <Link to="services" activeClass="active" smooth={true} spy={true}  className="cursor-pointer w-[60px]  h-[60px] flex items-center justify-center">
            <BiClipboard />
          </Link>
          <Link to="work" activeClass="active" smooth={true} spy={true}  className="cursor-pointer w-[60px]  h-[60px] flex items-center justify-center">
            <BiSolidBriefcase />
          </Link>
          <Link to="contact" activeClass="active" smooth={true} spy={true}  className="cursor-pointer w-[60px]  h-[60px] flex items-center justify-center">
            <BiSolidContact />
          </Link>
        </div>
      </div>
    </nav>
  );
}
