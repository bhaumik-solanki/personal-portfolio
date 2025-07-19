import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering (Big Data Analytics)",
      institution: "Netaji Subhas University of Technology",
      location: "Delhi, India",
      duration: "2022 - 2026",
      grade: "CGPA: 6.47/10.00",
      highlights: [
        "Developed a strong foundation in CS fundamentals through rigorous coursework in Data Structures, Algorithms, Operating Systems, and DBMS.",
        "Co-founded 'Algorithm East' society and served as its first Resource and Documentation Head.",
        "Applied advanced concepts from Machine Learning, AI, and Big Data courses to build practical models and analyze datasets in academic projects.",
      ],
    },
    {
      degree: "Higher Secondary Education",
      field: "Science Stream (PCM)",
      institution: "Mount Abu Public School",
      location: "Delhi, India",
      duration: "2021 - 2022",
      grade: "Percentage: 92.40%",
      highlights: [
        "Demonstrated strong academic discipline and a capacity for rigorous study by achieving a 92.4% aggregate score.",
        "Built a strong analytical and quantitative foundation through in-depth coursework in Physics, Chemistry, and Mathematics.",
        "Developed foundational skills in logical problem-solving and programming through the Computer Science curriculum.",
      ],
    },
  ];

  return (
    <section id="education" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="gradient-text">Education</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-xl p-8 mb-8 hover-glow"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-lavender-500 to-lavender-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-white text-xl" />
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="text-xl font-semibold text-lavender-400">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg text-gray-300">{edu.field}</h4>
                  <p className="text-gray-400 mt-1">{edu.institution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <FaCalendar />
                  {edu.duration}
                </span>
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt />
                  {edu.location}
                </span>
                <span className="text-lavender-400 font-medium">
                  {edu.grade}
                </span>
              </div>

              <ul className="space-y-2">
                {edu.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    className="text-gray-400 flex items-start"
                  >
                    <span className="text-lavender-400 mr-2">▸</span>
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
