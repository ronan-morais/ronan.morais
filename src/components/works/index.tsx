"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const Works = () => {
  const { scrollYProgress } = useScroll();
  const bg = useTransform(scrollYProgress, [0, 1], ["-1000px", "500px"], {
    clamp: false,
  });
  return (
    <motion.section
      className="container overflow-hidden flex max-w-full h-screen bg-[url(/images/bgworks.jpg)] bg-[#DEDDED] bg-right-bottom bg-no-repeat bg-contain relative"
      style={{
        backgroundPositionY: bg,
      }}
    >
      works
    </motion.section>
  );
};

export default Works;
