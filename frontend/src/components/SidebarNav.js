import React, { useState } from "react";
import brLogo from "../assets/images/br-logo.png";
import { navigationLinks } from "./constants/navData";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function SidebarNav({ sidebarOpen, toggleSidebar }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubOptDropdown, setActiveSubOptDropdown] = useState(null);
  //   const [sidebarOpen, setSidebarOpen] = useState(false);
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

  return (
    <motion.aside
      initial={{ x: "-100%" }}
      animate={{ x: sidebarOpen ? 0 : "-100%" }}
      transition={{ duration: 0.3 }}
      className="w-64 bg-stone-950 text-white h-full fixed inset-0 z-50 pt-8 pb-3"
    >
      <div className="flex flex-col items-center">
        <div className="flex-shrink-0 mb-8">
          <img className="h-10" src={brLogo} alt="Logo" />
        </div>
        <div className="w-full">
          {navigationLinks?.map((link, index) => (
            <div
              key={index}
              className={`relative z-10 ${
                location.pathname === link.link
                  ? "text-[#6ad61d]"
                  : "text-zinc-300"
              }`}
              onMouseOver={() => handleMouseOver(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === index ? null : index)
                }
                className="block w-full text-left px-6 py-3  hover:bg-gray-700 rounded-md transition-all"
              >
                {link.label}
                {link.options && (
                  <span className="inline-block align-middle ml-1">
                    <IoIosArrowDown />
                  </span>
                )}
              </button>
              {link.options && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={
                    activeDropdown === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: -10 }
                  }
                  transition={{ duration: 0.3 }}
                  className={`${
                    activeDropdown === index ? "flex flex-col" : "hidden"
                  } bg-gradient-to-r from-purple-950 to-purple-600 rounded-r-xl rounded-bl-xl shadow-lg py-4`}
                >
                  {link.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className="relative text-white hover:text-gray-300 hover:bg-[#510779] hover:rounded-xl"
                    >
                      <Link
                        to={!option.subOptions && option.link}
                        onClick={() => {
                          setActiveSubOptDropdown(
                            activeSubOptDropdown === optionIndex
                              ? null
                              : optionIndex
                          );
                          !option.subOptions && toggleSidebar();
                        }}
                        className="block w-full text-left px-8 py-2"
                      >
                        <div className="font-medium mb-1 flex items-center">
                          {option.label}
                          {option.subOptions && (
                            <span className="inline align-middle ml-1">
                              <MdKeyboardArrowRight size={20} />
                            </span>
                          )}
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
                          className={`${
                            activeSubOptDropdown === optionIndex
                              ? "flex flex-col"
                              : "hidden"
                          } shadow-md py-2 bg-gradient-to-r from-purple-950 to-purple-600 rounded-r-xl rounded-bl-xl`}
                        >
                          {option.subOptions.map((subOption, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subOption.link}
                              className="block px-8 py-2 text-gray-500"
                              onClick={toggleSidebar}
                            >
                              <span className="font-normal text-white hover:text-gray-300 hover:bg-[#510779] hover:rounded-xl">
                                {subOption.label}
                              </span>
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
      <div className="mt-auto pb-4 px-5 space-y-3">
        <Link to="/login">
          <button className=" w-full text-white  py-3  text-lg rounded-2xl border border-custom-purple-2 hover:bg-purple-800 hover:bg-opacity-20">
            Login
          </button>
        </Link>
        <button className="w-full bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white py-3 text-lg rounded-2xl hover:opacity-80">
          Book free trial
        </button>
      </div>
    </motion.aside>
  );
}
