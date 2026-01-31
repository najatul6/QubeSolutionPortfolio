import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import heroBg from "@/assets/heroBanner.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary mt-12 md:mt-0">
      
      {/* 1. Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          filter: "blur(1px)", 
        }}
      />

      {/* 2. Dark Overlay Layer */}
      <div className="absolute inset-0 z-[1] bg-primary/60 backdrop-blur-[2px]"></div>

      {/* 3. Particles */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-[2] h-full w-full"
          options={{
            fullScreen: { enable: false }, 
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "bubble" },
                onClick: { enable: true, mode: "push" },
              },
              modes: {
                bubble: {
                  distance: 200,
                  size: 6,
                  duration: 2,
                  opacity: 0.8,
                  color: "#00BCD4",
                },
                push: { quantity: 4 },
              },
            },
            particles: {
              color: { value: ["#00BCD4", "#8BC34A", "#ffffff"] },
              move: {
                enable: true,
                speed: 0.8,
                direction: "none",
                random: true,
                outModes: { default: "out" },
              },
              number: { value: 100, density: { enable: true, area: 800 } },
              opacity: {
                value: { min: 0.1, max: 0.5 },
                animation: { enable: true, speed: 1 },
              },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* 4. Hero Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-[10] max-w-7xl mx-auto px-6 text-center"
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-1 bg-white/10 border border-white/20 backdrop-blur-xl px-4 py-2 rounded-full mb-3 shadow-2xl"
        >
          <Sparkles size={16} className="text-secondary animate-pulse" />
          <span className="text-gray-100 text-xs md:text-sm font-bold tracking-widest uppercase">
            Innovating The Digital Future
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-7xl font-black text-white mb-4 tracking-tight leading-tight drop-shadow-2xl">
          Transform Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
            Digital Vision
          </span>
        </h1>

        <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium leading-relaxed drop-shadow-lg">
          At <span className="text-secondary font-bold">QubeSolutionLab</span>, we build high-performance systems that propel your business forward.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <motion.a
            href="/contact" 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 188, 212, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group bg-secondary text-primary font-bold px-10 py-4 rounded-full flex items-center gap-3 transition-all"
          >
            Start A Project
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a
            href="/portfolio" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white/40 text-white font-bold px-10 py-4 rounded-full hover:border-accent hover:text-accent transition-all backdrop-blur-md"
          >
            Our Work
          </motion.a>
        </div>
      </motion.div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-primary to-transparent z-[5]"></div>
    </section>
  );
};

export default Hero;