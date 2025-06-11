import { motion } from "framer-motion";
import {
  Code, Globe, Database, Server, Wrench, Users, Star
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-4 h-4 inline-block mr-2" />,
    skills: ["C", "C++", "Core Java", "C#", "Python"],
  },
  {
    title: "Web Technologies",
    icon: <Globe className="w-4 h-4 inline-block mr-2" />,
    skills: ["PHP", "ASP.NET", "HTML", "CSS", "JavaScript", "React JS"],
  },
  {
    title: "Server-side Tech",
    icon: <Server className="w-4 h-4 inline-block mr-2" />,
    skills: ["NodeJS", "ExpressJS"],
  },
  {
    title: "Databases",
    icon: <Database className="w-4 h-4 inline-block mr-2" />,
    skills: ["Oracle 10g", "SQL Server 2008", "MySQL", "MongoDB"],
  },
  {
    title: "Tools & Others",
    icon: <Wrench className="w-4 h-4 inline-block mr-2" />,
    skills: ["Ms-Office", "Git"],
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-4 h-4 inline-block mr-2" />,
    skills: [
      "Collaboration", "Communication", "Problem-solving",
      "Time management", "Adaptability"
    ],
  },
];

const strengths = [
  "Excellent communication skill",
  "Ability to grasp new skills quickly",
  "Hard-working",
  "Strong knowledge of core subjects"
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Strengths
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-start">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="rounded-xl shadow-md hover:shadow-lg transition p-4 h-full flex flex-col gap-3
              bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900
              border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-1 text-blue-600 dark:text-blue-400 flex items-center">
                {category.icon}
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 10px rgba(59,130,246,0.5)",
                    }}
                    className="px-3 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600
                      rounded-md text-sm text-gray-800 dark:text-gray-100 transition"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

          ))}
        </div>

        {/* Strengths Section */}
        <motion.div
          className="bg-gradient-to-br from-blue-100 to-white dark:from-blue-900 dark:to-gray-900 p-6 rounded-xl shadow text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-3 flex items-center justify-center">
            <Star className="w-5 h-5 mr-2" />
            Strengths
          </h3>
          <ul className="grid gap-1 text-gray-800 dark:text-gray-200 text-left sm:grid-cols-2">
            {strengths.map((item, i) => (
              <li key={i} className="list-disc list-inside">{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;


// import { motion } from "framer-motion";
// import { Code, Globe, Database, Server, Wrench, Users, Star } from "lucide-react";

// const skillCategories = [
//   {
//     title: "Languages",
//     icon: <Code className="w-5 h-5 inline-block mr-2" />,
//     skills: ["C", "C++", "Core Java", "C#", "Python"],
//   },
//   {
//     title: "Web Technologies",
//     icon: <Globe className="w-5 h-5 inline-block mr-2" />,
//     skills: ["PHP", "ASP.NET", "HTML", "CSS", "JavaScript", "React JS"],
//   },
//   {
//     title: "Server-side Tech",
//     icon: <Server className="w-5 h-5 inline-block mr-2" />,
//     skills: ["NodeJS", "ExpressJS"],
//   },
//   {
//     title: "Databases",
//     icon: <Database className="w-5 h-5 inline-block mr-2" />,
//     skills: ["Oracle 10g", "SQL Server 2008", "MySQL", "MongoDB"],
//   },
//   {
//     title: "Tools & Others",
//     icon: <Wrench className="w-5 h-5 inline-block mr-2" />,
//     skills: ["Ms-Office", "Git"],
//   },
//   {
//     title: "Soft Skills",
//     icon: <Users className="w-5 h-5 inline-block mr-2" />,
//     skills: [
//       "Collaboration", "Communication", "Problem-solving",
//       "Time management", "Adaptability"
//     ],
//   },
// ];

// const strengths = [
//   "Excellent communication skill",
//   "Ability to grasp new skills quickly",
//   "Hard-working",
//   "Strong knowledge of core subjects"
// ];

// const SkillsSection = () => {
//   return (
//     <section
//       id="skills"
//       className="py-20 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors"
//     >
//       <div className="container mx-auto px-4">
//         <motion.h2
//           className="text-3xl font-bold text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Skills & Strengths
//         </motion.h2>

//         {/* Skills Grid */}
//         <div className="grid md:grid-cols-2 gap-8 mb-12">
//           {skillCategories.map((category, index) => (
//             <motion.div
//               key={index}
//               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
//                 {category.icon}
//                 {category.title}
//               </h3>
//               <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
//                 {category.skills.map((skill, i) => (
//                   <li key={i}>{skill}</li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>

//         {/* Strengths Section */}
//         <motion.div
//           className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl shadow text-center max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-3 flex items-center justify-center">
//             <Star className="w-5 h-5 mr-2" />
//             Strengths
//           </h3>
//           <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-left">
//             {strengths.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;

// import React from 'react'

// const skills = [
//   { name: "HTML", level: "Advanced" },
//   { name: "CSS", level: "Advanced" },
//   { name: "JavaScript", level: "Advanced" },
//   { name: "React", level: "Advanced" },
//   { name: "Tailwind CSS", level: "Intermediate" },
//   { name: "Node.js", level: "Intermediate" },
//   { name: "MongoDB", level: "Intermediate" },
//   { name: "Git", level: "Intermediate" },
// ];

// const SkillsSection = () => {
//   return (
//     <section
//       id="skills"
//       className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors"
//       data-aos="zoom-in"
//     >
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center"
//             >
//               <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
//               <p className="text-gray-600 dark:text-gray-400">{skill.level}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;


