import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto glass-effect rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-semibold mb-6 text-lavender-400 text-center">
              Who I Am
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-center">
              I'm a developer, a problem-solver, and a lifelong gamer, currently
              completing my B.Tech in Computer Science Engineering with
              specialisation in Big Data Analytics. My journey in the tech world
              is fueled by a desire to build things that people genuinely enjoy
              using.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed text-center">
              I love the challenge of full-stack development—architecting a
              solution from the database to the final pixel. My passion for
              gaming has taught me firsthand how critical a seamless user
              experience and impeccable performance are, principles I bring to
              every project I undertake.
            </p>
            <p className="text-gray-300 leading-relaxed text-center">
              When I'm not developing, I'm contributing to open-source projects,
              diving into the latest tech trends, or playing my favourite games.
              I'm excited to find a full-time role where I can channel this
              blend of technical skill and creative passion.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
