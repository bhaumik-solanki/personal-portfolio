import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled more than 300px
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: import.meta.env.VITE_GITHUB_URL,
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: import.meta.env.VITE_LINKEDIN_URL,
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      url: import.meta.env.VITE_INSTAGRAM_URL,
      label: "Instagram",
    },
    {
      icon: <FaTwitter />,
      url: import.meta.env.VITE_TWITTER_URL,
      label: "Twitter",
    },
  ].filter((link) => link.url);

  const quickLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <footer className="bg-dark-secondary/50 border-t border-lavender-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text mb-4"
            >
              Bhaumik Solanki
            </motion.h3>
            <p className="text-gray-400 mb-4">
              Final year B.Tech student passionate about creating amazing
              digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="text-2xl text-gray-400 hover:text-lavender-400 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-lavender-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-lavender-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-lavender-400 mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>bhaumiksolanki04@gmail.com</li>
              <li>+91 70117 47574</li>
              <li>Delhi, India</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-lavender-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center text-gray-400 text-sm">
            <p>© {currentYear} Bhaumik Solanki. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Scroll to top button - Only show when scrolled */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-lavender-500 to-lavender-700 rounded-full flex items-center justify-center text-white shadow-lg hover-glow cursor-pointer hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{
              scale: 1,
              rotate: 360,
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-lg" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
