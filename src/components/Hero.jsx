"use client";

import Typewriter from "react-typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex-grow flex items-center justify-center text-center bg-indigo-600 text-white min-h-screen pt-20 w-full">
      <div className="max-w-2xl w-full px-4">
        <h2 className="text-4xl font-bold leading-tight drop-shadow-lg">AI-Powered <span className="text-yellow-400">MedScan - AI</span>        </h2>
        <p className="mt-6 text-xl opacity-90">
          Upload and analyze medical images using cutting-edge AI technology for faster and more accurate diagnostics.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold text-lg transition-transform shadow-lg"
        >
          Upload Image
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
