'use client';

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Calendar, Music, TrendingUp, Share2, ShieldCheck, Zap, Leaf, Plus } from "lucide-react";
import { FeatureStack } from "@/components/feature-stack";
import { Navbar } from "@/components/ui/Navbar";
import { FloatingWidgets } from "@/components/ui/FloatingWidgets";
import { ProcessSteps } from "@/components/process-steps";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 overflow-x-hidden font-sans selection:bg-zinc-900 selection:text-white">
      <Navbar />

      <main className="relative z-10 pt-20">

        {/* Hero Section - Asymmetrical Agency Layout */}
        <div className="container mx-auto px-6 max-w-7xl min-h-[90vh] flex flex-col md:flex-row items-center relative">

          {/* Global Decorations (Maquette Details) */}
          <div className="hidden md:block absolute top-[15%] left-0 text-xs font-bold uppercase tracking-widest text-zinc-400 -rotate-90 origin-left">
            Prev  <span className="text-zinc-900 mx-2">Next</span>
          </div>
          <div className="absolute top-[10%] left-[55%] text-2xl font-light text-zinc-400 pointer-events-none">+</div>
          <div className="absolute top-[25%] left-[45%] w-3 h-3 border-2 border-zinc-200 rounded-full pointer-events-none"></div>

          {/* Fine Grid Background */}
          <div className="absolute inset-0 z-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>

          {/* Left Column: Typography & Call to Action */}
          <div className="w-full md:w-1/2 relative z-20 pt-10 md:pt-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-zinc-900"></div>
                <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">Personal Analytics</span>
              </div>

              <h1 className="text-5xl md:text-8xl lg:text-[7rem] font-heading font-black tracking-tighter text-zinc-900 mb-8 leading-[0.9] -ml-1">
                Digital<br />
                <span className="font-serif italic font-medium pr-4">Life</span><br />
                Wrapped.
              </h1>

              <p className="text-xl md:text-2xl text-zinc-500 max-w-md mb-12 font-medium leading-relaxed">
                Your year in data. Visualize your Spotify streams, GitHub commits, and digital footprint in one masterpiece.
              </p>

              <div className="flex items-center gap-6">
                <Link href="/signup" className="group h-16 w-16 bg-zinc-900 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform duration-300">
                  <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                </Link>
                <span className="text-sm font-bold text-zinc-900 tracking-wide uppercase">Connect Accounts</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Visuals */}
          <div className="w-full md:w-1/2 relative h-auto z-10">
            <FloatingWidgets />
          </div>

          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50/50 -z-10 hidden md:block" />
        </div>

        {/* Updated Bento Grid - Keeping it consistent but cleaner headers */}
        <div className="container mx-auto px-6 mt-20 md:mt-0">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-zinc-100 pb-8">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-zinc-900 tracking-tighter max-w-2xl leading-[0.9]">
              Unlock your<br />
              <span className="font-serif italic font-medium">Digital DNA.</span>
            </h2>
            <p className="text-zinc-500 max-w-sm mt-6 md:mt-0 font-medium">
              From coding streaks to late-night playlists. We turn your metadata into art.
            </p>
          </div>

          {/* ... Bento Grid Content ... (Using the existing structure but ensuring it fits the vibe) */}
          <FeatureStack />
        </div>

        {/* Process Section - How it works */}
        <ProcessSteps />

      </main>

      {/* Footer - Unified Wave Container */}
      <footer className="relative text-white pt-24 pb-8 mt-0 z-10">

        {/* Unified Wave Background (Acts as Border + Container) */}
        <div className="absolute top-0 left-0 w-full h-[120%] -mt-24 -z-10 pointer-events-none overflow-hidden">
          {/* Base Black Layer (Solid Background for Text) */}
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
            <path fill="#09090b" fillOpacity="1" d="M0,256L48,245.3C96,235,192,213,288,192C384,171,480,149,576,160C672,171,768,213,864,229.3C960,245,1056,235,1152,202.7C1248,171,1344,117,1392,90.7L1440,64L1440,800L0,800Z"></path>
          </svg>

          {/* Back Wave Texture (Zinc-800/700) */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 1440 800" preserveAspectRatio="none">
            <path fill="#3f3f46" fillOpacity="1" d="M0,256L48,245.3C96,235,192,213,288,192C384,171,480,149,576,160C672,171,768,213,864,229.3C960,245,1056,235,1152,202.7C1248,171,1344,117,1392,90.7L1440,64L1440,800L0,800Z"></path>
          </svg>

          {/* Front Wave Texture (Zinc-700/600) */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 1440 800" preserveAspectRatio="none">
            <path fill="#52525b" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,800L0,800Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-8">
            <div className="max-w-md">
              <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mb-4 leading-[0.9]">
                Ready to see<br />your <span className="text-zinc-500">year?</span>
              </h2>
              <button className="bg-white text-zinc-950 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-16 md:gap-24">
              <div className="flex flex-col gap-4">
                <h4 className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-2">Platform</h4>
                <Link href="#" className="hover:text-zinc-300 transition-colors">Features</Link>
                <Link href="#" className="hover:text-zinc-300 transition-colors">Pricing</Link>
                <Link href="#" className="hover:text-zinc-300 transition-colors">API</Link>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-2">Company</h4>
                <Link href="#" className="hover:text-zinc-300 transition-colors">About</Link>
                <Link href="#" className="hover:text-zinc-300 transition-colors">Blog</Link>
                <Link href="#" className="hover:text-zinc-300 transition-colors">Careers</Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm font-medium">
            <p>© 2026 Digital Life Wrapped.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
