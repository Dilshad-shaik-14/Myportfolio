import { motion } from "framer-motion";
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaDatabase, FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiExpress, SiRedux, SiJavascript,
  SiAppwrite, SiNumpy, SiPandas, SiFramer, SiVercel, SiPostman, SiC, SiCplusplus,
} from "react-icons/si";

const skills = [
  { icon: <FaReact size={22} />, label: "React", color: "from-cyan-500 to-blue-600" },
  { icon: <SiTailwindcss size={22} />, label: "Tailwind CSS", color: "from-sky-500 to-teal-500" },
  { icon: <FaHtml5 size={22} />, label: "HTML5", color: "from-orange-400 to-red-500" },
  { icon: <FaCss3Alt size={22} />, label: "CSS3", color: "from-blue-500 to-indigo-600" },
  { icon: <SiFramer size={22} />, label: "Framer Motion", color: "from-indigo-500 to-purple-500" },
  { icon: <SiJavascript size={22} />, label: "JavaScript", color: "from-yellow-400 to-yellow-600" },
  { icon: <FaNodeJs size={22} />, label: "Node.js", color: "from-green-500 to-emerald-600" },
  { icon: <SiExpress size={22} />, label: "Express.js", color: "from-gray-700 to-gray-900" },
  { icon: <SiMongodb size={22} />, label: "MongoDB", color: "from-green-600 to-lime-500" },
  { icon: <SiAppwrite size={22} />, label: "Appwrite", color: "from-pink-500 to-rose-500" },
  { icon: <SiNumpy size={22} />, label: "NumPy", color: "from-blue-400 to-blue-700" },
  { icon: <SiPandas size={22} />, label: "Pandas", color: "from-gray-800 to-gray-600" },
  { icon: <FaGitAlt size={22} />, label: "Git", color: "from-orange-500 to-amber-600" },
  { icon: <SiPostman size={22} />, label: "Postman", color: "from-orange-500 to-yellow-500" },
  { icon: <SiVercel size={22} />, label: "Vercel", color: "from-black to-gray-800" },
  { icon: <FaPython size={22} />, label: "Python", color: "from-blue-500 to-yellow-400" },
  { icon: <FaJava size={22} />, label: "Java", color: "from-red-600 to-orange-500" },
  { icon: <FaDatabase size={22} />, label: "SQL", color: "from-blue-600 to-blue-800" },
  { icon: <SiRedux size={22} />, label: "Redux Toolkit", color: "from-purple-600 to-violet-500" },
  { icon: <SiC size={22} />, label: "C", color: "from-sky-600 to-blue-700" },
  { icon: <SiCplusplus size={22} />, label: "C++", color: "from-indigo-600 to-purple-700" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen pt-24 pb-20 px-4 sm:px-6 md:px-16 bg-gradient-to-br from-white to-gray-200 dark:from-black dark:to-neutral-900 text-black dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
          🚀 My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {skills.map(({ icon, label, color }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.07, rotate: 0.5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 rounded-3xl shadow-xl text-white font-medium text-sm sm:text-base backdrop-blur-xl bg-gradient-to-r ${color} transition-all duration-300`}
            >
              <div className="text-white">{icon}</div>
              <span className="whitespace-nowrap">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
