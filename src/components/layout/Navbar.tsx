"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Bug, Home, Zap, CreditCard, LayoutDashboard, LogIn, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/features", label: "Features", icon: Zap },
  { href: "/pricing", label: "Pricing", icon: CreditCard },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Left Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-56 flex-col z-50 glass border-r border-white/5 py-6 px-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group px-3 mb-8">
          <div className="p-1.5 rounded-lg bg-brand-500/15 border border-brand-500/25 group-hover:bg-brand-500/25 transition-colors">
            <Bug className="w-5 h-5 text-brand-400" />
          </div>
          <span className="text-base font-bold text-white">AI<span className="text-brand-400">Debug</span></span>
        </Link>

        {/* Nav Links */}
        <nav className="flex flex-col gap-1 flex-1">
          {links.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href}
              className={cn("relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname === href ? "text-white" : "text-slate-400 hover:text-white hover:bg-white/5")}>
              {pathname === href && (
                <motion.span layoutId="sidebar-nav"
                  className="absolute inset-0 rounded-lg bg-pink-500/15 border border-pink-500/30" />
              )}
              <Icon className={cn("w-4 h-4 relative", pathname === href ? "text-pink-400" : "text-slate-500")} />
              <span className="relative">{label}</span>
            </Link>
          ))}
        </nav>

        {/* Bottom CTAs */}
        <div className="flex flex-col gap-2 mt-auto px-0">
          <Link href="/pricing" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
            <LogIn className="w-4 h-4" /> Log in
          </Link>
          <Link href="/pricing" className="flex items-center justify-center gap-2 gradient-bg text-white py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity glow-sm">
            Free Trial <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </aside>

      {/* Mobile Top Bar */}
      <header className="md:hidden fixed top-0 inset-x-0 z-50 glass border-b border-white/5 py-4 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-brand-500/15 border border-brand-500/25">
            <Bug className="w-5 h-5 text-brand-400" />
          </div>
          <span className="font-bold text-white">AI<span className="text-brand-400">Debug</span>Agent</span>
        </Link>
        <button className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[61px] inset-x-0 z-50 glass border-b border-white/5 overflow-hidden">
            <div className="px-6 py-4 space-y-1">
              {links.map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href} onClick={() => setOpen(false)}
                  className={cn("flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    pathname === href ? "bg-pink-500/15 border border-pink-500/30 text-white" : "text-slate-400 hover:text-white hover:bg-white/5")}>
                  <Icon className="w-4 h-4" /> {label}
                </Link>
              ))}
              <Link href="/pricing" onClick={() => setOpen(false)}
                className="flex items-center justify-center gradient-bg text-white rounded-lg py-3 text-sm font-medium mt-2">
                Start Free Trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
