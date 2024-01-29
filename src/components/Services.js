import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
 

const services = [

  {
    name: "Web Development",
    description: "Cupidatat fugiat sunt cillum labore culpa eu sint do.",
    link: "Learn more",
  },
  {
    name: "Mobile Development",
    description: " Designing custom mobile applications for iOS and Android.",
    link: "Learn more",
  },
  {
    name: "Desktop Development",
    description:
      " Building custom desktop applications for Windows, macOS, and Linux platforms.",
    link: "Learn more",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section min-h-screen lg:min-h-[78vh]  md:py-20 lg:py-32 relative"
    >
      <div className="container mx-auto lg:p-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileInView={"show"}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-500">What <span className="text-indigo-500">I Do</span> </h2>
          <h3 className="text-2xl text-gray-500 my-3 mb-5">
            I specialize in web, mobile, and desktop development, offering
            tailor-made solutions to meet the unique needs of my clients.
          </h3>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileInView={"show"}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-indigo-500 px-8 py-2 rounded-full z-40"
          >
            See my work
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
      <div className="absolute h-[160px] w-[160px] top-0 left-[500px] bg-indigo-500 rounded-full mix-blend-multiply blur-[90px]"></div>
      <div className="absolute h-[160px] w-[160px] right-24  bg-red-500/20 rounded-full mix-blend-multiply blur-[90px]"></div>
      <div className="absolute h-[300px] w-[300px] top-[250px] bg-teal-500/30 rounded-full mix-blend-multiply blur-[90px]"></div>

    </section>
  );
}


const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.5, 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white rounded-lg p-6 shadow-md flex flex-col justify-between h-full z-40"
    >
      <div>
        <h3 className="text-2xl font-semibold mb-2 text-[#FB923C]">
          {service.name}
        </h3>
        <p className="text-lg mb-4 text-gray-500">{service.description}</p>
      </div>
      <div className="flex justify-center lg:justify-start">
        <a href="#" className="text-indigo-500">
          {service.link}
        </a>
      </div>
    </motion.div>
  );
};
