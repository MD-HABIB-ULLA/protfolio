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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const stepVariants1 = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const stepVariants2 = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" pb-[30px] sm:pb-[40px] lg:pb-[50px]">
          {" "}
          <div data-aos="fade-up" className="flex items-center justify-center">
            <div
              style={{ borderColor: "#007AFF" }}
              className="px-5 py-2 bg-primary/10 rounded-full md:text-base text-sm text-primary border border-primary"
            >
              <p>My Work Exprience </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute w-[6px] rounded-full bg-primary h-full left-4 transform md:left-1/2 md:-translate-x-1/2"></div>

            {/* Steps */}
            {workExperience.map((experience, index) => (
              <div
                key={experience.number}
                className={`relative z-10 mb-12 flex items-center justify-center md:justify-normal  ${
                  index % 2 === 0
                    ? "flex-col md:flex-row items-center"
                    : "flex-col md:flex-row-reverse  items-center"
                }`}
              >
                {/* Step number (centered on the line) */}
                <div className="absolute left-4 transform -translate-x-1/2 md:left-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-primary bg-white text-primary font-bold text-xl z-10">
                  {experience.number}
                </div>

                {/* Content */}
                <motion.div
                  variants={index % 2 === 0 ? stepVariants1 : stepVariants2}
                  initial="hidden"
                  animate={controls}
                  className={`bg-white border p-6 rounded-lg shadow-lg w-[80%] md:w-[47%] ${
                    index % 2 === 0
                      ? "   ml-13 md:ml-0 md:mr-auto md:pr-5"
                      : "ml-13 md:ml-auto md:pl-8"
                  }`}
                >
                  <div key={index} className="">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="relative h-12  w-24 overflow-hidden ">
                          <img
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            className="object-cover"
                            onError={(e) => {
                              e.currentTarget.src =
                                "https://sjc.microlink.io/YP_TStyIBaPPPTczxp4fSci6CCYt7Ekv_A5oUg6KyVkzQJwaBbW3C4RlSG_HSov5LQCQmU4K_Bm372dRtWsCHQ.jpeg";
                            }}
                          />
                        </div>
                        <a
                          href={experience.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1"
                        >
                          Visit website
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-[24px] font-bold">
                          {experience.role}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {experience.company}
                        </p>
                        <p className="text-sm text-gray-500">
                          {experience.duration}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <ul className=" pl-4 space-y-2">
                        {experience.responsibilities.map(
                          (responsibility, idx) => (
                            <li
                              key={idx}
                              className={`flex font-semibold text-[17px] 
                                   text-[#475467] 
                              items-start gap-2`}
                            >
                              <span className="text-white text-sm p-1 mt-[2px]  rounded-md bg-primary box-content">
                                <FaCheck size={14} />
                              </span>{" "}
                              <div className="">{responsibility}</div>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenteredStepNumbers;
