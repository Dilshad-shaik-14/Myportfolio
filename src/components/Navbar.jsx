import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaHome, FaUserAlt, FaTools, FaProjectDiagram, FaClock, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "Home", icon: <FaHome />, label: "Home" },
    { id: "about", icon: <FaUserAlt />, label: "About" },
    { id: "skills", icon: <FaTools />, label: "Skills" },
    { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
    { id: "timeline", icon: <FaClock />, label: "Timeline" },
    { id: "github", icon: <FaGithub />, label: "GitHub" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "backdrop-blur-2xl bg-white/30 dark:bg-black/20 shadow-xl scale-[1.01]"
          : "bg-transparent"
      }`}
    >
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="max-w-6xl mx-auto px-6 py-4 mt-5 flex justify-center items-center rounded-3xl
        bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10
        shadow-[0_8px_32px_rgba(31,38,135,0.25)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)]"
      >
        <ul className="flex space-x-6 md:space-x-10 text-[17px] font-semibold tracking-wide">
          {navItems.map((item, i) => (
            <motion.li
              key={item.id}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navVariants}
              whileHover={{
                scale: 1.1,
                color: "#0ea5e9",
                textShadow: "0 0 15px #0ea5e9aa",
              }}
              className="cursor-pointer relative group"
            >
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="active-link"
                className="flex flex-col md:flex-row items-center gap-1 capitalize text-black dark:text-white transition-colors"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="hidden md:inline">{item.label}</span>
              </Link>

              {/* Underline animation */}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-sky-500 group-hover:w-full transition-all duration-300" />
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
