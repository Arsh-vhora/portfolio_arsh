import React from 'react'
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gradient mb-2">Arsh Vhora</h2>
            <p className="text-foreground/50 max-w-xs text-sm">
              Building the future of the web, one component at a time.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 glass rounded-2xl hover:bg-white/10 hover:text-indigo-500 transition-all active:scale-90">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 glass rounded-2xl hover:bg-white/10 hover:text-blue-500 transition-all active:scale-90">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-3 glass rounded-2xl hover:bg-white/10 hover:text-sky-400 transition-all active:scale-90">
              <Twitter size={20} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-4 glass rounded-2xl group hover:bg-indigo-500 hover:text-white transition-all active:scale-90"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-foreground/40 tracking-widest uppercase">
          <p>© {new Date().getFullYear()} ARSH VHORA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#privacy" className="hover:text-indigo-500 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-indigo-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;