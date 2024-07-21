import React from "react";
import guitarGif from "../assets/images/guitar-loader.png";

export default function Loader() {
  return (
    <div className=" fixed inset-0 w-screen h-screen z-50 flex items-center justify-center">
      <img className=" h-20 animate-bounce" src={guitarGif} />
    </div>
  );
}
