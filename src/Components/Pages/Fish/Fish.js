import React from "react";
import { Link } from "react-router-dom";
import "./Fish.css";

const Fish = () => {
  return (
    <section id="fish" className="">
      <div className="mx-auto sm:px-6 lg:px-36 sm:p-6 ">
        <div className="bg-[#ecffea] mb-10 rounded-lg mx-2">
          <h1 className="font-bold py-5 px-2 text-3xl text-gray-900">
            Fish Category
          </h1>
        </div>
        <div className="grid grid-cols-4">
          <div class="col-span-1 text-center">
            <Link to="#">
              <div class="px-2 py-1 catimg">
                <img
                  src="https://bengalfish.com.bd/images/media/2021/04/large1618741634ODSbM18504.jpg"
                  alt=""
                  width="290px"
                />
              </div>
            </Link>
          </div>
          <div class="col-span-1 text-center">
            <Link to="#">
              <div class="px-2 py-1 catimg">
                <img
                  src="https://bengalfish.com.bd/images/media/2020/09/large15993817445K4kY06908.jpg"
                  alt=""
                  width="290px"
                />
              </div>
            </Link>
          </div>
          <div class="col-span-1 text-center">
            <Link to="#">
              <div class="px-2 py-1 catimg">
                <img
                  src="	https://bengalfish.com.bd/images/media/2020/09/large1599384585OzulQ06709.jpg"
                  alt=""
                  width="290px"
                />
              </div>
            </Link>
          </div>
          <div class="col-span-1 text-center">
            <Link to="#">
              <div class="px-2 py-1 catimg">
                <img
                  src="	https://bengalfish.com.bd/images/media/2020/09/large1599384587iw4Te06209.jpg"
                  alt=""
                  width="290px"
                />
              </div>
            </Link>
          </div>
          <div class="col-span-1 text-center">
            <Link to="#">
              <div class="px-2 py-1 catimg">
                <img
                  src="https://bengalfish.com.bd/images/media/2020/09/large1599384583AIG9L06809.jpg"
                  alt=""
                  width="290px"
                />
              </div>
            </Link>
          </div>
          <div class="col-span-1 text-center">
            <Link to="#">
              <div class="px-2 py-1 catimg">
                <img
                  src="	https://bengalfish.com.bd/images/media/2020/09/large1599384588VkGPe06809.jpg"
                  alt=""
                  width="290px"
                />
              </div>
            </Link>
          </div>
          <div class="col-span-1 text-center">
            <Link to="#">
              <div class="px-2 py-1 catimg">
                <img
                  src="	https://bengalfish.com.bd/images/media/2021/04/large1618742060VVDY518304.jpg"
                  alt=""
                  width="290px"
                />
              </div>
            </Link>
          </div>
          <Link to="#" class="col-span-1 text-center">
            <Link to="#">
              <div class="px-2 py-1 catimg">
                <img
                  src="https://bengalfish.com.bd/images/media/2020/09/large1599384586a1Az106209.jpg"
                  alt=""
                  width="290px"
                />
              </div>
            </Link>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Fish;
