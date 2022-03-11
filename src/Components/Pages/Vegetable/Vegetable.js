import React from "react";
import cap from "../../Images/capsicum.png";
import car from "../../Images/carrot.png";

const vegetable = [
  { name: "Capsicum", price: "$19", img: `${cap}` },
  { name: "Carrot", price: "$15", img: `${car}` },
  { name: "", price: "", img: `${cap}` },
  { name: "", price: "", img: `${cap}` },
  { name: "", price: "", img: `${cap}` },
];

const Vegetable = () => {
  return (
    <div id="vegetable" className="min-h-screen">
      <div className=" lg:px-36 sm:px-4 py-5">
        <div className="grid grid-cols-4 gap-10">
          {vegetable.map((vegetable) => (
            <div class="flex flex-col justify-between col-span-1 max-w-sm bg-[#d7f7d5] rounded-lg shadow-md">
              <a href="#">
                <img
                  class="p-8 rounded-t-lg "
                  src={vegetable.img}
                  alt="product image"
                />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 ">
                    {vegetable.name}
                  </h5>
                </a>
                <div class="flex justify-between items-center mt-3">
                  <span class="text-3xl font-bold text-gray-900 ">
                    {vegetable.price}
                  </span>
                  <a
                    href="#"
                    class="text-gray-900 font-semibold  py-2 px-5 rounded border-2 border-[#019345]"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vegetable;
