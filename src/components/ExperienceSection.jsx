import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";

const experienceData = [
  {
    role: "Full Stack Developer Intern",
    company: "SaiKet Systems",
    location: "Remote",
    duration: "May 2025 – June 2025",
    description:
      "Worked on scalable web apps using React, Node.js, Express, and MySQL. Built reusable components and integrated REST APIs.",
    certificateLink: "/certificates/fullstack_intership_certificate.pdf",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-br from-sky-100 via-white to-blue-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceData.map((exp, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-[#121826] border border-gray-200 dark:border-gray-700/60 rounded-xl p-5 shadow-sm dark:shadow-md hover:shadow-md dark:hover:shadow-blue-900/40 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3 text-blue-600 dark:text-blue-400">
                <Briefcase className="w-5 h-5" />
                <h3 className="text-lg font-semibold">{exp.role}</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-1">
                {exp.company} • {exp.location}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 italic">
                {exp.duration}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-4">
                {exp.description}
              </p>
              <a
                href={exp.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 mt-3 hover:underline"
              >
                View Certificate <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
