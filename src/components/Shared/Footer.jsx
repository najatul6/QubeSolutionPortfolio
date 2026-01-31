import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/qubefavicon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <div className="flex items-center transition-transform duration-300 ease-out group-hover:rotate-12 group-hover:scale-110">
                <img
                  src={logo}
                  alt="Qube Icon"
                  className="h-8 md:h-12 w-auto object-contain"
                />
              </div>

              <div className="flex flex-col leading-[0.9] font-bold text-lg md:text-xl tracking-tight">
                <span className="text-white">Qube</span>
                <div className="flex">
                  <span className="text-secondary">Solution</span>
                  <span className="text-accent ml-0.5">Lab</span>
                </div>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering businesses with innovative web solutions and
              data-driven marketing strategies. We turn your digital dreams into
              reality.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -5, color: "#00BCD4" }}
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-accent w-fit">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-secondary text-sm transition-all hover:pl-2 inline-block flex items-center group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-all mr-1">
                      ›
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-secondary w-fit">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Digital Marketing",
                "SEO Optimization",
                "UI/UX Design",
              ].map((service) => (
                <li
                  key={service}
                  className="text-gray-400 text-sm hover:text-accent cursor-pointer transition-colors"
                >
                  <a href="/services">{service}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-accent w-fit">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={18} className="text-secondary" />
                <span>qubesolutionlab@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={18} className="text-accent" />
                <span>+880 1581 205392</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin size={18} className="text-secondary" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-500 text-xs">
            © {currentYear}{" "}
            <span className="text-secondary font-semibold">
              QubeSolutionLab
            </span>
            . All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
