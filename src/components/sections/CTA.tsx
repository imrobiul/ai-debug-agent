import Link from "next/link";
import { ArrowRight, Bug } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-12 md:p-20 text-center glow relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/8 via-transparent to-emerald-400/5 pointer-events-none" />
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl glass-green mx-auto mb-6 flex items-center justify-center glow-sm">
              <Bug className="w-8 h-8 text-brand-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Stop chasing bugs.<br /><span className="gradient-text">Let AI find them.</span>
            </h2>
            <p className="text-slate-400 max-w-md mx-auto mb-10">
              Join 10,000+ developers who ship with confidence. Free plan available. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/pricing">
                <button className="group gradient-bg text-white px-8 py-4 rounded-lg font-medium glow-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/dashboard">
                <button className="px-8 py-4 rounded-lg font-medium glass text-slate-300 hover:text-white transition-colors">
                  View Live Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
