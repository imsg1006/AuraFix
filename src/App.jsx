"use client";
import React from "react";
import { BackgroundBeams } from "./components/ui/background-beams";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";

export function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-700 via-gray-900 to-black relative flex flex-col items-center justify-center antialiased px-4">
      {/* Content Wrapper */}
      <div className="max-w-2xl w-full mx-auto text-center relative z-10 space-y-8 py-16">
        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-bold font-sans bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
          Join the <span className="text-fuchsia-500">AuraFix</span>
        </h1>

        {/* Subtext */}
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
           <b>AuraFix</b> is an AI-powered web app that enhances and restores image quality with a single upload. It delivers clearer, sharper, and more vibrant visuals in seconds.
           </p>

        {/* Upload + Preview */}
        <div className="pt-6">
          <Home />
        </div>
      </div>

      {/* Background */}
      <BackgroundBeams className="pointer-events-none z-0" />
      <Footer/>
    </div>
  );
}

export default App;
