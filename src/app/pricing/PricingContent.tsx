"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/sections/CTA";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free", monthlyPrice: 0, yearlyPrice: 0,
    desc: "Perfect for trying out AI debugging.",
    features: ["1 website", "Weekly scan", "Basic JS error detection", "AI explanations (5/month)", "Email alerts", "7-day history"],
    missing: ["Daily monitoring", "GitHub integration", "Performance audits", "Team access", "API access"],
    cta: "Get Started Free", popular: false,
  },
  {
    name: "Pro", monthlyPrice: 29, yearlyPrice: 23,
    desc: "For developers who ship fast and need confidence.",
    features: ["20 websites", "Daily monitoring", "Full AI error analysis", "Unlimited AI fixes", "GitHub integration", "Performance + SEO audits", "Accessibility checks", "Slack & Discord alerts", "90-day history"],
    missing: ["Team access", "White-label reports"],
    cta: "Start Free Trial", popular: true,
  },
  {
    name: "Agency", monthlyPrice: 99, yearlyPrice: 79,
    desc: "For agencies managing multiple clients.",
    features: ["Unlimited websites", "Team workspace", "All Pro features", "White-label reports", "Priority scanning", "API access", "Custom integrations", "Dedicated support", "1-year history", "SLA guarantee"],
    missing: [],
    cta: "Contact Sales", popular: false,
  },
];

export default function PricingContent() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="pt-28">
      <section className="max-w-4xl mx-auto px-6 pb-16 text-center">
        <Badge variant="brand" className="mb-4">Pricing</Badge>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Start free. <span className="gradient-text">Scale as you grow.</span>
        </h1>
        <p className="text-slate-400 text-xl mb-10">No credit card required. Cancel anytime.</p>

        <div className="inline-flex items-center gap-2 glass rounded-full p-1.5">
          <button onClick={() => setYearly(false)} className={cn("px-5 py-2 rounded-full text-sm font-medium transition-colors", !yearly ? "gradient-bg text-white" : "text-slate-400 hover:text-white")}>Monthly</button>
          <button onClick={() => setYearly(true)} className={cn("px-5 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2", yearly ? "gradient-bg text-white" : "text-slate-400 hover:text-white")}>
            Yearly
            <span className="bg-brand-500/15 text-brand-400 border border-brand-500/25 text-xs px-2 py-0.5 rounded-full">Save 20%</span>
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {plans.map(({ name, monthlyPrice, yearlyPrice, desc, features, missing, cta, popular }) => {
            const price = yearly ? yearlyPrice : monthlyPrice;
            return (
              <motion.div key={name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className={cn("glass rounded-2xl p-8 relative flex flex-col", popular && "border-brand-500/40 glow lg:-mt-4 lg:pt-12")}>
                {popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="gradient-bg text-white text-xs font-semibold px-4 py-1.5 rounded-full">Most Popular</span>
                  </div>
                )}
                <h2 className="text-2xl font-bold text-white mb-1">{name}</h2>
                <p className="text-slate-400 text-sm mb-5">{desc}</p>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">{price === 0 ? "Free" : `$${price}`}</span>
                  {price > 0 && <span className="text-slate-400 text-sm mb-1">/month</span>}
                </div>
                {yearly && price > 0 && <p className="text-brand-400 text-xs -mt-4 mb-5">Save ${(monthlyPrice - yearlyPrice) * 12}/year</p>}
                <button className={cn("w-full py-3 rounded-lg text-sm font-medium transition-all mb-6", popular ? "gradient-bg text-white glow-sm hover:opacity-90" : "glass text-slate-300 hover:text-white")}>
                  {cta}
                </button>
                <div className="space-y-2.5 flex-1">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle className="w-4 h-4 text-brand-400 shrink-0" />
                      <span className="text-slate-300">{f}</span>
                    </div>
                  ))}
                  {missing.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm opacity-35">
                      <X className="w-4 h-4 text-slate-600 shrink-0" />
                      <span className="text-slate-500 line-through">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-slate-500 text-sm mt-12">
          All plans include a 14-day money-back guarantee. Need custom pricing?{" "}
          <a href="mailto:hello@aidebugagent.io" className="text-brand-400 hover:underline">Contact us.</a>
        </p>
      </section>

      <CTA />
    </div>
  );
}
