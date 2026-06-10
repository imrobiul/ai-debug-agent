"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Badge from "@/components/ui/Badge";

const testimonials = [
  { name: "Alex Chen", role: "Senior Frontend Engineer, Vercel", initials: "AC", text: "AI Debug Agent caught a critical undefined error in production before it caused a major outage. The AI explanation was crystal clear. 10/10." },
  { name: "Priya Sharma", role: "CTO, LaunchFast", initials: "PS", text: "We reduced our bug triage time by 75%. The GitHub PR analysis is insane — it catches issues our code reviewers miss." },
  { name: "Marcus Johnson", role: "Fullstack Developer", initials: "MJ", text: "The AI fix suggestions are genuinely good. Not just 'wrap in try/catch' — real, context-aware solutions. It's like having a senior dev always reviewing your code." },
  { name: "Sarah Kim", role: "QA Lead, FinTech Startup", initials: "SK", text: "The accessibility audit found 23 WCAG issues in 10 seconds. Would have taken our team 2 days. Absolutely worth it." },
  { name: "Tom Rivera", role: "Agency Owner, DigitalCraft", initials: "TR", text: "Run this for all our client websites before launch. It's our secret weapon for delivering zero-bug builds on time." },
  { name: "Emma Watson", role: "Next.js Developer", initials: "EW", text: "The Next.js-specific error detection is spot on. Caught a hydration mismatch and explained the exact fix. Saved me 3 hours." },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="brand" className="mb-4">Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Loved by <span className="gradient-text">10,000+ developers</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-white/12 transition-colors">
              <div className="flex gap-1">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}</div>
              <p className="text-slate-300 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className="w-9 h-9 rounded-full bg-brand-500/15 border border-brand-500/25 flex items-center justify-center text-brand-400 text-xs font-bold">{t.initials}</div>
                <div>
                  <div className="text-white text-sm font-medium">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
