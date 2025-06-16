import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUserAlt,
  FaTools,
  FaProjectDiagram,
  FaClock,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "backdrop-blur-xl bg-white/30 dark:bg-black/20 shadow-md border-b border-white/20 dark:border-white/10"
          : "bg-transparent"
      }`}
    >
      <div
        className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 md:py-5 rounded-xl
        backdrop-blur-lg bg-white/20 dark:bg-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/30 dark:border-white/10
        mt-3 mx-3 md:mx-auto transition-all duration-300"
      >
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-[15px] font-medium tracking-wide">
          {navItems.map((item, i) => (
            <motion.li
              key={item.id}
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
                className="flex items-center gap-1 capitalize text-black dark:text-white"
              >
                <span className="text-[18px]">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-sky-500 group-hover:w-full transition-all duration-300" />
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-3xl text-black dark:text-white">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 180, damping: 15 }}
            className="fixed top-0 right-0 h-screen w-72 sm:w-80 bg-white/60 dark:bg-zinc-900/90 backdrop-blur-md shadow-xl z-50 border-l border-white/30 dark:border-white/10"
          >
            <ul className="flex flex-col mt-24 px-8 space-y-6 text-lg font-medium text-black dark:text-white">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 hover:text-sky-500 transition-all"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
