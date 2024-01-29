import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DiReact,
  DiLaravel,
  DiPython,
  DiJava,
  DiMysql,
  DiGithubBadge,
} from "react-icons/di";

const projects = [
  {
    title: "Project 1",
    image: require("../assets/praise.png"),
    description:
      "Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 2",
    image: require("../assets/site.png"),
    description:
      "Description of Project 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    title: "Project 1",
    image: require("../assets/praise.png"),
    description:
      "Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 1",
    image: require("../assets/praise.png"),
    description:
      "Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 1",
    image: require("../assets/praise.png"),
    description:
      "Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 1",
    image: require("../assets/praise.png"),
    description:
      "Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 1",
    image: require("../assets/praise.png"),
    description:
      "Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <><section
      id="work"
      className="section min-h-screen flex flex-col lg:flex-row items-center  relative"
    >
      <div className="container mx-auto lg:p-40">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileInView={"show"}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-500">My <span className="text-indigo-500">Projects</span></h2>
            <h3 className="text-2xl text-gray-500 my-3 mb-5">
              I'm thrilled to share with you the projects I've worked on and the skills I've developed along the way.
            </h3>
          </motion.div>
        </div>


        <div className="flex  mt-20 items-center  justify-center space-x-4 ">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360, color: "#61DBFB" }}
            transition={{ duration: 0.5 }}
          >
            <DiReact size={60} color="white" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360, color: "#FF2D20" }}
            transition={{ duration: 0.5 }}
          >
            <DiLaravel size={60} color="white" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360, color: "#3776AB" }}
            transition={{ duration: 0.5 }}
          >
            <DiPython size={60} color="white" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360, color: "#E76F00" }}
            transition={{ duration: 0.5 }}
          >
            <DiJava size={60} color="white" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360, color: "#4479A1" }}
            transition={{ duration: 0.5 }}
          >
            <DiMysql size={60} color="white" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360, color: "#000000" }}
            transition={{ duration: 0.5 }}
          >
            <DiGithubBadge size={60} color="white" />
          </motion.div>
        </div>

      </div>
      <div className="absolute h-[160px] w-[160px] top-0 left-[500px]  bg-teal-500/30 rounded-full mix-blend-multiply blur-[90px]"></div>
      <div className="absolute h-[160px] w-[160px] right-24 bg-indigo-500/20  rounded-full mix-blend-multiply blur-[90px]"></div>
      <div className="absolute h-[300px] w-[300px] top-[250px] bg-red-500/20 rounded-full mix-blend-multiply blur-[90px]"></div>




      {/* LES PROJECT EN MANSORI */}

    </section>
      <div className="mx-auto w-full p-28 grid  md:grid-cols-2 pt-0 lg:grid-cols-3 gap-12  gap-x-8 items-center justify-center text-center">
        {projects.length === 0 ? (
          <div>
            <p className="text-white">No projects available at the moment.</p>
          </div>
        ) : (
          projects.map((project, index) => (
            <div className="relative rounded-lg min-h-[220px] min-w-[350px] mx-auto flex flex-col justify-between h-full cursor-pointer overflow-hidden "
            >
              <div
                key={index}
                className="relative bg-white border-indigo-500  rounded-lg min-h-[220px] min-w-[350px] mx-auto shadow-lg flex flex-col justify-between h-full cursor-pointer overflow-hidden items-center self-center mb-3"
                onMouseEnter={() => setSelectedProject(index)}
                onMouseLeave={() => setSelectedProject(null)}
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  style={{
                    transition: "transform 0.3s",
                  }}
                  className="min-h-full  transition-all"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ backgroundSize: 'cover' }}
                    className="min-h-full bg-cover object-cover transition-all" />
                </motion.div>

                <AnimatePresence>
                  {selectedProject === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-60 text-white p-4 rounded-b-lg pt-12"
                    >
                      <h3 className="text-2xl font-semibold mb-2 text-indigo-500">
                        {project.title}
                      </h3>
                      <p>{project.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
              <div className="flex  w-full  flex-row space-x-2">
                <div className="border-indigo-500 border-2 text-indigo-500 p-2 px-3 rounded-full ">ReactJs</div>
                <div className="border-indigo-500 border-2 text-indigo-500 p-2 px-3 rounded-full ">ReactJs</div>
                <div className="border-indigo-500 border-2 text-indigo-500 p-2 px-3 rounded-full ">ReactJs</div>
              </div>

            </div>
          ))
        )}
      </div>
    </>
  );
}
