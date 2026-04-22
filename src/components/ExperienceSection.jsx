import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";

const experienceData = [
  {
    role: "Full Stack Developer Intern",
    company: "Insansa Techknowledge",
    location: "Onsite, Vadodara",
    duration: "September 2025 – April 2026",
    description:
      "Developed MERN stack apps, designed responsive UIs with Tailwind CSS, and integrated REST APIs. Performed manual and automated testing (Playwright) and assisted in AI dataset creation.",
    certificateLink: "#",
  },
  {
    role: "Full Stack Developer Intern",
    company: "SaiKet Systems",
    location: "Remote",
    duration: "May 2025 – June 2025",
    description:
      "Worked on scalable web apps using React, Node.js, Express, and MySQL. Built reusable components and integrated REST APIs.",
    certificateLink: "/fullstack_internship_certificate.pdf",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-indigo-500/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-foreground/50 max-w-2xl mx-auto">
            Gaining hands-on experience in the industry through impactful internships and projects.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, i) => (
            <motion.div
              key={i}
              className="glass-card p-8 group relative overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-500/10 p-3 rounded-2xl text-indigo-500">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-indigo-500 font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-4 py-1.5 glass rounded-full text-sm font-bold text-foreground/70">
                    {exp.duration}
                  </span>
                  <p className="text-xs text-foreground/40 mt-1">{exp.location}</p>
                </div>
              </div>

              <p className="text-foreground/70 leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="pt-6 border-t border-white/10">
                <a
                  href={exp.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2 text-sm"
                >
                  View Experience Certificate <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
