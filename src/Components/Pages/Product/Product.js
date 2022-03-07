import React from "react";
import "./Product.css";
import fish from "../../Images/fish.png";
import { Link } from "react-router-dom";

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
      <div className="my-10">
        <h1 className="text-center text-2xl pb-5">Our Product Categories</h1>
        <div className="grid grid-cols-3 items-cente gap-3">
          <Link
            to="#"
            className="col-span-1 categoryBox grid grid-cols-12 items-cente"
          >
            <h1 className="col-span-10">Meat And Fish</h1>
            <img className="c-img col-span-2" src={fish} alt="" srcset="" />
          </Link>
          <Link
            to="#"
            className="col-span-1 categoryBox grid grid-cols-12 items-cente"
          >
            <h1 className="col-span-10">Meat And Fish</h1>
            <img className="c-img col-span-2" src={fish} alt="" srcset="" />
          </Link>
          <Link
            to="#"
            className="col-span-1 categoryBox grid grid-cols-12 items-cente"
          >
            <h1 className="col-span-10">Meat And Fish</h1>
            <img className="c-img col-span-2" src={fish} alt="" srcset="" />
          </Link>
          <Link
            to="#"
            className="col-span-1 categoryBox grid grid-cols-12 items-cente"
          >
            <h1 className="col-span-10">Meat And Fish</h1>
            <img className="c-img col-span-2" src={fish} alt="" srcset="" />
          </Link>
          <Link
            to="#"
            className="col-span-1 categoryBox grid grid-cols-12 items-cente"
          >
            <h1 className="col-span-10">Meat And Fish</h1>
            <img className="c-img col-span-2" src={fish} alt="" srcset="" />
          </Link>
          <Link
            to="#"
            className="col-span-1 categoryBox grid grid-cols-12 items-cente"
          >
            <h1 className="col-span-10">Meat And Fish</h1>
            <img className="c-img col-span-2" src={fish} alt="" srcset="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
