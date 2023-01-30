"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import WorksSlider from "./slider";

const Works = () => {
  const { scrollYProgress } = useScroll();
  const bg = useTransform(scrollYProgress, [0, 1], ["-700", "500px"], {
    clamp: false,
  });
  return (
    <motion.section
      className="container flex max-w-full h-screen bg-[url(/images/bgworks.jpg)] bg-[#DEDDED] bg-right-bottom bg-no-repeat bg-size-[100%]"
      style={{
        backgroundPositionY: bg,
      }}
    >
      <div className="w-full flex flex-col">
        <div className="m-12 sm:mx-20 md:mx-20 lg:mx-40">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-dmserif py-4 lg:py-10 text-gray-600 mix-blend-multiply">
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
