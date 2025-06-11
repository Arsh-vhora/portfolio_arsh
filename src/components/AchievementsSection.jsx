import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Star, ExternalLink } from "lucide-react";

// const achievements = [
//   {
//     title: "Winner - CodeSprint Hackathon 2023",
//     description: "Led a 4-member team to build an AI-based app. Won 1st place among 50+ teams.",
//     image: "/certificates/hackathon_winner.jpg",
//   },
//   {
//     title: "Certified React Developer",
//     description: "Completed React certification from XYZ Academy.",
//     image: "/certificates/react_cert.jpg",
//   },
//   {
//     title: "Open Source Contributor",
//     description: "Contributed to DevToolX with UI components.",
//     image: "/certificates/opensource.jpg",
//   },
// ];

const achievements = [
  {
    title: "Academic Excellence Award",
    description: "Institute 1st Rank - Semester 3, 2022 (BCA - 9.14 GPA)",
  },
  {
    title: "Academic Excellence Award",
    description: "University 6th Rank - Semester 3, 2022 (BCA - 9.14 GPA)",
  },
  {
    title: "Academic Excellence Award",
    description: "Institute 3rd Rank - Semester 5, 2023 (BCA - 8.50 GPA)",
  },
  {
    title: "Academic Excellence Award",
    description: "University 3rd Rank - Semester 1, 2024 (MSc IT - 8.84 GPA)",
  },
  {
    title: "Academic Excellence Award",
    description: "University 8th Rank - Semester 3, 2024 (MSc IT - 8.08 GPA)",
  },
  {
    title: "Academic Excellence Award",
    description: "University 3th Rank - Semester 4, 2025 (MSc IT - 8.91 GPA)",
  },
];

const AnimatedCounter = ({ value, label }) => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400">{value}+</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{label}</p>
    </motion.div>
  );
};

const AchievementsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="achievements" className="py-20 px-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Achievements & Awards
        </motion.h2>

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <AnimatedCounter value={5} label="Projects Completed" />
          {/* <AnimatedCounter value={3} label="Hackathons Won" /> */}
          <AnimatedCounter value={5} label="Certificates" />
          {/* <AnimatedCounter value={2} label="Open Source Contributions" /> */}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3 text-blue-600 dark:text-blue-400">
                <Trophy className="w-6 h-6" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
              {item.image && (
                <button
                  onClick={() => setSelectedImage(item.image)}
                  className="inline-flex items-center text-blue-500 hover:underline text-sm"
                >
                  View Certificate <ExternalLink size={14} className="ml-1" />
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4" onClick={() => setSelectedImage(null)}>
            <img
              src={selectedImage}
              alt="Certificate"
              className="max-w-3xl w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border"
            />
          </div>
        )}

        {/* Resume download */}
        <div className="text-center mt-16">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
          >
            Download Full Résumé
          </a>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
