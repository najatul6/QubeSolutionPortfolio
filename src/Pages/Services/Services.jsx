import { motion } from "framer-motion";
import { Globe, Smartphone, BarChart, Code, Layers, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const allServices = [
  {
    title: "Custom Web Dev",
    icon: <Globe />,
    desc: "High-performance, scalable websites built with modern stacks like React and Next.js.",
  },
  {
    title: "Mobile Apps",
    icon: <Smartphone />,
    desc: "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    title: "Digital Marketing",
    icon: <BarChart />,
    desc: "Data-driven marketing strategies to boost your online presence and ROI.",
  },
  {
    title: "UI/UX Design",
    icon: <Layers />,
    desc: "User-centric designs that ensure high engagement and seamless navigation.",
  },
  {
    title: "E-commerce Solutions",
    icon: <Zap />,
    desc: "Complete online store setups with secure payment gateways and inventory management.",
  },
  {
    title: "SEO Optimization",
    icon: <Code />,
    desc: "Advanced SEO techniques to rank your business on the first page of Google.",
  },
];

const Services = () => {
  return (
    <main className="bg-primary min-h-screen pt-28">
        <Helmet>
        <title>Our Services | QubeSolutionLab - Global Tech Solutions</title>
        <meta name="description" content="We offer Custom Web Development, App Solutions, SEO, and Digital Marketing for global brands." />
      </Helmet>
      <section className="px-6 max-w-7xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-white mb-6"
        >
          Our <span className="text-secondary">Expertise</span>
        </motion.h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto italic">
          "Turning complex challenges into simple, elegant digital solutions for
          global brands."
        </p>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-24">
        {allServices.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-secondary transition-all group"
          >
            <div className="text-secondary mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {service.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default Services;
