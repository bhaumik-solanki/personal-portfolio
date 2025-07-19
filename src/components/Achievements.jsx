import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaTrophy, FaCertificate, FaMedal, FaAward } from "react-icons/fa";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const achievements = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: <FaCertificate />,
      description:
        "Fundamental understanding of AWS Cloud concepts and services",
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      icon: <FaCertificate />,
      description:
        "Advanced React development and best practices certification",
    },
    {
      title: "Hackathon Winner",
      issuer: "TechFest 2023",
      date: "2023",
      icon: <FaTrophy />,
      description:
        "First place in university-level hackathon for innovative web solution",
    },
    {
      title: "Data Science Specialization",
      issuer: "Coursera - Johns Hopkins University",
      date: "2022",
      icon: <FaCertificate />,
      description: "Completed 10-course specialization in Data Science",
    },
    {
      title: "Google Cloud Digital Leader",
      issuer: "Google Cloud",
      date: "2022",
      icon: <FaMedal />,
      description:
        "Foundational knowledge of cloud concepts and Google Cloud products",
    },
    {
      title: "Academic Excellence Award",
      issuer: "University Name",
      date: "2022",
      icon: <FaAward />,
      description: "Recognition for outstanding academic performance",
    },
  ];

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="achievements" className="py-20 bg-dark-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Achievements & <span className="gradient-text">Certifications</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass-effect rounded-xl p-6 hover-glow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-lavender-500 to-lavender-700 rounded-lg flex items-center justify-center text-white text-xl">
                  {achievement.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-lavender-400">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-400">{achievement.issuer}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-2">
                {achievement.description}
              </p>
              <p className="text-xs text-gray-500">{achievement.date}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
