import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/qubefavicon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/90 backdrop-blur-md py-2 shadow-xl"
          : "bg-primary py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
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

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-all duration-300 relative group ${
                    isActive
                      ? "text-secondary"
                      : "text-white/80 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                        isActive
                          ? "w-full bg-secondary"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}

            {/* CTA Button */}
            <motion.a
              href="/contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(0, 188, 212, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-primary px-6 py-2.5 rounded-full font-bold text-sm tracking-wider uppercase transition-all"
            >
              Contact Now
            </motion.a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-white/10"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-xl font-medium text-white hover:text-secondary"
                >
                  {link.name}
                </NavLink>
              ))}
              <motion.a
                href="/contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 15px rgba(0, 188, 212, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-secondary text-primary py-4 rounded-xl font-bold block text-center"
              >
                Get a Quote
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
