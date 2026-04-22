import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Download } from "lucide-react";

const achievements = [
  {
    title: "Academic Excellence Award",
    description: "Institute 1st Rank - Semester 3, 2022 (BCA - 9.14 GPA)",
    rank: "1st"
  },
  {
    title: "Academic Excellence Award",
    description: "University 6th Rank - Semester 3, 2022 (BCA - 9.14 GPA)",
    rank: "6th"
  },
  {
    title: "Academic Excellence Award",
    description: "Institute 3rd Rank - Semester 5, 2023 (BCA - 8.50 GPA)",
    rank: "3rd"
  },
  {
    title: "Academic Excellence Award",
    description: "University 3rd Rank - Semester 1, 2024 (MSc IT - 8.84 GPA)",
    rank: "3rd"
  },
  {
    title: "Academic Excellence Award",
    description: "University 8th Rank - Semester 3, 2024 (MSc IT - 8.08 GPA)",
    rank: "8th"
  },
  {
    title: "Academic Excellence Award",
    description: "University 3th Rank - Semester 4, 2025 (MSc IT - 8.91 GPA)",
    rank: "3rd"
  },
];

const AnimatedCounter = ({ value, label, color }) => {
  return (
    <motion.div
      className="glass-card p-6 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className={`text-4xl font-black mb-2 ${color}`}>{value}+</h3>
      <p className="text-sm font-medium text-foreground/50 uppercase tracking-wider">{label}</p>
    </motion.div>
  );
};

const AchievementsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/5 blur-[120px] -z-10 rounded-full" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Honors & <span className="text-gradient">Awards</span>
          </h2>
          <p className="text-foreground/50 max-w-2xl mx-auto">
            Recognitions for academic excellence and professional contributions.
          </p>
        </motion.div>

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          <AnimatedCounter value={6} label="University Ranks" color="text-indigo-500" />
          <AnimatedCounter value={5} label="Projects" color="text-purple-500" />
          <AnimatedCounter value={10} label="Scholarships" color="text-pink-500" />
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-yellow-500/10 text-yellow-500 rounded-2xl group-hover:rotate-12 transition-transform">
                  <Trophy size={24} />
                </div>
                <span className="text-2xl font-black text-foreground/10 group-hover:text-yellow-500/20 transition-colors">
                  {item.rank}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Resume download */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3"
          >
            <Download size={20} />
            Download Full Résumé
          </a>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] glass flex items-center justify-center p-6" onClick={() => setSelectedImage(null)}>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl w-full"
          >
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full rounded-2xl shadow-2xl border-2 border-white/20"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default AchievementsSection;
