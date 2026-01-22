'use client';

import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/Logo';

export function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, y: 20 },
        open: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.1 + i * 0.1, duration: 0.4 }
        })
    };

    return (
        <>
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-[60] transition-all duration-300 border-b",
                    scrolled || isOpen
                        ? "bg-white/90 backdrop-blur-md border-zinc-200 py-3"
                        : "bg-transparent border-transparent py-5"
                )}
            >
                <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group relative z-[70]">
                        <Logo size="sm" />
                        <span className="font-heading font-black text-xl tracking-tighter text-zinc-900 leading-none">
                            Digital Life
                        </span>
                    </Link>

                    <div className="flex items-center gap-8">
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {['Features', 'Integrations', 'About'].map((item) => (
                                <Link key={item} href="#" className="relative text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
                                    {item}
                                </Link>
                            ))}
                            <div className="w-[1px] h-6 bg-zinc-200 mx-2"></div>
                            <Link href="/login" className="text-sm font-bold text-zinc-900 hover:underline underline-offset-4">
                                Sign In
                            </Link>
                            <Link href="/signup" className="h-10 px-5 rounded-xl bg-zinc-900 text-white flex items-center gap-2 text-sm font-bold hover:bg-zinc-800 transition-all hover:scale-105 shadow-xl shadow-zinc-900/10">
                                Sign Up
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle (Two-Bar Design) */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden relative z-[70] w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors"
                        >
                            <div className="flex flex-col gap-1.5 items-end">
                                <motion.span
                                    animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                    className="w-5 h-[1.5px] bg-zinc-900 origin-center transition-all duration-300"
                                />
                                <motion.span
                                    animate={isOpen ? { rotate: -45, y: -1.5, width: 20 } : { rotate: 0, y: 0, width: 12 }}
                                    className="h-[1.5px] bg-zinc-900 origin-center transition-all duration-300"
                                    style={{ width: isOpen ? 20 : 12 }}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 z-50 bg-zinc-50 flex flex-col pt-32 px-6 md:hidden"
                    >
                        {/* Links */}
                        <div className="flex flex-col gap-6 mb-12">
                            {['Features', 'Integrations', 'About'].map((item, i) => (
                                <motion.div
                                    key={item}
                                    custom={i}
                                    variants={linkVariants}
                                >
                                    <Link
                                        href="#"
                                        className="text-4xl font-heading font-black tracking-tighter text-zinc-900 hover:text-zinc-500 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Auth Buttons */}
                        <motion.div
                            variants={linkVariants}
                            custom={3}
                            className="flex flex-col gap-4 mt-auto mb-10"
                        >
                            <Link href="/login" onClick={() => setIsOpen(false)}>
                                <div className="w-full h-14 border border-zinc-200 rounded-2xl flex items-center justify-center text-lg font-bold text-zinc-900 bg-white">
                                    Sign In
                                </div>
                            </Link>
                            <Link href="/signup" prefetch={true} onClick={() => setIsOpen(false)}>
                                <div className="w-full h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-lg font-bold text-white shadow-xl shadow-zinc-900/20">
                                    Sign Up
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </div>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
