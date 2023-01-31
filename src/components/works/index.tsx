"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import WorksSlider from "./slider";

const Works = () => {
  return (
    <motion.section className="container snap-start snap-always flex max-w-full h-screen">
      <div className="w-full flex flex-col">
        <div className="m-6 sm:mx-20 md:mx-20 lg:mx-40">
          <h3 className="text-3xl md:text-4xl lg:text-5xl ml-6 font-dmserif py-4 lg:py-10 text-gray-600 mix-blend-multiply">
            My works
          </h3>
          <div className="rounded-2xl overflow-clip bg-white/60 flex flex-col h-[80vh] lg:h-[70vh] backdrop-blur-lg">
            <WorksSlider />
          </div>
          <div id="pagination" className="flex justify-center pt-4"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Works;
