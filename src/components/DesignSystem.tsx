import type { FC } from "react";
import { FaDownload, FaSun, FaEnvelope, FaGithub, FaLinkedin, FaMoon, FaRocket, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { HiOutlineUserCircle, HiOutlineLightningBolt, HiOutlineGlobeAlt, HiOutlineColorSwatch } from "react-icons/hi";

interface DesignSystemProps {
  onClose: () => void;
}

const DesignSystem: FC<DesignSystemProps> = ({ onClose }) => {
  return (
    <div className="w-full max-w-5xl mt-24 md:mt-10 animate-fade-in pb-20 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
        <div>
          <h1 className="text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter text-left">Design System</h1>
          <p className="text-slate-500 dark:text-slate-400 text-xl max-w-2xl font-medium text-left">A comprehensive guide to the visual identity, components, and layout principles of this Bento-style portfolio.</p>
        </div>
        <button 
          onClick={onClose}
          className="px-8 py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-2 group cursor-pointer"
        >
          <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
        </button>
      </div>

      {/* 01 Colors */}
      <section className="mb-24">
        <h2 className="text-3xl font-black mb-10 flex items-center gap-4 text-slate-900 dark:text-white uppercase tracking-widest text-left">
          <span className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white text-lg shadow-lg shadow-purple-500/30 shrink-0">01</span>
          Color Palette
        </h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 text-left">Brand Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              <ColorSwatch name="Primary Purple" hex="#9333ea" bg="bg-purple-600" text="text-white" description="Main accent, hero background, and brand identity." />
              <ColorSwatch name="Accent Blue" hex="#2563eb" bg="bg-blue-600" text="text-white" description="Secondary actions, skills, and links." />
              <ColorSwatch name="Contact Yellow" hex="#eab308" bg="bg-yellow-500" text="text-slate-900" description="High visibility for contact CTA." />
              <ColorSwatch name="Success Green" hex="#22c55e" bg="bg-green-500" text="text-white" description="Location status and positive indicators." />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 text-left">Neutral Scale (Dark Mode Optimized)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              <ColorSwatch name="Slate 950" hex="#020617" bg="bg-slate-950" border="border-slate-800" text="text-white" description="Dark mode root background." />
              <ColorSwatch name="Slate 900" hex="#0f172a" bg="bg-slate-900" border="border-slate-800" text="text-white" description="Secondary dark backgrounds and text." />
              <ColorSwatch name="Slate 500" hex="#64748b" bg="bg-slate-500" text="text-white" description="Secondary text and subtle borders." />
              <ColorSwatch name="Slate 200" hex="#e2e8f0" bg="bg-slate-200" border="border-slate-300" description="Light mode borders and subtle backgrounds." />
              <ColorSwatch name="Slate 50" hex="#f8fafc" bg="bg-slate-50" border="border-slate-200" description="Light mode root background." />
            </div>
          </div>
        </div>
      </section>

      {/* 02 Typography */}
      <section className="mb-24">
        <h2 className="text-3xl font-black mb-10 flex items-center gap-4 text-slate-900 dark:text-white uppercase tracking-widest text-left">
          <span className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-lg shadow-lg shadow-blue-500/30 shrink-0">02</span>
          Typography
        </h2>
        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-2xl space-y-12">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-8">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 text-left">Font Family</h3>
            <p className="text-2xl font-black text-slate-900 dark:text-white text-left">System Sans-Serif Stack</p>
            <p className="text-xs font-mono text-slate-500 mt-2 text-left">ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center border-b border-slate-100 dark:border-slate-800 pb-12">
            <div className="space-y-1 text-left">
              <p className="font-black text-slate-900 dark:text-white">Heading / Black</p>
              <p className="text-xs text-slate-400 font-mono">text-6xl font-black</p>
            </div>
            <div className="md:col-span-2 text-left">
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">Bento Portfolio</h1>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center border-b border-slate-100 dark:border-slate-800 pb-12">
            <div className="space-y-1 text-left">
              <p className="font-bold text-slate-900 dark:text-white">Inter / Bold</p>
              <p className="text-xs text-slate-400 font-mono">text-3xl font-bold</p>
            </div>
            <div className="md:col-span-2 text-left">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Crafting Digital Experiences</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="space-y-1 text-left">
              <p className="font-medium text-slate-900 dark:text-white">Inter / Regular</p>
              <p className="text-xs text-slate-400 font-mono">text-lg leading-relaxed</p>
            </div>
            <div className="md:col-span-2 text-left">
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Design is not just what it looks like and feels like. Design is how it works. 
                Everything is designed. Few things are designed well. We focus on the intersection 
                of aesthetic beauty and functional reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Layout & Bento */}
      <section className="mb-24">
        <h2 className="text-3xl font-black mb-10 flex items-center gap-4 text-slate-900 dark:text-white uppercase tracking-widest text-left">
          <span className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center text-white text-lg shadow-lg shadow-green-500/30 shrink-0">03</span>
          Bento Grid & Radius
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 dark:bg-slate-950 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8 text-left">Grid Architecture</h3>
            <div className="grid grid-cols-4 gap-4 aspect-square">
              <div className="col-span-2 row-span-2 bg-purple-600/20 rounded-3xl border-2 border-dashed border-purple-500/50 flex items-center justify-center text-purple-600 font-black">2x2</div>
              <div className="col-span-2 bg-slate-200 dark:bg-slate-800 rounded-3xl"></div>
              <div className="bg-blue-600/20 rounded-3xl border-2 border-dashed border-blue-500/50"></div>
              <div className="bg-slate-200 dark:bg-slate-800 rounded-3xl"></div>
            </div>
            <p className="mt-8 text-slate-500 dark:text-slate-400 text-sm italic text-left">
              A 4-column responsive CSS Grid. Cards use spans to create visual hierarchy.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-left">Corner Radii</h3>
              <div className="flex items-end gap-6">
                <div className="space-y-2 flex-1">
                  <div className="h-20 bg-slate-900 dark:bg-white rounded-[2.5rem]"></div>
                  <p className="text-xs font-mono text-center">rounded-[2.5rem]</p>
                </div>
                <div className="space-y-2 flex-1">
                  <div className="h-16 bg-slate-900 dark:bg-white rounded-3xl"></div>
                  <p className="text-xs font-mono text-center">rounded-3xl</p>
                </div>
                <div className="space-y-2 flex-1">
                  <div className="h-12 bg-slate-900 dark:bg-white rounded-xl"></div>
                  <p className="text-xs font-mono text-center">rounded-xl</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-left">Glassmorphism</h3>
              <div className="relative h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl flex items-center justify-center p-4 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:10px_10px]"></div>
                <div className="w-full h-full bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl flex items-center justify-center text-white font-bold text-sm">
                  backdrop-blur-xl bg-white/20
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Components */}
      <section className="mb-24">
        <h2 className="text-3xl font-black mb-10 flex items-center gap-4 text-slate-900 dark:text-white uppercase tracking-widest text-left">
          <span className="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center text-white text-lg shadow-lg shadow-yellow-500/30 shrink-0">04</span>
          Interactive Components
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-left">Primary Actions</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-purple-600 text-white rounded-2xl font-black shadow-xl shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer">Primary</button>
                <button className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer">Secondary</button>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-left">Iconic Buttons</h3>
              <div className="flex flex-wrap gap-6">
                <button className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-2xl shadow-inner hover:scale-110 transition-all cursor-pointer"><FaSun /></button>
                <button className="w-16 h-16 bg-blue-600 text-white rounded-[1.5rem] flex items-center justify-center text-2xl shadow-xl shadow-blue-500/20 hover:-rotate-12 transition-all cursor-pointer"><FaRocket /></button>
                <button className="w-16 h-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center text-2xl shadow-xl hover:scale-110 transition-all cursor-pointer text-slate-900 dark:text-white"><FaGithub /></button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest text-left">Hover Card States</h3>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-shadow-glow">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-purple-600/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10 text-left">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl mb-6 flex items-center justify-center text-purple-600">
                  <HiOutlineLightningBolt className="text-2xl" />
                </div>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Magnetic Hover</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Card elevates and glows on hover using custom shadow-glow and ease-bouncy.</p>
                <div className="mt-6 flex items-center gap-2 text-purple-600 font-bold text-xs uppercase tracking-widest">
                  Explore More <FaChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 Effects & Motion */}
      <section className="mb-10">
        <h2 className="text-3xl font-black mb-10 flex items-center gap-4 text-slate-900 dark:text-white uppercase tracking-widest text-left">
          <span className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center text-white text-lg shadow-lg shadow-purple-500/30 shrink-0">05</span>
          Effects & Motion
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6 flex items-center justify-center text-blue-600 relative">
              <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20"></span>
              <HiOutlineGlobeAlt className="text-3xl" />
            </div>
            <h4 className="font-black mb-2 text-slate-900 dark:text-white">Ping Animation</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">Used for live location status and high-attention indicators.</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6 flex items-center justify-center text-purple-600 animate-bounce">
              <FaDownload className="text-2xl" />
            </div>
            <h4 className="font-black mb-2 text-slate-900 dark:text-white">Bouncy Motion</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">Custom cubic-bezier(0.175, 0.885, 0.32, 1.275) for organic feel.</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center">
            <div className="w-full aspect-video bg-slate-100 dark:bg-slate-950 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center border border-slate-200 dark:border-slate-800">
               <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-blue-600 rounded-full animate-pulse blur-xl"></div>
               <div className="relative font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold">fade-in / slide-in</div>
            </div>
            <h4 className="font-black mb-2 text-slate-900 dark:text-white">Keyframe Entry</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">Staggered animations using opacity and translateY on page load.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const ColorSwatch: FC<{ name: string; hex: string; bg: string; border?: string; text?: string; description: string }> = ({ name, hex, bg, border, text, description }) => (
  <div className="space-y-4 group">
    <div className={`aspect-square rounded-[2rem] ${bg} ${border ? `border ${border}` : ""} shadow-lg group-hover:scale-105 transition-transform duration-500 flex flex-col items-center justify-center p-4`}>
       <p className={`text-xs font-mono uppercase font-bold ${text || "text-slate-900"}`}>{hex}</p>
    </div>
    <div className="space-y-1 text-left">
      <p className="font-black text-slate-900 dark:text-white text-sm tracking-tight">{name}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight">{description}</p>
    </div>
  </div>
);

export default DesignSystem;
