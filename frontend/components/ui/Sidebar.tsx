'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Github, Music, Linkedin, Calendar, Settings, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/Logo';
import { useAuth } from '@/contexts/AuthContext';

const sidebarItems = [
    { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
    { icon: Github, label: 'GitHub', href: '/dashboard/github' },
    { icon: Music, label: 'Spotify', href: '/dashboard/spotify' },
    { icon: Linkedin, label: 'LinkedIn', href: '/dashboard/linkedin' },
    { icon: Calendar, label: 'Calendar', href: '/dashboard/calendar' },
];

export function Sidebar() {
    const pathname = usePathname();
    const { logout } = useAuth();

    const handleLogout = async () => {
        if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
            await logout();
        }
    };

    return (
        <motion.aside
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="fixed left-0 top-0 h-screen w-64 bg-zinc-50 hidden md:flex flex-col z-50 pointer-events-auto"
        >
            {/* Logo Area */}
            <div className="p-6 pb-2 flex items-center gap-3">
                <Logo size="sm" />
                <span className="font-bold text-xl text-zinc-900 tracking-tight">
                    Digital Life
                </span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-1">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.href} href={item.href}>
                            <div
                                className={cn(
                                    "group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 relative overflow-hidden font-bold text-sm",
                                    isActive
                                        ? "bg-zinc-900 text-white shadow-lg shadow-zinc-900/10"
                                        : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50"
                                )}
                            >
                                <item.icon className={cn("h-4 w-4 relative z-10 transition-colors", isActive ? "text-white" : "group-hover:text-zinc-900")} />
                                <span className="relative z-10">{item.label}</span>
                            </div>
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Actions */}
            <div className="p-4 space-y-1">
                <Link href="/dashboard/settings">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50 transition-all cursor-pointer font-bold text-sm">
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                    </div>
                </Link>
                <div onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:text-red-600 hover:bg-red-50 transition-all cursor-pointer font-medium text-sm">
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                </div>
            </div>
        </motion.aside>
    );
}
