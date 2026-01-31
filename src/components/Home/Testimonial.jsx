import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  { name: "Alex Rivera", role: "CEO, NexaTech", comment: "QubeSolutionLab transformed our vision into a high-converting platform." },
  { name: "Sarah J. Khan", role: "Founder, Bloom SEO", comment: "Their strategies brought us 300% more traffic in just 3 months!" },
  { name: "David Chen", role: "Product Manager, Syncly", comment: "The most professional dev agency we've ever worked with. Exceptional quality." },
  { name: "Emma Wilson", role: "Director, CreativeCo", comment: "Fast, reliable, and highly creative. They exceeded all our expectations." },
];

const Testimonial = () => {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-12 bg-primary overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-secondary font-bold uppercase text-sm mb-4 tracking-[0.3em]"
        >
          Trusted Worldwide
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Success Stories from our Clients
        </motion.h3>
      </div>

      {/* Marquee Container */}
      <div className="flex relative">
        <motion.div
          className="flex gap-8"
          animate={{
            x: ["0%", "-50%"], 
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40, 
              ease: "linear",
            },
          }}
        >
          {duplicatedReviews.map((rev, i) => (
            <div 
              key={i} 
              className="min-w-[350px] md:min-w-[450px] bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md relative group hover:border-secondary/30 transition-colors"
            >
              <Quote className="text-secondary opacity-20 absolute top-6 right-8 group-hover:rotate-12 transition-transform" size={40} />
              
              <div className="flex gap-1 mb-4 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>

              <p className="text-gray-300 italic mb-8 text-lg leading-relaxed">
                "{rev.comment}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-primary font-bold">
                  {rev.name[0]}
                </div>
                <div className="text-left">
                  <h4 className="text-white font-bold">{rev.name}</h4>
                  <span className="text-secondary text-xs uppercase tracking-wider">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Testimonial;