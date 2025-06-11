import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6 
                bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white"
    >
      <div className="max-w-3xl space-y-6">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-yellow-300">Arsh Vhora</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white/90"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Turning complex problems into seamless web solutions using React, Tailwind, Node.js and more — with a passion for learning and collaboration.
        </motion.p>
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-full hover:bg-yellow-300 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
