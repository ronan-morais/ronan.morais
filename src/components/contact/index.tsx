"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "../header/logo";

const Contact = () => {

  return (
    <motion.section className="container snap-center snap-always flex max-w-full h-screen lg:h-[50vh]">
      <div className="p-10 sm:p-20 lg:px-40 w-full text-gray-600">
        <h1 className="mt-7 pb-1 overflow-hidden lg:whitespace-nowrap font-dmserif font-thin text-[18vw] lg:text-5xl tracking-tight mix-blend-multiply">
          Say Hi!
        </h1>
        <nav className="text-sm md:text-lg lg:mt-6 lg:text-2xl font-montserrat font-medium lg:w-1/2 mix-blend-multiply">
          <div>
            +55 31 99663-8481
          </div>
          <a
            className="transition-all duration-300 ease-in-out"
            href="mailto:hello@ronanmorais.com" target="_blank" rel="noreferrer"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              hello@ronanmorais.com
            </span>
          </a>
          <br />
          <a
            className="transition-all duration-300 ease-in-out"
            href="https://linkedin.com/in/ronanmorais" target="_blank" rel="noreferrer"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              linkedin.com/in/ronanmorais
            </span>
          </a>
          <br />
          <a
            className="transition-all duration-300 ease-in-out"
            href="https://github.com/ronan-morais" target="_blank" rel="noreferrer"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              github.com/ronan-morais
            </span>
          </a>
        </nav>
        <div className="mt-10">
          <Logo className="w-full mix-blend-soft-light md:hidden" />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
