import { motion } from "framer-motion";
import { Globe, BarChart3, Smartphone, Code2 } from "lucide-react";

const services = [
  { title: "Web Development", icon: <Globe />, desc: "High-performance modern websites." },
  { title: "Digital Marketing", icon: <BarChart3 />, desc: "Strategic growth for your brand." },
  { title: "App Solution", icon: <Smartphone />, desc: "Mobile-first user experiences." },
  { title: "SEO Expert", icon: <Code2 />, desc: "Rank higher on search engines." },
];

const Services = () => {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">What We Offer</motion.h2>
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-bold text-white">Premium Solutions</motion.h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-secondary/50 transition-all group"
          >
            <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-primary transition-all">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;