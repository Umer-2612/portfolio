"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const ContactSection = () => {
  const handleEmailClick = () => {
    navigator.clipboard.writeText("umerkarachiwala2612@gmail.com");
    toast.success("Email copied to clipboard! 📋", {
      style: {
        background: "#333",
        color: "#fff",
        border: "1px solid #4F46E5",
      },
      duration: 2000,
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-2xl" />,
      url: "https://github.com/Umer-2612",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-2xl" />,
      url: "https://www.linkedin.com/in/umer-karachiwala/",
      color: "hover:text-blue-500",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter className="text-2xl" />,
      url: "https://x.com/UmerKarachiwala",
      color: "hover:text-sky-500",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <Toaster position="bottom-center" />
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Get In Touch
          </span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-primary/10"
          >
            {/* Email Section */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold mb-4">
                Let&apos;s Connect!
              </h3>
              <p className="text-gray-400 mb-6">
                Feel free to reach out for collaborations or just a friendly
                hello
              </p>
              <button
                onClick={handleEmailClick}
                className="group flex items-center gap-3 mx-auto bg-primary/10 hover:bg-primary/20 text-primary px-6 py-3 rounded-full transition-all duration-300"
              >
                <FaEnvelope className="text-xl group-hover:scale-110 transition-transform" />
                <span>karachiwalaumer2612@gmail.com</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-8">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-300 ${link.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
