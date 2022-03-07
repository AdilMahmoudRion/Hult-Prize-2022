import React from "react";
import { Link } from "react-router-dom";
import fruit from "../../Images/banana.png";
import fish from "../../Images/fish.png";
import meat from "../../Images/meat.png";
import tree from "../../Images/tree.png";
import veg from "../../Images/veg.png";
import "./Product.css";

const Product = () => {
  return (
    <section className="product mx-auto sm:px-6 lg:px-36 mt-28 sm:p-6 ">
      <div className="grid product-b grid-cols-2 gap-5">
        <img
          className="col-span-1"
          src="https://t3.ftcdn.net/jpg/02/45/42/26/360_F_245422678_7ood6OTTGocKmTQhPAkkt7QkxqSFzfHw.jpg"
          alt="images"
          srcset=""
        />
        <img
          className="col-span-1"
          src="https://vinigalab2.com/wp-content/uploads/2021/04/baner-4.jpg"
          alt="images"
        />
      </div>
      <div className="grid grid-cols-4 mt-10  divide-x divide-[#78b144]">
        <div class="col-span-1 p-4 elementor-icon-box-wrapper">
          <div class="elementor-icon-box-icon ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-[#78b144] mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
          <div class="elementor-icon-box-content text-center">
            <h3 class="text-2xl font-semibold">Top Rank Farms</h3>
            <p class="elementor-icon-box-description">
              Ut facilisis luctus elit id ornare. Aenean non sem risus.{" "}
            </p>
          </div>
        </div>
        <div class="col-span-1 p-4 elementor-icon-box-wrapper">
          <div class="elementor-icon-box-icon ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-[#78b144] mx-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div class="elementor-icon-box-content text-center">
            <h3 class="text-2xl font-semibold">Organic Certificated</h3>
            <p class="elementor-icon-box-description">
              Etiam tempus nulla et dolor sagitti eu ultricies.{" "}
            </p>
          </div>
        </div>
        <div class="col-span-1 p-4 elementor-icon-box-wrapper">
          <div class="elementor-icon-box-icon ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-[#78b144] mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
              />
            </svg>
          </div>
          <div class="elementor-icon-box-content text-center">
            <h3 class="text-2xl font-semibold">Fast Delivery</h3>
            <p class="elementor-icon-box-description">
              Ut facilisis luctus elit id ornare. Aenean non sem risus.{" "}
            </p>
          </div>
        </div>
        <div class="col-span-1 p-4 elementor-icon-box-wrapper">
          <div class="elementor-icon-box-icon ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-[#78b144] mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div class="elementor-icon-box-content text-center">
            <h3 class="text-2xl font-semibold">Trusted Products</h3>
            <p class="elementor-icon-box-description">
              Etiam tempus nulla et dolo..{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="my-20">
        <h1 className="text-center text-3xl font-bold uppercase pb-5">
          Our Product Categories
        </h1>
        <div className="grid grid-cols-3 items-center gap-3">
          <Link
            to="#"
            className="col-span-1 categoryBox grid grid-cols-12 items-center"
          >
            <h1 className="col-span-10">Fish</h1>
            <img className="c-img col-span-2" src={fish} alt="" srcset="" />
          </Link>
          <Link
            to="#"
            className="col-span-1 categoryBox grid grid-cols-12 items-center"
          >
            <h1 className="col-span-10">Fruits</h1>
            <img className="c-img col-span-2" src={fruit} alt="" srcset="" />
          </Link>
          <Link
            to="#"
            className="col-span-1 categoryBox grid grid-cols-12 items-center"
          >
            <h1 className="col-span-10">Vegetable</h1>
            <img className="c-img col-span-2" src={veg} alt="" srcset="" />
          </Link>
          <Link
            to="#"
            className="col-span-1 categoryBox grid grid-cols-12 items-center"
          >
            <h1 className="col-span-10">Meat</h1>
            <img className="c-img col-span-2" src={meat} alt="" srcset="" />
          </Link>
          <Link
            to="#"
            className="col-span-1 categoryBox grid grid-cols-12 items-center"
          >
            <h1 className="col-span-10">Banana Tres</h1>
            <img className="c-img col-span-2" src={tree} alt="" srcset="" />
          </Link>
          <Link
            to="#"
            className="col-span-1 categoryBox grid grid-cols-12 items-center"
          >
            <h1 className="col-span-10">Fish Minnow</h1>
            <img className="c-img col-span-2" src={fish} alt="" srcset="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
