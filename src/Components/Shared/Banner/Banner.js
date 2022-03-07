import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner-section triangle">
      <div className="mx-auto sm:px-6 lg:px-36 bg-[#78b144] sm:p-6 ">
        <div className="w-6/12 mx-auto my-auto">
          <h1 className="text-center text-xl font-thin">
            Searching Fresh Food
          </h1>
          <input
            type="text"
            id="email-adress-icon"
            class="block p-2 w-full text-gray-900 bg-white rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500focus:border-blue-500"
            placeholder="Search For Products..."
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
