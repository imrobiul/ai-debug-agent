"use client";
import { motion } from "framer-motion";
import { Search, Zap, Bug, Globe, BarChart3, Shield, GitBranch, Bell } from "lucide-react";
import Badge from "@/components/ui/Badge";

const features = [
  { icon: Search, title: "AI Website Scanner", desc: "Enter any URL — our AI crawls your entire site detecting JS errors, broken links, and failed API calls automatically.", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  { icon: Zap, title: "Instant AI Fixes", desc: "For every bug detected, AI generates a ready-to-paste code fix with explanation. No more hours of Googling.", color: "text-brand-400", bg: "bg-brand-500/10 border-brand-500/20" },
  { icon: BarChart3, title: "Performance Audit", desc: "Core Web Vitals, LCP, FID, CLS analysis with specific optimization recommendations to boost your scores.", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
  { icon: Globe, title: "Responsive Testing", desc: "Automated testing across Desktop, Tablet, and Mobile. Catch layout breaks and overflow issues instantly.", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" },
  { icon: Shield, title: "Accessibility Audit", desc: "WCAG 2.2 compliance checks, contrast issues, missing alt text, keyboard navigation — all automated.", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
  { icon: GitBranch, title: "GitHub Integration", desc: "Connect your repo. AI reviews every PR for bugs, security risks, and performance issues automatically.", color: "text-pink-400", bg: "bg-pink-500/10 border-pink-500/20" },
  { icon: Bell, title: "Continuous Monitoring", desc: "Set hourly, daily, or weekly scans. Get alerts via Email, Slack, or Discord the moment something breaks.", color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
  { icon: Bug, title: "SEO Audit", desc: "Analyze meta tags, Open Graph, structured data, sitemap, and heading structure. Get a full SEO score.", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
];

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="brand" className="mb-4">Features</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything you need to<br /><span className="gradient-text">debug smarter</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            One platform to detect, explain, and fix all your website issues — powered by AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 group cursor-pointer hover:border-white/12 transition-all">
              <div className={`p-2.5 w-fit rounded-xl border mb-4 ${bg} group-hover:scale-110 transition-transform`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm">{title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
