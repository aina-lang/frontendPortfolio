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
  // {
  //   title: "Project 1",
  //   image: require("../assets/praise.png"),
  //   description:
  //     "Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
  // {
  //   title: "Project 2",
  //   image: require("../assets/site.png"),
  //   description:
  //     "Description of Project 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  // },
  // {
  //   title: "Project 1",
  //   image: require("../assets/praise.png"),
  //   description:
  //     "Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
  // {
  //   title: "Project 1",
  //   image: require("../assets/praise.png"),
  //   description:
  //     "Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
  // {
  //   title: "Project 1",
  //   image: require("../assets/praise.png"),
  //   description:
  //     "Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
  // {
  //   title: "Project 1",
  //   image: require("../assets/praise.png"),
  //   description:
  //     "Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
  // {
  //   title: "Project 1",
  //   image: require("../assets/praise.png"),
  //   description:
  //     "Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="section min-h-screen lg:min-h-[78vh] flex flex-col lg:flex-row items-center "
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
            <h2 className="h2 mb-6 text-2xl text-white">MY PROJECTS</h2>
            <h3 className="h3 mb-5 text-white">
            I'm thrilled to share with you the projects I've worked on and the skills I've developed along the way.
            </h3>
          </motion.div>
        </div>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8  items-center justify-center text-center">
          {projects.length === 0 ? (
            <div>
              <p className="text-white">No projects available at the moment.</p>
            </div>
          ) : (
            projects.map((project, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg max-h-[300px] max-w-[300px] shadow-md flex flex-col justify-between h-full cursor-pointer overflow-hidden items-center"
                onMouseEnter={() => setSelectedProject(index)}
                onMouseLeave={() => setSelectedProject(null)}
              >
                <motion.div
                  whileHover={{
                    scale: 1.1, // Enlarge the image by 10% when hovered
                  }}
                  style={{
                    transition: "transform 0.3s", // Adding transition to smooth the effect
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full object-cover transition-all"
                  />
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
                      <h3 className="text-2xl font-semibold mb-2 text-[#FB923C]">
                        {project.title}
                      </h3>
                      <p>{project.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          )}
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
    </section>
  );
}
