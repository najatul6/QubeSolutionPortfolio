import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const projects = [
  {
    name: "Car Service App",
    cat: "Web App",
    img: "https://i.ibb.co/qYk0RpjD/Car-Doctor.png",
  },
  {
    name: "EcoCommerce Store",
    cat: "E-commerce",
    img: "https://i.ibb.co/3yrvDV4H/screencapture-storen-client-vercel-app-2025-03-29-02-29-56.png",
  },
  {
    name: "Hotel Booking App",
    cat: "Mobile",
    img: "https://i.ibb.co/XxwbYh9R/ninhotel.png",
  },
  {
    name: "Company Website Redesign",
    cat: "Web3",
    img: "https://i.ibb.co.com/0NnynFL/tex-source-bd.png",
  },
];

const Portfolio = () => {
  return (
    <main className="bg-primary min-h-screen pt-28">
      <Helmet>
        <title>Portfolio | QubeSolutionLab - Our Global Projects</title>
        <meta
          name="description"
          content="Explore our latest web development, mobile apps, and digital solutions for global brands."
        />
      </Helmet>
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-white">
          Latest <span className="text-accent">Works</span>
        </h1>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 pb-24">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="group relative h-[400px] overflow-hidden rounded-[3rem] cursor-pointer"
          >
            <img
              src={p.img}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent flex flex-col justify-end p-12 translate-y-10 group-hover:translate-y-0 transition-transform">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm">
                {p.cat}
              </span>
              <h3 className="text-3xl font-black text-white mt-2">{p.name}</h3>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default Portfolio;
