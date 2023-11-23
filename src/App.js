import { useEffect, useState } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });


  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="overflow-hidden bg-gray-100 bg-gray-grain z-50" >
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <Footer/> */}
      <div
        style={{ top: cursorPosition.y, left: cursorPosition.x }}
        className="cursor bg-orange-400 w-[20px] h-[20px] rounded-full shadow-lg "
      />
    </div>
  );
}

export default App;
