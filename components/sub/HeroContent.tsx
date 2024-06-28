"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import c from "@/public/c.png"

const HeroContent = () => {

  
    // const handleClick = () => { 
    //   alert('Button clicked!');
    // };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Web Developer Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hello, its
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Darshan{" "}
            </span>
            Choudhary
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I'm a Web developer who loves{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-xl font-semibold">
            UI/UX design
          </span>
          , with knowledge of the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-xl font-semibold">
            MERN
          </span>{" "}
          stack, and enjoys problem-solving in Data Structures and Algorithms
          (DSA).
        </motion.p>
        {/* <button
      className="py-2 button-primary text-center text-white rounded-lg max-w-[200px] cursor-pointer"
      onClick={handleClick}
    >
      darshan
    </button> */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="https://drive.google.com/file/d/10Odp-3W2nEFqt0zUkzwSc_j24oOIxXAN/view?usp=drive_link"
          // download
          className="py-2 button-primary text-center text-white text-lg cursor-pointer rounded-lg max-w-[150px]"
        >
          Resume
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
