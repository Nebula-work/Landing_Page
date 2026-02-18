import { motion } from "framer-motion";

const nodes = [
  { x: "15%", y: "20%", delay: 0, label: "US-East" },
  { x: "75%", y: "15%", delay: 0.3, label: "EU-West" },
  { x: "85%", y: "60%", delay: 0.6, label: "AP-South" },
  { x: "10%", y: "70%", delay: 0.9, label: "US-West" },
  { x: "50%", y: "80%", delay: 1.2, label: "SA-East" },
  { x: "60%", y: "30%", delay: 0.5, label: "EU-North" },
];

const lines: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 0], [0, 5], [5, 2], [4, 3], [4, 2],
];

const GlobeNetwork = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Central glow orb */}
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.07]"
      style={{
        background: "radial-gradient(circle, hsl(var(--primary)), transparent 70%)",
      }}
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Orbiting ring */}
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-primary/10"
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-primary/5"
      animate={{ rotate: -360 }}
      transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
    />

    {/* SVG connection lines */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {lines.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={parseFloat(nodes[a].x)}
          y1={parseFloat(nodes[a].y)}
          x2={parseFloat(nodes[b].x)}
          y2={parseFloat(nodes[b].y)}
          stroke="hsl(var(--primary))"
          strokeOpacity={0.1}
          strokeWidth={0.15}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 + i * 0.12 }}
        />
      ))}

      {/* Animated pulse traveling along a line */}
      {lines.slice(0, 4).map(([a, b], i) => (
        <motion.circle
          key={`pulse-${i}`}
          r={0.4}
          fill="hsl(var(--primary))"
          fillOpacity={0.5}
          initial={{
            cx: parseFloat(nodes[a].x),
            cy: parseFloat(nodes[a].y),
          }}
          animate={{
            cx: [parseFloat(nodes[a].x), parseFloat(nodes[b].x), parseFloat(nodes[a].x)],
            cy: [parseFloat(nodes[a].y), parseFloat(nodes[b].y), parseFloat(nodes[a].y)],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        />
      ))}
    </svg>

    {/* Nodes */}
    {nodes.map((node, i) => (
      <motion.div
        key={node.label}
        className="absolute flex flex-col items-center gap-1"
        style={{ left: node.x, top: node.y }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 + node.delay, duration: 0.4, type: "spring" }}
      >
        <motion.div
          className="relative h-3 w-3 rounded-full bg-primary/40"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
        >
          <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
        </motion.div>
        <span className="text-[9px] font-mono text-primary/40 whitespace-nowrap mt-1 hidden sm:block">
          {node.label}
        </span>
      </motion.div>
    ))}
  </div>
);

export default GlobeNetwork;
