"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Bug, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={cn("fixed top-0 inset-x-0 z-50 transition-all duration-300", scrolled ? "glass border-b border-white/5 py-3" : "py-5")}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-1.5 rounded-lg bg-brand-500/15 border border-brand-500/25 group-hover:bg-brand-500/25 transition-colors">
            <Bug className="w-5 h-5 text-brand-400" />
          </div>
          <span className="text-lg font-bold text-white">AI<span className="text-brand-400">Debug</span>Agent</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={cn("relative px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === l.href ? "text-white" : "text-slate-400 hover:text-white hover:bg-white/5")}>
                {pathname === l.href && <motion.span layoutId="nav" className="absolute inset-0 rounded-lg bg-white/8 border border-white/10" />}
                <span className="relative">{l.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/pricing" className="text-sm text-slate-400 hover:text-white transition-colors">Log in</Link>
          <Link href="/pricing" className="px-4 py-2 rounded-lg gradient-bg text-white text-sm font-medium hover:opacity-90 transition-opacity glow-sm">
            Start Free Trial
          </Link>
        </div>

        <button className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden">
            <div className="px-6 py-4 space-y-1">
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className={cn("block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    pathname === l.href ? "bg-white/8 text-white" : "text-slate-400 hover:text-white hover:bg-white/5")}>
                  {l.label}
                </Link>
              ))}
              <Link href="/pricing" onClick={() => setOpen(false)}
                className="block w-full text-center gradient-bg text-white rounded-lg py-3 text-sm font-medium mt-2">
                Start Free Trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
