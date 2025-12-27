import { FaCheck } from "react-icons/fa";

const WhatIDo = () => {
  const categories = [
    {
      title: "Brand",
      items: [
        "Brand identities",
        "Web design",
        "Motion design",
        "So much more...",
      ],
    },
    {
      title: "Product",
      items: [
        "UX strategy",
        "End-to-end flows",
        "Design systems",
        "So much more...",
      ],
    },
    {
      title: "Web Dev",
      items: ["Framer", "Webflow", "Front-end help", "So much more..."],
    },
    {
      title: "Other",
      items: [
        "Seinfeld quotes",
        "Amazing puns",
        "Good vibes",
        "So much more...",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-[20px] py-[80px] sm:py-[100px] lg:py-[150px]">
      <div data-aos="fade-up" className="flex items-center justify-center ">
        <div
          style={{ borderColor: "#007AFF" }}
          className="px-5 py-2 md:text-base text-sm bg-primary/10 rounded-full text-primary border border-primary"
        >
          <p>What I Do</p>
        </div>
      </div>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-[30px] sm:pt-[40px] lg:pt-[50px]">
        {categories.map((category, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="p-6 bg-white rounded-2xl shadow-md border "
          >
            <h3 className="text-[24px] font-bold mb-2">{category.title}</h3>
            <ul className="space-y-1">
              {category.items.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex font-semibold text-[18px] ${
                    idx === 3 ? "text-[#475467]/60  " : "text-[#475467]  "
                  }items-center gap-2`}
                >
                  <span className="text-white text-sm p-1  rounded-md bg-primary box-content">
                    <FaCheck size={14} />
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
