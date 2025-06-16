import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
  id="Home"
  className="w-full max-w-7xl mx-auto pt-32 md:pt-36 min-h-screen px-6 md:px-10 pb-20 flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-24 overflow-hidden"
>
      {/* Hero Content */}
      <motion.div
        className="relative z-10 w-full md:w-1/2 p-6 md:p-10 rounded-3xl text-center md:text-left
                   border border-white/20 backdrop-blur-3xl
                   bg-white/10 dark:bg-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]
                   transition-all duration-500 group overflow-hidden"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Outer glow layer */}
        <div className="absolute -inset-1 bg-gradient-to-br from-[#ffffff22] to-[#1a1a1a33] rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition duration-700 pointer-events-none" />

        {/* Glowing border ring */}
        <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20 group-hover:ring-white/30 transition-all duration-500 pointer-events-none" />

        {/* Text Section */}
        <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-white drop-shadow-md">
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
          className="relative text-lg sm:text-xl md:text-2xl font-semibold text-white/80"
          repeat={Infinity}
        />

        <p className="relative mt-6 text-white/70 text-base sm:text-lg leading-relaxed">
          I create robust web experiences using clean code and sharp UI/UX.
          Passionate about building scalable applications and contributing to open-source projects.
        </p>

        {/* Resume Button */}
        <div className="relative mt-8">
          <a
            href="/DilshadShaik_Resume.pdf"
            download="DilshadShaik_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base rounded-full font-semibold
                       text-white bg-white/10 hover:bg-white/20
                       border border-white/30 backdrop-blur-md shadow-md transition-all duration-300"
          >
            <FaDownload className="text-lg" /> Download Resume
          </a>
        </div>
      </motion.div>

      {/* Lottie Animation */}
      <motion.div
        className="w-full md:w-1/2 max-w-[500px] lg:max-w-[600px]"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie animationData={animationData} loop={true} />
      </motion.div>
    </section>
  );
}
