import { Outlet, NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  const navItems = [
    { path: "", label: "Home" },
    { path: "about", label: "About" },
    { path: "skills", label: "Skills" },
    { path: "projects", label: "Projects" },
    { path: "github", label: "Github" },
    { path: "contact", label: "Contact" },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">

        {/* Toggle Theme Button */}
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/30 dark:bg-gray-700 backdrop-blur-lg shadow"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Navigation */}
        <nav className="flex justify-center gap-6 p-4 font-medium bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-b-xl shadow sticky top-0 z-40">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={`/${path}`}
              className={({ isActive }) =>
                "px-2 py-1 rounded transition-colors " +
                (isActive
                  ? "text-blue-600 dark:text-blue-400 underline"
                  : "hover:text-blue-500 dark:hover:text-blue-300")
              }
              end={path === ""}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Page Content */}
        <Outlet />

        {/* Footer */}
        <footer className="text-center py-6 text-sm bg-white/20 dark:bg-white/10 backdrop-blur-md mt-10 shadow-inner">
          © 2025 Shaik Dilshad | All Rights Reserved
        </footer>
      </div>
    </div>
  );
}
