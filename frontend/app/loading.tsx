import { Loader2 } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] bg-zinc-50 flex flex-col items-center justify-center gap-4 animate-in fade-in duration-300">
            <div className="relative">
                <Logo size="lg" className="animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="w-16 h-16 text-zinc-900/10 animate-spin absolute" />
                </div>
            </div>
            <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest animate-pulse">Loading...</p>
        </div>
    );
}
