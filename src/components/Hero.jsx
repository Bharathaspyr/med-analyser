"use client";
import { Typewriter } from ".././ui/typewriter"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-grow flex items-center justify-center text-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white min-h-screen pt-20 w-full">
      <div className="max-w-2xl w-full px-4">
        <Typewriter
          words={[
            { text: "AI-Powered ", className: "text-white" },
            { text: " MedScan - AI", className: "text-yellow-400" }
          ]}
          className="text-4xl font-bold leading-tight drop-shadow-lg"
          smooth
        />
        <p className="mt-6 text-xl opacity-90">
          Upload and analyze medical images using cutting-edge AI technology for faster and more accurate diagnostics.
        </p>
        <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate("/login")} 
      className="mt-8 px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold text-lg transition-transform shadow-lg"
    >
      Upload Image
    </motion.button>
      </div>
    </div>
  );
};

export default Hero;
