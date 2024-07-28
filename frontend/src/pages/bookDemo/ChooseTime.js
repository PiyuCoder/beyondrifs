import React, { useState } from "react";
import { format, addDays } from "date-fns";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDemoContext } from "../../context/demoContext";

const getNextDays = (start, numDays) => {
  const days = [];
  for (let i = 0; i < numDays; i++) {
    days.push(addDays(start, i));
  }
  return days;
};

const getTimeSlots = () => {
  const times = [];
  for (let hour = 9; hour < 18; hour++) {
    times.push(`${hour}:00`);
    times.push(`${hour}:30`);
  }
  return times;
};

const buttons = [
  {
    name: "Morning",
    prefix: "AM",
  },
  {
    name: "Evening",
    prefix: "PM",
  },
];

export default function ChooseTime() {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [prefix, setPrefix] = useState("AM");
  const navigate = useNavigate();
  const { handleTimeChange, handleSetError } = useDemoContext();

  const today = new Date();
  const daysToShow = 7;

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - daysToShow);
    }
  };

  const handleNext = () => {
    setStartIndex(startIndex + daysToShow);
  };

  const days = getNextDays(today, 30); // Let's assume we want to display dates for the next 30 days
  const visibleDays = days.slice(startIndex, startIndex + daysToShow);
  const timeSlots = getTimeSlots();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDay) {
      return handleSetError("Select a day");
    } else if (!selectedTime) {
      return handleSetError("Select a time");
    }
    if (selectedDay && selectedTime && prefix) {
      const value = {
        day: format(selectedDay, "EEEE"),
        date: format(selectedDay, "yyyy-MM-dd"),
        time: selectedTime,
        shift: prefix,
      };

      handleTimeChange(value);
      navigate("/book-demo/contact-details");
    }
  };

  return (
    <div className="w-full h-full text-white text-center flex flex-col items-center justify-center">
      <h1 className="text-5xl font-semibold mb-4">Choose your time</h1>
      <p className="tracking-wider mb-6">
        Pick a time and date that works for you
      </p>
      <div className="max-w-3xl flex-col items-center mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-4">
          {visibleDays.map((day, index) => (
            <div
              key={index}
              onClick={() => setSelectedDay(day)}
              className={`p-4 rounded-lg text-center border border-purple-600 hover:-translate-y-1 transition text-black cursor-pointer ${
                selectedDay &&
                format(day, "yyyy-MM-dd") === format(selectedDay, "yyyy-MM-dd")
                  ? "bg-purple-600 text-white"
                  : "bg-white"
              }`}
            >
              <p className="font-semibold">{format(day, "EEEE").slice(0, 3)}</p>
              <p>{format(day, "MMMM d")}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mb-4">
          <button
            onClick={handlePrevious}
            className=" backdrop-blur-md bg-gray-500 hover:bg-gray-700 text-white font-bold p-2 rounded"
            disabled={startIndex === 0}
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold p-2 rounded"
            disabled={startIndex + daysToShow >= days.length}
          >
            <IoIosArrowForward />
          </button>
        </div>

        {selectedDay && (
          <div className="w-full text-center">
            <div className=" flex items-center justify-between">
              <h2 className="text-xl mb-4">
                {selectedDay && format(selectedDay, "EEEE")},{" "}
                {selectedDay && format(selectedDay, "MMMM d")}{" "}
                {selectedTime && `| ${selectedTime} ${prefix}`}
              </h2>
              <div className=" flex items-center gap-5 ">
                {buttons.map((btn, i) => (
                  <button
                    key={i}
                    onClick={() => setPrefix(btn.prefix)}
                    className={`p-2 rounded-2xl ${
                      btn.prefix === prefix
                        ? "bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 hover:opacity-80"
                        : "border border-custom-purple-2 hover:bg-purple-800 hover:bg-opacity-20"
                    } text-white py-3 px-7 text-lg`}
                  >
                    {btn.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-6">
              {timeSlots.map((time, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTime(time)}
                  className={`p-2  ${
                    selectedTime === time
                      ? "bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 hover:opacity-80"
                      : "border border-custom-purple-2 hover:bg-purple-800 hover:bg-opacity-20"
                  } text-white py-3  text-lg rounded-2xl`}
                >
                  {time} {prefix}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="flex items-center justify-between  gap-5 w-full mt-7">
          <button
            onClick={() => navigate("/book-demo/choose-role")}
            className="border border-custom-purple-2 hover:bg-purple-800 hover:bg-opacity-20 text-white  py-3 px-7 text-xl rounded-2xl hover:opacity-80"
          >
            Previous
          </button>
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white  py-3 px-7 text-xl rounded-2xl hover:opacity-80"
          >
            Enter contact details
          </button>
        </div>
      </div>
    </div>
  );
}
