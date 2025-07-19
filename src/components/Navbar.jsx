import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    // { name: "Projects", to: "projects" },
    // { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    // { name: "Achievements", to: "achievements" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 py-3 border-b ${
        scrolled
          ? "bg-dark-secondary/50 backdrop-blur-lg border-lavender-500/20"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            <img
              src={logo}
              alt="Bhaumik Solanki"
              className="h-10 w-auto text-lavender-400 hover:text-lavender-300 transition-colors"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(58%) sepia(88%) saturate(1777%) hue-rotate(214deg) brightness(101%) contrast(97%)",
              }}
            />
          </Link>
        </motion.div>

        {/* Desktop Menu - Show at 1040px and above */}
        <div className="hidden nav-break:flex space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-300 hover:text-lavender-400 transition-colors text-sm xl:text-base font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - Show below 1040px */}
        <motion.button
          className="nav-break:hidden text-lavender-400 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-full right-0 w-64 bg-dark-secondary/50 backdrop-blur-lg border border-lavender-500/20 rounded-lg mt-2 mr-6 p-4 nav-break:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="block py-2 px-4 text-gray-300 cursor-pointer hover:text-lavender-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
