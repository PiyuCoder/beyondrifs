import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../api/firebaseConfig"; // Make sure this path is correct
import { collection, addDoc } from "firebase/firestore";

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
    try {
      const docRef = await addDoc(collection(db, "demo-bookings"), formData);
      toast.success("Demo booked successfully!");

      console.log(docRef);

      // Reset form data after successful submission
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

      return { success: true };
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Failed to book demo.");
    }
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
