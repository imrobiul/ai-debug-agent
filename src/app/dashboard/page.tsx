import type { Metadata } from "next";
import { AlertTriangle, CheckCircle, XCircle, BarChart3, Clock, Globe, Zap, Shield, Bug, TrendingUp } from "lucide-react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "See the AI Debug Agent dashboard — real-time website health monitoring and error detection.",
};

const issues = [
  { type: "error", icon: XCircle, color: "text-red-400", bg: "bg-red-500/10 border-red-500/20", title: "TypeError: Cannot read properties of undefined", location: "pages/checkout.tsx:42", ai: "Use optional chaining: user?.profile?.name" },
  { type: "warning", icon: AlertTriangle, color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20", title: "Failed API request: /api/products (404)", location: "components/ProductList.tsx:18", ai: "Endpoint no longer exists. Update to /api/v2/products" },
  { type: "warning", icon: AlertTriangle, color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20", title: "LCP score: 4.2s (Poor — threshold 2.5s)", location: "Homepage / Hero section", ai: "Optimize hero image: add loading='eager' and srcset" },
  { type: "info", icon: AlertTriangle, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20", title: "Missing alt text on 7 images", location: "Multiple pages", ai: "Add descriptive alt attributes for WCAG 2.2 compliance" },
];

const metrics = [
  { label: "Health Score", value: "74", suffix: "/100", icon: TrendingUp, color: "text-yellow-400", change: "+5 this week" },
  { label: "Critical Errors", value: "3", suffix: "", icon: XCircle, color: "text-red-400", change: "-2 from yesterday" },
  { label: "Warnings", value: "12", suffix: "", icon: AlertTriangle, color: "text-yellow-400", change: "Same as yesterday" },
  { label: "Checks Passed", value: "148", suffix: "", icon: CheckCircle, color: "text-brand-400", change: "+8 this week" },
];

export default function DashboardPage() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <Badge variant="brand" className="mb-2">Live Demo</Badge>
            <h1 className="text-3xl font-bold text-white">Dashboard Preview</h1>
            <p className="text-slate-400 text-sm mt-1">mysite.com — Last scanned 2 minutes ago</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-brand-400 text-sm"><span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />Monitoring Active</span>
            <Link href="/pricing">
              <button className="gradient-bg text-white px-5 py-2.5 rounded-lg text-sm font-medium glow-sm hover:opacity-90 transition-opacity">
                Start Free Trial
              </button>
            </Link>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {metrics.map(({ label, value, suffix, icon: Icon, color, change }) => (
            <div key={label} className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-400 text-xs">{label}</span>
                <Icon className={`w-4 h-4 ${color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{value}<span className="text-slate-400 text-lg">{suffix}</span></div>
              <div className="text-slate-500 text-xs">{change}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Issues list */}
          <div className="lg:col-span-2 glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-white font-semibold">Active Issues</h2>
              <span className="text-slate-500 text-xs">15 total</span>
            </div>
            <div className="space-y-4">
              {issues.map((issue) => (
                <div key={issue.title} className="glass rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-1.5 rounded-lg border ${issue.bg} mt-0.5`}>
                      <issue.icon className={`w-4 h-4 ${issue.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{issue.title}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{issue.location}</p>
                      <div className="mt-2 flex items-start gap-1.5 glass-green rounded-lg px-3 py-2">
                        <Zap className="w-3 h-3 text-brand-400 mt-0.5 shrink-0" />
                        <p className="text-brand-300 text-xs">{issue.ai}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="space-y-5">
            {/* Health scores */}
            <div className="glass rounded-2xl p-5">
              <h3 className="text-white font-semibold mb-4">Health Scores</h3>
              {[
                { label: "Performance", score: 68, color: "bg-yellow-400" },
                { label: "SEO", score: 85, color: "bg-brand-400" },
                { label: "Accessibility", score: 71, color: "bg-orange-400" },
                { label: "Stability", score: 79, color: "bg-blue-400" },
              ].map(({ label, score, color }) => (
                <div key={label} className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">{label}</span>
                    <span className="text-white font-medium">{score}/100</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${color}`} style={{ width: `${score}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Recent scans */}
            <div className="glass rounded-2xl p-5">
              <h3 className="text-white font-semibold mb-4">Scan History</h3>
              {[
                { time: "2 min ago", status: "15 issues", dot: "bg-yellow-400" },
                { time: "6 hours ago", status: "17 issues", dot: "bg-yellow-400" },
                { time: "Yesterday", status: "22 issues", dot: "bg-red-400" },
                { time: "2 days ago", status: "8 issues", dot: "bg-brand-400" },
              ].map(({ time, status, dot }) => (
                <div key={time} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${dot}`} />
                    <span className="text-slate-400 text-xs">{time}</span>
                  </div>
                  <span className="text-slate-300 text-xs">{status}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="glass-green rounded-2xl p-5 text-center">
              <Bug className="w-8 h-8 text-brand-400 mx-auto mb-3" />
              <p className="text-white text-sm font-medium mb-1">Add your website</p>
              <p className="text-slate-400 text-xs mb-4">Get a full AI scan in 60 seconds</p>
              <Link href="/pricing">
                <button className="w-full gradient-bg text-white py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  Start Free Trial
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
