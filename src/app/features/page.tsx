import type { Metadata } from "next";
import { Search, Zap, Bug, Globe, BarChart3, Shield, GitBranch, Bell, Terminal, Users, Eye, Lock } from "lucide-react";
import { CheckCircle } from "lucide-react";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Features",
  description: "AI-powered website scanning, error detection, performance audits, GitHub integration and more.",
};

const features = [
  {
    icon: Search, title: "AI Website Scanner", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20",
    desc: "Enter any URL — our AI crawls every page detecting errors, broken resources, and failed API calls.",
    points: ["Full website crawl", "JavaScript error detection", "Failed API monitoring", "Broken link checker", "Missing resource alerts"],
  },
  {
    icon: Zap, title: "AI Fix Generator", color: "text-brand-400", bg: "bg-brand-500/10 border-brand-500/20",
    desc: "Every detected issue comes with an AI-generated, context-aware code fix ready to paste.",
    points: ["React & Next.js fixes", "TypeScript-aware patches", "API error solutions", "Config file fixes", "Refactoring suggestions"],
  },
  {
    icon: BarChart3, title: "Performance Analysis", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20",
    desc: "Full Core Web Vitals analysis with specific optimization steps to boost your Lighthouse scores.",
    points: ["LCP, FID, CLS metrics", "Page speed scoring", "Bundle size analysis", "Image optimization tips", "Render blocking detection"],
  },
  {
    icon: Globe, title: "Responsive Testing", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20",
    desc: "Automated visual testing across Desktop, Tablet, and Mobile. Screenshots for every breakpoint.",
    points: ["Desktop / Tablet / Mobile", "Visual screenshot capture", "Layout break detection", "Overflow issue finder", "Navigation testing"],
  },
  {
    icon: Shield, title: "Accessibility Audit", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20",
    desc: "WCAG 2.2 compliance checks covering contrast, alt text, keyboard navigation, and form accessibility.",
    points: ["WCAG 2.2 compliance", "Color contrast checker", "Alt text validation", "Keyboard navigation", "Form accessibility"],
  },
  {
    icon: GitBranch, title: "GitHub Integration", color: "text-pink-400", bg: "bg-pink-500/10 border-pink-500/20",
    desc: "Connect your repo for automatic PR analysis. AI reviews code quality, security, and performance.",
    points: ["Auto PR analysis", "Push-triggered scans", "AI code review comments", "Security risk detection", "Performance regression alerts"],
  },
  {
    icon: Bell, title: "Continuous Monitoring", color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20",
    desc: "Set it and forget it. Automated monitoring on your schedule with instant alerts when issues appear.",
    points: ["Hourly / daily / weekly scans", "Email, Slack, Discord alerts", "Uptime monitoring", "Error trend analysis", "Custom alert rules"],
  },
  {
    icon: Bug, title: "SEO Audit", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20",
    desc: "Full SEO health check covering meta tags, structured data, sitemap, and heading structure.",
    points: ["Meta tag analysis", "Open Graph checker", "Structured data validation", "Sitemap & robots.txt", "Heading hierarchy audit"],
  },
  {
    icon: Users, title: "Team Collaboration", color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20",
    desc: "Shared workspaces, issue assignment, and activity logs to keep your whole team in sync.",
    points: ["Team workspaces", "Issue assignment", "Threaded comments", "Activity logs", "Role-based access"],
  },
];

export default function FeaturesPage() {
  return (
    <div className="pt-28">
      <section className="max-w-7xl mx-auto px-6 pb-20 text-center">
        <Badge variant="brand" className="mb-4">All Features</Badge>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          One platform. <span className="gradient-text">Zero blind spots.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Every tool you need to detect, understand, and fix website issues — powered by AI.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 space-y-8">
        {features.map(({ icon: Icon, title, color, bg, desc, points }, i) => (
          <div key={title} className={`glass rounded-3xl p-8 md:p-12 flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}>
            <div className="flex-1">
              <div className={`p-3 w-fit rounded-2xl border mb-5 ${bg}`}><Icon className={`w-7 h-7 ${color}`} /></div>
              <h2 className="text-3xl font-bold text-white mb-3">{title}</h2>
              <p className="text-slate-400 leading-relaxed">{desc}</p>
            </div>
            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
              {points.map((p) => (
                <div key={p} className="flex items-center gap-3 glass rounded-xl p-3">
                  <CheckCircle className="w-4 h-4 text-brand-400 shrink-0" />
                  <span className="text-slate-300 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <CTA />
    </div>
  );
}
