import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-black dark:text-white">
      {/* Background layer */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white to-gray-200 dark:from-black dark:to-neutral-900 transition-colors duration-500" />

      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
