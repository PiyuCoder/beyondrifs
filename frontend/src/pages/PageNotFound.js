import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className=" w-full h-full bg-page-not-found bg-cover bg-center p-5 lg:p-24">
      <div className=" backdrop-blur-sm text-white  bg-white bg-opacity-5 text-center shadow-lg z-10 w-full h-full rounded-3xl flex flex-col justify-center items-center">
        <h1 className=" text-3xl font-medium mb-10">Page Not Found :(</h1>
        <p>Oops! 😖 The requested URL was not found on this server.</p>
        <Link
          to={"/"}
          className="bg-gradient-to-r mt-8 from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white  py-3 px-7 text-xl rounded-2xl hover:opacity-80"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
