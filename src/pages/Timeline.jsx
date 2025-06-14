import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaCode, FaProjectDiagram, FaCertificate, FaGoogle } from "react-icons/fa";

const timeline = [
  {
    year: "2020–2022",
    event: "Started My Tech Journey with Latex,html, CSS, and JavaScript",
    description:
      "Began my programming journey with LaTeX for academic writing, then transitioned to web development with HTML, CSS, and JavaScript.",
    icon: <FaCode className="text-blue-500 text-lg" />
  },
  {
    year: "2023",
    event: "started my engineering in Computer Science by learning C, C++, and Python",
    description:" Developed a strong foundation in programming languages C, C++, and Python, enhancing my problem-solving skills and algorithmic thinking.",
    icon: <FaCode className="text-purple-500 text-lg" />
   
  },
  {
    year: "2024",
    event: "started building react applications",
    description:
      "Dived into React.js, mastering component-based architecture and state management to create dynamic web applications.",
    icon: <FaProjectDiagram className="text-green-500 text-lg" />
  },
  {
    year: "2024",
    event: "Contributed to Open Source Projects",
    description:
      "Became an active open-source contributor, collaborating on various projects to enhance my skills and give back to the community.",
    icon: <FaCode className="text-yellow-500 text-lg" />
  },
  {
    year: "2024",
    event: "Completed Full Stack Development",
    description:
      "Successfully completed a comprehensive full-stack development , gaining expertise in both frontend and backend technologies.",
    icon: <FaCertificate className="text-orange-500 text-lg" />
  },
  {
    year: "2025",
    event: "Google Summer of Code Proposal – Plone",
    description:
      "Proposed UI/UX improvements to Volto for Plone Foundation showcasing open-source collaboration. ranked 1 in the top 10% of applicants but unfortunately not selected.",
    icon: <FaGoogle className="text-red-500 text-lg" />
  }
];

export default function TimelinePage() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.15 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section
      id="TimeLine"
      className="pt-24 min-h-screen px-6 md:px-16 py-12 
      bg-gradient-to-br from-white to-gray-200 dark:from-black dark:to-neutral-900 
      text-black dark:text-white transition-colors duration-500 overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center mb-16"
      >
        My Journey
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* vertical glowing line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: inView ? "100%" : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute left-1/2 transform -translate-x-1 w-1 bg-gradient-to-b from-sky-500 via-blue-400 to-sky-600 dark:from-sky-300 dark:via-blue-400 dark:to-blue-500 shadow-[0_0_20px_rgba(56,189,248,0.7)] rounded-full z-0"
        />

        <div ref={ref} className="relative z-10">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className={`relative mb-16 w-full md:w-1/2 px-4 ${
                  isLeft ? "ml-0 md:ml-0 md:pr-10 md:mr-auto" : "ml-auto md:pl-10 md:mr-0"
                }`}
              >
                {/* Dot with Icon */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  className="absolute top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-2 border-blue-500 z-10 flex items-center justify-center shadow-lg"
                >
                  {item.icon}
                </motion.span>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  className="mt-6 p-6 rounded-2xl bg-white/30 dark:bg-white/10 backdrop-blur-lg shadow-xl border border-white/20 hover:scale-[1.03] transform transition duration-300"
                >
                  <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-300 mb-1">
                    {item.year}
                  </h4>
                  <h5 className="text-xl font-bold mb-2">{item.event}</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}