"use client";

import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Typewriter Component
export const Typewriter = ({ words, className, cursorClassName, smooth = false }) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  return smooth ? (
    <TypewriterSmooth wordsArray={wordsArray} className={className} cursorClassName={cursorClassName} />
  ) : (
    <TypewriterEffect wordsArray={wordsArray} className={className} cursorClassName={cursorClassName} />
  );
};

// Standard Typewriter Effect
const TypewriterEffect = ({ wordsArray, className, cursorClassName }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { display: "inline-block", opacity: 1, width: "fit-content" },
        { duration: 0.3, delay: stagger(0.1), ease: "easeInOut" }
      );
    }
  }, [isInView]);

  return (
    <div ref={scope} className={cn("text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center", className)}>
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span key={`char-${index}`} className={cn("opacity-0 hidden dark:text-white text-black", word.className)}>
              {char}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>  
        </div>
      ))}
      <Cursor cursorClassName={cursorClassName} />
    </div>
  );
};

// Smooth Typewriter Effect
const TypewriterSmooth = ({ wordsArray, className, cursorClassName }) => {
  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 1 }}
      >
        <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
          {wordsArray.map((word, idx) => (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span key={`char-${index}`} className={cn("dark:text-white text-black", word.className)}>
                  {char}
                </span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </div>
          ))}
        </div>
      </motion.div>
      <Cursor cursorClassName={cursorClassName} />
    </div>
  );
};


// Cursor Component
const Cursor = ({ cursorClassName }) => (
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
    className={cn("inline-block w-[4px] h-4 sm:h-6 lg:h-10 bg-blue-500", cursorClassName)}
  />
);

export default Typewriter;
