import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="Home"
      className="w-full max-w-[1600px] mx-auto px-4 xl:px-24 pt-36 pb-20 min-h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-10 xl:gap-20"
    >
      {/* Text Content */}
      <motion.div
        className="relative z-10 w-full lg:w-[60%] p-10 rounded-3xl
                   border border-white/20 backdrop-blur-2xl
                   bg-white/5 dark:bg-white/5
                   shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]
                   transition-all duration-500 group"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Glow & Ring */}
        <div className="absolute -inset-1 bg-gradient-to-br from-white/10 to-black/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition duration-700 pointer-events-none" />
        <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-white/20 transition duration-500 pointer-events-none" />

        <h1 className="relative text-4xl sm:text-5xl xl:text-6xl font-extrabold mb-4 leading-tight text-white drop-shadow-xl">
          Hi, I'm Dilshad Shaik
        </h1>

        <TypeAnimation
          sequence={[
            "Full-Stack Developer", 2000,
            "MERN Stack Enthusiast", 2000,
            "Open Source Contributor", 2000,
            "Tech Explorer", 2000,
            "AI Enthusiast", 2000,
          ]}
          wrapper="span"
          speed={50}
          className="relative block text-xl sm:text-2xl font-semibold text-white/80"
          repeat={Infinity}
        />

        <p className="relative mt-6 text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl">
          I craft high-performance web experiences with pixel-perfect UI and clean backend logic.
          Passionate about scalable systems, open-source collaboration, and building meaningful tools.
        </p>

        <div className="relative mt-8">
          <a
            href="/DilshadShaik_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base rounded-full font-semibold
                       text-white bg-gradient-to-r from-indigo-500/40 to-purple-500/40
                       hover:from-indigo-600/70 hover:to-purple-600/70
                       hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]
                       border border-white/20 backdrop-blur-lg shadow-md transition-all duration-300"
          >
            <FaDownload className="text-lg" /> Download Resume
          </a>
        </div>
      </motion.div>

      {/* Animation Section */}
      <motion.div
        className="w-full lg:w-[40%] max-w-[600px] aspect-[5/4]"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie animationData={animationData} loop />
      </motion.div>
    </section>
  );
}
