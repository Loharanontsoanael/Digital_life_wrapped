"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Music, Users, Globe, Disc, Share2, Activity, Link as LinkIcon } from "lucide-react";

export function FeatureStack() {
    const [index, setIndex] = useState(0);
    const items = ["code", "music", "social"];

    const nextCard = () => {
        setIndex((prev) => (prev + 1) % items.length);
    };

    const prevCard = () => {
        setIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto h-[320px] md:h-[300px]">
            {/* Navigation - Absolute Centered Vertically Outside */}
            <button
                onClick={prevCard}
                className="absolute -left-16 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm flex items-center justify-center hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all active:scale-95 hidden md:flex shadow-sm"
            >
                <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button
                onClick={nextCard}
                className="absolute -right-16 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm flex items-center justify-center hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all active:scale-95 hidden md:flex shadow-sm"
            >
                <ArrowRight className="w-5 h-5" />
            </button>

            {/* Cards Stack */}
            <div className="relative w-full h-full perspective-1000">
                <AnimatePresence mode="popLayout" initial={false}>
                    {items.map((item, i) => {
                        // Only render current and next card for performance/logic
                        if (i !== index) return null;

                        return (
                            <motion.div
                                key={item}
                                className="absolute inset-0 w-full h-full"
                                initial={{ opacity: 0, scale: 0.9, y: 30, rotateX: -15, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0, zIndex: 10, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 0.95, y: -30, rotateX: 15, zIndex: 0, filter: "blur(10px)" }}
                                transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                            >
                                {item === "code" && (
                                    /* Card 1 - Code Velocity (Light Mode - Standard) */
                                    <div className="w-full h-full p-8 rounded-[2rem] bg-white border border-zinc-200 shadow-2xl shadow-zinc-900/5 relative overflow-hidden group flex flex-col justify-between select-none">
                                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-zinc-50 to-transparent -translate-y-1/2 translate-x-1/3 rounded-full pointer-events-none"></div>

                                        <div className="flex justify-between items-start z-10 w-full">
                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="w-2 h-2 rounded-full bg-zinc-900 animate-pulse"></span>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">GitHub</span>
                                                </div>
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-6xl font-heading font-black text-zinc-900 tracking-tighter">1,204</span>
                                                </div>
                                                <span className="text-xs font-medium text-zinc-400 mt-1">Commits this year</span>
                                            </div>
                                            <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 shadow-sm group-hover:bg-zinc-900 group-hover:text-white transition-all duration-500 hover:rotate-6">
                                                <Zap className="w-7 h-7 fill-current" />
                                            </div>
                                        </div>

                                        {/* Sparkline Visual */}
                                        <div className="absolute left-0 right-0 bottom-0 h-40 opacity-15 pointer-events-none">
                                            <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                                                <defs>
                                                    <linearGradient id="gradientCode" x1="0" x2="0" y1="0" y2="1">
                                                        <stop offset="0%" stopColor="#000" />
                                                        <stop offset="100%" stopColor="transparent" />
                                                    </linearGradient>
                                                </defs>
                                                <path d="M0,80 C20,70 40,90 60,60 C80,30 100,80 120,50 C140,20 160,60 180,40 C200,20 220,50 240,30 C260,10 280,40 300,20 C320,0 340,30 360,10 L360,100 L0,100 Z" fill="url(#gradientCode)" className="text-zinc-900" />
                                            </svg>
                                        </div>

                                        <div className="z-10 mt-auto flex items-end justify-between w-full border-t border-zinc-100 pt-6">
                                            <div>
                                                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">Velocity Score</p>
                                                <p className="text-xl font-bold text-zinc-900">Top 1%</p>
                                            </div>
                                            <div className="flex gap-1 items-end h-8">
                                                {[30, 50, 40, 70, 50, 80, 60, 90, 100].map((h, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ height: 0 }}
                                                        animate={{ height: `${h}%` }}
                                                        transition={{ delay: 0.5 + (i * 0.05) }}
                                                        className={`w-1.5 rounded-t-full ${i > 5 ? 'bg-zinc-900' : 'bg-zinc-200'}`}
                                                    ></motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {item === "music" && (
                                    /* Card 2 - Audio Aura (Clean White + Data) */
                                    <div className="w-full h-full p-8 rounded-[2rem] bg-white border border-zinc-200 shadow-2xl shadow-zinc-200/50 text-zinc-900 relative overflow-hidden flex flex-col justify-between group select-none">

                                        {/* Background Elements - Clean Pulse Only (NO GRID) */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zinc-100/80 rounded-full blur-[80px] opacity-60 animate-pulse-slow"></div>

                                        <div className="relative z-10 flex justify-between items-start mb-6">
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Disc className="w-3 h-3 text-zinc-400 animate-spin-slow" />
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">2025 Wrapped</span>
                                                </div>
                                                <h3 className="text-4xl font-heading font-black tracking-tighter text-zinc-900">Sonic DNA</h3>
                                            </div>
                                            <div className="w-12 h-12 rounded-full border border-zinc-100 flex items-center justify-center bg-zinc-50 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
                                                <Music className="w-5 h-5" />
                                            </div>
                                        </div>

                                        {/* Central Waveform Visual - Clean */}
                                        <div className="relative z-10 flex items-center justify-center gap-[3px] h-24 my-2 opacity-80 group-hover:opacity-100 transition-opacity">
                                            {[...Array(24)].map((_, i) => {
                                                const height = Math.abs(Math.sin(i * 0.5) * 100);
                                                return (
                                                    <motion.div
                                                        key={i}
                                                        className="w-1.5 bg-zinc-900 rounded-full"
                                                        initial={{ height: "10%" }}
                                                        animate={{ height: [`${Math.max(20, height)}%`, `${Math.max(20, height * 0.5)}%`, `${Math.max(20, height)}%`] }}
                                                        transition={{ duration: 1.5, delay: i * 0.05, repeat: Infinity, ease: "easeInOut" }}
                                                    ></motion.div>
                                                )
                                            })}
                                        </div>

                                        <div className="relative z-10 flex justify-between items-center border-t border-zinc-100 pt-4 mt-auto">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-md bg-zinc-100 border border-zinc-200 flex items-center justify-center">
                                                    <p className="font-bold text-xs">#1</p>
                                                </div>
                                                <div>
                                                    <p className="text-zinc-400 text-[10px] font-bold uppercase">Top Artist</p>
                                                    <p className="text-zinc-900 font-bold text-sm">Fred again..</p>
                                                </div>
                                            </div>
                                            <div className="px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                                                42k Minutes
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {item === "social" && (
                                    /* Card 3 - Social Graph (Clean Floating Consellation) */
                                    <div className="w-full h-full p-0 rounded-[2rem] bg-white border border-zinc-200 text-zinc-900 relative overflow-hidden flex flex-col justify-between group shadow-xl shadow-zinc-200/50 select-none">

                                        {/* Background - Clean Gradient (NO GRID) */}
                                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-zinc-50 via-zinc-50/50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-80"></div>
                                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-50 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3"></div>

                                        <div className="relative z-10 p-8 flex flex-col h-full">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 block">Connectome</span>
                                                    <h3 className="text-3xl font-heading font-black tracking-tighter text-zinc-900">Social Graph</h3>
                                                </div>
                                                <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100 group-hover:scale-110 transition-transform">
                                                    <Users className="w-4 h-4 text-zinc-600" />
                                                </div>
                                            </div>

                                            {/* Network Visualization - Floating Constellation */}
                                            <div className="relative flex-1 w-full my-4">
                                                <div className="absolute inset-0 flex items-center justify-center translate-y-2">
                                                    {/* Central Hub */}
                                                    <div className="relative z-20 flex flex-col items-center">
                                                        <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center shadow-xl shadow-zinc-900/20 group-hover:rotate-12 transition-transform duration-500">
                                                            <Globe className="w-7 h-7 text-white" />
                                                        </div>
                                                        <div className="absolute -bottom-6 px-3 py-1 bg-white border border-zinc-100 rounded-full shadow-sm text-[10px] font-bold uppercase tracking-wide">
                                                            Hub
                                                        </div>
                                                    </div>

                                                    {/* Orbiting Elements - Cleaner & Thinner */}
                                                    <motion.div
                                                        className="absolute w-full h-full pointer-events-none"
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                                    >
                                                        {/* Orbit Path */}
                                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full border border-zinc-100 border-dashed"></div>

                                                        {/* Satellite 1 */}
                                                        <div className="absolute top-1/2 left-1/2 w-[160px] h-[2px] -translate-x-1/2 -translate-y-1/2 rotate-0">
                                                            <div className="absolute right-0 w-3 h-3 bg-white border-2 border-zinc-200 rounded-full -translate-y-1/2 shadow-sm z-10"></div>
                                                        </div>
                                                        {/* Satellite 2 */}
                                                        <div className="absolute top-1/2 left-1/2 w-[160px] h-[2px] -translate-x-1/2 -translate-y-1/2 rotate-120">
                                                            <div className="absolute right-0 w-3 h-3 bg-white border-2 border-zinc-200 rounded-full -translate-y-1/2 shadow-sm z-10"></div>
                                                        </div>
                                                        {/* Satellite 3 */}
                                                        <div className="absolute top-1/2 left-1/2 w-[160px] h-[2px] -translate-x-1/2 -translate-y-1/2 rotate-240">
                                                            <div className="absolute right-0 w-3 h-3 bg-white border-2 border-zinc-200 rounded-full -translate-y-1/2 shadow-sm z-10"></div>
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            </div>

                                            {/* Stats Clean Strip */}
                                            <div className="flex items-center gap-2 mt-auto">
                                                <div className="flex-1 bg-zinc-50 rounded-xl p-3 border border-zinc-100 flex items-center gap-3 hover:bg-zinc-100 transition-colors group/stat">
                                                    <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shadow-sm">
                                                        <LinkIcon className="w-3 h-3 text-zinc-900" />
                                                    </div>
                                                    <div>
                                                        <div className="text-[9px] text-zinc-400 font-bold uppercase">Connections</div>
                                                        <div className="text-sm font-black text-zinc-900">+42</div>
                                                    </div>
                                                </div>
                                                <div className="flex-1 bg-zinc-50 rounded-xl p-3 border border-zinc-100 flex items-center gap-3 hover:bg-zinc-100 transition-colors group/stat">
                                                    <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shadow-sm">
                                                        <Activity className="w-3 h-3 text-zinc-900" />
                                                    </div>
                                                    <div>
                                                        <div className="text-[9px] text-zinc-400 font-bold uppercase">Score</div>
                                                        <div className="text-sm font-black text-zinc-900">98.4</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}
