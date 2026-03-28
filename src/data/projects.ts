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
      "A university-wide event management platform featuring scalable state management and variant systems. Built for Ateneo de Davao University to handle complex booking workflows.",
    skills: ["NextJS", "TanStack Query", "Zustand", "Supabase", "CVA"],
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
      "A high-performance landing page for a film production house, integrated with Sanity CMS for dynamic content and Calendly for automated client booking.",
    skills: ["NextJS", "Sanity CMS", "Tailwind CSS", "Calendly"],
    images: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Professional Services",
    aspectRatio: "1:1",
  },
  {
    id: 3,
    title: "ACMS (Crowd Management)",
    description:
      "The Automated Crowd Management System developed for IT Week. Features real-time tracking and a modular UI component library for event staff.",
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
      "A responsive public-facing portal for university sports events. Focused on accessibility and real-time updates for tournament brackets and schedules.",
    skills: ["NextJS", "Tailwind CSS", "Radix UI", "Supabase"],
    images: [
      "https://images.unsplash.com/photo-1461891211039-4967d1c237e6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541252260730-0412e3e2108e?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Event Platform",
    aspectRatio: "1:1",
  },
  {
    id: 5,
    title: "SAMAHAN All for more",
    description:
      "Official campaign platform for student government. Leverages a custom-built reusable UI library to maintain brand consistency across student initiatives.",
    skills: ["NextJS", "Radix UI", "Storybook", "Tailwind CSS", "Supabase"],
    images: ["/images/portfolio-images/samahan-all-for-more/home-page.jpg"],
    link: "https://samahan.addu.edu.ph",
    category: "Full Stack Web",
    aspectRatio: "16:9",
  },
  {
    id: 6,
    title: "SAMAHAN Communications",
    description:
      "A dedicated newsfeed platform for student government announcements, built with a focus on load performance and modular UI architecture.",
    skills: ["NextJS", "CVA", "Storybook", "Tailwind CSS", "Supabase"],
    images: [
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    ],
    category: "News Platform",
    aspectRatio: "9:16",
  },
  {
    id: 7,
    title: "Cruzalloma Farm Landing",
    description:
      "A business-focused landing page for a local farm, managing everything from initial planning through to final deployment.",
    skills: ["React", "Tailwind CSS", "Project Management"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Client Project",
    aspectRatio: "9:16",
  },
  {
    id: 8,
    title: "Chain Reaction: Atom Supreme",
    description:
      "A colorful, modern revamp of the classic strategy game. Features explosive animations and strategic chain reaction mechanics.",
    skills: ["Android", "Game Design", "Graphics", "Mobile Development"],
    images: [
      "/images/portfolio-images/chain-reaction-game/gameplay.png",
      "/images/portfolio-images/chain-reaction-game/main-menu.png",
    ],
    link: "https://play.google.com/store/apps/details?id=org.MacchiMatchaProductions.ChainReactionAtomRevampedSupreme",
    category: "Game Dev",
    aspectRatio: "1:1",
  },
];
