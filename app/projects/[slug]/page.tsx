"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

// Expanded project database for the detail pages
const projectDetails = {
  "camp-fearless": {
    title: "Camp Fearless",
    role: "Technical Director & Event Producer",
    tag: "Live Production",
    overview: "Comprehensive technical direction and event production for Camp Fearless. Orchestrated stage cues, managed media teams, and executed seamless operational workflows to ensure a flawless live experience.",
    stack: ["Stage Management", "Live Broadcast", "Team Coordination", "Technical Cueing"],
  },
  "the-coterie": {
    title: "The Coterie",
    role: "Founder & Lead Organizer | Bunka Entertainment",
    tag: "Event Management",
    overview: "A premier event merging high fashion and Afro house music in Nairobi. Spearheaded all logistical operations including venue scouting, artist contracts, dynamic ticketing structures, and strategic brand partnerships under Bunka Entertainment.",
    stack: ["Event Logistics", "Brand Partnerships", "Artist Relations", "Ticketing Strategy"],
  },
  "zuru": {
    title: "Zuru",
    role: "Full-Stack Developer",
    tag: "Application",
    overview: "A comprehensive location-based platform designed for discovering and reviewing local businesses across Kenya. Engineered with a robust spatial database to handle proximity queries and real-time mapping.",
    stack: ["Flutter", "Dart", "Supabase", "PostGIS"],
  },
  "taste-trail": {
    title: "Taste Trail",
    role: "Full-Stack Developer",
    tag: "Application",
    overview: "A dynamic restaurant rating and discovery application. Built from the ground up utilizing a custom relational database and integrated with open-source mapping for accurate location routing.",
    stack: ["Flutter", "PHP", "MySQL", "OpenStreetMap API"],
  }
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const project = projectDetails[slug as keyof typeof projectDetails];

  if (!project) {
    notFound(); // Triggers your custom 404 page if the URL is wrong
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black pt-32 px-6 pb-24">
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#222] px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-monument text-xs md:text-sm tracking-widest font-bold uppercase hover:text-gray-400 transition-colors">
          ← Return to Base
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs font-inter uppercase tracking-widest bg-white text-black px-3 py-1 rounded-full mb-6 inline-block">
            {project.tag}
          </span>
          <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-wide mb-4 font-monument">
            {project.title}
          </h1>
          <h2 className="text-sm md:text-lg text-gray-400 mb-12 font-inter uppercase tracking-widest">
            {project.role}
          </h2>
          
          <div className="w-full h-[1px] bg-[#333] mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold uppercase tracking-widest mb-6 font-monument">Overview</h3>
              <p className="text-gray-300 font-inter leading-relaxed text-lg">
                {project.overview}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-6 font-monument">Tech & Roles</h3>
              <ul className="flex flex-col gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-gray-400 font-inter text-sm uppercase tracking-widest border border-[#222] p-3 rounded-sm text-center">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}