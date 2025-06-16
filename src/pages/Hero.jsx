import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="Home"
      className="pt-24 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 py-12  text-black dark:text-white
       overflow-hidden gap-10"
    >
      {/* Hero Content */}
<motion.div
  className="relative z-10 w-full md:w-1/2 p-6 md:p-10 rounded-3xl text-center md:text-left
             border border-black/10 
             backdrop-blur-2xl bg-white/60
             shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]
             transition-all duration-500 group overflow-hidden"
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
  {/* Light glowing ring effect */}
  <div className="absolute -inset-1 bg-gradient-to-br from-[#ffffffcc] to-[#ffffff55] rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-700 pointer-events-none" />
  
  {/* Subtle border glow */}
  <div className="absolute inset-0 rounded-3xl ring-1 ring-black/10 group-hover:ring-black/20 transition-all duration-500 pointer-events-none" />

  {/* Text Section */}
  <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-black drop-shadow-sm">
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
    className="relative text-lg sm:text-xl md:text-2xl font-semibold text-black/70"
    repeat={Infinity}
  />

  <p className="relative mt-6 text-black/60 text-base sm:text-lg leading-relaxed">
    I create robust web experiences using clean code and sharp UI/UX.
    Passionate about building scalable applications and contributing to open-source projects.
  </p>

  {/* Download Resume Button */}
  <div className="relative mt-8">
    <a
      href="/DilshadShaik_Resume.pdf"
      download="DilshadShaik_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base rounded-full font-semibold
                 text-white bg-black hover:bg-neutral-800
                 border border-black/20 shadow-md transition-all duration-300"
    >
      <FaDownload className="text-lg" /> Download Resume
    </a>
  </div>
</motion.div>
      {/* Lottie Animation */}
      <motion.div
        className="w-full md:w-1/2 max-w-md md:max-w-full"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie animationData={animationData} loop={true} />
      </motion.div>
    </section>
  );
}
