import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-20 lg:py-28 border-t border-border/50">
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-3xl text-center surface-elevated p-12 lg:p-16 overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Ship APIs with{" "}
            <span className="text-gradient">Confidence.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Join thousands of developers who trust Sysmos to keep their services reliable.
          </p>
          <Button size="lg" className="gap-2 font-semibold px-8">
            Create Free Account <ArrowRight size={16} />
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
