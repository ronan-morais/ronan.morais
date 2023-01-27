"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutSlider from "./slider";
import Image from "next/image";

const About = () => {
  const { scrollYProgress } = useScroll();

  return (
    <section className="container snap-start flex-col md:flex-row overflow-hidden flex max-w-full h-screen bg-stone-900 bg-contain relative justify-center items-center">
      <div className="w-full lg:w-1/2 h-full">
        <div className="p-12 lg:p-44 h-[70vh] lg:h-screen text-white">
          <h3 className="text-3xl lg:text-5xl font-dmserif pb-3">About me</h3>
          <div className="text-gray-400">
            My name is Ronan Alves de Morais, I am 36 years old and Brazilian
            from Belo Horizonte, MG. I graduated as a graphic designer at INAP
            College in 2013 and since then I have been working as a front-end
            developer, with skills in html, css, javascript, react and next. I
            like people, technology, forest and &quot;pão de queijo&quot;.
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex h-[30vh] lg:h-screen">
        <AboutSlider />
      </div>
    </section>
  );
};

export default About;
