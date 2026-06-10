import { cn } from "@/lib/utils";

const variants = {
  default: "bg-white/8 text-slate-300 border-white/10",
  brand: "bg-brand-500/10 text-brand-400 border-brand-500/20",
  red: "bg-red-500/10 text-red-400 border-red-500/20",
  yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

export default function Badge({ children, variant = "default", className }: {
  children: React.ReactNode; variant?: keyof typeof variants; className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium", variants[variant], className)}>
      {children}
    </span>
  );
}
