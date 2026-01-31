import { motion } from "framer-motion";
import { MessageSquare, Calendar, ArrowRight } from "lucide-react";

const ContactCTA = () => {
  const bookMeetingLink = "https://calendly.com/your-profile";
  const contactEmail = "mailto:qubesolutionlab@gmail.com";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-10 px-4 relative overflow-hidden bg-primary">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/10 blur-[120px] -z-0 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 blur-[120px] -z-0 rounded-full"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} 
        className="max-w-6xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl p-4 md:p-16 rounded-[4rem] text-center relative z-10"
      >
        {/* 1. Badge */}
        <motion.div variants={itemVariants} className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-accent/30">
          Work with us
        </motion.div>

        {/* 2. Heading */}
        <motion.h2 variants={itemVariants} className="text-white text-4xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
          Ready to scale your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
            Digital Presence?
          </span>
        </motion.h2>

        {/* 3. Description */}
        <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
          From high-performance development to data-driven marketing, we help
          global brands dominate the digital landscape.
        </motion.p>

        {/* 4. Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* <motion.a
            href={bookMeetingLink}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-secondary text-primary font-bold px-5 py-4 rounded-full shadow-2xl shadow-secondary/20 transition-all  md:text-lg"
          >
            <Calendar size={18} />
            Book a Strategy Call
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </motion.a> */}

          <motion.a
            href={contactEmail}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 border-2 border-white/20 text-white font-bold px-10 py-4 rounded-full transition-all text-lg"
          >
            <MessageSquare size={20} />
            Email Us
          </motion.a>
        </motion.div>

        {/* 5. Trust Indicators */}
        <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-6 opacity-40">
          <span className="text-white font-semibold text-sm md:text-base">24/7 Global Support</span>
          <span className="text-white font-semibold text-sm md:text-base">Agile Methodology</span>
          <span className="text-white font-semibold text-sm md:text-base">Expert Consulting</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;