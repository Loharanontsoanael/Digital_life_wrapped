"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ArrowRight, Mail, Lock, User, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import api from "@/lib/axios";

export default function Signup() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Password validation state
    const [validation, setValidation] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        symbol: false
    });

    const validatePassword = (pass: string) => {
        setValidation({
            length: pass.length >= 8,
            uppercase: /[A-Z]/.test(pass),
            lowercase: /[a-z]/.test(pass),
            number: /[0-9]/.test(pass),
            symbol: /[!@#$%^&*(),.?":{}|<>]/.test(pass)
        });
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setPassword(val);
        validatePassword(val);
    };

    const isPasswordValid = Object.values(validation).every(Boolean);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!isPasswordValid) {
            setError("Please fulfill all password requirements.");
            setLoading(false);
            return;
        }

        if (password !== passwordConfirmation) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            await api.get('/sanctum/csrf-cookie');
            await api.post('/api/register', {
                name,
                email,
                password,
                password_confirmation: passwordConfirmation
            });
            // Optionally auto-login or redirect to dashboard
            router.push('/dashboard');
        } catch (err: any) {
            console.error(err);
            setError(err.response?.data?.message || "Registration failed. Please try again.");
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
                    <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-zinc-900 mb-2">Create Account.</h2>
                    <p className="text-zinc-500 text-sm font-medium">Start crystallizing your digital legacy.</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-4 relative z-10">
                    {error && (
                        <div className="bg-red-50 text-red-600 text-xs font-bold p-3 rounded-xl flex items-center gap-2 border border-red-100 animate-in fade-in slide-in-from-top-1">
                            <AlertCircle className="w-4 h-4" />
                            {error}
                        </div>
                    )}

                    <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase text-zinc-500 ml-1">Identity</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-900 transition-colors">
                                <User className="w-4 h-4" />
                            </div>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full h-12 bg-zinc-50/50 border border-zinc-200 rounded-xl pl-11 pr-4 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 focus:bg-white transition-all placeholder:text-zinc-400 font-medium"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase text-zinc-500 ml-1">Email</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-900 transition-colors">
                                <Mail className="w-4 h-4" />
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-12 bg-zinc-50/50 border border-zinc-200 rounded-xl pl-11 pr-4 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 focus:bg-white transition-all placeholder:text-zinc-400 font-medium"
                                placeholder="name@example.com"
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                            <label className="text-[10px] font-bold uppercase text-zinc-500 ml-1">Password</label>
                        </div>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-900 transition-colors">
                                <Lock className="w-4 h-4" />
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="w-full h-12 bg-zinc-50/50 border border-zinc-200 rounded-xl pl-11 pr-4 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 focus:bg-white transition-all placeholder:text-zinc-400 font-medium"
                                placeholder="Create a password"
                                required
                            />
                        </div>

                        {/* Password Strength Meter - Minimalist UX */}
                        <div className="flex gap-1 h-1 mt-2">
                            {[1, 2, 3, 4, 5].map((step) => {
                                const validCount = Object.values(validation).filter(Boolean).length;
                                const isActive = validCount >= step;
                                let color = "bg-zinc-200";
                                if (isActive) {
                                    if (validCount <= 2) color = "bg-red-500";
                                    else if (validCount <= 4) color = "bg-yellow-500";
                                    else color = "bg-emerald-500";
                                }
                                return (
                                    <div
                                        key={step}
                                        className={`flex-1 rounded-full transition-all duration-500 ${color}`}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase text-zinc-500 ml-1">Confirm Password</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-900 transition-colors">
                                <Lock className="w-4 h-4" />
                            </div>
                            <input
                                type="password"
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                className="w-full h-12 bg-zinc-50/50 border border-zinc-200 rounded-xl pl-11 pr-4 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 focus:bg-white transition-all placeholder:text-zinc-400 font-medium"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>
                    </div>

                    <div className="pt-2">
                        <Button
                            disabled={loading}
                            className="w-full h-12 bg-zinc-900 text-white hover:bg-black hover:scale-[1.02] active:scale-[0.98] rounded-xl text-sm font-bold mt-2 shadow-lg shadow-zinc-900/20 flex items-center justify-center gap-2 transition-all duration-200 group"
                            size="lg"
                        >
                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>}
                        </Button>
                    </div>
                </form>

                <p className="mt-8 text-center text-sm font-medium text-zinc-500 relative z-10">
                    Already have an account?{' '}
                    <Link href="/login" className="text-zinc-900 hover:text-black font-bold hover:underline decoration-zinc-900 underline-offset-4 transition-all">
                        Log in
                    </Link>
                </p>
            </div >

            {/* Footer */}
            < p className="absolute bottom-6 text-[10px] text-zinc-400 font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity cursor-default" >
                Digital Life Wrapped © 2026
            </p >
        </div >
    );
}
