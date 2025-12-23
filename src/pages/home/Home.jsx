import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

import { MdContactPhone } from "react-icons/md";
const Home = () => {
  const handleContactMe = () => {
    window.location.href = "mailto:habibulla1278@gmail.com"; // Replace with your email
  };

  const handleDownloadCV = () => {
    const cvUrl = "/images/Habib_Ulla_CV.pdf"; // Replace with the actual CV file path
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Habib_Ulla_CV.pdf"; // Change to your desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="home"
      className="px-5 container m-auto flex items-center justify-center"
    >
      <div className="h-full w-full py-[80px] sm:py-[100px] lg:py-[150px] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              style={{ borderColor: "#007AFF" }}
              className="px-5 py-2 bg-primary/10 md:text-base text-sm rounded-full text-primary border border-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <p>Your personal design partner</p>
            </motion.div>
          </motion.div>
          <div>
            <motion.h1
              className="font-bold capitalize max-w-[90%] sm:max-w-[80%] text-center m-auto pt-[30px] sm:pt-[40px] lg:pt-[50px] pb-[20px] sm:pb-[30px] lg:pb-[30px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Turning Ideas into Engaging Web Designs
            </motion.h1>
            <motion.p
              className="max-w-[90%] sm:max-w-[70%] text-gray-500 m-auto text-center text-lg sm:text-xl font-semibold pt-[10px] sm:pt-[20px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Effortless Communication, Measurable Impact — Were a Web
              Development Partner Delivering Serious Value with a Creative Touch
            </motion.p>
          </div>
          <motion.div
            className="py-[30px] sm:py-[40px] lg:py-[50px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="flex justify-center items-center gap-[20px] flex-wrap">
              <motion.button
                onClick={handleContactMe}
                className="px-5 flex gap-2 items-center  py-2 text-white bg-primary hover:bg-blue-600 shadow-primary/50 text-base shadow-md border border-primary rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.3 }}
              >
                <MdContactPhone /> Contact Me
              </motion.button>
              <motion.button
                onClick={handleDownloadCV}
                className="px-5 flex gap-2 items-center py-2 text-gray-500 border border-gray-500 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.3 }}
              >
                <FaDownload /> Download CV
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
