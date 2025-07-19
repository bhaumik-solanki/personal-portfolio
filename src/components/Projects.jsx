import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      image:
        "https://via.placeholder.com/600x400/7c3aed/ffffff?text=E-Commerce",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "A real-time chat application built with Socket.io, featuring private messaging, group chats, and file sharing capabilities.",
      tech: ["React", "Socket.io", "Express", "MongoDB", "JWT"],
      image: "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Chat+App",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Big Data Analytics Dashboard",
      description:
        "An analytics dashboard for visualizing big data insights using Apache Spark and D3.js for interactive data visualization.",
      tech: ["Python", "Apache Spark", "React", "D3.js", "PostgreSQL"],
      image: "https://via.placeholder.com/600x400/a78bfa/ffffff?text=Analytics",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Task Management System",
      description:
        "A comprehensive task management system with drag-and-drop functionality, team collaboration features, and progress tracking.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
      image:
        "https://via.placeholder.com/600x400/c7b5ff/ffffff?text=Task+Manager",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Weather Prediction App",
      description:
        "A weather prediction application using machine learning algorithms to provide accurate weather forecasts based on historical data.",
      tech: ["Python", "TensorFlow", "React", "Flask", "OpenWeather API"],
      image:
        "https://via.placeholder.com/600x400/e0d5ff/ffffff?text=Weather+App",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Social Media Analytics Tool",
      description:
        "A tool for analyzing social media engagement and sentiment analysis using NLP techniques and data visualization.",
      tech: ["Python", "NLTK", "React", "Chart.js", "Firebase"],
      image:
        "https://via.placeholder.com/600x400/7c3aed/ffffff?text=Social+Analytics",
      github: "https://github.com",
      live: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-xl overflow-hidden hover-glow"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-lavender-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-lavender-600/20 text-lavender-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-lavender-400 transition-colors"
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-lavender-400 transition-colors"
                  >
                    <FaExternalLinkAlt size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-6 py-3 border border-lavender-600 text-lavender-400 rounded-lg hover:bg-lavender-600 hover:text-white transition-all"
          >
            <FaGithub />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
