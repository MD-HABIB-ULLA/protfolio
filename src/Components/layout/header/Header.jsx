import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Header = ({ scrollToSection, refs }) => {
  const list = [
    { text: "Home", ref: "homeRef" },
    { text: "About", ref: "aboutRef" },
    { text: "Experience", ref: "epRef" },
    { text: "Projects", ref: "projectsRef" },
    { text: "Contact", ref: "contactRef" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Assuming one section is roughly the viewport height
      const scrollThreshold = window.innerHeight;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(isScrolled);
  return (
    <div className="relative">
      {/* Main Header */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="h-[64px] mt-[10px] container px-[20px] m-auto"
        >
          <div className="flex justify-between items-center h-full w-full">
            {/* Logo Section */}
            <div className="flex items-center h-full w-full">
              <div className="flex items-center gap-[3px]">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-[40px] h-[40px] flex-shrink-0 flex items-center"
                >
                  <img
                    className="w-full h-full object-contain"
                    src="/logo.png"
                    alt="Logo"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="md:block hidden duration-300 transition-all"
                >
                  <span className="text-2xl font-extrabold text-black text-nowrap">
                    Habib Ulla.
                  </span>
                </motion.div>
              </div>
              <div className="flex-1 flex justify-end w-full">
                <div className="md:block hidden">
                  <div className="flex gap-[16px]">
                    {list.map((item, i) => (
                      <motion.span
                        onClick={() => scrollToSection(refs[item.ref])}
                        key={i}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i }}
                        whileHover={{ scale: 1.1 }}
                        className="text-lg font-bold cursor-pointer"
                      >
                        {item.text}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="block md:hidden">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-white text-base shadow-md shadow-primary/50 font-bold px-5 py-2 rounded-full cursor-pointer transition-all duration-300 border ease-in-out"
                  >
                    Contact
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Header (Fixed) */}
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : -100 }}
        transition={{ duration: 0.5 }}
        className="fixed top-[24px] left-0 right-0 z-50"
      >
        <div className="container mx-auto px-[20px]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="h-[64px] bg-white/30 backdrop-blur-md shadow-lg rounded-full container overflow-hidden px-[20px] m-auto border"
          >
            <div className="flex justify-between items-center h-full w-full">
              {/* Logo Section */}
              <div className="flex items-center h-full w-full">
                <div className="flex items-center gap-[3px]">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-[40px] h-[40px] flex-shrink-0 flex items-center"
                  >
                    <img
                      className="w-full h-full object-contain"
                      src="/logo.png"
                      alt="Logo"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="md:block hidden"
                  >
                    <span className="text-2xl font-extrabold text-black text-nowrap">
                      Habib Ulla.
                    </span>
                  </motion.div>
                </div>
              </div>
              <div className="flex-1 flex justify-end w-full">
                <div className="md:block hidden">
                  <div className="flex gap-[16px]">
                    {list.map((item, i) => (
                      <motion.span
                        onClick={() => scrollToSection(refs[item.ref])}
                        key={i}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i + 0.3 }}
                        whileHover={{ scale: 1.1 }}
                        className="text-lg font-bold cursor-pointer"
                      >
                        {item.text}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="block md:hidden">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-white text-base shadow-md shadow-primary/50 font-bold px-5 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 border ease-in-out"
                  >
                    Contact
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.header>
    </div>
  );
};

export default Header;
