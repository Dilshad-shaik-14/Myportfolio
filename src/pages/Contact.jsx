

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!publicKey || !serviceId || !templateId) {
      toast.error("EmailJS keys missing. Check your .env file.");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to send message. Try again.");
        setLoading(false);
      });
  };

  return (
    <section
      id="Contact"
      className="min-h-screen py-24 px-6 bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-neutral-900 transition-colors duration-500"
    >
      <Toaster position="top-center" />
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto glassmorphic p-10 rounded-3xl shadow-2xl border border-white/20 bg-white/20 dark:bg-white/10 backdrop-blur-md"
      >
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-white">
          Get in Touch
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6" id="contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur border border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur border border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur border border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
          ></textarea>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            className={`w-full py-3 text-white font-bold rounded-xl transition bg-blue-600 hover:bg-blue-700 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
        <motion.div
          className="mt-10 flex justify-center gap-8 text-2xl text-gray-700 dark:text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/Dilshad-shaik-14"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/dilshadsk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:dilshadshaik467@gmail.com"
            className="hover:text-red-500"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
