"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const productionJourney = [
  {
    role: "Camera Operator",
    location: "Deliverance Church, Muirigo",
    description: "The very beginning. Learning the fundamentals of live camera operation and capturing the essence of a live service."
  },
  {
    role: "Camera Operator & Video Director",
    location: "Daystar University",
    description: "Stepping up to direct multi-camera setups, managing visual flow, and honing my technical production skills."
  },
  {
    role: "Junior Producer",
    location: "Mavuno Church, Hill City",
    description: "My current stage. Producing high-quality live events, managing technical teams, and overseeing the broadcast."
  }
];

const creativeJourney = [
  {
    role: "Tech Enthusiast",
    location: "High School",
    description: "Fell in love with computers and knew immediately that I wanted to pursue a tech-related path."
  },
  {
    role: "Computer Science Student",
    location: "Daystar University",
    description: "Diving into code. Started learning how to build mobile and web applications while discovering my eye for graphic design and poster creation in the middle."
  },
  {
    role: "Creative Producer",
    location: "Present",
    description: "Merging code and design. Currently developing comprehensive web and mobile applications while crafting striking visual posters and graphics."
  }
];

const projects = [
  {
    title: "Camp Fearless",
    slug: "camp-fearless",
    role: "Technical Director & Event Producer",
    description: "Managed stage cues, media teams, and complex program schedules, executing seamless operational workflows and technical direction.",
    tag: "Live Production"
  },
  {
    title: "The Coterie",
    slug: "the-coterie",
    role: "Founder & Lead Organizer | Bunka Entertainment",
    description: "A premier event merging high fashion and Afro house music. Handled venue logistics, artist contracts, ticketing, and brand partnerships.",
    tag: "Event Management"
  },
  {
    title: "The Coterie — Content Calendar",
    slug: "coterie-content-calendar",
    role: "Social Media Strategy — Concept Demo",
    description: "A concept 4-week content calendar for The Coterie — announcement through post-event recap — mapping platform-specific posts, captions, and campaign goals.",
    tag: "Content Strategy"
  },
  {
    title: "Zuru",
    slug: "zuru",
    role: "Full-Stack Developer",
    description: "A location-based mobile and web application built with Flutter and Supabase for discovering and reviewing local businesses.",
    tag: "Application"
  },
  {
    title: "Taste Trail",
    slug: "taste-trail",
    role: "Full-Stack Developer",
    description: "A dynamic restaurant rating application engineered utilizing Flutter, PHP, MySQL, and OpenStreetMap integrations.",
    tag: "Application"
  }
];

const fireworkColors = ["#00FFFF", "#FF1493", "#FFD700", "#32CD32", "#FF4500", "#9400D3", "#00FFFF", "#FF1493", "#FFD700", "#32CD32", "#FF4500", "#9400D3"];

const contentPillars = ["Lifestyle"];
const creatorTools = ["Canva", "CapCut", "Trend-Spotting"];

const TimelineBlock = ({ item, index, direction }: { item: any, index: number, direction: "left" | "right" }) => (
  <div className="relative pb-12 md:pb-16 last:pb-0">
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 50 }}
      className="bg-[#111111] border border-[#222] p-5 md:p-6 rounded-lg relative overflow-hidden group hover:border-[#555] transition-colors"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-white opacity-20 group-hover:opacity-100 transition-opacity"></div>
      <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide mb-1 font-monument">{item.role}</h3>
      <h4 className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4 tracking-widest uppercase font-inter">{item.location}</h4>
      <p className="text-sm md:text-base text-gray-300 font-inter leading-relaxed">{item.description}</p>
    </motion.div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-white selection:text-black">
      
      {/* Sticky Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#222] px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-monument text-xs md:text-sm tracking-widest font-bold uppercase">
          Tito Karangu
        </a>
        <div className="flex gap-6 text-xs font-inter uppercase tracking-widest text-gray-400">
          <a href="#journey" className="hover:text-white transition-colors hidden sm:block">Journey</a>
          <a href="#works" className="hover:text-white transition-colors">Works</a>
          <a href="#social" className="hover:text-white transition-colors">Social</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section with Cinematic Background Image */}
      <section className="relative h-screen flex flex-col justify-center items-center px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpeg" 
            alt="Tito Karangu Hero Background" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-[#050505]/60 to-[#050505]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center z-10 w-full max-w-5xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter mb-4 font-monument leading-tight drop-shadow-2xl">
            Tito Karangu
          </h1>
          <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-300 font-inter px-2">
            Technical Event Director & Creative Producer
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-12 md:bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 z-10"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-10 md:h-10 text-gray-400 animate-bounce">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
          </svg>
        </motion.div>
      </section>

      {/* Dual Timeline Section */}
      <section id="journey" className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 relative scroll-mt-20">
        
        {/* Unified Central Line that fades out at the bottom */}
        <motion.div 
          initial={{ height: 0, opacity: 1 }}
          whileInView={{ height: "100%", opacity: [1, 1, 0] }}
          viewport={{ once: false, margin: "0px 0px -100px 0px" }}
          transition={{ 
            height: { duration: 1.5, ease: "easeInOut" },
            opacity: { delay: 1.2, duration: 0.3, ease: "easeOut" }
          }}
          className="absolute left-6 md:left-1/2 top-20 md:top-32 w-[2px] bg-gradient-to-b from-[#333] via-white to-white md:-translate-x-1/2 z-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 relative z-10">
          <div className="pl-8 md:pl-0">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              className="text-xl md:text-3xl font-bold mb-8 md:mb-12 uppercase tracking-widest font-monument border-b border-[#333] pb-4"
            >
              The Production Run
            </motion.h2>
            <div className="md:pr-12">
              {productionJourney.map((item, index) => (
                <TimelineBlock key={index} item={item} index={index} direction="left" />
              ))}
            </div>
          </div>

          <div className="pl-8 md:pl-0 mt-8 md:mt-0">
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              className="text-xl md:text-3xl font-bold mb-8 md:mb-12 uppercase tracking-widest font-monument border-b border-[#333] pb-4 md:text-right"
            >
              The Creative Stack
            </motion.h2>
            <div className="md:pl-12">
              {creativeJourney.map((item, index) => (
                <TimelineBlock key={index} item={item} index={index} direction="right" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Doodle Loop & Firework Burst */}
      <section className="w-full relative flex flex-col items-center pb-12 md:pb-16 overflow-hidden">
        <div className="relative w-full h-[200px] md:h-[300px] flex justify-center scale-75 md:scale-100 origin-top">
          <svg width="120" height="300" viewBox="0 0 120 300" className="absolute top-0 left-1/2 -translate-x-1/2 overflow-visible">
            <motion.path 
              d="M60 0 L58 85 C 145 90, 125 215, 55 205 C -5 195, 15 105, 62 95 L 60 300"
              fill="transparent"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 1 }}
              whileInView={{ pathLength: 1, opacity: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ 
                pathLength: { duration: 1.5, ease: "easeInOut" },
                opacity: { delay: 1.3, duration: 0.3, ease: "easeOut" }
              }}
            />
          </svg>

          <div className="absolute top-[300px] left-1/2 -translate-x-1/2 w-0 h-0 z-20">
            {fireworkColors.map((color, i) => (
              <motion.div
                key={i}
                initial={{ x: "-50%", y: "-50%", scale: 0, opacity: 0 }}
                whileInView={{
                  x: `calc(-50% + ${Math.cos((i * 30 * Math.PI) / 180) * 150}px)`,
                  y: `calc(-50% + ${Math.sin((i * 30 * Math.PI) / 180) * 150}px)`,
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                style={{ backgroundColor: color }}
                className="absolute w-2 h-2 rounded-full shadow-[0_0_15px_currentColor]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Reveal */}
      <section id="works" className="w-full relative flex flex-col items-center pb-20 md:pb-32 px-4 md:px-6 scroll-mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl w-full mt-8 md:mt-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-center uppercase tracking-widest font-monument">
            Selected Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Link href={`/projects/${project.slug}`} key={index} className="block group">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="bg-[#0a0a0a] border border-[#222] p-6 md:p-8 rounded-xl flex flex-col justify-between h-full hover:border-gray-400 cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] md:text-xs font-inter uppercase tracking-widest bg-white text-black px-3 py-1 rounded-full mb-4 md:mb-6 inline-block">
                      {project.tag}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-2 font-monument group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h3>
                    <h4 className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6 font-inter uppercase tracking-widest">
                      {project.role}
                    </h4>
                    <p className="text-sm md:text-base text-gray-400 font-inter leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Social & Content Section */}
      <section id="social" className="w-full relative flex flex-col items-center py-20 md:py-32 px-4 md:px-6 scroll-mt-20 bg-[#0a0a0a] border-y border-[#222]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl w-full"
        >
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[10px] md:text-xs font-inter uppercase tracking-widest bg-white text-black px-3 py-1 rounded-full mb-4 md:mb-6 inline-block">
              Social Media & Content
            </span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest font-monument">
              Beyond The Code
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            <div className="md:col-span-2">
              <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest mb-4 font-monument">
                The Story
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed text-base md:text-lg mb-4">
                Lifestyle content, unscripted. No strict niche, no overthinking the plan — just talking about whatever&apos;s actually on my mind. I got into content creation to be present online and have fun being myself, and that&apos;s still the whole approach: show up, talk, see what lands.
              </p>
              <p className="text-gray-400 font-inter leading-relaxed text-sm md:text-base mb-8">
                That same instinct for what&apos;s worth posting, and when, is what carries over into how I think about content strategy for brands and events — not just for myself.
              </p>

              <Link
                href="/projects/coterie-content-calendar"
                className="group inline-flex items-center gap-3 border border-[#333] hover:border-white rounded-lg px-5 py-4 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-inter uppercase tracking-widest text-gray-500 block mb-1">
                    Featured Case Study
                  </span>
                  <span className="font-monument text-sm md:text-base uppercase tracking-widest group-hover:text-gray-300 transition-colors">
                    The Coterie — Content Calendar →
                  </span>
                </div>
              </Link>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 font-monument text-gray-400">
                  Content Pillar
                </h3>
                <div className="flex flex-wrap gap-2">
                  {contentPillars.map((pillar) => (
                    <span
                      key={pillar}
                      className="text-xs font-inter uppercase tracking-widest border border-[#222] px-3 py-2 rounded-sm text-gray-300"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 font-monument text-gray-400">
                  Tools & Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {creatorTools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-inter uppercase tracking-widest border border-[#222] px-3 py-2 rounded-sm text-gray-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 font-monument text-gray-400">
                  Find Me
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.instagram.com/coyo_tito/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-600 bg-transparent text-white px-4 py-3 uppercase tracking-widest font-bold font-inter text-xs text-center rounded-sm hover:border-[#E1306c] hover:text-[#E1306c] transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.tiktok.com/@coyo_tito"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-600 bg-transparent text-white px-4 py-3 uppercase tracking-widest font-bold font-inter text-xs text-center rounded-sm hover:border-white hover:text-white transition-colors"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact & Footer Section */}
      <footer id="contact" className="w-full bg-[#0a0a0a] border-t border-[#222] py-16 md:py-24 px-4 md:px-6 relative overflow-hidden scroll-mt-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4 md:mb-6 font-monument">
              Let's Build Something Great
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-inter mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed px-4">
              Available for technical direction, live event production, and creative web development. Based in Nairobi, Kenya.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 w-full max-w-2xl px-4 md:px-0">
              <a 
                href="mailto:mburutito11@gmail.com" 
                className="w-full sm:flex-1 sm:min-w-[140px] border border-white bg-white text-black px-4 md:px-6 py-4 uppercase tracking-widest font-bold font-inter text-xs hover:bg-transparent hover:text-white transition-colors rounded-sm"
              >
                Email
              </a>
              <a 
                href="https://wa.me/254714617606" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:flex-1 sm:min-w-[140px] border border-gray-600 bg-transparent text-white px-4 md:px-6 py-4 uppercase tracking-widest font-bold font-inter text-xs hover:border-[#25D366] hover:text-[#25D366] transition-colors rounded-sm"
              >
                WhatsApp
              </a>
              <a 
                href="https://github.com/Coyotito7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:flex-1 sm:min-w-[140px] border border-gray-600 bg-transparent text-white px-4 md:px-6 py-4 uppercase tracking-widest font-bold font-inter text-xs hover:border-white transition-colors rounded-sm"
              >
                GitHub
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 w-full max-w-2xl mt-3 md:mt-4 px-4 md:px-0">
              <a 
                href="https://www.instagram.com/coyo_tito_?igsi=MW5mM3d6YnExcDJrYQ==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:flex-1 sm:min-w-[140px] border border-gray-600 bg-transparent text-white px-4 md:px-6 py-4 uppercase tracking-widest font-bold font-inter text-xs hover:border-[#E1306c] hover:text-[#E1306c] transition-colors rounded-sm"
              >
                Instagram
              </a>
             
            </div>

            {/* Download CV Button */}
            <div className="mt-12 md:mt-16 w-full flex justify-center px-4">
              <a 
                href="/Tito_Karangu_CV.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-gray-500 bg-[#111] text-gray-300 px-8 py-5 uppercase tracking-widest font-bold font-inter text-xs hover:border-white hover:text-white hover:bg-transparent transition-all rounded-sm group w-full sm:w-auto"
              >
                <span>View Résumé</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-16 md:mt-24 w-full flex justify-center border-t border-[#222] pt-8 text-[10px] md:text-xs font-inter tracking-widest uppercase text-gray-500"
          >
            <p>© {new Date().getFullYear()} Tito Karangu</p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
