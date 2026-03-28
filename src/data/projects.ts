export interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
  images: string[];
  link?: string;
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
    images: [
      "https://images.unsplash.com/photo-1505373633560-24831d407304?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540575861501-7ad058211a37?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Enterprise Web",
    aspectRatio: "16:9",
  },
  {
    id: 2,
    title: "Eizou Films Landing Page",
    description:
      "A high-performance landing page for a film production house, integrated with Sanity CMS for dynamic content and Calendly for automated client booking. Built for a seamless user experience.",
    skills: ["NextJS", "Tailwind CSS", "Sanity CMS", "Calendly"],
    images: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Professional Services",
    aspectRatio: "16:9",
  },
  {
    id: 3,
    title: "ACMS (Crowd Management)",
    description:
      "The Automated Crowd Management System developed for IT Week. Leverages Next.js and Supabase to streamline event crowd tracking and staff coordination with a modular UI.",
    skills: ["NextJS", "Radix UI", "Storybook", "Supabase"],
    images: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    ],
    category: "System Dev",
    aspectRatio: "16:9",
  },
  {
    id: 4,
    title: "Palaro Sports Event Site",
    description:
      "A responsive public-facing portal for university sports events. Delivering an accessible interface with real-time updates for tournament brackets and schedules.",
    skills: ["NextJS", "Tailwind CSS", "Radix UI", "Supabase", "Storybook"],
    images: [
      "https://images.unsplash.com/photo-1461891211039-4967d1c237e6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541252260730-0412e3e2108e?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Event Platform",
    aspectRatio: "16:9",
  },
  {
    id: 5,
    title: "SAMAHAN All for more",
    description:
      "Official campaign platform for student government. Leverages a consistent and reusable component library to maintain brand identity across various student initiatives.",
    skills: ["NextJS", "Tailwind CSS", "Radix UI", "Storybook", "Supabase"],
    images: ["/images/portfolio-images/samahan-all-for-more/home-page.jpg"],
    link: "https://samahan.addu.edu.ph",
    category: "Full Stack Web",
    aspectRatio: "16:9",
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
    images: [
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    ],
    category: "News Platform",
    aspectRatio: "16:9",
  },
  {
    id: 7,
    title: "Cruzalloma Farm Landing",
    description:
      "A business-focused landing page for a local farm, managing the end-to-end development from initial planning through to final deployment and delivery.",
    skills: ["React", "Tailwind CSS", "Project Management"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Client Project",
    aspectRatio: "16:9",
  },
  {
    id: 8,
    title: "Chain Reaction: Atom Supreme",
    description:
      "A colorful, modern revamp of the classic strategy game. Features explosive animations and strategic chain reaction mechanics for a high-energy mobile experience.",
    skills: ["Android", "Game Design", "Graphics", "Mobile Development"],
    images: [
      "/images/portfolio-images/chain-reaction-game/gameplay.png",
      "/images/portfolio-images/chain-reaction-game/main-menu.png",
      "/images/portfolio-images/chain-reaction-game/maps.png",
      "/images/portfolio-images/chain-reaction-game/maps-2.png",
      "/images/portfolio-images/chain-reaction-game/multiple-players-1.png",
      "/images/portfolio-images/chain-reaction-game/multiple-players-2.png",
      "/images/portfolio-images/chain-reaction-game/victory.png",
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
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Professional Services",
    aspectRatio: "16:9",
  },
  {
    id: 10,
    title: "KabayanGroup Business Site",
    description:
      "A comprehensive business website built on WordPress, tailored to allow non-technical clients to easily manage and update their online presence.",
    skills: ["WordPress", "Business Solutions"],
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Business Site",
    aspectRatio: "16:9",
  },
  {
    id: 11,
    title: "MadePoies Official Website",
    description:
      "The official agency website for MadePoies, featuring contact form integration with EmailJS to facilitate direct client inquiries and lead generation.",
    skills: ["NextJS", "Tailwind CSS", "EmailJS"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Agency Portfolio",
    aspectRatio: "16:9",
  },
  {
    id: 12,
    title: "Ecommerce Hub",
    description:
      "A modern e-commerce application with a focus on user experience, featuring dark mode support, wish lists, and a responsive shopping cart workflow.",
    skills: ["React", "Tailwind CSS", "UI/UX Design"],
    images: [
      "/images/portfolio-images/ecommerce-app/home-page.png",
      "/images/portfolio-images/ecommerce-app/home-page-dark-mode.png",
      "/images/portfolio-images/ecommerce-app/product-page.png",
      "/images/portfolio-images/ecommerce-app/shopping-cart.png",
      "/images/portfolio-images/ecommerce-app/wish-list.png",
    ],
    category: "Product Development",
    aspectRatio: "16:9",
  },
  {
    id: 13,
    title: "Morse Code Torch",
    description:
      "A mobile utility app that translates text into Morse code signals using the device's flashlight. Includes message history and saved transmission presets.",
    skills: ["Mobile Development", "UI Design"],
    images: [
      "/images/portfolio-images/morse-code-torch/home-page.png",
      "/images/portfolio-images/morse-code-torch/morse-code-write.png",
      "/images/portfolio-images/morse-code-torch/save-history.png",
      "/images/portfolio-images/morse-code-torch/save.png",
    ],
    category: "Mobile Utility",
    aspectRatio: "9:16",
  },
  {
    id: 14,
    title: "Sonic Stream Music Player",
    description:
      "A sleek, gesture-driven music player featuring drag-and-drop playlist management, robust search capabilities, and a personalized settings interface.",
    skills: ["Mobile Development", "Audio Engineering", "UI/UX"],
    images: [
      "/images/portfolio-images/music-player/audio-player.jpg",
      "/images/portfolio-images/music-player/playlist-list.jpg",
      "/images/portfolio-images/music-player/search-results.jpg",
      "/images/portfolio-images/music-player/song-list-drag.jpg",
      "/images/portfolio-images/music-player/song-more-options.jpg",
    ],
    category: "Media App",
    aspectRatio: "9:16",
  },
];
