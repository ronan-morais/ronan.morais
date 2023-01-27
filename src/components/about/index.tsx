"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutSlider from "./slider";
import Image from "next/image";

const About = () => {
  const { scrollYProgress } = useScroll();

  return (
    <section className="container snap-start shrink flex-col md:flex-row overflow-hidden flex max-w-full h-screen bg-stone-900 bg-contain relative justify-center items-center">
      <div className="w-full md:w-1/2">
        <div className="p-12 sm:p-20 md:p-20 lg:p-36 lg:pr-20 xl:pr-36 lg:h-screen text-white">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-dmserif py-4 lg:py-10">
            About me
          </h3>
          <div className="text-gray-400 font-montserrat text-xs sm:text-base md:text-lg lg:text-lg">
            My name is Ronan Alves de Morais, I am 36 years old and Brazilian
            from Belo Horizonte, MG.
            <br />
            <br />I graduated as a graphic designer at INAP College, in 2011,
            and since then I have been working with branding, visual identity
            concept and creation of printed graphic pieces, but I love code and
            I migrate to UX/UI and dedicated myself as a front-end developer,
            and I have good skills in Html, Css, Javascript, with focus on React
            and Nextjs.
            <br />
            <br />I love people, technology, forests and &quot;pão de
            queijo&quot;.
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex h-full md:h-screen">
        <AboutSlider />
      </div>
    </section>
  );
};

export default About;
