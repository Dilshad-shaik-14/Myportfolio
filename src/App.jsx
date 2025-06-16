import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-black dark:text-white">
      {/* Smooth universal gradient background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#000000] via-[#121212] to-[#1f1f1f]
       transition-colors duration-500" />


      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
