import { motion } from "framer-motion";
import {
  Code, Globe, Database, Server, Wrench, Users, Star
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-5 h-5" />,
    skills: ["C", "C++", "Core Java", "C#", "Python"],
    color: "from-blue-500/20 to-indigo-500/20",
    textColor: "text-blue-500"
  },
  {
    title: "Web Technologies",
    icon: <Globe className="w-5 h-5" />,
    skills: ["PHP", "ASP.NET", "HTML", "CSS", "JavaScript", "React JS"],
    color: "from-purple-500/20 to-pink-500/20",
    textColor: "text-purple-500"
  },
  {
    title: "Server-side Tech",
    icon: <Server className="w-5 h-5" />,
    skills: ["NodeJS", "ExpressJS"],
    color: "from-green-500/20 to-emerald-500/20",
    textColor: "text-green-500"
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["Oracle 10g", "SQL Server 2008", "MySQL", "MongoDB"],
    color: "from-orange-500/20 to-yellow-500/20",
    textColor: "text-orange-500"
  },
  {
    title: "Tools & Others",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Ms-Office", "Git"],
    color: "from-cyan-500/20 to-blue-500/20",
    textColor: "text-cyan-500"
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-5 h-5" />,
    skills: [
      "Collaboration", "Communication", "Problem-solving",
      "Time management", "Adaptability"
    ],
    color: "from-red-500/20 to-orange-500/20",
    textColor: "text-red-500"
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
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-foreground/50 max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and professional strengths.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 group hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} ${category.textColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 glass rounded-xl text-sm font-medium hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl -z-10" />
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 text-center md:text-left">
              <div className="inline-flex p-3 bg-yellow-500/10 text-yellow-500 rounded-2xl mb-4">
                <Star className="w-8 h-8 fill-current" />
              </div>
              <h3 className="text-2xl font-bold">Core Strengths</h3>
              <p className="text-foreground/50 mt-2">What sets me apart</p>
            </div>
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-4">
              {strengths.map((strength, i) => (
                <div key={i} className="flex items-center gap-3 p-4 glass rounded-2xl">
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span className="font-medium">{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
