import { Server, Layers, Rocket, Code2, Container } from "lucide-react";
import { motion } from "framer-motion";

const cases = [
  { icon: Layers, label: "SaaS Applications" },
  { icon: Server, label: "Internal APIs" },
  { icon: Container, label: "Microservices" },
  { icon: Rocket, label: "Startups Before Launch" },
  { icon: Code2, label: "DevOps Teams" },
];

const UseCasesSection = () => (
  <section className="py-20 lg:py-28 border-t border-border/50">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mx-auto max-w-2xl text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Built for teams that{" "}
          <span className="text-gradient">ship fast</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {cases.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3 surface-card px-6 py-4 hover:glow-border transition-shadow duration-300"
          >
            <c.icon className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">{c.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
