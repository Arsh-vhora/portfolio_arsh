import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Menu, X, Sun, Moon } from "lucide-react";
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
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="glass px-6 py-3 rounded-2xl flex justify-between items-center shadow-lg shadow-black/5">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-gradient"
          >
            AV.
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center text-foreground font-medium">
            {navLinks}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 glass rounded-xl hover:bg-white/20 transition-all active:scale-90 text-indigo-500"
              aria-label="Toggle Dark Mode"
            >
              <motion.div
                initial={false}
                animate={{ rotate: darkMode ? 0 : 90, scale: darkMode ? 1 : 0.8 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 glass rounded-xl"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown with Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden px-6"
          >
            <div className="glass rounded-2xl p-6 mt-2 flex flex-col items-center gap-4 text-foreground">
              {navLinks}
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full p-3 glass rounded-xl flex items-center justify-center gap-3 text-indigo-500 font-bold"
              >
                {darkMode ? (
                  <>
                    <Sun size={20} /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon size={20} /> Dark Mode
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
