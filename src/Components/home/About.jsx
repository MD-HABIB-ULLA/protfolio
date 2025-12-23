import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
];

const About = () => {
  const [text, setText] = useState("");
  const fullText = "Front-End Developer";

  // Ref for tracking visibility
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Typing effect
  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);
    return () => clearInterval(typingEffect);
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      <div className="flex lg:flex-row flex-col">
        {/* Left Side Content */}
        <motion.div className="flex-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <div className="">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 animate-pulse">
              Habib Ulla
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 font-light">
              {text}
              <span className="animate-blink">|</span>
            </h2>
            <motion.div className="mb-8">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="inline-block bg-primary/10 text-primary !border-primary border rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
            <p className="text-lg leading-relaxed mb-6 font-bold tracking-wide">
              I&apos;m a passionate Front-End Developer specializing in building modern, responsive, and user-friendly web applications. My expertise lies in crafting seamless digital experiences that blend performance with aesthetics.
            </p>
            <p className="text-lg leading-relaxed  font-bold tracking-wide">
              Beyond front-end development, I have a solid understanding of back-end technologies, enabling me to work on full-stack projects efficiently. My approach focuses on clean code, performance optimization, and intuitive UI/UX design.
            </p>
          </div>
        </motion.div>

        {/* Right Side Image & Video */}
        <motion.div className="flex items-center justify-center" initial={{ opacity: 0 }}  animate={{ opacity: 1 }}>
          <div className="aspect-square relative">
            <motion.img
              src="/images/profile.png"
              className="object-contain h-full w-full"
              alt="Profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
            <motion.div
              className="h-[28%] border w-[42%] rounded-xl overflow-hidden absolute top-0 right-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <video src={"/images/project4.mp4"} className="h-full w-full object-cover" autoPlay loop muted playsInline />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
