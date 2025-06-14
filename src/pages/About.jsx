import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="pt-24 min-h-screen flex items-center justify-center px-6 md:px-16 py-12 
      bg-gradient-to-br from-white to-gray-200 dark:from-black dark:to-neutral-900 
      text-black dark:text-white transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/20 dark:border-white/10 rounded-3xl p-10 shadow-2xl transition-all duration-500 max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl leading-relaxed tracking-wide text-center">
            I’m a <span className="font-semibold text-sky-600 dark:text-sky-400">MERN Stack Developer</span> passionate about
            crafting immersive and performant full-stack applications. I love transforming ideas into scalable, user-focused
            digital products — from elegant UIs to powerful backend systems. A constant learner and an
            <span className="font-semibold text-sky-600 dark:text-sky-400"> open-source contributor</span>, I’m always exploring new tech
            to push boundaries and innovate.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Frontend Development",
                desc: "React.js, Tailwind CSS, Framer Motion, modern UI/UX",
              },
              {
                title: "Backend & APIs",
                desc: "Node.js, Express, MongoDB, JWT Auth, REST APIs",
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white/50 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all"
              >
                <h3 className="text-xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-800 dark:text-gray-300">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
