"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

const hoverEffect = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

const tapEffect = {
  scale: 0.95
};

const boxes = [
  { id: 1, row: 1, col: 1, color: "border-custom border-10" },
  { id: 2, row: 1, col: 2, color: "border-custom border-10" },
  { id: 3, row: 1, col: 3, color: "border-custom border-10" },
  { id: 4, row: 1, col: 4, color: "border-custom border-10" },

  { id: 5, row: 2, col: 1, color: "bg-orange-500 border-custom border-10" },
  { id: 6, row: 2, col: 2, color: "border-custom border-10" },
  { id: 7, row: 2, col: 3, color: "border-custom border-10" },
  { id: 8, row: 2, col: 4, color: "border-custom border-10" },

  { id: 9, row: 3, col: 1, color: "border-custom border-10" },
  { id: 10, row: 3, col: 2, color: "bg-yellow-400" },
  { id: 11, row: 3, col: 3, color: "border-custom border-10" },
  { id: 12, row: 3, col: 4, color: "border-custom border-10" },

  { id: 13, row: 4, col: 1, color: "border-custom border-10" },
  { id: 14, row: 4, col: 2, color: "border-custom border-10" },
  { 
    id: 15, 
    row: 4, 
    col: 3, 
    color: "bg-[#00143F] text-white flex items-center justify-center text-sm font-medium",
    text: "Talk to an Agent" 
  },
  { id: 16, row: 4, col: 4, color: "border-custom border-10" },
];

export default function ImageGrid() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[#00143F] flex items-center justify-center px-4 py-10"
    >
      <motion.div 
        variants={container}
        className="relative w-full max-w-6xl aspect-[4/3] overflow-hidden rounded"
      >
        {/* Background image with fade-in animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/agent.svg"
            alt="Agent"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Animated grid overlay */}
        <motion.div 
          variants={container}
          className="absolute inset-0 grid grid-cols-4 grid-rows-4 z-10"
        >
          {boxes.map((box) => (
            <motion.div
              key={box.id}
              variants={item}
              whileHover={hoverEffect}
              whileTap={tapEffect}
              className={`border border-blue-900 ${box.color || "bg-transparent"}`}
            >
              {box.text && (
                <motion.div 
                  className="w-full h-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  {box.text}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}