import React from "react";
import HeroSection from "../../components/blog/HeroSection";
import BlogImages from "../../components/blog/BlogImages";
import Footer from "../../components/blog/Footer";

export default function Blog() {
  return (
    <div className=" overflow-y-auto h-full w-full bg-black overflow-x-hidden no-scrollbar">
      <HeroSection />
      <BlogImages />
      <Footer />
    </div>
  );
}
