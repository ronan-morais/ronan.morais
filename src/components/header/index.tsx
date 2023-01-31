"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Logo from "./logo";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const bg = useTransform(scrollYProgress, [0, 1], ["0px", "1000px"]);
  const left = useTransform(scrollYProgress, [0, 1], ["100%", "-1600px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 2]);
  const brandPosition = useTransform(scrollYProgress, [0, 1], ["25%", "180%"]);

  return (
    <section className="container snap-start snap-always shrink-0 overflow-hidden flex max-w-full h-screen bg-black bg-contain relative justify-center items-center">
      <motion.div
        className="absolute z-10 w-full flex pl-12 sm:px-20 lg:px-28"
        style={{ top: brandPosition }}
      >
        <div>
          <Logo />
          <motion.h1
            className="text-white pt-7 lg:absolute overflow-hidden lg:whitespace-nowrap font-montserrat font-black text-[18vw] lg:text-[270px] leading-[0.9em] uppercase tracking-tight"
            style={{
              left: left,
            }}
          >
            Ronan Morais{" "}
            <span className="hidden lg:inline-flex">
              Ronan Morais Ronan Morais
            </span>
          </motion.h1>
          <h2 className="text-white pt-3 lg:pt-[300px] lg:absolute font-dmserif text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-1">
            Graphic Designer and <br className="md:hidden" />
            Front-End Developer
          </h2>
        </div>
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0 bg-black"
        style={{ opacity: opacity }}
      ></motion.div>
      <motion.div
        className="w-screen h-screen bg-cover bg-[url(/images/bg-min.jpg)] bg-center"
        style={{ backgroundPositionY: bg }}
      ></motion.div>
    </section>
  );
};
export default Header;
