import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { axiosInstance } from "../api/axios";

const demoContext = createContext();

export default function DemoContextProvider({ children }) {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Student",
    gender: "",
    category: "",
    time: {
      day: "",
      date: "",
      time: "",
      shift: "",
    },
    ageGroup: "",
  });

  const handleValueChange = (name, value) => {
    // const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTimeChange = (value) => {
    setFormData({ ...formData, time: value });
  };
  console.log(formData);

  const handleSubmit = async () => {
    const response = await axiosInstance.post("/api/book-demo", { formData });
    if (response.data.success) {
      toast.success(response.data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "Student",
        gender: "",
        category: "",
        time: {
          day: "",
          date: "",
          time: "",
          shift: "",
        },
        ageGroup: "",
      });
      return { message: "success" };
    } else toast.error(response.data.message);
  };

  const handleSetError = (msg) => {
    toast.error(msg);
  };
  return (
    <demoContext.Provider
      value={{
        formData,
        handleValueChange,
        handleTimeChange,
        handleSubmit,
        handleSetError,
      }}
    >
      {children}
    </demoContext.Provider>
  );
}

export const useDemoContext = () => {
  return useContext(demoContext);
};
