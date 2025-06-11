import React from 'react'
import { motion } from 'framer-motion';

const ProjectSection = () => {
//   const projects = [
//   {
//     title: "Job Portal",
//     description:
//       "A job portal built with ASP.NET (Front End), C# and SQL Server (Back End & DB). It connects job seekers and employers, supports job search, candidate filtering, messaging, job posting, and includes an admin dashboard to manage users and content.",
//     link: "/projects/job-portal", // Replace with actual deployed or PDF link if available
//   },
//   {
//     title: "Study Notion",
//     description:
//       "An ed-tech platform built with the MERN stack (ReactJS, NodeJS, ExpressJS, MongoDB). It allows instructors to publish courses and students to consume, review, and rate content. Features include seamless content delivery, user engagement, and global access.",
//     link: "/projects/study-notion", // Replace with actual deployed link if available
//   },
//   {
//     title: "PropertEase (Property Sale & Rental Website)",
//     description:
//       "A full-featured property platform built with ReactJS and NodeJS/ExpressJS + MongoDB. Supports user authentication, property listings, search/filtering, booking inquiries, admin dashboard, Google Maps integration, reviews, and secure payments.",
//     link: "/projects/propertease", // Replace with actual deployed link if available
//   },
// ];

const projects = [
  {
    title: "Job Portal",
    techStack: ["ASP.NET", "C#", "SQL Server"],
    features: [
      "User roles: Job Seeker, Employer, and Admin",
      "Job search and candidate filtering",
      "Job posting with detailed requirements",
      "Messaging between employers and candidates",
      "Admin monitoring and moderation",
    ],
    link: "#", // replace with real URL or leave as "#"
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
  },
  {
    title: "PropertEase",
    techStack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    features: [
      "User authentication for buyers, sellers, and renters",
      "Property listings with images and pricing",
      "Search and filter by various criteria",
      "Google Maps integration and secure payments",
      "Admin dashboard and user reviews",
    ],
    link: "#",
  },
];



  return (
    <section
        id="projects"
        className="py-20 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors"
        data-aos="fade-up"
        >
        <div className="container mx-auto px-4">
            <motion.h2 className="text-3xl font-bold text-center mb-10" initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Projects
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
            {/* {projects.map((project, index) => (
                <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                </p>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    View Project →
                </a>
                </div>
            ))} */}
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-3 items-center justify-center">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Feature List */}
                <div className='flex flex-col text-left justify-center items-center'>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    {project.features.map((feature, i) => (
                      <li key={i}>{"→ " + feature}</li>
                    ))}
                  </ul>
                </div>
                

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  View Project →
                </a>
              </div>
            ))}

            </div>
        </div>
    </section>

  );
}

export default ProjectSection