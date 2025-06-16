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
      className="min-h-screen py-24 px-4 sm:px-8 md:px-16"
    >
      <Toaster position="top-center" />
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto glassmorphic px-6 py-10 sm:px-10 sm:py-12 rounded-3xl shadow-2xl border border-white/20 bg-white/20 dark:bg-white/10 backdrop-blur-md"
      >
        <h2 className="text-3xl sm:text-4xl font-bold sm:font-extrabold text-center mb-10 text-white tracking-tight">
          Get in Touch
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6" id="contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-white/10 backdrop-blur border border-gray-300 dark:border-gray-700 text-white placeholder-gray-300 text-sm sm:text-base"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-white/10 backdrop-blur border border-gray-300 dark:border-gray-700 text-white placeholder-gray-300 text-sm sm:text-base"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-white/10 backdrop-blur border border-gray-300 dark:border-gray-700 text-white placeholder-gray-300 text-sm sm:text-base"
          ></textarea>
          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            className={`w-full py-3 text-white font-semibold text-base sm:text-lg rounded-xl transition bg-blue-600 hover:bg-blue-700 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        {/* Social Icons */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-6 text-xl sm:text-2xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/Dilshad-shaik-14"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/dilshadsk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:dilshadshaik467@gmail.com"
            className="hover:text-red-500 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
