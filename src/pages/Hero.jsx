import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="Home"
      className="pt-24 min-h-screen flex items-center justify-center px-6 md:px-16 py-12 
      bg-gradient-to-br from-white to-gray-200 dark:from-black dark:to-neutral-900 
      text-black dark:text-white transition-colors duration-500 overflow-hidden"
    >
      {/* Lottie Animation */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie animationData={animationData} loop={true} />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        className="z-10 backdrop-blur-xl bg-white/40 dark:bg-white/10 p-8 rounded-2xl shadow-2xl text-center md:text-left w-full md:w-1/2 border border-white/30 dark:border-white/10 transition-all duration-300"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hi, I'm Dilshad Shaik
        </h1>

        <TypeAnimation
          sequence={[
            "Full-Stack Developer",
            2000,
            "MERN Stack Enthusiast",
            2000,
            "Open Source Contributor",
            2000,
            "Tech Explorer",
            2000,
            "AI Enthusiast",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-xl md:text-2xl font-semibold text-black/70 dark:text-white/70"
          repeat={Infinity}
        />

        <p className="mt-6 text-black/60 dark:text-white/60 text-lg">
          I create robust web experiences using clean code and sharp UI/UX.
        </p>

        <div className="mt-8">
          <a
            href="/DilshadShaik_Resume.pdf"
             download="DilshadShaik_Resume.pdf"
             target="_blank"
              rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 dark:border-white/20 rounded-full font-semibold text-white dark:text-white 
              backdrop-blur-md bg-black/10 dark:bg-white/10 hover:bg-white hover:text-black transition-all duration-300"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
