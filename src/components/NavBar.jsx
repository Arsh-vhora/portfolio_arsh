import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = (
    <>
      <a href="#home" className="hover:text-blue-600 transition-colors duration-200">
        Home
      </a>
      <a href="#about" className="hover:text-blue-600 transition-colors duration-200">
        About
      </a>
      <a href="#projects" className="hover:text-blue-600 transition-colors duration-200">
        Projects
      </a>
      <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">
        Contact
      </a>
    </>
  );

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50 transition-colors">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">MyPortfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center text-gray-700 dark:text-gray-300">
          {navLinks}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 bg-gray-200 dark:bg-gray-700 rounded transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown with Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 px-6 py-6 space-y-4 text-gray-800 dark:text-gray-100 shadow-md rounded-b-lg"
          >
            <div className="flex flex-col space-y-3 text-center text-lg">
              {navLinks}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="mt-2 p-2 bg-gray-200 dark:bg-gray-700 rounded transition"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
