import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Badge from "@/components/ui/Badge";

const plans = [
  {
    name: "Free", price: "$0", period: "/month",
    desc: "Get started with AI debugging.",
    features: ["1 website", "Weekly scan", "Basic error detection", "AI explanations (5/mo)", "Email alerts"],
    cta: "Start Free", popular: false, href: "/pricing",
  },
  {
    name: "Pro", price: "$29", period: "/month",
    desc: "For serious developers and growing teams.",
    features: ["20 websites", "Daily monitoring", "Full AI analysis", "GitHub integration", "Slack & Discord alerts", "Performance audits", "Accessibility checks"],
    cta: "Start Free Trial", popular: true, href: "/pricing",
  },
  {
    name: "Agency", price: "$99", period: "/month",
    desc: "For agencies managing multiple clients.",
    features: ["Unlimited websites", "Team workspace", "White-label reports", "Priority scanning", "API access", "Custom integrations", "Dedicated support"],
    cta: "Contact Sales", popular: false, href: "/pricing",
  },
];

export default function HomePricing() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-brand-500/2 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="brand" className="mb-4">Pricing</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="text-slate-400">Start free. Upgrade when you're ready. No credit card required.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {plans.map(({ name, price, period, desc, features, cta, popular, href }) => (
            <div key={name} className={`glass rounded-2xl p-8 relative flex flex-col ${popular ? "border-brand-500/40 glow lg:-mt-6 lg:pb-10 lg:pt-10" : ""}`}>
              {popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="gradient-bg text-white text-xs font-semibold px-4 py-1.5 rounded-full">Most Popular</span>
                </div>
              )}
              <h3 className="text-white font-bold text-xl mb-1">{name}</h3>
              <p className="text-slate-400 text-sm mb-4">{desc}</p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold text-white">{price}</span>
                <span className="text-slate-400 text-sm mb-1">{period}</span>
              </div>
              <Link href={href}>
                <button className={`w-full py-3 rounded-lg text-sm font-medium transition-all mb-6 ${popular ? "gradient-bg text-white glow-sm hover:opacity-90" : "glass text-slate-300 hover:text-white hover:border-white/15"}`}>
                  {cta}
                </button>
              </Link>
              <div className="space-y-3 flex-1">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-400 shrink-0" />
                    <span className="text-slate-300">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
