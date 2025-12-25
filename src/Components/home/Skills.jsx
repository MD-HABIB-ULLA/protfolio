import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useState, useEffect, useRef } from "react";

export default function Skills() {
  const allTechImages = [
    "atom.png", // React
    "bootstrap.png", // Bootstrap
    "css-3.png", // CSS3
    "express.png", // Express
    "figma.png", // Figma
    "firebase.png", // Firebase
    "github-logo.png", // GitHub
    "html.png", // HTML
    "js.png", // JavaScript
    "jwt.png", // JWT
    "mongodb.png", // MongoDB
    "motion.png", // Framer Motion
    "netlify.png", // Netlify
    "next.png", // Next.js
    "node.png", // Node.js
    "postman.png", // Postman
    "redux.png", // Redux
    "tailwind.png", // Tailwind CSS
    "typescript.png", // TypeScript
    "vercel.png", // Vercel
  ];

  const [techImages, setTechImages] = useState([]);
  const [animationKey, setAnimationKey] = useState(0);
  const containerRef = useRef(null);

  // Function to get random 20 images
  const getRandomImages = () => {
    // If we have exactly 20 images, just shuffle them
    if (allTechImages.length === 20) {
      return [...allTechImages].sort(() => Math.random() - 0.5);
    }

    // If we have more than 20, get random 20
    if (allTechImages.length > 20) {
      const shuffled = [...allTechImages].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 20);
    }

    // If we have less than 20, repeat some to make 20
    const repeated = [];
    while (repeated.length < 20) {
      repeated.push(...allTechImages);
    }
    return repeated.slice(0, 20).sort(() => Math.random() - 0.5);
  };

  // Initialize with random images
  useEffect(() => {
    setTechImages(getRandomImages());
  }, []);

  // Change images every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1); // Trigger animation
      setTechImages(getRandomImages());
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  // Big image with animated image only
  const BigImage = ({ id }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }, [animationKey]);

    return (
      <div className="group relative bg-white md:rounded-2xl rounded-lg row-span-2 md:size-[13rem] size-[5.5rem] col-span-2 shadow-md border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <motion.img
          key={`big-img-${id}-${animationKey}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          src={`/images/tech/${techImages[id] || allTechImages[0]}`}
          alt={
            (techImages[id] || allTechImages[0])?.replace(".png", "") ||
            "Technology"
          }
          className="md:size-[10rem] size-[4rem] object-contain transition-transform duration-300 group-hover:scale-110 z-10"
        />
      </div>
    );
  };

  // Small image with animated image only
  const SmallImage = ({ id, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 100 + delay);
      return () => clearTimeout(timer);
    }, [animationKey, delay]);

    return (
      <div className="group relative bg-white md:rounded-2xl rounded-lg md:size-[6rem] size-[2.5rem] shadow-md border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <motion.img
          key={`small-img-${id}-${animationKey}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: delay / 1000, ease: "easeOut" }}
          src={`/images/tech/${techImages[id] || allTechImages[0]}`}
          alt={
            (techImages[id] || allTechImages[0])?.replace(".png", "") ||
            "Technology"
          }
          className="md:size-[4.5rem] size-[1.7rem] object-contain transition-transform duration-300 group-hover:scale-125 z-10"
        />
      </div>
    );
  };

  // Loading state
  if (techImages.length === 0) {
    return (
      <div className="pb-[40px] sm:pb-[40px] lg:pb-[40px]">
        <div className="flex items-center justify-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  // Single Marquee Item Component
  const MarqueeItem = () => (
    <div className="grid p-3 grid-cols-8 px-2 w-full md:gap-4 gap-2">
      {/* Column 1 */}
      <div className="col-span-2 md:gap-4 gap-2 grid grid-cols-2">
        <div className="flex flex-col md:gap-4 gap-2 col-span-2">
          <BigImage id={0} />
          <div className="grid grid-cols-2 md:gap-4 gap-2">
            <SmallImage id={1} delay={50} />
            <SmallImage id={2} delay={100} />
            <SmallImage id={3} delay={150} />
            <SmallImage id={4} delay={200} />
          </div>
        </div>
      </div>

      {/* Column 2 */}
      <div className="col-span-2 md:gap-4 gap-2 grid grid-cols-2">
        <div className="flex flex-col md:gap-4 gap-2 col-span-2">
          <div className="grid grid-cols-2 md:gap-4 gap-2">
            <SmallImage id={5} delay={250} />
            <SmallImage id={6} delay={300} />
            <SmallImage id={7} delay={350} />
            <SmallImage id={8} delay={400} />
          </div>
          <BigImage id={9} />
        </div>
      </div>

      {/* Column 3 */}
      <div className="col-span-2 md:gap-4 gap-2 grid grid-cols-2">
        <div className="flex flex-col md:gap-4 gap-2 col-span-2">
          <BigImage id={10} />
          <div className="grid grid-cols-2 md:gap-4 gap-2">
            <SmallImage id={11} delay={450} />
            <SmallImage id={12} delay={500} />
            <SmallImage id={13} delay={550} />
            <SmallImage id={14} delay={600} />
          </div>
        </div>
      </div>

      {/* Column 4 */}
      <div className="col-span-2 md:gap-4 gap-2 grid grid-cols-2">
        <div className="flex flex-col md:gap-4 gap-2 col-span-2">
          <div className="grid grid-cols-2 md:gap-4 gap-2">
            <SmallImage id={15} delay={650} />
            <SmallImage id={16} delay={700} />
            <SmallImage id={17} delay={750} />
            <SmallImage id={18} delay={800} />
          </div>
          <BigImage id={19} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="pb-[40px] sm:pb-[100px] lg:pb-[150px]" ref={containerRef}>
      <div data-aos="fade-up" className="">
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div
            style={{ borderColor: "#007AFF" }}
            className="px-5 py-2 bg-primary/10 rounded-full md:text-base text-sm text-primary border border-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p>Skills and Expertise</p>
          </motion.div>
        </motion.div>
      </div>

      <div data-aos="fade-up" className="pt-[30px] sm:pt-[40px] lg:pt-[50px]">
        <div className="py-2 relative">
          <div className="h-full absolute md:w-44 w-20 z-10 top-0 left-0 bg-gradient-to-l from-transparent to-white"></div>
          <div className="h-full absolute md:w-44 w-20 z-10 top-0 right-0 bg-gradient-to-r from-transparent to-white"></div>

          <Marquee gradient={false} speed={40} pauseOnHover>
            <MarqueeItem />
            <MarqueeItem />
          </Marquee>
        </div>
      </div>
    </div>
  );
}
