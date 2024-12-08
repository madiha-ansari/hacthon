import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="bg-white p-8">
      {/* Container */}
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto px-4">
        {/* Logo */}
        <div>
          <Image src="/Hekto.png" alt="Hekto Logo" width={98} height={34} />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-12 text-sm font-medium">
          <a
            href="#"
            className="text-pink-500 hover:text-pink-500 flex items-center  ${myFont.className}"
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: "400",
              fontSize: "16px",
            }}
          >
            Home <span className="text-gray-800 ml-1 text-lg">&#x25BC;</span>
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-pink-500  ${myFont.className}"
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: "400",
              fontSize: "16px",
            }}
          >
            Pages
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-pink-500  ${myFont.className}"
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: "400",
              fontSize: "16px",
            }}
          >
            Products
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-pink-500  ${myFont.className}"
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: "400",
              fontSize: "16px",
            }}
          >
            Blog
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-pink-500  ${myFont.className}"
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: "400",
              fontSize: "16px",
            }}
          >
            Shop
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-pink-500 ${myFont.className}" 
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: "400",
              fontSize: "16px", 
               width:"57px"
            }}
          >
            Contact
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 w-64 text-sm focus:outline-none"
          />
          <button className="bg-pink-500 px-4 py-2 flex items-center justify-center">
            <Image
              src="/vectors.png"
              alt="Search Icon"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logo;
