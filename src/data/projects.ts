export interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
  images: string[];
  link?: string;
  category?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "EcoTrack Dashboard",
    description: "A comprehensive sustainability tracking platform for modern enterprises. Features real-time data visualization and predictive analytics for carbon footprint reduction.",
    skills: ["NextJS", "Tailwind CSS", "Framer Motion"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    ],
    link: "https://github.com",
    category: "Featured Project"
  },
  {
    id: 2,
    title: "Nebula Engine",
    description: "A high-performance 2D game engine extension for Godot, optimized for procedural generation and physics-heavy simulations.",
    skills: ["Godot Engine", "GDScript", "C++"],
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
    ],
    link: "https://github.com",
    category: "Game Dev"
  },
  {
    id: 3,
    title: "SwiftFit",
    description: "A mobile-first fitness companion that tracks workouts, nutrition, and community challenges. Built with a focus on smooth animations and offline-first data sync.",
    skills: ["Flutter", "Dart", "Firebase"],
    images: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
    ],
    link: "https://github.com",
    category: "Mobile App"
  },
  {
    id: 4,
    title: "SvelteCommerce",
    description: "A lightning-fast e-commerce storefront template designed for peak performance. Includes full cart functionality, dynamic product filtering, and a seamless checkout experience.",
    skills: ["Svelte", "SvelteKit", "TypeScript"],
    images: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    link: "https://github.com",
    category: "E-commerce"
  },
  {
    id: 5,
    title: "Lumina OS Toolset",
    description: "An open-source collection of UI components and utilities for building futuristic system interfaces. Heavily influenced by cyberpunk aesthetics and high-contrast accessibility.",
    skills: ["C++", "OpenGL", "Shader Language"],
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80"
    ],
    link: "https://github.com",
    category: "Open Source"
  }
];
