import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaAward,
  FaExternalLinkAlt,
  FaFilePdf,
  FaTimes,
} from "react-icons/fa";
import leetcode100Badge from "../assets/100days badge.png";
import leetcode50Badge from "../assets/50 days badge.png";
import researchCertificate from "../assets/conference.pdf";
import geminiCertificate from "../assets/Shaik_Dilshad_Gemini_Hack_day_Certificate.pdf";
import womenWhoMasterCertificate from "../assets/generated-certificate-wwm26-blr-g-t072-m03.pdf";
import womenWhoMasterCard from "../assets/generated-linkedin-card-wwm26-blr-g-t072-m03.png";

const achievements = [
  {
    id: "icisc",
    category: "Research",
    year: "2026",
    issuer: "10th International Conference on Inventive Systems and Control",
    title: "Research Paper Presentation",
    artworkTitle: "Certificate of Presentation",
    artworkSubtitle: "ICISC 2026 · Coimbatore, India",
    detail:
      "Presented research on cross-dataset domain shift and shortcut learning in lightweight CNNs for tomato disease classification at the 10th International Conference on Inventive Systems and Control.",
    highlights: [
      "Paper: Systematic Evaluation of Cross-Dataset Domain Shift and Shortcut Learning in Lightweight CNNs for Tomato Disease Classification",
      "Conference hosted by JCT College of Engineering and Technology",
      "Presented August 5–7, 2026",
    ],
    document: researchCertificate,
    background:
      "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, .92), transparent 47%), linear-gradient(145deg, #fff5e6, #f8e6c8)",
    ink: "#183a3b",
    accent: "#bd7b16",
    mark: "ICISC",
  },
  {
    id: "gemini",
    category: "Hackathons",
    year: "2026",
    issuer: "Google Gemini Hack Day",
    title: "Top 10 Finish · Nightlamp",
    artworkTitle: "Built with Gemini",
    artworkSubtitle: "AI Hack Day · April 26, 2026",
    detail:
      "Built Nightlamp, an AI-powered diagnostic engine, during Gemini Hack Day. The project placed in the top 10 among 27 participating teams.",
    highlights: [
      "Created an AI diagnostic product during the hackathon",
      "Nightlamp analyzes live URLs, GitHub repositories, and error logs",
      "Participation certificate issued May 14, 2026",
    ],
    document: geminiCertificate,
    background:
      "radial-gradient(circle at 100% 0%, rgba(251, 146, 60, .32), transparent 36%), linear-gradient(145deg, #161817, #29231e 72%, #3c281d)",
    ink: "#fff8ec",
    accent: "#fb9a43",
    mark: "G",
  },
  {
    id: "women-who-master",
    category: "Hackathons",
    year: "2026",
    issuer: "Logitech × Aspire For Her",
    title: "Women Who Master Hackathon",
    artworkTitle: "Zonal Round",
    artworkSubtitle: "Bengaluru · August 2026",
    detail:
      "Advanced to the zonal round of the Women Who Master Hackathon, a national generative AI initiative by Logitech and Aspire For Her.",
    highlights: [
      "Reached the Bengaluru zonal round after the qualifying stage",
      "Competed as part of a women-focused generative AI initiative",
      "Certificate of Excellence presented by the organizers",
    ],
    image: womenWhoMasterCard,
    document: womenWhoMasterCertificate,
    background:
      "radial-gradient(circle at 80% 0%, rgba(236, 72, 153, .25), transparent 38%), linear-gradient(145deg, #f8f4ed, #e9e2d3)",
    ink: "#152e48",
    accent: "#d61c73",
    mark: "WM",
  },
  {
    id: "hennge",
    category: "Coding",
    year: "2026",
    issuer: "HENNGE Backend Challenge",
    title: "Backend Engineering Challenge",
    artworkTitle: "Challenge Cleared",
    artworkSubtitle: "Python · Authentication · TOTP",
    detail:
      "Cleared a competitive global backend challenge under strict constraints, implementing core authentication flows from scratch in Python.",
    highlights: [
      "Implemented TOTP (RFC 6238) with HMAC-SHA512",
      "Built HTTP Basic Authentication from scratch",
      "Solved the challenge without loops or list comprehensions",
    ],
    background:
      "radial-gradient(circle at 100% 0%, rgba(45, 212, 191, .22), transparent 42%), linear-gradient(145deg, #101c20, #122c2c)",
    ink: "#effcf6",
    accent: "#42cbb0",
    mark: "HB",
  },
  {
    id: "leetcode-100",
    category: "Milestones",
    year: "2026",
    issuer: "LeetCode",
    title: "100-Day Badge",
    artworkTitle: "100 Days",
    artworkSubtitle: "Solving problems in 2026",
    detail:
      "Earned the 100-Day LeetCode badge by maintaining a consistent problem-solving practice throughout 2026.",
    highlights: [
      "100+ days of problem-solving activity",
      "Built a steady daily practice in data structures and algorithms",
      "Part of 200+ problems solved on LeetCode",
    ],
    image: leetcode100Badge,
    background:
      "radial-gradient(circle at 50% 48%, rgba(37, 99, 235, .6), transparent 31%), linear-gradient(145deg, #171719, #242322)",
    ink: "#ffdda0",
    accent: "#4c8dff",
    mark: "100",
  },
  {
    id: "leetcode-50",
    category: "Milestones",
    year: "2026",
    issuer: "LeetCode",
    title: "50-Day Badge",
    artworkTitle: "50 Days",
    artworkSubtitle: "Solving problems in 2026",
    detail:
      "Earned the 50-Day LeetCode badge, marking a consistent streak of practice before reaching the 100-day milestone.",
    highlights: [
      "50+ days of problem-solving activity",
      "Recognized consistency milestone on LeetCode",
      "Contributed to 200+ problems solved overall",
    ],
    image: leetcode50Badge,
    background:
      "radial-gradient(circle at 50% 48%, rgba(132, 204, 22, .55), transparent 31%), linear-gradient(145deg, #171719, #242322)",
    ink: "#ffdda0",
    accent: "#9ad847",
    mark: "50",
  },
  {
    id: "gsoc-plone",
    category: "Proposals",
    year: "2025",
    issuer: "Google Summer of Code · Plone Foundation",
    title: "GSoC Proposal Submitted",
    artworkTitle: "Proposal Submitted",
    artworkSubtitle: "Plone · Volto · GSoC 2025",
    detail:
      "Submitted a Google Summer of Code proposal to the Plone Foundation focused on UI/UX improvements for Volto.",
    highlights: [
      "Proposal submitted to the Plone Foundation",
      "Focused on improving Volto's UI/UX",
    ],
    background:
      "radial-gradient(circle at 100% 0%, rgba(56, 189, 248, .25), transparent 38%), linear-gradient(145deg, #111d2b, #19273b)",
    ink: "#eef7ff",
    accent: "#5ec8e8",
    mark: "GSoC",
  },
  {
    id: "full-stack-ai",
    category: "Engineering",
    year: "2025",
    issuer: "Full-Stack & AI Engineering",
    title: "Expanding into AI & Full-Stack Engineering",
    artworkTitle: "Building Across the Stack",
    artworkSubtitle: "React · Node.js · AI Automation",
    detail:
      "Expanded into full-stack development and AI automation, building applications and intelligent workflows across the stack.",
    highlights: [
      "Built applications with React, Node.js, Express, and MongoDB",
      "Developed AI-powered automation workflows and intelligent agents",
      "Submitted a GSoC proposal to the Plone Foundation for Volto UI/UX improvements",
    ],
    background:
      "radial-gradient(circle at 100% 0%, rgba(250, 204, 21, .22), transparent 38%), linear-gradient(145deg, #1d1c17, #303023)",
    ink: "#f7f4e8",
    accent: "#e7c65b",
    mark: "FS",
  },
  {
    id: "hackerrank",
    category: "Certifications",
    year: "Skills",
    issuer: "HackerRank",
    title: "Problem Solving, JavaScript & Python",
    artworkTitle: "Skills Certified",
    artworkSubtitle: "Problem Solving · JavaScript · Python",
    detail:
      "Earned HackerRank certifications in problem solving, JavaScript, and Python, validating core programming and analytical skills.",
    highlights: [
      "Problem Solving certification",
      "JavaScript certification",
      "Python certification",
    ],
    background:
      "radial-gradient(circle at 100% 0%, rgba(34, 197, 94, .22), transparent 38%), linear-gradient(145deg, #13231a, #1c3023)",
    ink: "#effcf1",
    accent: "#68d391",
    mark: "HR",
  },
  {
    id: "tomato-research",
    category: "Research",
    year: "2026",
    issuer: "Robust & Generalizable AI Research",
    title: "Shortcut Learning in Lightweight CNNs",
    artworkTitle: "Research in Focus",
    artworkSubtitle: "Computer Vision · PyTorch",
    detail:
      "Investigated whether tomato disease classifiers learn disease-relevant features or rely on dataset-specific background artifacts under cross-dataset domain shift.",
    highlights: [
      "Evaluated ShuffleNetV2, MobileNetV3-Small, and ResNet18",
      "Used Grad-CAM, masking interventions, and a Background Attention Ratio metric",
      "Studied shortcut learning across tomato disease datasets",
    ],
    background:
      "radial-gradient(circle at 100% 0%, rgba(74, 222, 128, .2), transparent 40%), linear-gradient(145deg, #14231c, #203328)",
    ink: "#eff9e9",
    accent: "#82c76a",
    mark: "AI",
  },
];

const categories = [
  "All",
  "Research",
  "Hackathons",
  "Coding",
  "Milestones",
  "Proposals",
  "Engineering",
  "Certifications",
];

export default function Achievements() {
  const [category, setCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const filteredAchievements = achievements.filter(
    (achievement) => category === "All" || achievement.category === category
  );
  const selected = filteredAchievements[activeIndex];
  const carouselOffsets =
    filteredAchievements.length === 1
      ? [0]
      : filteredAchievements.length === 2
        ? [0, 1]
        : [-1, 0, 1];

  const move = (direction) => {
    setActiveIndex(
      (current) =>
        (current + direction + filteredAchievements.length) %
        filteredAchievements.length
    );
  };

  const selectCategory = (nextCategory) => {
    setCategory(nextCategory);
    setActiveIndex(0);
  };

  return (
    <section
      id="achievements"
      className="relative scroll-mt-24 overflow-hidden px-4 pb-16 pt-20 text-white sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-40 -z-10 h-80 w-[min(80vw,56rem)] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
              <FaAward aria-hidden="true" /> Selected work & recognition
            </p>
            <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl">
              Achievements
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
              A collection of research, builds, and milestones from my journey
              in technology.
            </p>
          </div>

          <div className="flex max-w-full flex-wrap gap-2 md:justify-end">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => selectCategory(item)}
                aria-pressed={category === item}
                className={`shrink-0 border px-3 py-2 text-xs font-medium transition-colors sm:text-sm ${
                  category === item
                    ? "border-amber-300 bg-amber-300 text-neutral-950"
                    : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-center lg:gap-10">
          <div className="min-w-0">
            <div className="relative mx-auto h-[15rem] w-full max-w-5xl sm:h-[18rem]">
              <div className="absolute inset-0 [perspective:1200px]">
            {carouselOffsets.map((offset) => {
              const index =
                (activeIndex + offset + filteredAchievements.length) %
                filteredAchievements.length;
              const achievement = filteredAchievements[index];
              const isActive = offset === 0;

              return (
                <Motion.div
                  key={achievement.id}
                  initial={false}
                  animate={{
                    x: `${offset * 74}%`,
                    scale: isActive ? 1 : 0.8,
                    rotateY: offset * -18,
                    opacity: isActive ? 1 : 0.5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 82,
                    damping: 20,
                    mass: 1.1,
                    opacity: { duration: 0.3, ease: "easeOut" },
                  }}
                  style={{
                    zIndex: isActive ? 20 : 10,
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  className="absolute left-1/2 top-1/2 h-[14rem] w-[min(76vw,31rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-white/10 bg-neutral-950 shadow-[0_25px_90px_rgba(0,0,0,0.42)] sm:h-[17rem]"
                >
                  {achievement.image ? (
                    <img
                      src={achievement.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col justify-between bg-[radial-gradient(ellipse_at_75%_15%,rgba(245,158,11,0.18),transparent_48%),linear-gradient(145deg,#1b1b1a,#101112)] p-6 sm:p-8">
                      <div className="flex items-center justify-between gap-4 text-xs uppercase text-white/55">
                        <span>{achievement.issuer}</span>
                        {achievement.document && (
                          <FaFilePdf
                            className="shrink-0 text-2xl text-amber-300"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase text-amber-300">
                          {achievement.year} · {achievement.category}
                        </p>
                        <h3 className="max-w-md font-serif text-3xl leading-tight text-white sm:text-4xl">
                          {achievement.title}
                        </h3>
                        <p className="mt-4 text-sm text-white/50">
                          {achievement.document
                            ? "Original document available below"
                            : "Achievement details"}
                        </p>
                      </div>
                    </div>
                  )}
                  {achievement.image && (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-5 pb-5 pt-20 sm:px-7 sm:pb-7">
                      <p className="text-xs font-semibold uppercase text-white/70">
                        {achievement.year} · {achievement.category}
                      </p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        {achievement.title}
                      </p>
                    </div>
                  )}
                  <button
                    type="button"
                    aria-label={`Show details for ${achievement.title}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => {
                      setActiveIndex(index);
                      setDetailsOpen(true);
                    }}
                    className="absolute inset-0 z-10 cursor-pointer"
                  />
                </Motion.div>
              );
            })}
              </div>
            </div>

            <div className="mx-auto mt-1 flex max-w-5xl items-center justify-between">
              <button
                type="button"
                onClick={() => move(-1)}
                title="Previous achievement"
                aria-label="Previous achievement"
                className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition hover:border-amber-300 hover:text-amber-200"
              >
                <FaArrowLeft aria-hidden="true" />
              </button>
              <p className="text-xs tabular-nums text-white/55 sm:text-sm">
                <span className="text-white">{activeIndex + 1}</span>
                <span className="px-2">/</span>
                {filteredAchievements.length}
              </p>
              <button
                type="button"
                onClick={() => move(1)}
                title="Next achievement"
                aria-label="Next achievement"
                className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition hover:border-amber-300 hover:text-amber-200"
              >
                <FaArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>

        <AnimatePresence mode="wait">
          <Motion.article
            key={selected.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="hidden content-center gap-4 border-t border-white/15 pt-4 lg:grid lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"
          >
            <div>
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
              >
                {selected.category} · {selected.year}
              </p>
              <h3 className="font-serif text-xl font-semibold leading-tight sm:text-2xl">
                {selected.title}
              </h3>
              <p className="mt-2 text-sm text-white/50">{selected.issuer}</p>
            </div>
            <div>
              <p className="text-sm leading-6 text-white/75">
                {selected.detail}
              </p>
              <ul className="mt-3 space-y-2">
                {selected.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-xs leading-5 text-white/65 sm:text-sm"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            {(selected.document || selected.image) && (
              <a
                href={selected.document || selected.image}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-amber-200 transition hover:text-amber-100"
              >
                Open original {selected.document ? "certificate" : "image"}
                <FaExternalLinkAlt aria-hidden="true" />
              </a>
            )}
          </Motion.article>
        </AnimatePresence>
        <AnimatePresence>
          {detailsOpen && (
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm lg:hidden"
              onClick={(event) => {
                if (event.target === event.currentTarget) setDetailsOpen(false);
              }}
            >
              <Motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="achievement-dialog-title"
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="max-h-[88dvh] w-full max-w-lg overflow-y-auto border border-white/15 bg-[#151514] p-5 shadow-2xl sm:p-7"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
                      {selected.category} · {selected.year}
                    </p>
                    <h3
                      id="achievement-dialog-title"
                      className="font-serif text-2xl font-semibold leading-tight text-white"
                    >
                      {selected.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/50">
                      {selected.issuer}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDetailsOpen(false)}
                    aria-label="Close achievement details"
                    className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-white/70 transition hover:border-white/50 hover:text-white"
                  >
                    <FaTimes aria-hidden="true" />
                  </button>
                </div>
                <p className="text-sm leading-6 text-white/80">
                  {selected.detail}
                </p>
                <ul className="mt-4 space-y-3">
                  {selected.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-6 text-white/65"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                {(selected.document || selected.image) && (
                  <a
                    href={selected.document || selected.image}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-amber-200 transition hover:text-amber-100"
                  >
                    Open original {selected.document ? "certificate" : "image"}
                    <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                )}
              </Motion.section>
            </Motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </section>
  );
}