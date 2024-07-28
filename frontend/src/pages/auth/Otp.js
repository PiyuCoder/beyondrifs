import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

export default function Otp() {
  const [OTP, setOTP] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const phone = location.state.phone;

  const verifyOtp = async () => {
    setLoading(true);
    try {
      const result = await window.confirmationResult.confirm(OTP);
      // Process further as OTP is verified
      if (result?.user?.accessToken) {
        navigate("/user-dashboard", { replace: true });
      }
    } catch (error) {
      console.error("Verify OTP Error: ", error);
    }
    setLoading(false);
  };

  return (
    <div className="w-full h-full relative bg-page-not-found bg-cover bg-center py-10 md:p-10 lg:p-24">
      {loading && <Loader />}
      <div className="backdrop-blur-sm bg-white bg-opacity-5 shadow-lg z-10  h-full rounded-3xl flex flex-col justify-center items-center">
        <div className=" max-w-3xl flex flex-col items-center justify-center">
          <div className=" text-white text-start mx-auto px-5 mb-2">
            <h1 className=" text-center text-4xl font-semibold mb-6">
              Enter OTP
            </h1>
            <p className=" font-thin">
              We sent a verification code to your registered Mobile number
            </p>
            <p className=" font-thin mt-3 tracking-widest">{`${"*".repeat(
              7
            )}${phone.toString().substring(8)}`}</p>
            <p className=" font-thin mt-3">Type your 6 digit security code</p>
          </div>
          <OtpInput
            value={OTP}
            onChange={setOTP}
            numInputs={6}
            renderSeparator={<span></span>}
            renderInput={(props) => (
              <input
                {...props}
                className="m-1 p-0 w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:border-custom-purple-2 transition duration-200 ease-in-out box-border"
                style={{ padding: 1 }}
              />
            )}
            inputType="password"
          />
          <button
            onClick={verifyOtp}
            className="bg-gradient-to-r mt-8 w-full from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white py-3 px-7 text-xl rounded-xl hover:opacity-80"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
