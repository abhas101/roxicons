import React from "react";
import Navbar from "../components/Navbar.jsx";
import IconGrid from "@/components/IconGrid";
import Footer from "@/components/Footer.jsx";

const Icons = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />

        <div className=" max-w-6xl mx-auto px-6 py-10   bg-linear-to-r from-cyan-500 to-blue-500 mt-5 rounded-2xl">
          <h1 className="text-3xl font-bold mb-6">Explore Icons</h1>

          <IconGrid />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Icons;
