import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="h-screen w-full bg-primary flex flex-col items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-16 h-16 border-4 border-secondary border-t-accent rounded-xl"
      />
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-white font-bold tracking-[0.5em] uppercase text-sm"
      >
        Qube Solution Lab
      </motion.h2>
    </div>
  );
};

export default Loading;