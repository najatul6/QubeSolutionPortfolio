import { motion } from "framer-motion";

const projects = [
  { title: "E-commerce Solution", category: "Web Dev", image: "https://i.ibb.co/3yrvDV4H/screencapture-storen-client-vercel-app-2025-03-29-02-29-56.png" },
  { title: "Hotel Booking App", category: "UI/UX", image: "https://i.ibb.co/XxwbYh9R/ninhotel.png" },
  { title: "Company Website Redesign", category: "Marketing", image: "https://i.ibb.co.com/0NnynFL/tex-source-bd.png" },
];

const Portfolio = () => {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-secondary font-bold uppercase text-sm mb-2">Our Work</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Featured Projects</h3>
        </div>
        <a href="/portfolio" className="text-white border-b border-secondary pb-1 hover:text-secondary transition-colors">View All</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
          >
            <img src={project.image} alt={project.title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
              <span className="text-secondary font-bold text-xs uppercase mb-2">{project.category}</span>
              <h4 className="text-white text-xl font-bold">{project.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;