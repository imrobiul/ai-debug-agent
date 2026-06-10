"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const faqs = [
  { q: "What types of errors does AI Debug Agent detect?", a: "JavaScript errors, TypeErrors, runtime errors, Promise rejections, React/Next.js specific errors, failed API calls, 404/500 responses, CORS errors, performance bottlenecks, accessibility issues, and SEO problems." },
  { q: "Do I need to install anything on my website?", a: "No installation needed. Just enter your URL and we scan it externally. Optionally, you can add our lightweight monitoring snippet for real-time error tracking." },
  { q: "How does the AI Fix Generator work?", a: "When we detect an error, we send the full context (code snippet, stack trace, environment) to our AI which generates a context-aware fix — not generic advice, but actual patched code for your specific situation." },
  { q: "Does it work with Next.js and React?", a: "Yes. We have specific parsers for Next.js hydration errors, React component errors, Server Component issues, and App Router problems. TypeScript errors are also fully supported." },
  { q: "Can I integrate with GitHub?", a: "Yes. Connect your GitHub repo and we'll automatically scan on every push and analyze every pull request, posting AI review comments directly on the PR." },
  { q: "What's the difference between plans?", a: "Free gives you 1 website with weekly scans. Pro gives 20 websites with daily monitoring and AI analysis. Agency gives unlimited websites, team access, and white-label reports." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="brand" className="mb-4">FAQ</Badge>
          <h2 className="text-4xl font-bold text-white mb-3">Common <span className="gradient-text">questions</span></h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.q} className={cn("glass rounded-xl overflow-hidden cursor-pointer transition-colors", open === i && "border-brand-500/30")} onClick={() => setOpen(open === i ? null : i)}>
              <div className="flex items-center justify-between p-5 gap-4">
                <h3 className={cn("font-medium text-sm", open === i ? "text-white" : "text-slate-200")}>{faq.q}</h3>
                <ChevronDown className={cn("w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300", open === i && "rotate-180 text-brand-400")} />
              </div>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                    <p className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
