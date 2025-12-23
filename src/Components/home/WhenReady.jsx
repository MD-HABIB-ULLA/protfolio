import { MdEmail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const WhenReady = () => {
  const handleScheduleCall = () => {
    window.open("https://meet.google.com/new", "_blank"); // Replace with your actual meeting link
  };

  const handleSendEmail = () => {
    window.location.href = "mailto:habibulla1278@gmail.com"; // Replace with your actual email
  };

  return (
    <div className="">
      <div
        id="home"
        className="px-5 container m-auto flex items-center justify-center overflow-hidden "
      >
        <div className="h-full w-full pb-[80px] sm:pb-[100px] lg:pb-[150px] flex items-center justify-center overflow-hidden">
          <div>
            <div
              data-aos="fade-up"
              className="flex items-center justify-center"
            >
              <div
                style={{ borderColor: "#007AFF" }}
                className="px-5 py-2 bg-primary/10 md:text-base text-sm rounded-full text-primary border border-primary"
              >
                <p>Really Excited To Meet</p>
              </div>
            </div>
            <div>
              <h1
                data-aos="fade-up"
                className="font-bold capitalize max-w-[90%] sm:max-w-[80%] text-center m-auto pt-[30px] sm:pt-[40px] lg:pt-[50px] pb-[20px] sm:pb-[30px] lg:pb-[30px]"
              >
                Ready when you are.
              </h1>
              <p
                data-aos="fade-up"
                className="max-w-[90%] sm:max-w-[70%] text-gray-500 m-auto text-center text-lg sm:text-xl font-semibold pt-[10px] sm:pt-[20px]"
              >
                We already think it&apos;s a match. Go ahead and schedule our first
                date. We want to chat about your idea and learn your middle
                name.
              </p>
            </div>
            <div className="py-[30px] sm:py-[40px] lg:py-[50px]">
              <div
                data-aos="fade-up"
                className="flex justify-center items-center gap-[20px] flex-wrap"
              >
                <button
                  onClick={handleScheduleCall}
                  className="px-5 flex gap-2 items-center py-2 text-white bg-primary hover:bg-blue-600 shadow-primary/50 text-base shadow-md border border-primary rounded-full"
                >
                  <SlCalender /> Schedule a call
                </button>
                <button
                  onClick={handleSendEmail}
                  className="px-5 flex gap-2 items-center py-2 text-gray-500 border border-gray-500 rounded-full"
                >
                  <MdEmail /> Send an email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhenReady;
