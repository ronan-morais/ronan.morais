"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Logo from "./logo";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const bg = useTransform(scrollYProgress, [0, 1], ["0px", "1000px"], {
    clamp: false,
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 2]);
  const brandPosition = useTransform(scrollYProgress, [0, 1], ["25%", "200%"]);

  return (
    <section className="container overflow-hidden flex max-w-full h-screen bg-black bg-contain relative justify-center items-center">
      <motion.div
        className="absolute z-10 w-full flex px-44"
        style={{ top: brandPosition }}
      >
        <div className="w-2/3">
          <Logo />
          <h2 className="text-white font-dmserif text-4xl mt-8">Welcome to</h2>
          <h1 className="text-white font-montserrat font-black text-[170px] leading-[0.9em] uppercase tracking-tighter">
            Ronan
            <br />
            Morais
          </h1>
          <h2 className="text-white font-dmserif text-3xl mt-1">
            Graphic Designer and Front-End Developer Website
          </h2>
        </div>
        <div className="w-1/3 flex"></div>
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0 bg-black"
        style={{ opacity: opacity }}
      ></motion.div>
      <motion.div
        className="w-screen h-screen bg-cover bg-[url(/images/bg.jpg)]"
        style={{ backgroundPositionY: bg }}
      ></motion.div>
    </section>
  );
};

export default Header;
