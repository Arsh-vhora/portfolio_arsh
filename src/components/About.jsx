import React from 'react';
import myImage from '../../src/assets/images/myImage.jpeg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors"
      data-aos="fade-right"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-xl">
            I'm a full-stack developer with a passion for creating modern, user-friendly web applications.
            I specialize in building high-performance, visually appealing interfaces. 
            A self-motivated and hardworking seeking an opportunity to contribute to a dynamic organization. 
            Eager to apply my skills, knowledge, and problem-solving abilities in a challenging environment 
            while growing both professionally and personally.
          </p>
        </div>

        {/* Animated Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.img
            src={myImage}
            alt="Arsh Vhora"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
