
import {
  FaAddressCard,
  FaDownload,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import aina from "../assets/aina.png";
import { fadeIn } from "../constants/variants";
import React, { useEffect } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import  CV  from "../assets/aina.png";

export default function Banner() {


  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, 20, 0, -20, 0],
      transition: { duration: 4, ease: "linear", repeat: Infinity },
    });
  }, [controls]);

  const handleDownload = async () => {
    await fetch('http://localhost:3000/index.js').then((response) => {
      console.log("yesss");
      if (response.status === 200 && response.headers.get('Content-Type').indexOf('application/octet-stream') != -1) {
        const blob = new Blob([response.arrayBuffer()]);
        console.log("yesss");
        // saveAs(blob,'RAFANDEFERANA_MAMINIAINA_MERCIA_CV.pdf');

      }else{
        console.log(response.headers.get('Content-Type'));
      }
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <section
      id="home"
      className="section min-h-screen lg:min-h-[78vh] flex flex-col lg:flex-row items-between "
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="lg:w-1/2 flex flex-col justify-center p-8" id="bannerContent">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="mb-4 text-center text-[32px] text-gray-500 lg:text-left lg:text-[30px] font-secondary font-semibold uppercase leading-[1]"
            >
              RAFANDEFERANA{" "}
              <span className="text-indigo-500 ">MAMINIAINA MERCIA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <span className="text-2xl text-gray-500"> I'm a </span>
              <TypeAnimation
                sequence={["Developer ", 2000, "Programmer ", 2000]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                className="text-orange-400 text-2xl "
              />
              <div className="relative mt-2 ">
                <div className="line h-full hidden lg:flex w-1 absolute left-5 top-0 bg-gray-500 rounded-sm" />
                <p className="text-lg lg:pl-10 text-gray-400">
                  With a passion for technologies ,my goal is to create
                  impactful and and memorable brand identities that resonate
                  with audiences.
                </p>
              </div>

              <div className="flex space-x-4 max-w-max mb-10 mx-auto lg:mx-0 mt-5">
                <button className="text-lg shadow-md font bg-indigo-500  text-white p-2 px-5 rounded-full hover:border-2 border-indigo-500 hover:text-indigo-500 group relative flex items-center overflow-hidden">
                  <span className="absolute left-0 w-0 h-full flex justify-center items-center transition-all bg-white  opacity-0 group-hover:w-full group-hover:opacity-100 duration-200 ease">
                    Contact me
                  </span>
                  Contact me
                </button>

                <button id="downloadCVbtn" className="text-lg font text-indigo-500 p-2 px-5 rounded-full hover:text-white group relative flex items-center overflow-hidden shadow-md border-2 border-white box-border hover:border-indigo-500">
                  <a  href={CV} download="RAFANDEFERANA_MAMINIAINA_MERCIA_CV" onClick={handleDownload} className="absolute left-0 w-0 h-full flex justify-center items-center transition-all bg-indigo-500 opacity-100 group-hover:w-full duration-200 ease box-border">
                    <FaDownload className="relative" />
                  </a>
                  Download my CV
                </button>
              </div>
            </motion.div>
          </div>
          <div className="relative lg:w-1/2 flex items-center justify-center py-0 lg:flex " id="imgBannerContainer">
            <motion.div
              className=" absolute z-50"
              style={{ x, y }}
              animate={controls}
            >
              <motion.img
                src={aina}
                alt="Aina"
                className="pb-24 max-w-md mx-auto "
                id="imgBanner"
              />
            </motion.div>
            <div className="absolute h-[160px] w-[160px] top-0 left-0 bg-indigo-500 rounded-full mix-blend-multiply blur-[90px]"></div>
            <div className="absolute h-[160px] w-[160px] right-0 bg-teal-500 rounded-full mix-blend-multiply blur-[90px]"></div>
            <div className="absolute h-[300px] w-[300px] top-0 bg-red-500 rounded-full mix-blend-multiply blur-[90px]"></div>
          </div>
        </div>
      </div>
      <div className="fixed right-4 z-50 top-1/2 flex flex-col justify-between items-center text-[20px] gap-y-6 max-w-max mx-auto lg:mx-0 lg:top-1/3">
        <a
          href="#"
          className="hover:text-indigo-500 transition-all duration-200 ease"
        >
          <FaGithub />
        </a>
        <a
          href="#"
          className="hover:text-indigo-500 transition-all duration-200 ease"
        >
          <FaAddressCard />
        </a>
        <a
          href="#"
          className="hover:text-indigo-500 transition-all duration-200 ease"
        >
          <FaFacebook />
        </a>
      </div>
    </section>
  );
}
