import React, { useEffect, useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../api/firebaseConfig";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const recaptchaWrapperRef = useRef(null);
  const appVerifier = useRef(null);

  useEffect(() => {
    initializeRecaptcha();
    return () => {
      if (appVerifier.current) {
        appVerifier.current.clear();
      }
      if (recaptchaWrapperRef.current) {
        recaptchaWrapperRef.current.innerHTML = "";
      }
    };
  }, []);

  const initializeRecaptcha = () => {
    try {
      if (!auth) {
        console.error("Firebase auth object not found.");
        return;
      }

      if (recaptchaWrapperRef.current) {
        recaptchaWrapperRef.current.innerHTML = `<div id="recaptcha-container"></div>`;
      }

      appVerifier.current = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: (response) => {
          console.log("reCAPTCHA verified:", response);
          // Optionally trigger OTP sending
          // getOtp();
        },
        "expired-callback": () => {
          console.warn("reCAPTCHA expired");
        },
      });

      appVerifier.current.render().catch((err) => {
        console.error("Error rendering reCAPTCHA:", err);
      });
    } catch (error) {
      console.error("Error initializing reCAPTCHA:", error);
    }
  };

  const getOtp = async () => {
    setLoading(true);
    setError("");
    try {
      if (appVerifier.current && recaptchaWrapperRef.current) {
        appVerifier.current.clear();
        recaptchaWrapperRef.current.innerHTML = `<div id="recaptcha-container"></div>`;
      }
      initializeRecaptcha();

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        `+${phone}`,
        appVerifier.current
      );
      window.confirmationResult = confirmationResult; // This will help in global access for OTP verification
      navigate("/login-auth", { state: { phone } });
    } catch (error) {
      setError("Failed to send OTP. Please try again.");
      console.error("OTP Error: ", error);
    }
    setLoading(false);
  };

  return (
    <div className="w-full h-screen bg-login relative bg-cover bg-top">
      {loading && <Loader />}
      <div className="bg-[#1a02327b] w-full h-full lg:p-24 lg:px-32 flex justify-center items-center">
        <div className="backdrop-blur-md w-full h-full bg-stone-950 bg-opacity-40 shadow-xl z-10 rounded-3xl flex flex-col justify-center items-center p-8">
          <div className="text-center w-full max-w-lg">
            <h1 className="text-3xl font-semibold text-white mb-6">
              Welcome Back
            </h1>
            <div className="text-start w-full text-black">
              <label className="text-xs text-white mb-2 block">
                Phone number
              </label>
              <PhoneInput
                country={"in"}
                value={phone}
                placeholder="Enter phone number"
                onChange={setPhone}
                inputStyle={{ width: "100%", height: "50px" }}
                containerStyle={{ width: "100%" }}
                buttonStyle={{
                  border: "none",
                  backgroundColor: "white",
                }}
              />
            </div>
            <button
              onClick={getOtp}
              className="bg-gradient-to-r mt-8 w-full from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white py-2 text-lg rounded-xl hover:opacity-80"
            >
              Send code
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            <FcGoogle className=" mx-auto mt-5 cursor-pointer" size={35} />
            <p className=" text-white font-thin">
              Don't have an account?{" "}
              <span className=" font-medium cursor-pointer">Register</span>
            </p>
          </div>
        </div>
      </div>
      <div className="float-end" ref={recaptchaWrapperRef}>
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
}
