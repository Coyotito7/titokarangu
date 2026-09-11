import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectContent, type Project } from "./ProjectContent";

// Project database for the detail pages
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
  },
  "coterie-content-calendar": {
    title: "The Coterie — Content Calendar",
    role: "Social Media Strategy — Concept Demo",
    tag: "Content Strategy",
    overview: "A concept content calendar built to demonstrate end-to-end social campaign planning for The Coterie, the fashion x Afro house event run under Bunka Entertainment. Maps a full pre-event to post-event arc across Instagram and TikTok — announcement, lineup reveals, ticket-conversion pushes, live day-of coverage, and a recap phase — with a caption idea and goal attached to every post. Built as a planning sample rather than a delivered client campaign, to showcase content strategy, platform-specific thinking, and campaign structuring.",
    stack: ["Content Strategy", "Copywriting", "Instagram", "TikTok", "Campaign Planning"],
    calendar: {
      note: "A 4-week concept campaign for The Coterie, structured around one goal per phase: build awareness, drive engagement, convert to ticket sales, then sustain the community after the event.",
      cadence: "~4-5 posts / week",
      platforms: ["Instagram", "TikTok"],
      weeks: [
        {
          label: "Week 1 — Announce & Tease",
          focus: "Awareness",
          posts: [
            {
              day: "Mon",
              platform: "Instagram",
              format: "Carousel",
              pillar: "Announcement",
              caption: "Save the date. The Coterie returns — where fashion meets Afro house. Date & venue drop this week.",
              goal: "Awareness",
            },
            {
              day: "Wed",
              platform: "TikTok",
              format: "Voiceover clip",
              pillar: "Behind the Scenes",
              caption: "Quick founder voiceover on the vision behind The Coterie — why fashion and Afro house, why now.",
              goal: "Awareness / Reach",
            },
            {
              day: "Fri",
              platform: "Instagram",
              format: "Story poll",
              pillar: "Engagement",
              caption: "Venue reveal countdown — 'Guess the venue' interactive poll sticker across 3 story frames.",
              goal: "Engagement",
            },
          ],
        },
        {
          label: "Week 2 — Lineup & Fashion",
          focus: "Engagement",
          posts: [
            {
              day: "Mon",
              platform: "Instagram",
              format: "Reel",
              pillar: "Artist Spotlight",
              caption: "First lineup reveal — a short cut of the headline DJ's set with their name drop as the payoff.",
              goal: "Awareness / Credibility",
            },
            {
              day: "Wed",
              platform: "Instagram",
              format: "Carousel",
              pillar: "Fashion Edit",
              caption: "The dress code, decoded — a mood board carousel: 'Afro-luxe' outfit inspiration for the night.",
              goal: "Engagement",
            },
            {
              day: "Thu",
              platform: "TikTok",
              format: "GRWM",
              pillar: "Fashion Edit",
              caption: "\"Get ready with me for The Coterie\" — styling clip using pieces from a local designer partner.",
              goal: "Reach",
            },
            {
              day: "Sat",
              platform: "Instagram",
              format: "Post",
              pillar: "Artist Spotlight",
              caption: "Second lineup reveal — supporting act announcement with a one-line bio and a teaser track.",
              goal: "Awareness",
            },
          ],
        },
        {
          label: "Week 3 — Countdown & Conversion",
          focus: "Ticket sales",
          posts: [
            {
              day: "Mon",
              platform: "Instagram",
              format: "Story countdown",
              pillar: "Ticket Push",
              caption: "3 days left at early-bird pricing — countdown sticker on story, swipe-up to the ticket link.",
              goal: "Conversion",
            },
            {
              day: "Tue",
              platform: "TikTok",
              format: "Trend audio",
              pillar: "Hype",
              caption: "\"POV: you're getting ready for The Coterie\" using a trending audio, cut to venue/lineup teasers.",
              goal: "Reach / Conversion",
            },
            {
              day: "Thu",
              platform: "Instagram",
              format: "Reel",
              pillar: "Giveaway",
              caption: "Flash giveaway — tag 2 friends for a shot at a free double ticket, 24-hour window.",
              goal: "Conversion / Engagement",
            },
            {
              day: "Fri",
              platform: "Instagram",
              format: "Story",
              pillar: "Hype",
              caption: "\"Doors open tomorrow\" — countdown sticker plus a reminder of the dress code and set times.",
              goal: "Conversion",
            },
          ],
        },
        {
          label: "Event Week — Live & Recap",
          focus: "Community",
          posts: [
            {
              day: "Sat (Event Day)",
              platform: "Instagram",
              format: "Story series",
              pillar: "Live Coverage",
              caption: "Real-time story coverage — arrivals, fashion, and set clips posted throughout the night.",
              goal: "Real-time engagement",
            },
            {
              day: "Sun (+1)",
              platform: "Instagram",
              format: "Reel",
              pillar: "Recap",
              caption: "\"Best moments\" highlight edit — fashion, crowd energy, and the headline set, cut to length.",
              goal: "Retention / Brand",
            },
            {
              day: "Tue (+3)",
              platform: "Instagram",
              format: "Carousel",
              pillar: "UGC / Community",
              caption: "Thank-you post with a roundup of attendee photos and tagged content from the night.",
              goal: "Loyalty / Advocacy",
            },
          ],
        },
      ],
    },
  },
} satisfies Record<string, Project>;

type ProjectSlug = keyof typeof projectDetails;

function getProject(slug: string) {
  return projectDetails[slug as ProjectSlug];
}

// Pre-render every known project at build time instead of on-demand
export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

// Per-project <title>/description/OG tags for link shares
export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project Not Found — Tito Karangu" };
  }

  const title = `${project.title} — Tito Karangu`;

  return {
    title,
    description: project.overview,
    openGraph: {
      title,
      description: project.overview,
    },
  };
}

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    notFound(); // Triggers your custom 404 page if the URL is wrong
  }

  return <ProjectContent project={project} />;
}
