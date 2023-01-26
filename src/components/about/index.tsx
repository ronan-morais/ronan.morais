"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutSlider from "./slider";
import Image from "next/image";

const About = () => {
  const { scrollYProgress } = useScroll();

  return (
    <section className="container overflow-hidden flex max-w-full h-screen bg-stone-900 bg-contain relative justify-center items-center">
      <div className="absolute z-10 w-full flex">
        <div className="w-1/2 h-screen p-32">
          <div className="border-8 p-20">
            <Image
              src="/images/avatar.png"
              width="200"
              height="200"
              alt="Ronan Morais"
            />
          </div>
        </div>
        <div className="w-1/2 flex h-screen">
          <AboutSlider />
        </div>
      </div>
    </section>
  );
};

export default About;
