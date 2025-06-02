import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 text-gray-300 py-6 mt-16 w-full">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
         
        <div className="text-lg font-semibold">
          © {new Date().getFullYear()} AuraFix. All rights reserved.
        </div>
 
        <div className="flex space-x-6 text-sm">
          <a href="https://www.linkedin.com/in/shlokgupta1006/" className="hover:text-white transition duration-200"><CiLinkedin /></a>
          <a href="https://github.com/imsg1006" className="hover:text-white transition duration-200"><FaGithub /></a>
          <a href="https://x.com/shlok10xDev" className="hover:text-white transition duration-200"><FaSquareXTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
