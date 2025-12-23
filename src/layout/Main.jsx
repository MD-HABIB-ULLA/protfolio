import { Outlet } from "react-router-dom";
// import { useSmoothScroll } from "../utils/useSmoothScroll";

const Main = () => {
  // useSmoothScroll();
  return (
    <div
      className="p-[12px] lato bg-[#E9EBEF]  "
     
    >
      <div className="overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
