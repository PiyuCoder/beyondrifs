import React from "react";
import certification from "../../assets/images/certification.png";

export default function Certification() {
  return (
    <section className=" bg-custom-gradient-bpb-v mt-9 py-20 text-center">
      <h1 className=" text-5xl text-white mx-auto font-semibold">
        Certification
      </h1>
      <img className=" mx-auto mt-20" src={certification} />
    </section>
  );
}
