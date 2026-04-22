import React from 'react'
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const projects = [
  {
    title: "Job Portal",
    techStack: ["ASP.NET", "C#", "SQL Server"],
    features: [
      "User roles: Job Seeker, Employer, and Admin",
      "Job search and candidate filtering",
      "Job posting with detailed requirements",
      "Messaging between employers and candidates",
    ],
    link: "#",
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Study Notion",
    techStack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    features: [
      "Instructor and student portals",
      "Course creation, consumption, and ratings",
      "Interactive learning interface",
      "MERN stack implementation",
    ],
    link: "#",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "PropertEase",
    techStack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    features: [
      "User authentication and Property listings",
      "Search and filter by various criteria",
      "Google Maps integration",
      "Secure payments and Admin dashboard",
    ],
    link: "#",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "HR Portal",
    techStack: ["MERN Stack", "NodeJS", "ExpressJS", "MongoDB"],
    features: [
      "Full-featured HR management system",
      "Secure login and role-based access",
      "Employee data handling and workflows",
      "Administrative dashboards",
    ],
    link: "#",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Company Portfolio",
    techStack: ["React JS", "GSAP", "Framer Motion"],
    features: [
      "Modern, responsive company portfolio",
      "Built with reusable UI components",
      "Clean UI/UX with smooth animations",
      "Cross-device compatibility",
    ],
    link: "#",
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "LMS System",
    techStack: ["React.js", "Frontend Prototype"],
    features: [
      "Interactive frontend LMS prototype",
      "Course listings and user dashboards",
      "User-friendly navigation flows",
      "Focus on UI/UX and responsiveness",
    ],
    link: "#",
    color: "from-rose-500 to-pink-500"
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-foreground/50 max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills in full-stack development and problem solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card group flex flex-col h-full overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="flex gap-4">
                      <a href={project.link} className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all">
                        <ExternalLink size={20} />
                      </a>
                      <a href="#" className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all">
                        <Github size={20} />
                      </a>
                   </div>
                </div>
                <div className="absolute bottom-4 left-4">
                   <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white">
                      <Code2 size={24} />
                   </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 glass rounded-lg text-[10px] font-bold uppercase tracking-wider text-indigo-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-6 flex-grow">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  className="w-full btn-secondary text-center py-2 text-sm"
                >
                  View Case Study
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;