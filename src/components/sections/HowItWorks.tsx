"use client";
import { motion } from "framer-motion";
import { Link2, ScanSearch, Bot, CheckCircle } from "lucide-react";
import Badge from "@/components/ui/Badge";

const steps = [
  { icon: Link2, step: "01", title: "Enter Your URL", desc: "Paste your website, staging, or production URL. AI Debug Agent handles the rest." },
  { icon: ScanSearch, step: "02", title: "AI Scans Everything", desc: "Our AI crawls every page, detecting JS errors, broken APIs, performance issues, and accessibility problems." },
  { icon: Bot, step: "03", title: "Get AI Explanations", desc: "Every issue is explained in plain English — why it happened, where, and what the impact is." },
  { icon: CheckCircle, step: "04", title: "Apply Instant Fixes", desc: "Copy the AI-generated fix, apply it, and ship with confidence. No debugging rabbit holes." },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-brand-500/2 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="brand" className="mb-4">How It Works</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            From URL to fixed in <span className="gradient-text">minutes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <motion.div key={step}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center relative">
              <div className="w-16 h-16 rounded-2xl glass-green border-brand-500/25 flex items-center justify-center mx-auto mb-4 glow-sm">
                <Icon className="w-7 h-7 text-brand-400" />
              </div>
              <div className="text-brand-500/50 text-xs font-mono mb-2">{step}</div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
