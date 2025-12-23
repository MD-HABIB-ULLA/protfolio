import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const WorkSemple = () => {
  const sliderData = [
    { type: "image", src: "/images/project1.avif", width: 320 },
    { type: "image", src: "/images/project2.avif", width: 320 },
    { type: "image", src: "/images/project3.avif", width: 320 },
    { type: "video", src: "/images/project4.mp4", width: 620, autoplay: true },
    { type: "image", src: "/images/project5.avif", width: 670 },
    { type: "image", src: "/images/project6.avif", width: 970 },
    { type: "image", src: "/images/project7.avif", width: 600 },
    { type: "image", src: "/images/project8.avif", width: 320 },
    { type: "image", src: "/images/project9.avif", width: 970 },
    { type: "image", src: "/images/project10.avif", width: 320 },
    { type: "image", src: "/images/project11.avif", width: 320 },
    { type: "image", src: "/images/project12.avif", width: 970 },
    { type: "image", src: "/images/project13.avif", width: 670 },
    { type: "image", src: "/images/project14.avif", width: 970 },
    { type: "video", src: "/images/project15.mp4", width: 620, autoplay: true },
    { type: "image", src: "/images/project16.avif", width: 600 },
    { type: "image", src: "/images/project17.avif", width: 600 },
    { type: "image", src: "/images/project18.avif", width: 970 },
    { type: "image", src: "/images/project19.avif", width: 770 },
    { type: "image", src: "/images/project20.avif", width: 670 },
  ];

  return (
    <div className="m-auto relative pb-[80px] sm:pb-[100px] lg:pb-[150px]">
      <div className=" pb-[30px] sm:pb-[40px] lg:pb-[50px]">
        {" "}
        <div data-aos="fade-up" className="flex items-center justify-center">
          <div
            style={{ borderColor: "#007AFF" }}
            className="px-5 py-2 bg-primary/10 rounded-full md:text-base text-sm text-primary border border-primary"
          >
            <p>Work Semple</p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="relative h-[600px]">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={0}
          slidesPerView="auto"
          className="!h-full"
        >
          {sliderData.map((item, index) => (
            <SwiperSlide
              key={index}
              className="mx-[20px] rounded-2xl border overflow-hidden flex items-center justify-center"
              style={{ width: `${item.width}px` }}
            >
              <div className="h-full w-full overflow-hidden rounded-2xl">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="h-full w-full object-cover rounded-2xl"
                    autoPlay={item.autoplay || false}
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={`Slide ${index + 1}`}
                    className="h-full w-full object-cover object-top rounded-2xl"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Arrows */}
      <div className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 !z-10 bg-primary/30 text-white p-2 rounded-full cursor-pointer hover:bg-primary/70 hover:scale-110 transition duration-300">
        <IoIosArrowBack size={42} />
      </div>
      <div className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 !z-10 bg-primary/30 text-white p-2 rounded-full cursor-pointer hover:bg-primary/70 hover:scale-110 transition duration-300">
        <IoIosArrowForward size={42} />
      </div>
    </div>
  );
};

export default WorkSemple;
