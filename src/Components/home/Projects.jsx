import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Workout Planner",
      description:
        "A fitness app for users to plan workouts, track progress, and achieve fitness goals with personalized routines and analytics.",
      image: "https://i.ibb.co.com/SxntY6S/workout.png",
      github: "https://github.com/MD-HABIB-ULLA/Workout-client",
      liveDemo: "https://workout-03.web.app/",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Firebase",
        "MongoDB",
        "More..",
      ],
    },
    {
      id: 2,
      title: "Fervent",
      description:
        "Fervent Multiboard Industries Ltd. is a leading manufacturer of MDF, HDF flooring, and particle boards in Bangladesh. ",
      image: "https://i.ibb.co.com/bjF44BvW/screencapture-ferventbd-2025-12-25-11-24-13.png",
      liveDemo: "https://www.ferventbd.com/",
      technologies: ["Next.js", "Tailwind CSS", "animaiton.js", "More.."],
    },
    {
      id: 3,
      title: "D-Code",
      description:
        "Everything you need, just a click away. Explore categories like Summer Collection, Urban Wear, and more.",
      image: "https://i.ibb.co.com/kvrb1gd/screencapture-d-code-six-vercel-app-2025-12-25-11-30-06.png",
      liveDemo: "https://d-code-six.vercel.app/",
      technologies: ["Next.js", "Tailwind CSS", "More.."],
    },
    {
      id: 4,
      title: "Libra Luxuries",
      description:
        "Experience the simplicity of sustainable sourcing for a better tomorrow. Libra Luxuries handles everything from design and manufacturing to quality inspection and delivery for your brand",
      image: "https://i.ibb.co.com/7N69zr4W/screencapture-united-fortune-frontend-vercel-app-2025-12-25-11-35-20.png",
      liveDemo: "https://united-fortune-frontend.vercel.app/",
      technologies: ["Next.js", "Tailwind CSS", "More.."],
    },
    {
      id: 5,
      title: "BistroBoss",
      description:
        "An enterprise-grade distribution management system designed to streamline inventory, sales, and logistics for businesses of all sizes.",
      image: "https://i.ibb.co.com/fqY1fdP/distroboss.png",
      github: "https://github.com/MD-HABIB-ULLA/bistro-boss-restaurant",
      liveDemo: "https://bistroboss-70669.web.app/",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Firebase",
        "MongoDB",
        "More..",
      ],
    },
    {
      id: 6,
      title: "NaturalCraft",
      description:
        "A stunning portfolio website for an artisan showcasing handmade crafts, with an integrated store for custom orders.",
      image: "https://i.ibb.co.com/8XQ121C/naturalcraft.png",
      github: "https://github.com/MD-HABIB-ULLA/Natural-craft",
      liveDemo: "https://naturalcraft-7d1c8.web.app/",
      technologies: [
        "React.js",
        "Swiper.js",
        "Tailwind CSS",
        "MongoDB",
        "More..",
      ],
    },
    {
      id: 6,
      title: "BookZone",
      description:
        "A comprehensive online bookstore featuring user-friendly search, personalized recommendations, and an integrated payment system.",
      image: "https://i.ibb.co.com/6F77cKf/bookzone.png",
      github: "https://github.com/MD-HABIB-ULLA/book-zone-client",
      liveDemo: "https://bookzone-7c036.firebaseapp.com/",
      technologies: ["React", "Redux", "Material-UI", "Node.js", "More.."],
    },
    {
      id: 6,
      title: "EliteState",
      description:
        "A responsive real estate platform showcasing property listings, advanced filtering options, and virtual tours for buyers and sellers.",
      image: "https://i.ibb.co.com/D9GFWV2/elitestate.png",
      github: "https://github.com/MD-HABIB-ULLA/Elaite-state",
      liveDemo: "https://elite-estate-d93f4.web.app/",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "CSS3",
        "More..",
      ],
    },
  ];

  return (
    <div className="container px-[20px] mx-auto overflow-hidden pb-[80px] sm:pb-[100px] lg:pb-[150px]">
      <div className=" pb-[30px] sm:pb-[40px] lg:pb-[50px]">
        {" "}
        <div data-aos="fade-up" className="flex items-center justify-center">
          <div
            style={{ borderColor: "#007AFF" }}
            className="px-5 py-2 bg-primary/10 rounded-full md:text-base text-sm text-primary border border-primary"
          >
            <p>My Personal Project Semple</p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {projectData.map((project) => (
          <div
            data-aos="fade-up"
            key={project.id}
            className="group rounded-[30px] p-3 transition-all shadow-lg hover:shadow-xl duration-300 bg-white border w-full overflow-hidden"
          >
            <div className="cursor-pointer border relative h-[200px] md:h-[200px] lg:h-[300px] xl:h-[350px] overflow-hidden rounded-[20px]">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="absolute top-0 w-full  h-auto transition-transform duration-500 ease-in-out group-hover:translate-y-[-80%]"
              />
              <a
                href={project.liveDemo}
                className="absolute top-4 right-4 backdrop-blur-lg bg-primary/30 text-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1"
              >
                <button className="text-xs">Preview</button>
                <IoIosArrowForward size={18} />
              </a>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl cursor-pointer hover:text-primary duration-500 font-bold mb-2 text-gray-800">
                  {project.title}
                </h2>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub size={18} className="cursor-pointer" />
                    </a>
                  )}
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt
                        size={18}
                        className="cursor-pointer"
                        color="#007AFF"
                      />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm xl:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
