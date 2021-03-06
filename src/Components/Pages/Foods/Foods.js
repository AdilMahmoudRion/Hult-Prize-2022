import React from "react";
import banana from "../../Images/banana.png";
import avocado from "../../Images/Fruits/avocado.png";
import coconut from "../../Images/Fruits/coconut.png";
import guava from "../../Images/Fruits/guava.png";
import orange from "../../Images/Fruits/orange.png";
import papaya from "../../Images/Fruits/papaya.png";
import pineapple from "../../Images/Fruits/pineapple.png";
import strawberry from "../../Images/Fruits/strawberry.png";

const vegetable = [
  { name: "strawberry 500gm", price: "$19", img: `${strawberry}` },
  { name: "papaya 500gm", price: "$15", img: `${papaya}` },
  { name: "orange Finger 500gm", price: "$10", img: `${orange}` },
  { name: "avocado 500gm", price: "$13", img: `${avocado}` },
  { name: "banana Chilli 500gm", price: "$9", img: `${banana}` },
  { name: "guava 500gm", price: "$12", img: `${guava}` },
  { name: "pineapple 12p", price: "$12", img: `${pineapple}` },
  { name: "coconut 500gm", price: "$12", img: `${coconut}` },
];

const Foods = () => {
  return (
    <div id="vegetable" className="min-h-screen">
      <div className=" lg:px-36 sm:px-4 py-10">
        <div className="bg-[#ecffea] mb-10 rounded-lg">
          <h1 className="font-bold py-5 px-2 text-3xl text-gray-900">Fruits</h1>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {vegetable.map((vegetable) => (
            <div class="flex flex-col justify-between col-span-1 max-w-sm bg-[#ecffea] rounded-lg shadow-md">
              <a href="#">
                <img
                  class="p-8 rounded-t-lg "
                  src={vegetable.img}
                  alt="product image"
                  width="100%"
                />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 capitalize">
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
        <div class="flex flex-col items-center mt-10">
          <span class="text-sm text-gray-700">
            Showing <span class="font-semibold text-gray-900 ">1</span> to{" "}
            <span class="font-semibold text-gray-900">10</span> of{" "}
            <span class="font-semibold text-gray-900 ">100</span> Entries
          </span>
          <div class="inline-flex mt-2 xs:mt-0">
            <button class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-[#019345] rounded-l hover:bg-gray-900 ">
              <svg
                class="mr-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Prev
            </button>
            <button class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-[#019345] rounded-r border-0 border-l border-gray-300 hover:bg-gray-900 ">
              Next
              <svg
                class="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;
