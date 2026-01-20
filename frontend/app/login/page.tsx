"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Github, ArrowRight, Mail, Lock, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import api from "@/lib/axios";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Client-side validation
        if (!email || !password) {
            setError('Please fill in all fields.');
            setLoading(false);
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email address.');
            setLoading(false);
            return;
        }

        try {
            await api.get('/sanctum/csrf-cookie');
            await api.post('/api/login', { email, password });
            router.push('/dashboard');
        } catch (err: any) {
            console.error(err);

            // Specific error messages based on status code
            if (err.response?.status === 422) {
                setError('Invalid email or password. Please check your credentials.');
            } else if (err.response?.status === 429) {
                setError('Too many login attempts. Please wait a few minutes and try again.');
            } else if (!err.response) {
                setError('Network error. Please check your internet connection.');
            } else {
                setError(err.response?.data?.message || 'Login failed. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

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
                    <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-zinc-900 mb-2">Welcome Back.</h2>
                    <p className="text-zinc-500 text-sm font-medium">Continue your digital legacy.</p>
                </div>

                <div className="space-y-3 relative z-10">
                    <button type="button" className="w-full h-11 flex items-center justify-center gap-3 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-900 font-bold text-sm rounded-xl transition-all duration-200 group relative overflow-hidden active:scale-[0.98]">
                        <Github className="w-4 h-4 group-hover:scale-110 transition-transform relative z-10" />
                        <span className="relative z-10">Continue with GitHub</span>
                    </button>

                    <button type="button" className="w-full h-11 flex items-center justify-center gap-3 bg-[#1DB954]/5 hover:bg-[#1DB954]/10 border border-[#1DB954]/20 text-[#1DB954] font-bold text-sm rounded-xl transition-all duration-200 group relative overflow-hidden active:scale-[0.98]">
                        {/* Spotify Icon */}
                        <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform relative z-10" viewBox="0 0 24 24">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.019.6-1.141 4.38-1.379 9.901-.719 13.681 1.62.421.3.539.84.24 1.2h.001zm.12-3.36C15.06 8.4 8.7 8.16 5.1 9.24c-.54.18-1.141-.181-1.32-.72-.18-.54.18-1.14.72-1.32 4.14-1.26 11.16-.96 15.18 1.44.6.359.78 1.14.42 1.739-.359.54-1.14.72-1.74.36z" />
                        </svg>
                        <span className="relative z-10">Continue with Spotify</span>
                    </button>
                </div>

                <div className="my-8 flex items-center gap-4 relative z-10">
                    <div className="h-[1px] bg-zinc-100 flex-1" />
                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Or with email</span>
                    <div className="h-[1px] bg-zinc-100 flex-1" />
                </div>

                <form onSubmit={handleLogin} className="space-y-4 relative z-10" noValidate>
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-red-50/50 border border-red-100/50 rounded-lg px-4 py-3 flex items-center gap-3 mb-4"
                        >
                            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                            <p className="text-xs font-medium text-red-700/90 leading-none">
                                {error}
                            </p>
                        </motion.div>
                    )}

                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                            <label className="text-[10px] font-bold uppercase text-zinc-500 ml-1">Email Badge</label>
                            {error && !email && <span className="text-[10px] font-bold uppercase text-red-500 animate-pulse">Required</span>}
                        </div>
                        <div className="relative group">
                            <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${error ? 'text-red-400' : 'text-zinc-400 group-focus-within:text-zinc-900'}`}>
                                <Mail className="w-4 h-4" />
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (error) setError(null); // Clear error on type for better UX
                                }}
                                className="w-full h-12 bg-zinc-50/50 border border-zinc-200 rounded-xl pl-11 pr-4 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-900 focus:bg-white transition-all placeholder:text-zinc-400 font-medium"
                                placeholder="name@example.com"
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                            <label className="text-[10px] font-bold uppercase text-zinc-500 ml-1">Secure Password</label>
                            {error ? (
                                <Link href="/forgot-password" className="text-[10px] font-bold uppercase text-red-500 hover:text-red-700 transition-colors">
                                    Reset Password?
                                </Link>
                            ) : (
                                <Link href="/forgot-password" className="text-[10px] font-bold uppercase text-zinc-400 hover:text-zinc-900 transition-colors">
                                    Forgot?
                                </Link>
                            )}
                        </div>
                        <div className="relative group">
                            <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${error ? 'text-red-400' : 'text-zinc-400 group-focus-within:text-zinc-900'}`}>
                                <Lock className="w-4 h-4" />
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (error) setError(null); // Clear error on type
                                }}
                                className="w-full h-12 bg-zinc-50/50 border border-zinc-200 rounded-xl pl-11 pr-4 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-900 focus:bg-white transition-all placeholder:text-zinc-400 font-medium"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>
                    <Button
                        disabled={loading}
                        className="w-full h-12 bg-zinc-900 text-white hover:bg-black hover:scale-[1.02] active:scale-[0.98] rounded-xl text-sm font-bold mt-2 shadow-lg shadow-zinc-900/20 flex items-center justify-center gap-2 transition-all duration-200"
                        size="lg"
                    >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Access Account <ArrowRight className="w-4 h-4" /></>}
                    </Button>
                </form>

                <p className="mt-8 text-center text-sm font-medium text-zinc-500 relative z-10">
                    New here?{' '}
                    <Link href="/signup" className="text-zinc-900 hover:text-black font-bold hover:underline decoration-zinc-900 underline-offset-4 transition-all">
                        Create an account
                    </Link>
                </p>
            </div>

            {/* Footer */}
            <p className="absolute bottom-6 text-[10px] text-zinc-400 font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity cursor-default">
                Digital Life Wrapped © 2026
            </p>
        </div>
    );
}
