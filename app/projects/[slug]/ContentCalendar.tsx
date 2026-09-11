"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type CalendarPost = {
  day: string;
  platform: "Instagram" | "TikTok";
  format: string;
  pillar: string;
  caption: string;
  goal: string;
};

export type CalendarWeek = {
  label: string;
  focus: string;
  posts: CalendarPost[];
};

export type ContentCalendarData = {
  note: string;
  cadence: string;
  platforms: string[];
  weeks: CalendarWeek[];
};

const platformColor: Record<string, string> = {
  Instagram: "#E1306C",
  TikTok: "#25F4EE",
};

export function ContentCalendar({ calendar }: { calendar: ContentCalendarData }) {
  const [openWeek, setOpenWeek] = useState<number | null>(0);

  return (
    <div className="mt-16 md:mt-20">
      <div className="w-full h-[1px] bg-[#333] mb-12"></div>

      <h3 className="text-xl font-bold uppercase tracking-widest mb-4 font-monument">
        Content Calendar
      </h3>
      <p className="text-gray-400 font-inter text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
        {calendar.note}
      </p>

      <div className="flex flex-wrap gap-2 md:gap-3 mb-10 text-[10px] md:text-xs font-inter uppercase tracking-widest">
        <span className="border border-[#222] rounded-full px-3 py-1 text-gray-500">
          {calendar.cadence}
        </span>
        {calendar.platforms.map((p) => (
          <span
            key={p}
            className="border border-[#222] rounded-full px-3 py-1"
            style={{ color: platformColor[p] ?? "#999" }}
          >
            {p}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {calendar.weeks.map((week, wIndex) => {
          const isOpen = openWeek === wIndex;
          return (
            <div
              key={week.label}
              className="border border-[#222] rounded-lg overflow-hidden bg-[#0a0a0a]"
            >
              <button
                type="button"
                onClick={() => setOpenWeek(isOpen ? null : wIndex)}
                aria-expanded={isOpen}
                className="w-full flex justify-between items-center gap-4 px-5 py-4 md:px-6 md:py-5 text-left hover:bg-[#111] transition-colors"
              >
                <div>
                  <h4 className="font-monument text-sm md:text-base uppercase tracking-widest">
                    {week.label}
                  </h4>
                  <p className="text-gray-500 text-[10px] md:text-xs font-inter uppercase tracking-widest mt-1">
                    Focus: {week.focus} &middot; {week.posts.length} posts
                  </p>
                </div>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl leading-none text-gray-400 shrink-0"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="border-t border-[#222] overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#222]">
                      {week.posts.map((post, pIndex) => (
                        <div
                          key={pIndex}
                          className="bg-[#0a0a0a] p-4 md:p-5 flex flex-col gap-2"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[10px] font-inter uppercase tracking-widest text-gray-500">
                              {post.day}
                            </span>
                            <span
                              className="text-[10px] font-inter uppercase tracking-widest px-2 py-0.5 rounded-full border border-[#222] shrink-0"
                              style={{ color: platformColor[post.platform] ?? "#999" }}
                            >
                              {post.platform}
                            </span>
                          </div>
                          <span className="text-xs font-inter uppercase tracking-widest text-gray-300">
                            {post.format} &middot; {post.pillar}
                          </span>
                          <p className="text-gray-400 font-inter text-sm leading-relaxed">
                            {post.caption}
                          </p>
                          <span className="text-[10px] font-inter uppercase tracking-widest text-gray-600 mt-1">
                            Goal: {post.goal}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
