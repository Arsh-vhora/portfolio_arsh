import React from 'react'
import { useState } from 'react';

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    // You can replace this with an API call (e.g., EmailJS, Formspree, etc.)
    console.log("Form submitted:", form);
    setError("");
    setForm({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    // <section
    //     id="contact"
    //     className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors"
    //     data-aos="fade-up"
    //     >
    //     <div className="container mx-auto px-4 max-w-2xl">
    //         <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
    //         <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
    //         {error && <p className="text-red-500 mb-4">{error}</p>}
    //         <div className="mb-4">
    //             <label className="block mb-1 font-medium">Name</label>
    //             <input
    //             type="text"
    //             name="name"
    //             value={form.name}
    //             onChange={handleChange}
    //             className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded px-4 py-2"
    //             placeholder="Your name"
    //             />
    //         </div>
    //         <div className="mb-4">
    //             <label className="block mb-1 font-medium">Email</label>
    //             <input
                // type="email"
                // name="email"
                // value={form.email}
                // onChange={handleChange}
    //             className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded px-4 py-2"
    //             placeholder="you@example.com"
    //             />
    //         </div>
    //         <div className="mb-4">
    //             <label className="block mb-1 font-medium">Message</label>
    //             <textarea
    //             name="message"
    //             rows="5"
    //             value={form.message}
    //             onChange={handleChange}
    //             className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded px-4 py-2"
    //             placeholder="Write your message..."
    //             />
    //         </div>
    //         <button
    //             type="submit"
    //             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
    //         >
    //             Send Message
    //         </button>
    //         </form>
    //     </div>
    // </section>

    
    <section id="contact" className="py-20 bg-gradient-to-tr from-pink-500 to-yellow-400 text-gray-900">
        <div className="max-w-xl mx-auto bg-white/90 backdrop-blur p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-600"
                placeholder="Your name"
            />
            <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder='Your Email'
            />
            <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Write your message..."
            />
            <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:brightness-110 transition"
            >
            Send Message
            </button>
        </form>
        </div>
    </section>


  );
}

export default ContactSection

