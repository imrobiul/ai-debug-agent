"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, Terminal } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-brand-500/4 blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-emerald-400/3 blur-[80px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge variant="brand" className="mb-6">
            <Sparkles className="w-3 h-3" />
            AI-Powered Debugging — Now in Beta
          </Badge>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          Fix Bugs Before
          <br /><span className="gradient-text">Users Find Them</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          AI Debug Agent automatically scans your website, detects JavaScript errors, failed APIs, performance issues, and generates instant AI fixes — before your users hit a single bug.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/pricing">
            <button className="group gradient-bg text-white px-8 py-4 rounded-lg font-medium text-base glow-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-base glass text-slate-300 hover:text-white transition-colors">
              <Play className="w-4 h-4 text-brand-400" />
              View Demo
            </button>
          </Link>
        </motion.div>

        {/* Code snippet preview */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          className="glass rounded-2xl p-6 max-w-2xl text-left glow">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-pink-500/80" />
            <div className="w-3 h-3 rounded-full bg-pink-400/80" />
            <div className="w-3 h-3 rounded-full bg-pink-300/80" />
            <div className="flex items-center gap-1.5 ml-2 text-slate-500 text-xs">
              <Terminal className="w-3 h-3" /> AI Debug Agent — scanner.js
            </div>
          </div>
          <div className="font-mono text-sm space-y-2">
            <div><span className="text-red-400">❌ TypeError:</span> <span className="text-slate-300">Cannot read properties of undefined</span></div>
            <div className="pl-4 text-slate-500">at user.profile.name → <span className="text-yellow-400">line 42</span></div>
            <div className="mt-3"><span className="text-brand-400">✦ AI Fix:</span></div>
            <div className="pl-4 glass-green rounded-lg p-3 mt-1">
              <span className="text-slate-400">// Use optional chaining</span><br />
              <span className="text-brand-300">const</span> <span className="text-white">name</span> <span className="text-slate-400">=</span> <span className="text-green-300">user?.profile?.name</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
          {[["10,000+", "Developers"], ["5M+", "Bugs Detected"], ["80%", "Faster Debugging"], ["99.9%", "Uptime"]].map(([v, l]) => (
            <div key={l} className="flex items-center gap-2">
              <span className="text-brand-400 font-semibold text-base">{v}</span>
              <span>{l}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
