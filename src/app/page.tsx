"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../components/header";
import About from "../components/about";
import Works from "../components/works";
import Contact from "../components/contact";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0.5, 1], ["0%", "105%"], {
    clamp: false,
  });

  return (
    <main className="snap-y snap-mandatory">
      <Header />
      <About />
      <motion.div
        className="bg-[url(/images/bgworks.jpg)] bg-[#DEDDED] bg-left-bottom md:bg-right-bottom bg-no-repeat bg-size-[100%] relative"
        style={{
          backgroundPositionY: bgY,
        }}
      >
        <Works />
        <Contact />
      </motion.div>
    </main>
  );
}
