export interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
  images: string[];
  link?: string;
  github?: string;
  category?: string;
  aspectRatio?: "16:9" | "9:16" | "1:1";
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "ADTO Event Booking System",
    description:
      "A university-wide event booking management system for Ateneo de Davao University, featuring scalable state management and variant systems. Integrated with TanStack Query, Zustand, and CVA for complex workflows.",
    skills: [
      "NextJS",
      "Radix UI",
      "TanStack Query",
      "Zustand",
      "CVA",
      "Supabase",
    ],
    images: ["/images/portfolio-images/adto/adto.webp"],
    category: "Enterprise Web",
    aspectRatio: "16:9",
    github: "https://github.com/SAMAHAN-Systems-Development/adto-admin",
  },
  {
    id: 2,
    title: "Eizou Films Landing Page",
    description:
      "A high-performance landing page for a film production house, integrated with Sanity CMS for dynamic content and Calendly for automated client booking. Built for a seamless user experience.",
    skills: ["NextJS", "Tailwind CSS", "Sanity CMS", "Calendly"],
    images: ["/images/portfolio-images/eizou-films/eizou-films.webp"],
    category: "Professional Services",
    aspectRatio: "9:16",
    link: "https://eizoufilms.studio",
  },
  {
    id: 3,
    title: "ACMS (Crowd Management)",
    description:
      "The Automated Crowd Management System developed for IT Week. Leverages Next.js and Supabase to streamline event crowd tracking and staff coordination with a modular UI.",
    skills: ["NextJS", "Radix UI", "Storybook", "Supabase"],
    images: ["/images/portfolio-images/acms/acms.webp"],
    category: "System Dev",
    aspectRatio: "1:1",
    github: "https://github.com/SAMAHAN-Systems-Development/ACMS-frontend-2023",
  },
  {
    id: 4,
    title: "SAMAHAN Palaro 2024",
    description:
      "A responsive public-facing portal for university sports events. Delivering an accessible interface with real-time updates for tournament brackets and schedules.",
    skills: ["NextJS", "Tailwind CSS", "Radix UI", "Supabase", "Storybook"],
    images: ["/images/portfolio-images/palaro-2024/palaro-2024.webp"],
    category: "Event Platform",
    aspectRatio: "16:9",
    github:
      "https://github.com/orgs/SAMAHAN-Systems-Development/projects/14?pane=issue&itemId=84902352&issue=SAMAHAN-Systems-Development|samahan-palaro-2024|8",
  },
  {
    id: 5,
    title: "SAMAHAN All for more",
    description:
      "Official campaign platform for student government. Leverages a consistent and reusable component library to maintain brand identity across various student initiatives.",
    skills: ["NextJS", "Tailwind CSS", "Radix UI", "Storybook", "Supabase"],
    images: ["/images/portfolio-images/samahan-all-for-more/home-page.webp"],
    link: "https://samahan.addu.edu.ph",
    category: "Full Stack Web",
    aspectRatio: "1:1",
    github:
      "https://github.com/SAMAHAN-Systems-Development/samahan-all-for-more-frontend",
  },
  {
    id: 6,
    title: "SAMAHAN Communications",
    description:
      "A dedicated newsfeed platform for student government announcements, built with a focus on load performance, CVA variant management, and modular architecture.",
    skills: [
      "NextJS",
      "Tailwind CSS",
      "Radix UI",
      "CVA",
      "Storybook",
      "Supabase",
    ],
    images: ["/images/portfolio-images/samahan-comms/samahan-comms-cover.webp"],
    category: "News Platform",
    aspectRatio: "1:1",
    github:
      "https://github.com/SAMAHAN-Systems-Development/SAMAHAN-Newsfeed-Frontend",
  },
  {
    id: 7,
    title: "Cruzalloma Farm Landing",
    description:
      "A business-focused landing page for a local farm, managing the end-to-end development from initial planning through to final deployment and delivery.",
    skills: ["React", "Tailwind CSS", "Project Management"],
    images: ["/images/portfolio-images/cruzalloma/cruzalloma.webp"],
    category: "Client Project",
    aspectRatio: "1:1",
  },
  {
    id: 8,
    title: "Chain Reaction: Atom Supreme",
    description:
      "A colorful, modern revamp of the classic strategy game. Features explosive animations and strategic chain reaction mechanics for a high-energy mobile experience.",
    skills: ["Android", "Game Design", "Graphics", "Mobile Development"],
    images: [
      "/images/portfolio-images/chain-reaction-game/gameplay.webp",
      "/images/portfolio-images/chain-reaction-game/main-menu.webp",
      "/images/portfolio-images/chain-reaction-game/maps.webp",
      "/images/portfolio-images/chain-reaction-game/maps-2.webp",
      "/images/portfolio-images/chain-reaction-game/multiple-players-1.webp",
      "/images/portfolio-images/chain-reaction-game/multiple-players-2.webp",
      "/images/portfolio-images/chain-reaction-game/victory.webp",
    ],
    link: "https://play.google.com/store/apps/details?id=org.MacchiMatchaProductions.ChainReactionAtomRevampedSupreme",
    category: "Game Dev",
    aspectRatio: "9:16",
  },
  {
    id: 9,
    title: "Dulaugon Blacksmith Landing",
    description:
      "A landing page for a traditional blacksmithing business, focusing on showcasing craftsmanship and managing customer inquiries through a clean interface.",
    skills: ["NextJS", "Tailwind CSS"],
    images: [
      "/images/portfolio-images/dulaugon-blacksmith/dulaugon-blacksmith.webp",
      "/images/portfolio-images/dulaugon-blacksmith/dulaugon-blacksmith-cover.webp",
    ],
    category: "Professional Services",
    aspectRatio: "9:16",
    link: "https://dulaugon-blacksmith.com",
  },
  {
    id: 10,
    title: "KabayanGroup Business Site",
    description:
      "A comprehensive business website built on WordPress, tailored to allow non-technical clients to easily manage and update their online presence.",
    skills: ["WordPress", "Business Solutions"],
    images: [
      "/images/portfolio-images/kabayan-group/kabayan-group.webp",
      "/images/portfolio-images/kabayan-group/kabayan-group-cover.webp",
    ],
    category: "Business Site",
    aspectRatio: "9:16",
    link: "https://kabayangroup.ae/",
  },
  {
    id: 11,
    title: "MadePoies Official Website",
    description:
      "The official agency website for MadePoies, featuring contact form integration with EmailJS to facilitate direct client inquiries and lead generation.",
    skills: ["NextJS", "Tailwind CSS", "EmailJS"],
    images: [
      "/images/portfolio-images/madepoies/madepoies-hero.webp",
      "/images/portfolio-images/madepoies/madepoies-works.webp",
      "/images/portfolio-images/madepoies/madepoies-cta.webp",
    ],
    category: "Agency Portfolio",
    aspectRatio: "16:9",
    link: "https://madepoies.com",
  },

  {
    id: 13,
    title: "Morse Code Torch",
    description:
      "A mobile utility app that translates text into Morse code signals using the device's flashlight. Includes message history and saved transmission presets.",
    skills: ["Mobile Development", "UI Design"],
    images: [
      "/images/portfolio-images/morse-code-torch/home-page.webp",
      "/images/portfolio-images/morse-code-torch/morse-code-write.webp",
      "/images/portfolio-images/morse-code-torch/save-history.webp",
      "/images/portfolio-images/morse-code-torch/save.webp",
    ],
    category: "Mobile Utility",
    aspectRatio: "9:16",
    github: "https://github.com/GuyWithBag/morse_code_torch",
  },
  {
    id: 14,
    title: "Sonic Stream Music Player",
    description:
      "A sleek, gesture-driven music player featuring drag-and-drop playlist management, robust search capabilities, and a personalized settings interface.",
    skills: ["Mobile Development", "Audio Engineering", "UI/UX"],
    images: [
      "/images/portfolio-images/music-player/audio-player.webp",
      "/images/portfolio-images/music-player/playlist-list.webp",
      "/images/portfolio-images/music-player/search-results.webp",
      "/images/portfolio-images/music-player/song-list-drag.webp",
      "/images/portfolio-images/music-player/song-more-options.webp",
    ],
    category: "Media App",
    aspectRatio: "9:16",
    github: "https://github.com/GuyWithBag/my_music_player",
  },
];
