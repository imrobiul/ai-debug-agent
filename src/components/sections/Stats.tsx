import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { end: 10000, suffix: "+", label: "Developers", desc: "Trust AI Debug Agent" },
  { end: 5, suffix: "M+", label: "Bugs Detected", desc: "Across all scans" },
  { end: 80, suffix: "%", label: "Less Debug Time", desc: "Average reduction" },
  { end: 99, suffix: ".9%", label: "Uptime", desc: "Enterprise SLA" },
];

export default function Stats() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ end, suffix, label, desc }) => (
          <div key={label} className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-1">
              <AnimatedCounter end={end} suffix={suffix} />
            </div>
            <div className="text-white font-semibold text-sm mb-1">{label}</div>
            <div className="text-slate-500 text-xs">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
