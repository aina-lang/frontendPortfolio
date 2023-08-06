
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


export default function Banner() {
  

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      y: [0, 20, 0, -20, 0], // Apply the floating effect to y-coordinate
      transition: { duration: 4, ease: "linear", repeat: Infinity },
    });
  }, [controls]);

  return (
    <section
      id="home"
      className="section min-h-screen lg:min-h-[78vh] flex flex-col lg:flex-row items-center bg-[#2F4858]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="lg:w-1/2 flex flex-col justify-center p-8">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="mb-4 text-center text-[32px] lg:text-left lg:text-[30px] font-secondary font-semibold uppercase leading-[1]"
            >
              RAFANDEFERANA{" "}
              <span className="text-orange-400 ">MAMINIAINA MERCIA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <span className="text-2xl "> I'm a </span>
              <TypeAnimation
                sequence={["Developer ", 2000, "Programmer ", 2000]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                className="text-[#8D7DFF] text-2xl "
              />
              <div className="relative mt-2 ">
                <div className="line h-full hidden lg:flex w-1 absolute left-5 top-0 bg-white" />
                <p className="text-lg lg:pl-10">
                  With a passion for technologies ,my goal is to create
                  impactful and and memorable brand identities that resonate
                  with audiences.
                </p>
              </div>

              <div className="flex space-x-4 max-w-max mb-10 mx-auto lg:mx-0 mt-5">
                <button className="text-lg font bg-orange-400  text-white p-2 px-5 rounded-full hover:text-orange-400 group relative flex items-center overflow-hidden">
                  <span className="absolute left-0 w-0 h-full flex justify-center items-center transition-all bg-white opacity-0 group-hover:w-full group-hover:opacity-100 duration-200 ease">
                    Contact me
                  </span>
                  Contact me
                </button>

                <button className="text-lg font text-orange-400 border-orange-400 p-2 px-5 rounded-full hover:text-white group relative flex items-center overflow-hidden">
                  <span className="absolute left-0 w-0 h-full flex justify-center items-center transition-all bg-orange-400 opacity-100 group-hover:w-full duration-200 ease">
                    <FaDownload className="relative" />
                  </span>
                  Download my CV
                </button>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="lg:w-1/2 flex items-center justify-center py-0 hidden lg:flex"
            style={{ x, y }}
            animate={controls}
          >
            <motion.img
              src={aina}
              alt="Aina"
              className="pb-24 max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
      <div className="fixed right-4 top-1/2 flex flex-col justify-between items-center text-[20px] gap-y-6 max-w-max mx-auto lg:mx-0 lg:top-1/3">
        <a
          href="#"
          className="hover:text-orange-400 transition-all duration-200 ease"
        >
          <FaGithub />
        </a>
        <a
          href="#"
          className="hover:text-orange-400 transition-all duration-200 ease"
        >
          <FaAddressCard />
        </a>
        <a
          href="#"
          className="hover:text-orange-400 transition-all duration-200 ease"
        >
          <FaFacebook />
        </a>
      </div>
    </section>
  );
}
