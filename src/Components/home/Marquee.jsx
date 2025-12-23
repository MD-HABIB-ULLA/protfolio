import Marquee from "react-fast-marquee";
import { PiStarFourFill } from "react-icons/pi";
import { motion } from "framer-motion";

const WebDeveloperMarquee = () => {
  return (
    <div className="pb-[80px] sm:pb-[100px] lg:pb-[150px]">
      {" "}
      <div      data-aos="fade-up" className="">
        {" "}
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
            <p>Passions & Proficiencies</p>
          </motion.div>
        </motion.div>
      </div>
      <div      data-aos="fade-up" className="pt-[30px] sm:pt-[40px] lg:pt-[50px]">
        <div className="bg-slate-500/10  py-2          ">
          <Marquee gradient={false} speed={90}>
            <span className="font-extrabold  lg:text-6xl md:text-3xl  text-xl leading-tight ">
              Web Developer
            </span>
            <PiStarFourFill className="font-extrabold  lg:text-6xl md:text-3xl  text-xl leading-tight px-5 box-content" />

            <span className="font-extrabold  lg:text-6xl md:text-3xl  text-xl leading-tight ">
              JavaScript Enthusiast
            </span>
            <PiStarFourFill className="font-extrabold  lg:text-6xl md:text-3xl  text-xl leading-tight px-5 box-content" />
            <span className="font-extrabold  lg:text-6xl md:text-3xl  text-xl leading-tight ">
              React Specialist
            </span>
            <PiStarFourFill className="font-extrabold  lg:text-6xl md:text-3xl  text-xl leading-tight px-5 box-content" />
            <span className="font-extrabold  lg:text-6xl md:text-3xl  text-xl leading-tight ">
              Node.js Expert
            </span>
            <PiStarFourFill className="font-extrabold  lg:text-6xl md:text-3xl  text-xl leading-tight px-5 box-content " />
            <span className="font-extrabold  lg:text-6xl md:text-3xl  text-xl leading-tight ">
              UI/UX Designer
            </span>
            <PiStarFourFill className="font-extrabold  lg:text-6xl md:text-3xl  text-xl leading-tight px-5 box-content " />
            <span className="font-extrabold  lg:text-6xl md:text-3xl  text-xl leading-tight">
              Building Modern Web Applications
            </span>
            <PiStarFourFill className="font-extrabold  lg:text-6xl md:text-3xl  text-xl leading-tight px-5 box-content " />
            <span className="font-extrabold  lg:text-6xl md:text-3xl  text-xl leading-tight">
              Transforming Ideas into Reality
            </span>
            <PiStarFourFill className="font-extrabold  lg:text-6xl md:text-3xl  text-xl leading-tight px-5 box-content " />
            <span className="font-extrabold  lg:text-6xl md:text-3xl  text-xl leading-tight">
              Continuous Learner
            </span>
            <PiStarFourFill className="font-extrabold  lg:text-6xl md:text-3xl  text-xl leading-tight px-5 box-content " />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default WebDeveloperMarquee;
