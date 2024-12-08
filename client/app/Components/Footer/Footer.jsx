"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
    <div className="w-full h-1 bg-gradient-to-r from-black via-red-600  via-red-600 via-red-600 to-black"></div>
      <footer>
        <div className="bg-black h-48  items-center text-center   ">
          <h1 className="text-white text-lg md:text-xl pt-20">
            Copyright © 2024, DevWays & Pinster Games. All rights reserved.
          </h1>
        </div>
      </footer>
    </>
  );
}
