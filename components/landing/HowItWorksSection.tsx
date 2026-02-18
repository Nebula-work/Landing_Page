import { Plus, Globe, Bell } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Plus,
    step: "01",
    title: "Add your API endpoint",
    desc: "Paste your URL. Configure check intervals, regions, and alert rules.",
  },
  {
    icon: Globe,
    step: "02",
    title: "We monitor from global nodes",
    desc: "Distributed checks run from multiple regions every 30 seconds.",
  },
  {
    icon: Bell,
    step: "03",
    title: "Get alerted instantly",
    desc: "Receive notifications the moment something fails. Respond faster.",
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 lg:py-28 border-t border-border/50">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mx-auto max-w-2xl text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Up and running{" "}
          <span className="text-gradient">in minutes</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Three simple steps to never miss downtime again.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative surface-card p-8 text-center"
          >
            <span className="absolute top-4 left-4 text-xs font-mono text-primary/60">
              {s.step}
            </span>
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {s.desc}
            </p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
