import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, ChevronDown, ExternalLink } from "lucide-react";

const educationData = [
  {
    degree: "Master of Science in Information Technology (MSc IT)",
    institution: "S.P. University, V.V. Nagar",
    college: "B.N. Patel Institute of Paramedical & Science College, Anand",
    year: "Apr 2025",
    details: "Completed MSc in IT with a CGPA of 8.91 from S.P. University. Gained expertise in advanced computing and software technologies.",
    certificateLink: "/certificates/msc_it_certificate.pdf",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "S.P. University, V.V. Nagar",
    college: "Aannd Commerce College, Anand",
    year: "Apr 2023",
    details: "Graduated with a CGPA of 9.04. Developed foundational knowledge in computer programming, databases, and web development.",
    certificateLink: "/certificates/bca_certificate.pdf",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "GSEB, Gandhinagar",
    college: "Knowledge High School, Anand",
    year: "Apr 2020",
    details: "Completed HSC with 60% in Science stream. Studied Mathematics, Physics, Chemistry, and Computer Science.",
    certificateLink: "/certificates/hsc_certificate.pdf",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "GSEB, Gandhinagar",
    college: "J.P. Thakkar High School, Anand",
    year: "Apr 2018",
    details: "Completed SSC with 74%. Built strong foundation in core subjects including Mathematics and Science.",
    certificateLink: "/certificates/ssc_certificate.pdf",
  },
];

export default function EducationSection() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-foreground/50 max-w-2xl mx-auto">
            My academic journey has been a foundation for my passion for technology and problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              className="glass-card p-8 flex flex-col justify-between group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="bg-indigo-500/10 p-3 rounded-2xl text-indigo-500 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <span className="px-3 py-1 glass rounded-full text-xs font-bold text-indigo-500">
                    {edu.year}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold group-hover:text-indigo-500 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-foreground/70 font-medium">{edu.college}</p>
                  <p className="text-sm text-foreground/50">{edu.institution}</p>
                </div>

                <p className="text-sm text-foreground/60 leading-relaxed">
                  {edu.details}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-white/10">
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="text-sm font-bold text-indigo-500 flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    {expanded === i ? "Less Info" : "More Info"}
                    <ChevronDown className={`w-4 h-4 transition-transform ${expanded === i ? 'rotate-180' : ''}`} />
                  </button>
                  <a
                    href={edu.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                {expanded === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-sm text-foreground/50 italic pt-2"
                  >
                    Academic excellence and foundational learning.
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
