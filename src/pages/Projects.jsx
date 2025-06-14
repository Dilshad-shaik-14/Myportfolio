import { motion } from "framer-motion";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";
import React from "react";

const projects = [
  {
    title: "YouTube+Twitter Hybrid App",
    desc: "A full-featured MERN app with tweeting, video upload, playlists, and real-time likes/comments.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    img: s5,
    github: "https://github.com/Dilshad-shaik-14/backend_01",
  },
  {
    title: "Cronicle Cave App",
    desc: "React + Express CRUD app with authentication and filtering.",
    stack: ["React", "Express", "MongoDB"],
    img: s1,
    live: "https://full-stack-01.vercel.app",
    github: "https://github.com/Dilshad-shaik-14/FullStack_01",
  },
  {
    title: "Animated Portfolio",
    desc: "Tailwind + Framer Motion based elegant portfolio.",
    stack: ["React", "Tailwind", "Framer Motion"],
    img: s2,
    live: "https://portfolio-s7m8.vercel.app",
    github: "https://github.com/Dilshad-shaik-14/portfolio11",
  },
  {
    title: "Tictactoe Game",
    desc: "A simple Tic Tac Toe game with a twist: play among friends",
    stack: ["React", "tailwindCSS"],
    img: s3,
    github: "https://github.com/Dilshad-shaik-14/ticktaktoe",
  },
  {
    title: "GlassMorphism login page",
    desc: "A simple login page with glassmorphism effect",
    stack: ["React", "tailwindCSS"],
    img: s4,
    github: "https://github.com/Dilshad-shaik-14/login_out",
  },
  {
    title: "Password Saver",
    desc: "React + Express CRUD app with localStorage password management.",
    stack: ["React", "Express", "MongoDB"],
    img: s6,
    github: "https://github.com/Dilshad-shaik-14/react_password",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 px-4 sm:px-6 md:px-16 pt-24 pb-32 bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-neutral-900 text-black dark:text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-extrabold mb-20 text-center"
      >
        🚀 Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-3xl shadow-xl p-4 overflow-hidden border border-white/10 group relative"
          >
            {/* Image */}
            <div className="rounded-xl overflow-hidden h-44 sm:h-48 mb-4 relative">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500" />
            </div>

            {/* Content */}
            <div className="px-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-sm sm:text-base mb-3 text-gray-700 dark:text-gray-300">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 text-xs sm:text-sm">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gradient-to-br from-sky-300 to-sky-500 dark:from-sky-700 dark:to-sky-900 text-white px-2 py-0.5 rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm font-medium">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 dark:text-sky-300 hover:underline"
                  >
                    🔗 Live
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:underline"
                >
                  💻 GitHub
                </a>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-10 transition duration-500 bg-gradient-to-br from-purple-400 via-sky-400 to-transparent blur-2xl rounded-3xl z-[-1]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
