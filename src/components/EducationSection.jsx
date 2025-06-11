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
    <section
      id="education"
      className="py-20 px-6 bg-white dark:bg-gray-950 text-gray-900 dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              className="flex flex-col justify-between bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all h-full min-h-[190px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4 text-blue-600 dark:text-blue-400">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-sm text-gray-500">{edu.college}</p>
                    <p className="text-sm text-gray-500">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </div>
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {expanded === i ? "Hide Details" : "View Details"}
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      expanded === i ? "rotate-180" : "rotate-0"
                    }`}
                    size={16}
                  />
                </button>

                {/* Collapsible Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expanded === i ? "mt-4 max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {edu.details}
                  </p>
                  <a
                    href={edu.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 mt-3 text-sm hover:underline"
                  >
                    View Certificate <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
