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
      className="section min-h-screen lg:min-h-[78vh] bg-[#2F4858] md:py-20 lg:py-32"
    >
      <div className="container mx-auto lg:p-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileInView={"show"}
          className="mb-10"
        >
          <h2 className="h2 mb-6 text-2xl">What I DO </h2>
          <h3 className="h3  mb-5 ">
            I specialize in web, mobile, and desktop development, offering
            tailor-made solutions to meet the unique needs of my clients.
          </h3>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileInView={"show"}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#FB923C] px-8 py-2 rounded-full"
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
    </section>
  );
}

// Composant pour la carte de service
const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Vous pouvez ajuster le seuil en fonction de votre besoin
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white rounded-lg p-6 shadow-md flex flex-col justify-between h-full"
    >
      <div>
        <h3 className="text-2xl font-semibold mb-2 text-[#FB923C]">
          {service.name}
        </h3>
        <p className="text-lg mb-4 text-gray-500">{service.description}</p>
      </div>
      <div className="flex justify-center lg:justify-start">
        <a href="#" className="text-blue-500">
          {service.link}
        </a>
      </div>
    </motion.div>
  );
};
