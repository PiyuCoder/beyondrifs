import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const paths = [
  { url: "/book-demo/choose-role", name: "Role" },
  { url: "/book-demo/choose-time", name: "Time" },
  { url: "/book-demo/contact-details", name: "Contact" },
];

export default function BookDemo() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIndex = paths.findIndex((el) => el.url === location.pathname);

  useEffect(() => {
    if (location.pathname === "/book-demo") {
      navigate("/book-demo/choose-role");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="w-full h-full relative bg-page-not-found bg-cover bg-center py-10 md:p-10 lg:p-24 overflow-y-auto overflow-x-hidden no-scrollbar">
      <main className="backdrop-blur-lg bg-white bg-opacity-5 shadow-lg z-10 h-auto min-h-full rounded-3xl py-24 flex flex-col justify-center items-center">
        <div className="flex justify-center gap-24 mb-8 relative ">
          <hr className=" absolute border-dashed border-2  z-0 border-[#711CA0] w-[90%] top-1/4 left-0" />
          {paths.map((path, index) => (
            <div
              className=" text-white z-10 flex flex-col items-center gap-4"
              key={index}
            >
              <div
                className={`rounded-full  w-12 h-12 border border-[#8027B3] flex items-center justify-center font-medium ${
                  index <= currentIndex
                    ? "bg-white text-black"
                    : "bg-[#3E075D] text-white"
                }`}
              >
                {`0${index + 1}`}
              </div>
              <h2>{path.name}</h2>
            </div>
          ))}
        </div>
        <Outlet />
      </main>
    </div>
  );
}
