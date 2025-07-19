import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Tech Solutions Inc.",
      location: "Remote",
      duration: "June 2023 - August 2023",
      description: [
        "Developed responsive web applications using React and Tailwind CSS",
        "Collaborated with the design team to implement pixel-perfect UI components",
        "Improved website performance by 40% through code optimization",
        "Participated in code reviews and agile development processes",
      ],
    },
    {
      title: "Web Development Intern",
      company: "Digital Innovations",
      location: "Mumbai, India",
      duration: "Jan 2023 - May 2023",
      description: [
        "Built and maintained client websites using HTML, CSS, and JavaScript",
        "Integrated RESTful APIs and third-party services",
        "Assisted in database design and implementation",
        "Created documentation for internal tools and processes",
      ],
    },
    {
      title: "Open Source Contributor",
      company: "Various Projects",
      location: "Remote",
      duration: "2022 - Present",
      description: [
        "Contributed to multiple open-source projects on GitHub",
        "Fixed bugs and implemented new features in React-based applications",
        "Reviewed pull requests and provided constructive feedback",
        "Maintained documentation and helped new contributors",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-dark-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-lavender-600/30"></div>
              )}

              <div className="flex items-start">
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-16 h-16 bg-gradient-to-r from-lavender-500 to-lavender-700 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                >
                  <FaBriefcase className="text-white text-xl" />
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="ml-6 glass-effect rounded-xl p-6 flex-grow hover-glow"
                >
                  <h3 className="text-xl font-semibold text-lavender-400 mb-1">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg text-gray-300 mb-3">{exp.company}</h4>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <FaCalendar />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="text-gray-400 flex items-start"
                      >
                        <span className="text-lavender-400 mr-2">▸</span>
                        {desc}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
