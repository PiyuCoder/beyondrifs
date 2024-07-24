import React from "react";
import { useNavigate } from "react-router-dom";
import { useDemoContext } from "../../context/demoContext";

export default function ContactDetails() {
  const navigate = useNavigate();
  const { handleSubmit, formData, handleValueChange, handleSetError } =
    useDemoContext();

  const handleDetailsSubmit = () => {
    if (!formData.ageGroup) {
      return handleSetError("Select an age group");
    } else if (!formData.email) {
      return handleSetError("Enter your email");
    }
    const res = handleSubmit();

    if (res.success) navigate("/");
  };
  return (
    <div className="w-full h-full text-white text-center flex flex-col items-center justify-center">
      <h1 className="text-5xl font-semibold mb-4">Contact details</h1>
      <p className="tracking-wider mb-6">Enter all fields</p>

      <div className=" max-w-3xl w-full  mx-auto space-y-8">
        <div className=" text-start">
          <label className=" ">Student age group</label>
          <div className="relative inline-block w-full mt-2">
            <select
              value={formData.ageGroup}
              required
              onChange={(e) => handleValueChange("ageGroup", e.target.value)}
              className="block w-full rounded-[10px] p-4 bg-white border border-gray-300 text-gray-700 focus:outline-none  focus:border-transparent appearance-none"
            >
              <option>Choose age group</option>
              <option>18+ Years</option>
              <option>Below 18</option>
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
        <div className=" text-start">
          <label className="">Email Address</label>
          <input
            className=" w-full p-4 rounded-[10px] mt-2 outline-none border-none text-black"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) => handleValueChange("email", e.target.value)}
          />
        </div>
        <form className="flex items-center">
          <input
            type="checkbox"
            required
            className="appearance-none h-5 w-5 border border-purple-600 bg-transparent checked:bg-purple-600 checked:border-transparent focus:outline-none cursor-pointer"
            id="terms"
          />
          <label htmlFor="terms" className="ml-2 font-thin text-white">
            I agree to the{" "}
            <span className="font-medium text-white">Terms & Conditions</span>
          </label>
        </form>
        <div className="flex items-center justify-between  gap-5 w-full mt-7">
          <button
            onClick={() => navigate("/book-demo/choose-time")}
            className="border border-custom-purple-2 hover:bg-purple-800 hover:bg-opacity-20 text-white  py-3 px-7 text-xl rounded-2xl hover:opacity-80"
          >
            Previous
          </button>
          <button
            onClick={handleDetailsSubmit}
            className="bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white  py-3 px-7 text-xl rounded-2xl hover:opacity-80"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
