import { motion } from "framer-motion";
import { CheckCircle2, Rocket } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
        <h2 className="text-accent font-bold uppercase text-sm mb-4">Why QubeSolutionLab?</h2>
        <h3 className="text-4xl font-bold text-white mb-6">We build your <span className="text-secondary">Future.</span></h3>
        <div className="space-y-4">
          {["Expert Team", "24/7 Support", "Result Oriented"].map((text, i) => (
            <div key={i} className="flex items-center gap-3 text-white">
              <CheckCircle2 className="text-accent" size={20} />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="relative aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center group">
        <Rocket size={150} className="text-secondary group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700" />
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;