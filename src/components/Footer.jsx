import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 px-6">
      <div className="max-w-5xl mx-auto rounded-3xl border border-white/20 shadow-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md text-gray-800 dark:text-gray-300 py-12 px-8 text-center">
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Have a project or collaboration in mind?
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400 text-sm md:text-base">
          I'm always open to discussing tech, design, or new ideas. Reach out and let's make something awesome together!
        </p>

        {/* Use Link instead of anchor for React Router */}
        <a
          href="#Contact"
          className="inline-block px-6 py-3 text-white font-semibold rounded-full bg-blue-600 hover:bg-blue-700 transition-all shadow-md"
        >
          Contact Me
        </a>

        <div className="border-t border-white/20 mt-10 pt-6 text-xs text-gray-600 dark:text-gray-500">
          © 2025 <span className="font-semibold">Shaik Dilshad</span> | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
