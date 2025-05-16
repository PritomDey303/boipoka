import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoCall, IoLogoYoutube } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function TopInfo() {
  return (
    <div className="bg-gray-800 text-white px-6 py-1">
      <div className="max-w-7xl mx-auto flex justify-center items-center md:justify-between md:flex-row-reverse text-sm">
        {/* Left: Colorful Round Social Icons */}
        <div className="flex justify-center gap-1">
          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            className=" text-white rounded-full flex items-center justify-center text-lg hover:scale-110 transition-transform"
          >
            <FaFacebook />
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            aria-label="LinkedIn"
            className=" text-white w-9 h-9 rounded-full flex items-center justify-center text-lg hover:scale-110 transition-transform"
          >
            <BsLinkedin />
          </a>

          {/* YouTube */}
          <a
            href="#"
            aria-label="YouTube"
            className="text-white w-9 h-9 rounded-full flex items-center justify-center text-lg hover:scale-110 transition-transform"
          >
            <IoLogoYoutube />
          </a>
          {/* twitter */}
          <a
            href="#"
            aria-label="YouTube"
            className="text-white w-9 h-9 rounded-full flex items-center justify-center text-lg hover:scale-110 transition-transform"
          >
            <FaTwitter />
          </a>
          {/* email */}
          <a
            href="#"
            aria-label="YouTube"
            className="text-white w-9 h-9 rounded-full flex items-center justify-center text-lg hover:scale-110 transition-transform"
          >
            <MdEmail />
          </a>
        </div>

        {/* Center: Title */}
        <p className="hidden md:block ext-center font-medium font-mono">
          Welcome to our beloved <span className="font-bold">Boi Bazar</span> –
          Buy books online!
        </p>

        {/* Right: Contact Info */}
        <div className="hidden md:flex items-center gap-2">
          <IoCall className="text-lg" />
          <span>
            <span className="hidden sm:inline">Product Request:</span>{" "}
            <strong>01882787339</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopInfo;
