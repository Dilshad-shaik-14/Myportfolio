import { motion, useAnimation } from "framer-motion";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaCode,
  FaProjectDiagram,
  FaCertificate,
  FaGoogle,
} from "react-icons/fa";

export default function TimelinePage() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const timeline = useMemo(
    () => [
      {
        year: "2020–2022",
        event: "Started My Tech Journey with LaTeX, HTML, CSS, and JavaScript",
        description:
          "Began my programming journey with LaTeX for academic writing, then transitioned to web development with HTML, CSS, and JavaScript.",
        icon: <FaCode className="text-blue-500 w-5 h-5" aria-label="code" />,
      },
      {
        year: "2023",
        event: "Started Engineering in CSE with C, C++, and Python",
        description:
          "Developed a strong foundation in programming languages C, C++, and Python, enhancing my problem-solving skills and algorithmic thinking.",
        icon: <FaCode className="text-purple-500 w-5 h-5" aria-label="code" />,
      },
      {
        year: "2024",
        event: "Built React Applications",
        description:
          "Dived into React.js, mastering component-based architecture and state management to create dynamic web applications.",
        icon: (
          <FaProjectDiagram
            className="text-green-500 w-5 h-5"
            aria-label="project"
          />
        ),
      },
      {
        year: "2024",
        event: "Started mastering React",
        description:
          "Focused on mastering React.js, enhancing my skills in building interactive and responsive user interfaces.",
        icon: (
          <FaProjectDiagram
            className="text-red-600 w-5 h-5"
            aria-label="project"
          />
        ),
      },
      {
        year: "2024",
        event: "Completed Full Stack Development",
        description:
          "Successfully completed a comprehensive full-stack development program, gaining expertise in both frontend and backend technologies.",
        icon: (
          <FaCertificate
            className="text-orange-500 w-5 h-5"
            aria-label="certificate"
          />
        ),
      },
      {
        year: "2025",
        event: "Google Summer of Code Proposal – Plone",
        description:
          "Proposed UI/UX improvements to Volto for Plone Foundation. Ranked in top 10% of applicants, showcasing open-source dedication.",
        icon: <FaGoogle className="text-red-500 w-5 h-5" aria-label="google" />,
      },
    ],
    []
  );

  return (
    <section
      id="TimeLine"
      className="pt-24 min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 pb-20 text-white dark:text-white overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-16 text-white"
      >
        My Journey
      </motion.h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Glowing vertical line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: inView ? "100%" : 0 }}
          transition={{ duration: 2, ease: "circInOut" }}
          className="hidden md:block absolute left-1/2 transform -translate-x-1 w-1 bg-gradient-to-b from-sky-500 via-blue-400 to-sky-600 dark:from-sky-300 dark:via-blue-400 dark:to-blue-500 shadow-[0_0_20px_rgba(56,189,248,0.7)] rounded-full z-0"
        />

        <div ref={ref} className="relative z-10 space-y-16">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center md:items-start ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Icon Dot */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="absolute top-0 md:top-4 left-1/2 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-2 border-blue-500 z-10 flex items-center justify-center shadow-xl"
                  aria-hidden="true"
                >
                  {item.icon}
                </motion.span>

                {/* Card Content */}
                <div
                  className={`mt-10 md:mt-0 md:max-w-[47%] p-6 rounded-2xl 
                  bg-white/30 dark:bg-white/10 backdrop-blur-lg shadow-xl border border-white/20 
                  hover:scale-[1.03] transition duration-300 text-white ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <h4 className="text-sm font-semibold text-blue-200 sm:text-blue-600 dark:text-blue-300 mb-1">
                    {item.year}
                  </h4>
                  <h5 className="text-lg sm:text-xl font-bold mb-2 text-white">
                    {item.event}
                  </h5>
                  <p className="text-sm text-white sm:text-gray-700 dark:sm:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
