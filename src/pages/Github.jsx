import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import "github-markdown-css";
import { motion } from "framer-motion";

export default function GitHubProfileReadme() {
  const [readme, setReadme] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Dilshad-shaik-14/Dilshad-shaik-14/main/README.md")
      .then((res) => {
        if (!res.ok) throw new Error("README not found or repo is private.");
        return res.text();
      })
      .then((text) => setReadme(text))
      .catch((err) => {
        console.error(err);
        setError("❌ Could not load your GitHub README.");
      });
  }, []);

  if (error)
    return (
      <div className="text-red-500 text-center mt-10">{error}</div>
    );
  if (!readme)
    return (
      <div className="text-center text-gray-600 dark:text-gray-300 mt-10">
        Loading README...
      </div>
    );

  return (
    <section
      id="Github"
      className="pt-24 min-h-screen px-6 pb-30 md:px-20 text-white dark:text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-extrabold mb-20 text-center text-white"
      >
        GitHub Profile
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* LEFT PANEL */}
        <div className="md:col-span-1 bg-white/30 dark:bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-lg flex flex-col items-center gap-4">
          <img
            src="https://avatars.githubusercontent.com/u/103246099?v=4"
            alt="GitHub Avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md"
          />
          <h2 className="text-2xl font-bold mt-2 text-white">Dilshad Shaik</h2>
          <p className="text-sm text-center text-white dark:text-gray-300">
            Passionate Full Stack Developer | MERN | GSoC Aspirant
          </p>
          <a
            href="https://github.com/Dilshad-shaik-14"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-blue-300 dark:text-blue-400 hover:underline"
          >
            @Dilshad-shaik-14
          </a>

          {/* GitHub Stats */}
          <img
            src={`https://github-readme-stats.vercel.app/api?username=Dilshad-shaik-14&show_icons=true&theme=transparent&hide_title=true`}
            alt="GitHub Stats"
            className="w-full rounded-xl mt-4"
          />

          {/* Contribution Heatmap */}
          <img
            src={`https://ghchart.rshah.org/2196f3/Dilshad-shaik-14`}
            alt="GitHub Contribution Chart"
            className="w-full mt-4 border rounded-lg shadow-sm"
          />

          {/* Tech Stack Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <img
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              alt="React"
              className="h-8"
            />
            <img
              src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
              alt="Node.js"
              className="h-8"
            />
            <img
              src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"
              alt="Express"
              className="h-8"
            />
            <img
              src="https://img.shields.io/badge/MongoDB-4DB33D?style=for-the-badge&logo=mongodb&logoColor=white"
              alt="MongoDB"
              className="h-8"
            />
            <img
              src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"
              alt="Tailwind CSS"
              className="h-8"
            />
          </div>
        </div>

        {/* RIGHT PANEL - Animated Markdown */}
        <motion.div
          className="md:col-span-2 overflow-auto max-h-[80vh] scroll-pb-16 pb-16 p-4 sm:p-8 rounded-3xl bg-white dark:bg-gray-900 backdrop-blur-lg border border-white/20 shadow-xl custom-scroll markdown-body"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          style={{
            wordBreak: "break-word",
          }}
        >
          <style>
            {`
              .markdown-body img {
                display: inline-block;
                margin: 4px;
                height: 32px;
              }
              .markdown-body p {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
              }
              @media (max-width: 767px) {
                .markdown-body, .markdown-body * {
                  color: #222 !important;
                }
              }
              @media (min-width: 768px) {
                .markdown-body, .markdown-body * {
                  color: #fff !important;
                }
              }
            `}
          </style>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          >
            {readme}
          </ReactMarkdown>
        </motion.div>
      </div>
    </section>
  );
}
