"use client";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "gradient-bg text-white glow-sm hover:opacity-90 shadow-lg",
  secondary: "bg-white/8 text-white hover:bg-white/12 border border-white/10",
  ghost: "text-slate-300 hover:text-white hover:bg-white/5",
  outline: "border border-brand-500 text-brand-400 hover:bg-brand-500/10",
};
const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-sm", lg: "px-8 py-4 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", loading, className, children, ...props }, ref) => (
    <motion.button ref={ref} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
      className={cn("inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
        variants[variant], sizes[size], className)}
      disabled={loading || props.disabled}
      {...(props as React.ComponentProps<typeof motion.button>)}>
      {loading && <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>}
      {children}
    </motion.button>
  )
);
Button.displayName = "Button";
export default Button;
