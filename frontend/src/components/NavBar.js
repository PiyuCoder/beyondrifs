import React, { useState } from "react";
import brLogo from "../assets/images/br-logo.png";
import { navigationLinks } from "./constants/navData";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import SidebarNav from "./SidebarNav";

export default function NavBar({ bgColor }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubOptDropdown, setActiveSubOptDropdown] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const handleMouseOver = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveSubOptDropdown(null);
  };

  const handleSubOptMouseOver = (index) => {
    setActiveSubOptDropdown(index);
  };

  const handleSubOptMouseLeave = () => {
    setActiveSubOptDropdown(null);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav
      className={`w-full z-50 py-1 lg:py-0 lg:pt-8 fixed  ${
        bgColor ? ` bg-black lg:${bgColor}` : " bg-black lg:bg-transparent"
      }  lg:bg-none  lg:relative lg:pb-3`}
    >
      <div className="max-w-full mx-auto px-1 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <Link to={"/"} className="flex-shrink-0">
            <img className="h-10" src={brLogo} alt="Logo" />
          </Link>
          <div className="hidden lg:block">
            <div className="ml-5 flex items-center space-x-1">
              {navigationLinks?.map((link, index) => (
                <div
                  key={index}
                  className={`relative z-10   ${
                    location.pathname === link.link
                      ? "text-[#6ad61d]"
                      : "text-zinc-700"
                  }`}
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={!link.options && link.link}
                    className="px-3 py-5 rounded-md text-md text-white  hover:scale-110 transition-all"
                  >
                    {link.label}
                    {link.options && (
                      <span className="inline-block align-middle ml-1">
                        <IoIosArrowDown />
                      </span>
                    )}
                  </Link>
                  {link.options && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={
                        activeDropdown === index
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: -10 }
                      }
                      transition={{ duration: 0.3 }}
                      className={`absolute left-0 mt-2 min-w-40 ${
                        activeDropdown === index ? "flex flex-col" : "hidden"
                      } bg-gradient-to-r from-purple-950 to-purple-600  rounded-r-xl rounded-bl-xl shadow-lg py-4`}
                    >
                      {link.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          onMouseOver={() => handleSubOptMouseOver(optionIndex)}
                          onMouseLeave={handleSubOptMouseLeave}
                          className="relative text-white hover:text-gray-300 hover:bg-[#510779] hover:rounded-xl"
                        >
                          <Link
                            to={option.link}
                            className="flex gap-4 px-8 py-2  "
                          >
                            <div>
                              <h2 className="font-medium mb-1 flex items-center  ">
                                {option.label}
                                {option.subOptions && (
                                  <span className="inline align-middle ml-1">
                                    <MdKeyboardArrowRight size={20} />
                                  </span>
                                )}
                              </h2>
                            </div>
                          </Link>
                          {option.subOptions && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={
                                activeSubOptDropdown === optionIndex
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: -10 }
                              }
                              transition={{ duration: 0.3 }}
                              className={`absolute left-full top-0 mt-2 min-w-40 ${
                                activeSubOptDropdown === optionIndex
                                  ? "flex flex-col"
                                  : "hidden"
                              }  shadow-md py-2 bg-gradient-to-r from-purple-950 to-purple-600 rounded-r-xl rounded-bl-xl`}
                            >
                              {option.subOptions.map((subOption, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subOption.link}
                                  className="flex gap-4 px-8 py-2 text-gray-500 hover:bg-[#510779] hover:rounded-xl"
                                >
                                  <div>
                                    <span className="font-normal text-white hover:text-gray-300">
                                      {subOption.label}
                                    </span>
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className=" flex items-center">
            <Link
              to="/login"
              className="texe px-3 py-2 rounded-md text-lg font-medium hover:text-cus bg-clip-text text-white hover:text-transparent hover:bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 transition-colors duration-200 ease-in-out"
            >
              Login
            </Link>
            <button className="bg-gradient-to-r hidden md:block from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white py-2 px-3 text-xs md:text-sm xl:py-3 xl:px-7 xl:text-xl rounded-2xl hover:opacity-80">
              Book free trial
            </button>
            <CiMenuBurger
              onClick={toggleSidebar}
              className=" inline-block lg:hidden mx-3 text-white hover:text-purple-600"
              size={25}
            />
          </div>
        </div>
      </div>
      {sidebarOpen && (
        <SidebarNav toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      )}
    </nav>
  );
}
