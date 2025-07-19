import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaDownload,
  FaEye,
} from "react-icons/fa";

const resumeUrl =
  import.meta.env.VITE_RESUME_URL || "/Bhaumik_Solanki_Resume.pdf";
const resumeFilename =
  import.meta.env.VITE_RESUME_FILENAME || "Bhaumik_Solanki_Resume.pdf";
const profileImageUrl = import.meta.env.VITE_PROFILE_IMAGE_URL;

const Hero = () => {
  const socialLinks = {
    github: import.meta.env.VITE_GITHUB_URL,
    linkedin: import.meta.env.VITE_LINKEDIN_URL,
    instagram: import.meta.env.VITE_INSTAGRAM_URL,
    twitter: import.meta.env.VITE_TWITTER_URL,
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-lavender-600/20 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
        <div
          className="absolute w-96 h-96 bg-lavender-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl text-lavender-400 mb-4 font-medium">
              Hello, I'm
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block sm:inline whitespace-nowrap">Bhaumik</span>{" "}
              <span className="gradient-text block sm:inline whitespace-nowrap">
                Solanki
              </span>
            </h1>

            <div className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 h-12 md:h-16">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "Final Year B.Tech. Student",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-medium"
              />
            </div>

            <p className="text-gray-400 mb-8 text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
              Final-year B.Tech CSE student specializing in frontend
              development, now leveling up to full-stack with the MERN,
              passionate about building web experiences that look good and work
              even better.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="text-2xl md:text-3xl text-gray-400 hover:text-lavender-400 transition-colors"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="text-2xl md:text-3xl text-gray-400 hover:text-lavender-400 transition-colors"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="text-2xl md:text-3xl text-gray-400 hover:text-lavender-400 transition-colors"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="text-2xl md:text-3xl text-gray-400 hover:text-lavender-400 transition-colors"
              >
                <FaTwitter />
              </motion.a>
            </div>

            {/* Resume Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href={resumeUrl}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-lavender-600 text-white rounded-lg hover:bg-lavender-700 transition-colors flex items-center justify-center space-x-2 text-sm md:text-base font-medium"
              >
                <FaEye />
                <span>View Resume</span>
              </motion.a>
              <motion.a
                href={resumeUrl}
                download={resumeFilename}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-lavender-600 text-lavender-400 rounded-lg hover:bg-lavender-600 hover:text-white transition-all flex items-center justify-center space-x-2 text-sm md:text-base font-medium"
              >
                <FaDownload />
                <span>Download Resume</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-lavender-500 to-lavender-700 rounded-full blur-2xl opacity-50 animate-glow"></div>

              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-lavender-500/50 hover-glow">
                <img
                  src="/myImg.jpg"
                  alt="Bhaumik Solanki"
                  className="w-full h-full object-cover scale-200"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
