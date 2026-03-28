import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSvelte,
  SiFlutter,
  SiDart,
  SiGodotengine,
  SiCplusplus,
  SiFirebase,
  SiOpengl,
} from "react-icons/si";
import pfp from "../assets/me.png";

export const BIO = {
  name: "Loejee Miguel L. Dulaugon",
  role: "Full Stack Developer",
  location: "Davao, PH",
  pfp,
  education: {
    degree: "BS Computer Science",
    school: "University of Mindanao",
  },
  philosophy:
    "Code is a tool for creativity. I believe in building software that doesn't just work, but feels right to the user.",
  about: [
    "I'm Loejee, a Computer Science student and Full Stack Developer based in Davao, Philippines. I specialize in building highly interactive and performant digital experiences.",
    "My journey in tech is driven by a desire to combine aesthetic design with robust engineering. Whether it's a web dashboard, a mobile app, or a game engine, I focus on the details that make software feel intuitive.",
  ],
  expertise: [
    { label: "WEB", details: "REACT / SVELTE" },
    { label: "MOBILE", details: "FLUTTER" },
    { label: "GAMES", details: "GODOT" },
  ],
  approach:
    "Iterative growth, clean architecture, and empathy for the user. I believe in software that solves real problems.",
};

export const SKILLS = [
  { name: "NextJS", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "Typescript", Icon: SiTypescript },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Svelte", Icon: SiSvelte },
  { name: "Flutter", Icon: SiFlutter },
  { name: "Dart", Icon: SiDart },
  { name: "Godot", Icon: SiGodotengine },
  { name: "C++", Icon: SiCplusplus },
  { name: "Firebase", Icon: SiFirebase },
  { name: "OpenGL", Icon: SiOpengl },
];

export const SOCIALS = [
  {
    id: "github",
    label: "GITHUB",
    href: "https://github.com/GuyWithBag",
    icon: FaGithub,
    color: "!bg-zinc-900",
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/loejee-miguel-dulaugon-805480284/",
    icon: FaLinkedin,
    color: "!bg-[#0A66C2]",
  },
];

export const CONTACT = {
  email: "hello@loejee.dev",
  ctaTitle: "Let's build!",
  ctaButton: "Contact Me",
};

export const UI_STRINGS = {
  onboardingTitle: "Navigate with keyboard",
  onboardingHint: "or Arrow Keys",
  getStarted: "Get Started",
  locationIcon: FaMapMarkerAlt,
};
