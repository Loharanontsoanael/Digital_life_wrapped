'use client';

import { motion } from 'framer-motion';
import {
    Search, Plus, Download, MoreHorizontal, ChevronRight,
    Star, AlertCircle, LayoutGrid,
    Github, MapPin, Disc, Calendar, ArrowUpRight, Music,
    Headphones, Code, Zap, Gift
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/contexts/AuthContext';

// --- Theme-Aligned Components (Premium Monochrome) ---

function ProfileCard() {
    const { user } = useAuth();

    // Show loading state or placeholder if user not loaded
    const displayName = user?.name || 'Loading...';
    const displayEmail = user?.email || '';
    const avatarUrl = user?.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=09090b&color=fff`;

    return (
        <div className="bg-white rounded-[1.5rem] p-6 border border-zinc-200 shadow-sm mb-6 group hover:border-zinc-300 transition-all">
            <h3 className="font-heading font-black text-xl text-zinc-900 mb-6 tracking-tight">Your Digital<br />Snapshot</h3>

            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                    { label: 'Top Genre', value: 'Synthwave' },
                    { label: 'Avg. Listen', value: '4.2 hrs' },
                    { label: 'Streak', value: '12 Days' },
                    { label: 'Era', value: 'Late Night' },
                ].map((stat, i) => (
                    <div key={i} className="bg-zinc-50 rounded-2xl p-4 border border-zinc-100 hover:border-zinc-200 transition-colors">
                        <p className="text-[10px] font-bold uppercase text-zinc-400 mb-1 tracking-wider">{stat.label}</p>
                        <p className="text-zinc-900 font-bold text-sm truncate">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* User Row - Dynamic */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-zinc-100">
                <div className="w-12 h-12 rounded-full bg-zinc-100 overflow-hidden ring-4 ring-zinc-50 border border-zinc-200">
                    <img src={avatarUrl} alt={displayName} />
                </div>
                <div className="flex-1">
                    <p className="text-base font-bold text-zinc-900">{displayName}</p>
                    <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-zinc-900 animate-pulse"></span>
                        <p className="text-xs text-zinc-500 font-bold uppercase tracking-wide">Online</p>
                    </div>
                </div>
                <div className="flex items-center gap-1.5 bg-zinc-900 text-white px-3 py-1.5 rounded-xl">
                    <Star className="w-3 h-3 fill-current text-white" />
                    <span className="text-xs font-bold">9.8</span>
                </div>
            </div>

            {/* Action List */}
            <div className="space-y-4">
                <div className="flex items-center justify-between group/item cursor-pointer p-2 rounded-xl hover:bg-zinc-50 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 group-hover/item:bg-zinc-900 group-hover/item:text-white transition-colors">
                            <Music className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-zinc-900">Spotify Wrapped</p>
                            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Ready to view</p>
                        </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-300 group-hover/item:text-zinc-900 transition-colors" />
                </div>
                <div className="flex items-center justify-between group/item cursor-pointer p-2 rounded-xl hover:bg-zinc-50 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 group-hover/item:bg-zinc-900 group-hover/item:text-white transition-colors">
                            <Github className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-zinc-900">GitHub Recap</p>
                            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Processing...</p>
                        </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-300 group-hover/item:text-zinc-900 transition-colors" />
                </div>
            </div>
        </div>
    );
}

function PromoCard() {
    return (
        <div className="bg-zinc-950 rounded-[1.5rem] p-6 relative overflow-hidden h-[300px] flex flex-col justify-between group text-white border border-zinc-900 shadow-2xl">
            {/* "Wrapped" Abstract Visuals */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Grain/Noise Texture */}
                <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter%22/%3E%3C/svg%3E")' }}></div>

                {/* Rotating Rings */}
                <div className="absolute top-[-50%] right-[-50%] w-[500px] h-[500px] rounded-full border border-white/10 animate-spin-slow opacity-50"></div>
                <div className="absolute top-[-40%] right-[-40%] w-[400px] h-[400px] rounded-full border border-white/5 animate-spin-slow [animation-duration:15s] opacity-30"></div>
                <div className="absolute top-[-30%] right-[-30%] w-[300px] h-[300px] rounded-full border border-zinc-800 animate-spin-slow [animation-duration:20s] opacity-50 border-dashed"></div>

                {/* Gradient Glow */}
                <div className="absolute bottom-[-20%] left-[-20%] w-64 h-64 rounded-full bg-zinc-800/80 blur-[80px]"></div>
            </div>

            <div className="relative z-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 text-zinc-950 shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-500">
                    <Gift className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-heading font-black text-white leading-[0.9] tracking-tighter mix-blend-difference">
                    2026<br />WRAPPED
                </h3>
            </div>

            <div className="relative z-10">
                <p className="text-[10px] font-bold text-zinc-400 mb-4 uppercase tracking-[0.2em] border-l-2 border-zinc-800 pl-3">
                    Ungrounded Edition
                </p>
                <button className="w-full h-12 bg-white text-zinc-950 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Start Experience <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}

function HeroCard() {
    return (
        <div className="bg-white rounded-[2rem] p-8 text-zinc-900 relative overflow-hidden mb-10 border border-zinc-200 shadow-sm transition-all hover:shadow-md hover:border-zinc-300">
            {/* CLEAN: Removed the subtle repeating-linear-gradient grid for a pure look */}

            {/* Header */}
            <div className="flex justify-between items-start mb-12 relative z-10">
                <div>
                    <h2 className="text-3xl font-heading font-black tracking-tight mb-2 text-zinc-900">Engagement Flow</h2>
                    <div className="flex items-center gap-6 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                        <span className="text-zinc-900 border-b-2 border-zinc-900 pb-1">This Year</span>
                        <span className="hover:text-zinc-600 cursor-pointer transition-colors">Last Year</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mr-2">VS Last Month</span>
                    <div className="px-3 py-1 rounded-full bg-zinc-900 text-white text-xs font-bold shadow-lg shadow-zinc-900/20">
                        +24.5%
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 relative z-10">
                {/* Visual 1: Bar Chart (Left) - Monochrome */}
                <div className="flex-1 h-56 flex items-end gap-2">
                    {[40, 65, 30, 80, 50, 90, 45, 70, 60, 35, 85, 55, 75, 40, 95, 60, 50, 80, 45, 70, 30, 60, 40, 75].map((h, i) => (
                        <div key={i} className="flex-1 bg-zinc-200 rounded-t-sm relative group/bar transition-all hover:bg-zinc-900 hover:scale-y-105 origin-bottom" style={{ height: `${h}%` }}>
                            {/* Minimal Tooltip */}
                            <div className="opacity-0 group-hover/bar:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 text-white px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap pointer-events-none z-20">
                                {h * 12}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Visual 2: Category Breakdown (Right) */}
                <div className="w-full md:w-1/3 flex flex-col justify-between pl-8 border-l border-zinc-100">
                    <div>
                        <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Dominant Aura</p>
                        <h3 className="text-4xl font-heading font-black text-zinc-900">Focus</h3>
                    </div>

                    {/* Abstract Circle Visualization - Strict Monochrome */}
                    <div className="relative h-32 w-32 mt-4 mx-auto md:mx-0">
                        {/* Rings */}
                        <div className="absolute inset-0 rounded-full border-[6px] border-zinc-100 border-t-zinc-900 rotate-45 animate-spin-slow"></div>
                        <div className="absolute inset-4 rounded-full border-[6px] border-zinc-100 border-l-zinc-400 rotate-[-45deg]"></div>
                        {/* Center Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Headphones className="w-8 h-8 text-zinc-900" />
                        </div>
                    </div>

                    <div className="space-y-2 mt-4">
                        <div className="flex justify-between text-xs font-bold">
                            <span className="text-zinc-400">Music</span>
                            <span className="text-zinc-900">62%</span>
                        </div>
                        <div className="flex justify-between text-xs font-bold">
                            <span className="text-zinc-400">Code</span>
                            <span className="text-zinc-500">38%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function DashboardPage() {
    return (
        <div className="relative z-10 w-full min-h-screen p-4 md:p-0">
            <div className="flex flex-col lg:flex-row gap-8">

                {/* --- Left Column (30%) --- */}
                <div className="w-full lg:w-[280px] shrink-0 space-y-6">
                    <ProfileCard />
                    <PromoCard />
                </div>

                {/* --- Right Column (70%) --- */}
                <div className="flex-1">
                    {/* Top Bar */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex-1 relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-zinc-900 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search tracks..."
                                className="w-full h-12 bg-white border border-zinc-200 rounded-xl pl-10 pr-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-zinc-900/5 transition-all placeholder:text-zinc-400 hover:border-zinc-300"
                            />
                        </div>
                        <Button className="h-12 px-6 bg-zinc-900 text-white hover:bg-zinc-800 rounded-xl text-sm font-bold shadow-lg shadow-zinc-900/10">
                            <Plus className="w-4 h-4 mr-2" /> Sync
                        </Button>
                    </div>

                    <HeroCard />

                    {/* --- List Section: Digital Footprint (Upgraded to Data Table) --- */}
                    <div className="mb-12">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <h2 className="text-2xl font-heading font-black text-zinc-900 tracking-tight">Digital Footprint</h2>
                                <span className="bg-zinc-900 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">Live Feed</span>
                            </div>

                            {/* Filter Tabs */}
                            <div className="flex bg-white border border-zinc-200 p-1 rounded-xl gap-1">
                                {['All', 'Music', 'Code', 'Social'].map((tab, i) => (
                                    <button
                                        key={tab}
                                        className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${i === 0 ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Contiguous Data Table Card */}
                        <div className="bg-white rounded-[1.5rem] border border-zinc-200 overflow-hidden shadow-sm">
                            {/* Header Row */}
                            <div className="flex items-center px-6 py-3 bg-zinc-50/50 border-b border-zinc-200 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                                <div className="w-[40%]">Activity</div>
                                <div className="w-[30%]">Status</div>
                                <div className="flex-1 text-right">Timestamp</div>
                            </div>

                            {/* Data Rows */}
                            <div className="divide-y divide-zinc-100">
                                {[
                                    { type: 'music', title: "Midnight City", subtitle: "M83", detail: "Playing now", time: "Live" },
                                    { type: 'code', title: "feat: update dashboard ui", subtitle: "Digital_Life_Wrapped", detail: "Main Branch", time: "2m ago" },
                                    { type: 'music', title: "Starboy", subtitle: "The Weeknd", detail: "Liked Song", time: "15m ago" },
                                    { type: 'social', title: "LinkedIn Connection", subtitle: "Sarah Engineer", detail: "Pending", time: "1h ago" },
                                    { type: 'code', title: "fix: mobile responsiveness", subtitle: "Digital_Life_Wrapped", detail: "PR #102", time: "2h ago" },
                                ].map((item, i) => (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                        key={i}
                                        className="group flex flex-col md:flex-row md:items-center justify-between px-6 py-4 hover:bg-zinc-50 transition-colors cursor-pointer"
                                    >
                                        {/* Icon & Title */}
                                        <div className="flex items-center gap-4 w-[40%]">
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-zinc-200 bg-white text-zinc-400 group-hover:bg-zinc-900 group-hover:border-zinc-900 group-hover:text-white transition-all duration-300">
                                                {item.type === 'music' && <Disc className={`w-5 h-5 ${item.time === 'Live' ? 'animate-spin-slow' : ''}`} />}
                                                {item.type === 'code' && <Code className="w-5 h-5" />}
                                                {item.type === 'social' && <Star className="w-5 h-5" />}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-zinc-900 group-hover:translate-x-1 transition-transform">{item.title}</p>
                                                <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">{item.subtitle}</p>
                                            </div>
                                        </div>

                                        {/* Detail Status */}
                                        <div className="flex items-center gap-2 w-[30%]">
                                            <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${item.time === 'Live'
                                                ? 'bg-zinc-900 text-white border-zinc-900'
                                                : 'bg-zinc-50 text-zinc-500 border-zinc-100'
                                                }`}>
                                                {item.detail}
                                            </div>
                                        </div>

                                        {/* Time & Action */}
                                        <div className="flex items-center justify-end gap-4 flex-1">
                                            <span className="text-xs font-mono font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">{item.time}</span>
                                            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-zinc-300 hover:text-zinc-900 transition-colors">
                                                <MoreHorizontal className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
