import React from "react";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import { useDemoContext } from "../../context/demoContext";
import studentImage from "../../assets/images/student-demo.png";
import tutorImage from "../../assets/images/tutor-demo.png";

const genders = ["Male", "Female", "I don't tell"];
export default function ChooseRole() {
  const { formData, handleValueChange, handleSetError } = useDemoContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!formData.phone) {
      return handleSetError("Enter phone number");
    } else if (!formData.name) {
      return handleSetError("Enter your name");
    } else if (!formData.gender) {
      return handleSetError("Select a gender");
    } else if (!formData.category) {
      return handleSetError("Select a category");
    }
    navigate("/book-demo/choose-time");
  };
  return (
    <div className=" w-full px-5 lg:px-0 h-full text-white text-center">
      <h1 className=" text-5xl font-semibold mb-4">Choose the Role</h1>
      <p className=" tracking-wider">Let us know who is attending the trial</p>
      <div className=" flex justify-center items-center gap-20 md:gap-24 my-6">
        <div onClick={() => handleValueChange("role", "Student")}>
          <img
            className=" rounded-full w-28 h-28 md:w-32 md:h-32 bg-black"
            src={studentImage}
            alt="Student"
          />
          <p className="text-xl mt-3">Student</p>
        </div>
        <div onClick={() => handleValueChange("role", "Tutor")}>
          <img
            className=" rounded-full  w-28 h-28 md:w-32 md:h-32 bg-black"
            src={tutorImage}
            alt="Tutor"
          />
          <p className="text-xl mt-3">Tutor</p>
        </div>
      </div>
      <div className=" max-w-3xl flex-col items-center mx-auto space-y-8">
        <div className="text-start w-full text-black">
          <label className=" text-white mb-2 block">Phone number</label>
          <PhoneInput
            country={"in"}
            value={formData.phone}
            onChange={(ph) => handleValueChange("phone", `+${ph}`)}
            placeholder="Enter phone number"
            inputStyle={{
              width: "100%",
              height: "55px",
              borderRadius: "10px",
            }}
            containerStyle={{
              width: "100%",
              borderRadius: "10px",
            }}
            buttonStyle={{
              border: "none",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className=" text-start">
          <label className="">{formData.role} Name</label>
          <input
            className=" w-full p-4 rounded-[10px] mt-2 text-black outline-none border-none"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => handleValueChange("name", e.target.value)}
            required
          />
        </div>
        <div className=" text-start">
          <label className=" ">Select gender</label>
          <div className="flex items-center justify-center gap-5 sm:gap-12 mt-2">
            {genders.map((g, i) => (
              <button
                onClick={() => handleValueChange("gender", g)}
                key={i}
                className={`${g === formData.gender ? "bg-[#3E075D] border-t-[3px] border-l-[3px]" : " hover:bg-purple-800  hover:bg-opacity-20"} text-white border  flex-1  border-[#BB53F6] py-5 px-2 md:px-7 text-sm font-semibold tracking-wider rounded-2xl`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
        <div className=" text-start">
          <label className=" ">Choose your category</label>
          <div className="relative inline-block w-full mt-2">
            <select
              value={formData.category}
              required
              onChange={(e) => handleValueChange("category", e.target.value)}
              className="block w-full rounded-[10px] p-4 bg-white border border-gray-300 text-gray-700 focus:outline-none  focus:border-transparent appearance-none"
            >
              <option>Choose category</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start flex-wrap gap-5 w-full pt-6 ">
          <button
            onClick={handleSubmit}
            className=" w-full bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white  py-4  px-7 text-xl rounded-2xl hover:opacity-80"
          >
            Select date and time
          </button>
        </div>
      </div>
    </div>
  );
}
