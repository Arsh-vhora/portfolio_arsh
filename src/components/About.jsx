import React from 'react';
import myImage from '../../src/assets/images/myImage.jpeg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
          {/* Animated Image Section */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <motion.img
                src={myImage}
                alt="Arsh Vhora"
                className="relative w-64 h-64 md:w-72 md:h-72 object-cover object-top rounded-2xl shadow-2xl border-2 border-white/20"
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <div className="w-full md:w-2/3 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
              <div className="space-y-4 text-lg text-foreground/70 leading-relaxed font-light">
                <p>
                  I'm a full-stack developer with a passion for creating modern, user-friendly web applications.
                  I specialize in building high-performance, visually appealing interfaces that solve real-world problems.
                </p>
                <p>
                  A self-motivated and hardworking individual seeking an opportunity to contribute to a dynamic organization.
                  Eager to apply my skills, knowledge, and problem-solving abilities in a challenging environment
                  while growing both professionally and personally.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div>
                  <h4 className="text-indigo-500 font-bold text-2xl">5+</h4>
                  <p className="text-sm text-foreground/50">Projects Completed</p>
                </div>
                <div>
                  <h4 className="text-purple-500 font-bold text-2xl">A+</h4>
                  <p className="text-sm text-foreground/50">Learning Speed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
