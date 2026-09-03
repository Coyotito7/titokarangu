"use client";

import { motion } from "framer-motion";
// Ensure your local Monument Extended and Google Inter fonts are configured in layout.tsx and passed as CSS variables

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center z-10"
        >
          {/* Apply your Monument Extended CSS variable here */}
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tighter mb-4 font-monument">
            Tito Karangu
          </h1>
          
          {/* Apply your Inter CSS variable here */}
          <h2 className="text-sm md:text-lg lg:text-xl uppercase tracking-[0.3em] text-gray-400 font-inter">
            Technical Event Director & Creative Producer
          </h2>
        </motion.div>

        {/* Subtle Camera Element / Scroll Cue */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-10 md:bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
          </svg>
        </motion.div>
      </section>
    </main>
  );
}