"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa";

const workExperience = [
  {
    number: "1",
    company: "Digital Advo",
    logo: "/images/digitalAdvo.png",
    website: "https://digitaladvo.com/",
    role: "Full Stack Developer",
    duration: "Sep 2024 - Nov 2024",
    responsibilities: [
      "Developed responsive web interfaces using React and Tailwind CSS.",
      "Led a team of 4 developers to deliver high-quality web applications.",
      "Collaborated with the backend team to integrate APIs.",
      "Optimized application performance and ensured cross-browser compatibility.",
    ],
  },
  {
    number: "2",
    company: "Texon Ltd",
    logo: "/images/texon.png",
    website: "https://texonltd.com/",
    role: "Front-End Developer",
    duration: "Nov 2024 - Present",
    responsibilities: [
      "Assisted in creating UI components using HTML, CSS, and JavaScript.",
      "Worked closely with designers to implement pixel-perfect designs.",
      "Participated in cross-functional collaboration to meet project deadlines.",
      "Contributed to team discussions and problem-solving during sprints.",
    ],
  },
];

const CenteredStepNumbers = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, [controls]);

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const numberVariants = {
    hidden: { scale: 0, x: "-50%" },
    visible: {
      scale: 1,
      x: "-50%",
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  return (
    <section className="py-16 md:py-24 " ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-1.5 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20 mb-4"
          >
            My Work Experience
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-primary via-primary to-transparent"
            />
          </div>

          {/* Mobile Vertical Line */}
          <div className="md:hidden absolute left-5 w-0.5 h-full bg-gradient-to-b from-primary via-primary to-transparent"></div>

          {workExperience.map((experience, index) => (
            <div
              key={experience.number}
              className="relative mb-12 md:mb-20 last:mb-0"
            >
              {/* Timeline Number / Dot */}
              <motion.div
                variants={numberVariants}
                initial="hidden"
                animate={controls}
                className="absolute left-5 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full  bg-primary text-white shadow-xl z-30"
              >
                <span className="font-bold text-lg md:text-xl">
                  {experience.number}
                </span>
              </motion.div>

              {/* Grid Layout for Wide View */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {/* Content Side */}
                <motion.div
                  variants={stepVariants}
                  initial="hidden"
                  animate={controls}
                  className={`relative ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:col-start-2"
                  }`}
                >
                  {/* The Card Container */}
                  <div className="group relative bg-white/70 backdrop-blur-xl rounded-[2rem] p-1 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-primary/20 transition-all duration-500">
                    {/* Subtle Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-[2rem] border border-white/40 pointer-events-none" />
                    <div className="absolute inset-0 rounded-[2rem] border border-transparent group-hover:border-primary/20 transition-colors duration-500 pointer-events-none" />

                    <div className="relative p-6 md:p-8">
                      {/* Header: Company Logo & Meta Info */}
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                        <div className="relative group/logo">
                          <div className="absolute -inset-2 bg-primary/10 rounded-xl blur-lg opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                          <div className="relative h-12 w-28 bg-white/50 backdrop-blur-sm rounded-xl p-2 flex items-center justify-center border border-white shadow-sm">
                            <img
                              src={experience.logo}
                              alt={experience.company}
                              className="max-h-full max-w-full object-contain filter grayscale group-hover/logo:grayscale-0 transition-all duration-300"
                              onError={(e) => {
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${experience.company}&background=random`;
                              }}
                            />
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-[11px] font-bold tracking-widest uppercase text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
                            {experience.duration}
                          </span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <div className="space-y-1 mb-6">
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                          {experience.role}
                        </h3>
                        <p className="text-lg font-medium text-slate-500 flex items-center gap-2">
                          @{" "}
                          <span className="text-slate-800">
                            {experience.company}
                          </span>
                        </p>
                      </div>

                      {/* Responsibilities with Modern Bullet Points */}
                      <div className="space-y-4 mb-8">
                        {experience.responsibilities.map((res, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-4 group/item"
                          >
                            <div className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary group-hover/item:scale-150 transition-all duration-300" />
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                              {res}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Footer Link - Call to Action Style */}
                      <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                        <a
                          href={experience.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-primary transition-all group/link"
                        >
                          View Live Project
                          <svg
                            className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>

                        {/* Modern "Done" Indicator */}
                        <div className="flex -space-x-2">
                          <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center">
                            <FaCheck className="text-[10px] text-slate-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Empty Side for Desktop (Handled by Grid) */}
                <div className="hidden md:block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CenteredStepNumbers;
