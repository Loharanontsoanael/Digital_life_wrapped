import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({ className, size = "md" }: LogoProps) {
    const sizeClasses = {
        sm: "w-8 h-8 text-xs",
        md: "w-10 h-10 text-sm",
        lg: "w-12 h-12 text-base",
        xl: "w-16 h-16 text-xl",
    };

    return (
        <div className={cn("flex items-center gap-3", className)}>
            <div className={cn(
                "rounded-xl bg-zinc-900 flex items-center justify-center shadow-lg shadow-zinc-900/20 text-white font-black tracking-tighter border border-zinc-800 select-none",
                sizeClasses[size]
            )}>
                DL
            </div>

        </div>
    );
}
