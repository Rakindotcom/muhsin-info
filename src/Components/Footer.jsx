import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Youtube,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  User,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

// Sparkle animation dot
const Sparkle = ({ style }) => (
  <motion.span
    className="absolute rounded-full bg-emerald-400"
    style={{ width: 4, height: 4, ...style }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0.5, 1.5, 0.5],
    }}
    transition={{
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut",
      repeatDelay: Math.random() * 2,
    }}
  />
);

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", phone: "", subject: "", message: "" });
      }, 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/footer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div className="container mx-auto relative z-10 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-emerald-400 text-lg font-semibold mb-2 tracking-wider">
            Connect with Muhammad Muhsin Mashkur
          </h4>
          <div className="relative inline-block">
            <h2 className="text-white text-4xl md:text-5xl font-bold">
              Reach Out and Engage
            </h2>
            {[{ top: 0, left: 0 }, { top: 0, right: 0 }, { bottom: 0, left: "50%" }, { bottom: "50%", right: 0 }].map(
              (pos, i) => (
                <Sparkle key={i} style={{ ...pos, position: "absolute" }} />
              )
            )}
          </div>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-14 px-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center mb-6">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-gray-300 max-w-xs">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[{ name: "name", placeholder: "Your Name", Icon: User },
                { name: "phone", placeholder: "Your Phone Number", Icon: Phone },
                { name: "subject", placeholder: "Your Subject", Icon: FileText }
                ].map(({ name, placeholder, Icon }) => (
                  <motion.div key={name} variants={itemVariants} className="relative">
                    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400 w-5 h-5" />
                    <input
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-4 pl-12 pr-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      placeholder={placeholder}
                      type="text"
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </motion.div>
                ))}

                <motion.div variants={itemVariants} className="relative">
                  <textarea
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-4 px-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all min-h-[140px] resize-none"
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    className={`w-full py-4 rounded-lg font-semibold text-white
                      ${isSubmitting
                        ? "bg-emerald-700 cursor-not-allowed"
                        : "bg-emerald-600 hover:bg-emerald-500"}
                      transition-colors duration-300 flex items-center justify-center gap-2
                      transform hover:-translate-y-1 hover:shadow-lg`}
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold mb-10 text-emerald-400"
            >
              Contact Info
            </motion.h3>

            {/* Info Blocks */}
            <div className="space-y-6">
              {/* Email */}
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-5 bg-white/5 p-5 rounded-xl border border-white/10 hover:shadow-xl hover:border-emerald-500 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="bg-emerald-600 p-3 rounded-full shadow-md">
                    <Mail className="text-white w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-400">Email</h4>
                  <ul className="text-gray-300 mt-1 space-y-1 text-sm">
                    {[
                      "muhsin.du@gmail.com",
                      "mohsin.tve@iut-dhaka.edu",
                      "official@muhsinmashkur.com",
                    ].map((email) => (
                      <li key={email}>
                        <a
                          href={`mailto:${email}`}
                          className="hover:text-white transition-colors"
                        >
                          {email}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-5 bg-white/5 p-5 rounded-xl border border-white/10 hover:shadow-xl hover:border-emerald-500 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="bg-emerald-600 p-3 rounded-full shadow-md">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-400">Phone</h4>
                  <ul className="text-gray-300 mt-1 space-y-1 text-sm">
                    {["+88 01811-996981", "+88 01722-786745"].map((phone) => (
                      <li key={phone}>
                        <a
                          href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                          className="hover:text-white transition-colors"
                        >
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-5 bg-white/5 p-5 rounded-xl border border-white/10 hover:shadow-xl hover:border-emerald-500 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="bg-emerald-600 p-3 rounded-full shadow-md">
                    <MapPin className="text-white w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-400">Address</h4>
                  <p className="text-gray-300 mt-1 text-sm leading-relaxed max-w-sm">
                    465/18 West Rampura, Bandhu Nibash Residential Area, Hatirjheel, Dhaka.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-4 items-center"
            >
              {[
                { Icon: Facebook, url: "https://www.facebook.com/MuhsinMashkur" },
                { Icon: Youtube, url: "https://www.youtube.com/@muhsinmashkur" },
                { Icon: Twitter, url: "https://twitter.com/muhsinmashkur" },
                { Icon: Instagram, url: "https://www.instagram.com/muhsinmashkur/" },
                { Icon: Linkedin, url: "https://www.linkedin.com/in/muhsinmashkur" },
              ].map(({ Icon, url }, i) => (
                <motion.a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-gradient-to-tr from-emerald-800 to-emerald-600 rounded-full transition-transform hover:scale-110 shadow-sm"
                  whileHover={{ rotate: 3, scale: 1.15 }}
                  custom={i}
                  variants={socialVariants}
                >
                  <Icon className="text-white w-5 h-5 group-hover:text-black transition-colors" />
                  <motion.div
                    layoutId="social-glow"
                    className="absolute -inset-1 rounded-full blur-sm opacity-30 group-hover:opacity-50 bg-emerald-400 z-[-1]"
                  />
                </motion.a>
              ))}
            </motion.div>
            <motion.footer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-center mt-6 text-sm text-gray-500 select-none"
            >
              <p>Copyright © 2025 Muhsin Mashkur Academy</p>
              <p>
                Developed by{" "}
                <a
                  href="https://www.linkedin.com/in/rakinalshahriar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-teal-600 hover:text-teal-800 cursor-pointer transition-colors underline"
                  title="Rakin Al Shahriar LinkedIn"
                >
                  Rakin Al Shahriar
                </a>
              </p>
            </motion.footer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
