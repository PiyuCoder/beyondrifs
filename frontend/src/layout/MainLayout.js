import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className=" w-screen h-screen ">
      <main className="w-full h-full">
        <Outlet />
      </main>
    </div>
  );
}
