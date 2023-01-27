"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutSlider from "./slider";
import Image from "next/image";

const About = () => {
  const { scrollYProgress } = useScroll();

  return (
    <section className="container snap-start flex-col md:flex-row overflow-hidden flex max-w-full h-screen bg-stone-900 bg-contain relative justify-center items-center">
      <div className="w-full md:w-1/2">
        <div className="p-12 lg:p-44 lg:pr-30 h-full lg:h-screen text-white">
          <h3 className="text-3xl lg:text-6xl font-dmserif py-4 lg:py-10">About me</h3>
          <div className="text-gray-400 font-montserrat text-xs lg:text-2xl">
            My name is Ronan Alves de Morais, I am 36 years old and Brazilian
            from Belo Horizonte, MG.
            <br />
            <br />I graduated as a graphic designer at INAP College, in 2011, and
            since then I have been working with branding, visual identity
            concept and creation of printed graphic pieces, but I love code and
            I dedicated myself as a front-end developer, and I have good skills
            in Html, Css, Javascript, with focus on React and Nextjs.
            <br />
            <br />I love people, technology, forests and &quot;pão de
            queijo&quot;.
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex h-[50vh] md:h-screen">
        <AboutSlider />
      </div>
    </section>
  );
};

export default About;
