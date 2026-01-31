import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

const stats = [
  { label: "Projects Done", val: 200, suffix: "+" },
  { label: "Happy Clients", val: 150, suffix: "+" },
  { label: "Team Members", val: 20, suffix: "+" },
  { label: "Awards Win", val: 12, suffix: "+" },
];

const Counter = ({ value, suffix }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  
  const inView = useInView(ref, { amount: 0.5 }); 

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 1, 
        ease: "easeOut",
      });
      return controls.stop;
    } else {
      count.set(0);
    }
  }, [inView, value, count]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-primary">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
          >
            <Counter value={stat.val} suffix={stat.suffix} />
            <p className="text-primary/70 font-bold uppercase tracking-wider mt-2 text-sm md:text-base">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;