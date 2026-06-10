import Link from "next/link";
import { Bug, Twitter, Github, Linkedin } from "lucide-react";

const links = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Changelog", href: "#" },
  ],
  Integrations: [
    { label: "GitHub", href: "#" },
    { label: "Slack", href: "#" },
    { label: "Discord", href: "#" },
    { label: "Stripe", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#020a02]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit">
              <div className="p-1.5 rounded-lg bg-brand-500/15 border border-brand-500/25">
                <Bug className="w-5 h-5 text-brand-400" />
              </div>
              <span className="font-bold text-white">AI<span className="text-brand-400">Debug</span>Agent</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              The world's smartest AI-powered debugging and QA platform. Detect bugs. Explain issues. Ship with confidence.
            </p>
            <div className="flex gap-3">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="p-2 rounded-lg glass text-slate-400 hover:text-brand-400 hover:border-brand-500/30 transition-colors">
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-white text-sm font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-slate-400 hover:text-white text-sm transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} AI Debug Agent. All rights reserved.</p>
          <p className="text-slate-500 text-sm">Trusted by 10,000+ developers worldwide</p>
        </div>
      </div>
    </footer>
  );
}
