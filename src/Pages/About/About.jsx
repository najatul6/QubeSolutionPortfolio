import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <main className="bg-primary pt-28">
      <Helmet>
        <title>About Us | QubeSolutionLab - Our Vision & Story</title>
        <meta
          name="description"
          content="Explore our latest web development, mobile apps, and digital solutions for global brands."
        />
      </Helmet>
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <h2 className="text-secondary font-bold uppercase tracking-widest mb-4">
            Our Story
          </h2>
          <h1 className="text-5xl font-black text-white mb-6">
            Engineering Digital <br /> Solutions Since 2024
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            QubeSolutionLab is more than just a dev agency. We are your
            technical partners, helping startups and enterprises scale through
            robust engineering and creative marketing.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-accent text-3xl font-bold">100%</h4>
              <p className="text-gray-500 text-sm">Client Satisfaction</p>
            </div>
            <div>
              <h4 className="text-accent text-3xl font-bold">24/7</h4>
              <p className="text-gray-500 text-sm">Global Support</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="relative"
        >
          <div className="w-full h-[500px] bg-secondary/10 border border-white/10 rounded-[4rem] flex items-center justify-center p-12">
            <div className="text-center">
              <span className="text-8xl">🚀</span>
              <p className="text-white font-bold mt-4 text-2xl tracking-tighter italic">
                "Your vision, our code."
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
