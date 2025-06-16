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
    desc: "React + Appwrite CRUD app with authentication and filtering.",
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
    desc: "React app with localStorage password management.",
    stack: ["React", "tailwindCSS"],
    img: s6,
    github: "https://github.com/Dilshad-shaik-14/react_password",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 pt-24 pb-32 px-4 sm:px-6 md:px-16 text-black dark:text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-extrabold mb-20 text-center"
      >
        Projects
      </motion.h2>

      <div className="max-w-[90rem] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04, rotate: 0.3 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative group rounded-3xl border border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-md overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-transform hover:shadow-2xl"
          >
            {/* Image */}
            <div className="h-44 sm:h-48 overflow-hidden relative rounded-t-3xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500" />
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{project.desc}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs sm:text-sm px-2 py-0.5 rounded-full text-white bg-gradient-to-br from-sky-400 to-sky-600 dark:from-sky-700 dark:to-sky-900 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex gap-4 text-sm font-medium">
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

            {/* Floating Glow */}
            <div className="absolute -inset-1 z-[-1] opacity-0 group-hover:opacity-20 transition-all duration-700 blur-2xl rounded-3xl bg-gradient-to-tr from-purple-400 via-sky-400 to-transparent" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
