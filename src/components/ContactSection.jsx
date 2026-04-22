import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    // Simulate submission
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-foreground/50 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 space-y-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-foreground/60 leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 glass rounded-2xl text-indigo-500 group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/40 font-bold uppercase tracking-wider">Email</p>
                    <p className="font-medium">arshvhora@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 glass rounded-2xl text-purple-500 group-hover:scale-110 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/40 font-bold uppercase tracking-wider">Phone</p>
                    <p className="font-medium">+91 87339 73175</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 glass rounded-2xl text-pink-500 group-hover:scale-110 transition-transform">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/40 font-bold uppercase tracking-wider">Location</p>
                    <p className="font-medium">Anand, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-foreground/60 mb-2 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all border-white/10"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground/60 mb-2 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all border-white/10"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground/60 mb-2 ml-1">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all border-white/10 resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm font-medium">Please fill in all fields.</p>
              )}
              {status === "success" && (
                <p className="text-green-500 text-sm font-medium">Message sent successfully!</p>
              )}

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
