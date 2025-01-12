"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const ContactSection = () => {
  const email = "karachiwalaumer2612@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
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
                className="group inline-flex items-center gap-3 mx-auto bg-primary/10 hover:bg-primary/20 text-primary px-6 py-3 rounded-full transition-all duration-300 max-w-full overflow-hidden relative"
                title={email}
              >
                <FaEnvelope className="text-xl group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="truncate">{email}</span>
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                  {email}
                </div>
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
