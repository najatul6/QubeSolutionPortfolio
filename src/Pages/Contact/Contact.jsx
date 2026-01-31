import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB_ACCES);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully! We'll contact you soon.");
      event.target.reset(); 
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <main className="bg-primary min-h-screen pt-28 pb-20 overflow-hidden relative">
      <Helmet>
        <title>Contact Us | Let's Build Your Next Success Story</title>
        <meta
          name="description"
          content="Explore our latest web development, mobile apps, and digital solutions for global brands."
        />
      </Helmet>
      {/* Background Decorative Elements */}
      <div className="absolute top-40 -left-20 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-accent/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Let’s Work <span className="text-secondary">Together</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Fill out the form below or reach
            out directly. We usually respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Contact Info Cards */}
          <div className="space-y-8">
            <motion.a
            href="mailto:qubesolutionlab@gmail.com"
              variants={itemVariants}
              className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 flex items-start gap-6 hover:border-secondary transition-all"
            >
              <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl">Email Us</h4>
                <p className="text-gray-400">qubesolutionlab@gmail.com</p>
              </div>
            </motion.a>

            <motion.div
              variants={itemVariants}
              className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 flex items-start gap-6 hover:border-accent transition-all"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent">
                <MessageSquare size={28} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl">Live Chat</h4>
                <p className="text-gray-400">
                  Available on WhatsApp & Messenger
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 flex items-start gap-6"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl">Global Office</h4>
                <p className="text-gray-400">
                  Operating Worldwide (Remote First)
                </p>
              </div>
            </motion.div>
          </div>

          {/* Animated Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 backdrop-blur-xl"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white text-sm font-semibold ml-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full bg-primary/50 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-secondary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white text-sm font-semibold ml-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full bg-primary/50 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-secondary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-semibold ml-2">
                  Service Needed
                </label>
                <select name="service" className="w-full bg-primary/50 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-secondary transition-all appearance-none">
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>SEO/Marketing</option>
                  <option>UI/UX Design</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-semibold ml-2">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Tell us about your project..."
                  className="w-full bg-primary/50 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-secondary transition-all resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-secondary text-primary font-black py-5 rounded-2xl flex items-center justify-center gap-3 text-lg shadow-xl shadow-secondary/20 group"
              >
                Send Message
                <Send
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;
