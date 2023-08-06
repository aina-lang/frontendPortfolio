import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios"; // Importez Axios

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [msgHandle, setmsgHandle] = useState(true);

  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  // const onSubmit1 = async (data) => {
  //   alert(data)
  //   try {
  //     const response = await axios.post(
  //       "http://127.0.0.1:8000/api/",
  //       data,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     console.log("====================================");
  //     console.log(response);
  //     console.log("====================================");
  //     alert("")
  //     if (response.status === 200) {
  //       alert("Message sent successfully!");
  //       setName("");
  //       setEmail("");
  //       setMessage("");
  //     } else {
  //       alert("Error sending the message. Mias connecter a API.");
  //     }
  //   } catch (error) {
  //     console.error("Error sending the message:", error);
  //     alert("Error sending the message. Please try again later.");
  //   }
  // };

  // const onSubmit=()=>{
  //   axios
  //     .get('http://localhost:8000/')
  //     .then((response) => {
  //    alert(response.data)
  //     })
  //     .catch((error) => {
  //       console.error(error);

  //     });
  // }

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://backendportfolio.vercel.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // setLoading(true);

      if (response.ok) {
        console.log("====================================");
        console.log("E-mail envoyé avec succés");
        console.log("====================================");
        // setmsgHandle(true);
        // setLoading(false);
        // setName("");
        // setEmail("");
        // setMessage("");
      } else {
        console.log("====================================");
        console.log("Erreur lors de l'envoie de l'email ", response);
        console.log("====================================");
      }
      // setLoading(false);
    } catch (error) {
      console.log("====================================");
      console.error(error.message);
      console.log("====================================");
      // setLoading(false);
    }
  };

  const [nameRef, nameInView] = useInView({
    threshold: 0.5,
  });

  const [emailRef, emailInView] = useInView({
    threshold: 0.5,
  });

  const [messageRef, messageInView] = useInView({
    threshold: 0.5,
  });

  const [buttonRef, buttonInView] = useInView({
    threshold: 0.5,
  });

  const handleClick = (e) => {
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    onSubmit(formData);
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="section min-h-screen  flex flex-col lg:flex-row items-center bg-[#2F4858]"
    >
      {loading ? <div>loading ... </div> : null}
      <div className="container mx-auto lg:px-36 lg:pt-30">
        <div className="flex flex-row items-center justify-center lg:justify-between">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: nameInView ? 1 : 0, y: nameInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold text-white mb-8"
            >
              Contact Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: nameInView ? 1 : 0, y: nameInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white mb-8 text-lg max-w-md"
            >
              If you want to get in touch with me, feel free to send me a
              message using the form below. I'll get back to you as soon as
              possible.
            </motion.p>
            <form className="flex flex-col space-y-4">
              <motion.input
                ref={nameRef}
                type="text"
                placeholder="Your Name"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: nameInView ? 1 : 0,
                  y: nameInView ? 0 : 20,
                }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="py-2 px-4 rounded-lg bg-[#465B6B] text-white placeholder-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              />
              <motion.input
                ref={emailRef}
                type="email"
                placeholder="Your Email"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: emailInView ? 1 : 0,
                  y: emailInView ? 0 : 20,
                }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="py-2 px-4 rounded-lg bg-[#465B6B] text-white placeholder-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              />
              <motion.textarea
                ref={messageRef}
                placeholder="Your Message"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: messageInView ? 1 : 0,
                  y: messageInView ? 0 : 20,
                }}
                transition={{ duration: 0.8, delay: 1 }}
                className="py-2 px-4 rounded-lg bg-[#465B6B] text-white placeholder-gray-300 focus:outline-none focus:ring focus:border-blue-300 resize-none h-32"
              ></motion.textarea>
              <motion.button
                ref={buttonRef}
                type="submit"
                onClick={handleClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: buttonInView ? 1 : 0,
                  y: buttonInView ? 0 : 20,
                }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out"
              >
                Send Message
              </motion.button>
            </form>
          </div>
          <div className=" justify-center max-w-[400px] hidden lg:flex">
            <motion.img
              src={require("../assets/Work-from-home.png")}
              alt="Work from Home"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: messageInView ? 1 : 0,
                y: messageInView ? 0 : 20,
              }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
