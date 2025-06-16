import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      {/* Smooth universal gradient background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1c1c1c]" />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
