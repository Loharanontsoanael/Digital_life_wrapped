"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { CheckCircle2, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function EmailVerified() {
    const searchParams = useSearchParams();
    const verified = searchParams.get('verified');

    return (
        <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
            {/* Background Grid - Subtle & Technical */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            {/* Radial Gradient for focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(250,250,250,0.8)_100%)] pointer-events-none"></div>

            <div className="w-full max-w-[420px] bg-white border border-zinc-200/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] p-8 md:p-10 rounded-[2rem] relative z-10 transition-all duration-700 hover:shadow-[0_45px_80px_-20px_rgba(0,0,0,0.12)] overflow-hidden">

                {/* Animated Waves Background - Subtle Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none z-0 opacity-40">
                    <svg className="absolute bottom-0 w-[200%] h-full" preserveAspectRatio="none">
                        <motion.path
                            d="M0,60 C300,20 600,100 1000,40 L1000,150 L0,150 Z"
                            fill="#F4F4F5" // zinc-100
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.path
                            d="M0,80 C300,90 600,20 1000,80 L1000,150 L0,150 Z"
                            fill="#E4E4E7" // zinc-200
                            fillOpacity="0.4"
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-0"
                        />
                    </svg>
                </div>

                {/* Logo & Header */}
                <div className="flex flex-col items-center text-center mb-8 relative z-10">
                    <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
                        <Logo size="xl" />
                    </div>

                    {verified === '1' ? (
                        <>
                            {/* Success Icon with Animation */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="mb-6"
                            >
                                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="w-10 h-10 text-emerald-600" strokeWidth={2.5} />
                                </div>
                            </motion.div>

                            <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-zinc-900 mb-2">
                                Email Verified!
                            </h2>
                            <p className="text-zinc-500 text-sm font-medium">
                                Your email has been successfully verified. You can now access all features.
                            </p>
                        </>
                    ) : (
                        <>
                            {/* Pending Icon */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="mb-6"
                            >
                                <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center">
                                    <Mail className="w-10 h-10 text-zinc-400" strokeWidth={2} />
                                </div>
                            </motion.div>

                            <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-zinc-900 mb-2">
                                Check Your Email
                            </h2>
                            <p className="text-zinc-500 text-sm font-medium">
                                We've sent a verification link to your email address. Please check your inbox.
                            </p>
                        </>
                    )}
                </div>

                {/* Action Button */}
                <div className="space-y-4 relative z-10">
                    <Link href="/dashboard">
                        <Button
                            className="w-full h-12 bg-zinc-900 text-white hover:bg-black hover:scale-[1.02] active:scale-[0.98] rounded-xl text-sm font-bold shadow-lg shadow-zinc-900/20 flex items-center justify-center gap-2 transition-all duration-200 group"
                            size="lg"
                        >
                            Go to Dashboard <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>

                    <p className="text-center text-xs text-zinc-400 font-medium">
                        Didn't receive the email?{' '}
                        <button className="text-zinc-900 hover:text-black font-bold hover:underline decoration-zinc-900 underline-offset-4 transition-all">
                            Resend verification
                        </button>
                    </p>
                </div>
            </div>

            {/* Footer */}
            <p className="absolute bottom-6 text-[10px] text-zinc-400 font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity cursor-default">
                Digital Life Wrapped © 2026
            </p>
        </div>
    );
}
