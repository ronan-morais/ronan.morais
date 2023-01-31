"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "../header/logo";

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const bg = useTransform(scrollYProgress, [0.8, 1], ["80%", "100%"]);
  const size = useTransform(scrollYProgress, [0.8, 1], ["110%", "130%"]);

  return (
    <motion.section className="container flex max-w-full h-[50vh]">
      <div className="p-10 sm:p-20 lg:px-40 w-full text-gray-600">
        <h1 className="mt-7 pb-1 overflow-hidden lg:whitespace-nowrap font-dmserif font-thin text-[18vw] lg:text-5xl tracking-tight">
          Say Hi!
        </h1>
        <div>
          <nav className="text-sm lg:mt-6 lg:text-2xl font-montserrat font-medium lg:w-1/2">
            <a
              className="transition-all duration-300 ease-in-out"
              href="mailto:hello@ronanmorais.com"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                hello@ronanmorais.com
              </span>
            </a>
            {/* <br />
          <a href="https://instagram.com/ronan-morais">instagram.com/ronan-morais</a> */}
            <br />
            <a
              className="transition-all duration-300 ease-in-out"
              href="https://linkedin.com/in/ronanmorais"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                linkedin.com/in/ronanmorais
              </span>
            </a>
          </nav>
          {/* <div className="w-1/2 border">
            <Logo className="mt-10 w-[100px]" />
          </div> */}
        </div>
        {/* <LetsTalk /> */}
      </div>
    </motion.section>
  );
};

export default Contact;
