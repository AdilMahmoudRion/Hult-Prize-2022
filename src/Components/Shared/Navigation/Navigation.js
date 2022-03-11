import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="">
      <nav class="bg-[#019345]  lg:px-36 sm:px-4 py-5">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="home" class="flex items-center">
            <span class="self-center text-xl font-bold  text-white uppercase">
              TatKa Food
            </span>
          </Link>
          <div class="flex md:order-1">
            <div class="hidden relative mr-3 md:mr-0 md:block">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-[#019345]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="email-adress-icon"
                class="block p-2 pl-10 w-96 text-gray-900 bg-gray-50 rounded-lg border border-[#019345] text-md "
                placeholder="Search..."
              />
            </div>
            <button
              data-collapse-toggle="mobile-menu-3"
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-3"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="hidden justify-between items-center w-full md:flex md:w-auto md:order-2"
            id="mobile-menu-3"
          >
            <ul class="flex flex-col md:flex-row gap-3">
              <Link to="#" class="header-widget">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                </li>
                <sup>0</sup>
              </Link>
              <li>
                <Link to="#" class="header-widget">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                  <sup>4</sup>
                </Link>
              </li>
              <li>
                <Link to="#" class="header-widget">
                  <li class="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </li>
                  <sup>10</sup>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav class="bg-[#d7f7d5] lg:px-36 sm:px-4 py-2">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <div class="flex md:order-2">
            <div class="flex items-center gap-2 text-gray-800 font-medium ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#119744]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Call Us</p>
                <p className="text-lg">(+880) 183 3449 963</p>
              </div>
            </div>
            <div class="flex items-center gap-2 ml-4 text-gray-800 font-medium ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#119744]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email Us</p>
                <p className="text-lg">support@example.com</p>
              </div>
            </div>
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-4"
          >
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0  md:font-medium ">
              <li>
                <Link
                  to="food"
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="block py-2 pr-4 pl-3 text-gray-900 text-md flex items-center md:p-0"
                >
                  Fruits{" "}
                  <svg
                    class="ml-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="vegetable"
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="block py-2 pr-4 pl-3 text-gray-900 text-md flex items-center md:p-0"
                >
                  Vegetable{" "}
                  <svg
                    class="ml-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="fish"
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="block py-2 pr-4 pl-3 text-gray-900 text-md flex items-center md:p-0"
                >
                  Fishes{" "}
                  <svg
                    class="ml-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="block py-2 pr-4 pl-3 text-gray-900 text-md flex items-center md:p-0"
                >
                  Meats{" "}
                  <svg
                    class="ml-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <HashLink
                  to="contact"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="block py-2 pr-4 pl-3 text-gray-900 text-md flex items-center md:p-0"
                >
                  Contact{" "}
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
