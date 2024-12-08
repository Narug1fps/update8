"use client";
import { motion } from "framer-motion";
import TypeIt from "typeit-react";

export default function Games() {
  return (
    <>
      <div className="bg-black w-full h-48 ">
        <div className="w-full h-1 bg-gradient-to-r from-black via-red-600  via-red-600 via-red-600 to-black"></div>
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 3 }}
        >
          <h1 className="bold text-center text-white mt-10  text-7xl  md:text-9xl">
            OUR GAMES
          </h1>
        </motion.div>
      </div>
    </>
  );
}
