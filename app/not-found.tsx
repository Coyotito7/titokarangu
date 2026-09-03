"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col justify-center items-center px-6 overflow-hidden relative">
      
      {/* Massive subtle background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <h1 className="text-[15rem] md:text-[30rem] font-bold font-monument">404</h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-4 font-monument">
            Signal Lost
          </h2>
        </motion.div>

        <p className="text-gray-400 font-inter mb-10 max-w-md mx-auto uppercase tracking-widest text-xs md:text-sm leading-relaxed">
          The page you are looking for has been moved, deleted, or never existed in this production run.
        </p>
        
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border border-white bg-white text-black px-8 py-4 uppercase tracking-widest font-bold font-inter text-xs hover:bg-transparent hover:text-white transition-colors rounded-sm cursor-pointer"
          >
            Return to Base
          </motion.div>
        </Link>
      </motion.div>

      {/* Subtle animated static/noise effect at the bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      </motion.div>
    </main>
  );
}