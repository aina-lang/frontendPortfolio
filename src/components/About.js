import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { fadeIn } from "../constants/variants";
export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section
      id="about"
      className="section  min-h-screen lg:min-h-[78vh] py-10 md:py-20 lg:py-32"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="relative">
          <div className="flex-1 bg-contain h-[320px] md:h-[480px] lg:h-[640px] bg-no-repeat mix-blend-lighten bg-top absolute bottom-3 left-0 w-full"></div>
          <motion.div
            className="px-6 md:px-20 lg:px-36"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
              About me.
            </h2>
            <h3 className="text-lg md:text-xl lg:text-2xl mt-2 font-normal">
              I'm 21 years, old
              Student at ENI Fianarantsoa.
            </h3>
            <div className="relative mt-4 md:mt-6 lg:mt-10">
              <div className="line h-full hidden lg:flex w-1 absolute left-5 top-0 bg-white" />

              <p className="text-base md:text-lg lg:text-xl lg:pl-10">
              As a passionate computer science student at ENI, I am developing my skills to tackle the challenges of this ever-evolving field through personal and collaborative projects.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-x-10 lg:gap-x-16 items-center pb-10 md:pb-16 lg:pb-20">
              <div className="mb-4 md:mb-0">
                <div className="text-[30px] md:text-[40px] mb-2 text-[#FB923C] font-bold">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}{" "}
                  years old
                </div>
                <div className="font-primary text-sm md:text-base tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>

              <div className="mb-4 md:mb-0">
                <div className="text-[30px] md:text-[40px] mb-2 text-[#FB923C] font-bold">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                  {"K+"}
                </div>
                <div className="font-primary text-sm md:text-base tracking-[2px]">
                  Project <br />
                  completed
                </div>
              </div>

              <div>
                <div className="text-[30px] md:text-[40px] mb-2 text-[#FB923C] font-bold">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                  {"K+"}
                </div>
                <div className="font-primary text-sm md:text-base tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
