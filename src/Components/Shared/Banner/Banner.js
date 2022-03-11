import React from "react";
import "./Banner.css";
import img from "../../Images/meat.png";

const Banner = () => {
  return (
    <section className="">
      <div className="banner-body lg:px-36">
        {/* -------------banner------------ */}

        <div className="banner container">
          <div className="banner-details">
            <div className="p-3">
              <h1 className="p-1 text-5xl font-medium capitalize">
                Start Your Business <br /> With{" "}
                <span className="text-[#119744] font-bold ">TATKA FOOD</span>
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, aperiam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dolore, facere.
              </p>
            </div>
            <div className="booking-page">
              <div className="booking-option first">
                <h5 className="text-2xl font-medium">
                  Wholesale & retail sales
                </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="booking-option second">
                <h5 className="text-2xl font-medium"> Fishes</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  lorem10
                </p>
              </div>
              <div className="booking-option third">
                <h5 className="text-2xl font-medium">Vegetable</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="">
            <img
              className="banner-img"
              src="http://pethabitat.co.za/Posters/Blog/summerpond.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
