"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const LetsTalk = () => {
  const { scrollYProgress } = useScroll();
  const bg = useTransform(scrollYProgress, [0.8, 1], ["80%", "100%"]);
  const size = useTransform(scrollYProgress, [0.8, 1], ["110%", "130%"]);

  return (
    <div className="rounded-3xl bg-gradient-to-tr from-slate-700 to-stone-700 w-full lg:w-1/2 p-6 lg:p-14 mt-8 lg:mt-16">
      <div className="flex flex-row justify-between">
        <h2 className="overflow-hidden flex lg:w-1/2 lg:whitespace-nowrap font-dmserif font-thin text-[8vw] lg:text-5xl leading-[0.9em] tracking-tight text-slate-100">
          Let&lsquo;s Talk!
        </h2>
        <h4 className="flex lg:w-1/2 justify-end font-montserrat text-xl lg:text-4xl font-light items-center text-stone-600 mix-blend-screen">
          1/6
        </h4>
      </div>
      <div className="mt-6 lg:mt-10 text-lg rounded-xl bg-white overflow-clip items-middle h-12">
        <form autoComplete="no">
          <input
            type="text"
            className="lg:p-6 lg:text-2xl bg-transparent font-montserrat w-full border-none caret-transparent outline-none bg-red-400"
            placeholder="What your name?"
          />
        </form>
      </div>
    </div>
  );
};

export default LetsTalk;
