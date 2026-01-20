"use client";

import { motion } from "framer-motion";
import { Fingerprint, BarChart3, Share2, ArrowRight } from "lucide-react";

const steps = [
    {
        icon: Fingerprint,
        title: "Connect",
        description: "Secure handshake with your platforms."
    },
    {
        icon: BarChart3,
        title: "Synthesize",
        description: "Extracting patterns from the noise."
    },
    {
        icon: Share2,
        title: "Exhibit",
        description: "Your digital legacy, crystallized."
    }
];

export function ProcessSteps() {
    return (
        <section className="py-32 relative text-zinc-900 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header - Minimalist & Technical */}
                <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 block">System Flow</span>
                        <h2 className="text-4xl md:text-7xl font-heading font-black tracking-tighter leading-[0.85] text-zinc-900">
                            The<br />Pipeline.
                        </h2>
                    </div>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-200 to-transparent mx-8 mb-4 hidden md:block"></div>
                    <p className="text-zinc-500 font-medium max-w-xs text-sm leading-relaxed text-right">
                        Three logical steps to transform raw metadata into your unique digital masterpiece.
                    </p>
                </div>

                {/* Steps Container */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0">

                    {/* Connecting Line (Desktop) - Dashed Technical Look */}
                    <div className="absolute top-[3rem] left-0 w-full h-[1px] border-t border-dashed border-zinc-200 hidden md:block z-0"></div>

                    {steps.map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col md:items-center md:text-center group">

                            {/* Node */}
                            <div className="flex items-center gap-6 md:flex-col md:gap-8 mb-6 md:mb-10 relative">
                                <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-[10px] font-bold font-mono text-zinc-500 border border-zinc-200 relative z-20 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
                                    0{i + 1}
                                </div>

                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: i * 0.2, duration: 0.5 }}
                                    className="w-24 h-24 rounded-3xl bg-white border border-zinc-100 flex items-center justify-center shadow-2xl shadow-zinc-200/50 group-hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <step.icon className="w-8 h-8 text-zinc-900 stroke-[1.5] relative z-10" />
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="pl-14 md:pl-0 md:px-8">
                                <h3 className="text-lg font-bold tracking-tight mb-2 text-zinc-900">{step.title}</h3>
                                <p className="text-zinc-500 text-sm font-medium leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                    {step.description}
                                </p>
                            </div>

                            {/* Mobile Connector */}
                            {i !== steps.length - 1 && (
                                <div className="absolute left-[2rem] top-28 bottom-[-4rem] w-[1px] border-l border-dashed border-zinc-200 md:hidden"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
