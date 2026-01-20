import { motion } from "framer-motion";
import { Github, Music, Calendar, Clock, MapPin, ArrowUpRight } from "lucide-react";

export function FloatingWidgets() {
    return (
        <div className="relative w-full h-auto md:h-[700px] flex md:block items-center md:justify-center overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-5 px-6 pb-12 md:pb-0 md:px-0 pointer-events-auto md:pointer-events-none origin-top md:origin-center font-sans py-6 md:py-0 no-scrollbar">

            {/* 0. Spacer for mobile center alignment (optional visual balance) */}
            <div className="w-[1px] md:hidden shrink-0"></div>

            {/* 1. SPOTIFY: Monochrome Black Edition */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="snap-center shrink-0 w-[85vw] md:w-auto relative md:absolute md:top-[25%] md:left-[0%] z-30 pointer-events-auto"
            >
                <div className="w-full md:w-[18rem] bg-white rounded-[2rem] p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] border border-zinc-100 hover:scale-[1.02] transition-transform duration-500 group">
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-zinc-950 flex items-center justify-center text-white shadow-xl shadow-zinc-900/20">
                            <Music className="w-6 h-6 fill-current" />
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-zinc-100 bg-zinc-50 text-zinc-400 group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-300">
                            <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Top Genre</div>
                        <div className="text-2xl font-black text-zinc-950 tracking-tighter">Electronic</div>
                    </div>

                    {/* Visualizer Bars - Thicker, Blacker */}
                    <div className="flex items-end justify-between gap-1 h-14 w-full mb-6 relative overflow-hidden">
                        {[40, 70, 30, 80, 50, 90, 40, 60, 30, 50, 80, 40, 60, 45].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: "20%" }}
                                animate={{ height: [`${h}%`, `${h / 2}%`, `${h}%`] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.1 }}
                                className="w-1.5 bg-zinc-950 rounded-full"
                            />
                        ))}
                    </div>

                    <div className="flex justify-between items-center bg-zinc-50 rounded-xl p-3 border border-zinc-100">
                        <span className="text-xs font-bold text-zinc-900 pl-1">14,890 min</span>
                        <div className="px-2 py-0.5 bg-zinc-200 rounded text-[9px] font-bold text-zinc-600 uppercase">Top 1%</div>
                    </div>
                </div>
            </motion.div>

            {/* 2. GITHUB: Monochrome Black Edition */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="snap-center shrink-0 w-[85vw] md:w-auto relative md:absolute md:top-[12%] md:right-[-2%] z-20 pointer-events-auto"
            >
                <div className="w-full md:w-[18rem] bg-white rounded-[2rem] p-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-zinc-100 hover:translate-y-[-4px] transition-transform duration-500 group">
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-zinc-950 flex items-center justify-center text-white shadow-xl shadow-zinc-900/20">
                            <Github className="w-6 h-6" />
                        </div>
                        <div className="px-3 py-1.5 rounded-full bg-zinc-950 text-zinc-50 text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-zinc-900/20">
                            Active
                        </div>
                    </div>

                    <div className="mb-6 border-b border-zinc-100 pb-6">
                        <h3 className="text-4xl font-black text-zinc-950 leading-none mb-1 tracking-tighter">2,480</h3>
                        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">Contributions</p>
                    </div>

                    <div className="flex items-end gap-1.5 h-16 w-full px-1">
                        {[35, 60, 45, 90, 60, 75, 50, 65, 40].map((h, i) => (
                            <div key={i} className="flex-1 bg-zinc-950 rounded-[2px] group-hover:bg-zinc-800 transition-colors" style={{ height: `${h}%` }}></div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* 3. CALENDAR: Monochrome Black Edition */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="snap-center shrink-0 w-[85vw] md:w-auto relative md:absolute md:bottom-[20%] md:right-[8%] z-40 pointer-events-auto"
            >
                <div className="w-full md:w-[16rem] bg-white rounded-[2rem] p-5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.18)] border border-zinc-100 hover:-translate-y-2 transition-transform duration-500">
                    <div className="flex items-center gap-4 mb-6 border-b border-zinc-100 pb-4">
                        <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center text-white shadow-md shadow-zinc-900/20">
                            <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Schedule</div>
                            <div className="text-sm font-bold text-zinc-950">Wed, 24 Jan</div>
                        </div>
                    </div>

                    <div className="space-y-2 relative">
                        <div className="absolute left-[15px] top-2 bottom-2 w-[1px] bg-zinc-100"></div>

                        {/* Event 1 */}
                        <div className="flex gap-4 items-center relative z-10 group">
                            <div className="w-2 h-2 rounded-full bg-zinc-950 border-2 border-white ring-1 ring-zinc-100"></div>
                            <div className="flex-1 bg-zinc-50 rounded-xl p-3 border border-zinc-100 group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-300">
                                <div className="text-xs font-bold text-current">Design Review</div>
                                <div className="text-[10px] opacity-60 font-medium">10:00 - 11:30</div>
                            </div>
                        </div>
                        {/* Event 2 */}
                        <div className="flex gap-4 items-center relative z-10 mt-2">
                            <div className="w-2 h-2 rounded-full bg-zinc-300 border-2 border-white ring-1 ring-zinc-100"></div>
                            <div className="flex-1 p-2">
                                <div className="text-xs font-bold text-zinc-400">Deep Work</div>
                                <div className="text-[10px] text-zinc-300 font-medium">14:00 - 16:00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Decor */}
            <div className="absolute top-[20%] left-[20%] text-zinc-950 text-7xl font-light opacity-5 select-none hidden md:block">+</div>
            <div className="absolute bottom-[10%] left-[40%] w-4 h-4 rounded-full border-2 border-zinc-950 opacity-10 hidden md:block"></div>

            {/* Background container hint */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-zinc-50/50 to-transparent rounded-full blur-3xl -z-10"></div>

        </div>
    );
}
