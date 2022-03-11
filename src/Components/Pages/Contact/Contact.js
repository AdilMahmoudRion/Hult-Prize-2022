import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className=" mx-auto sm:px-6 lg:px-36 sm:p-6">
        <h1 className="text-start text-2xl font-bold uppercase">Contact Us</h1>
        <div className="grid gap-10  grid-cols-2">
          <div className="col-span-1">
            <div className=" mx-auto">
              <p className="mt-6 mb-5 mr-10">
                Event definition is - somthing that happens occurre How evesnt
                sentence. Synonym when an unknown printer took a galley. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Tempora,
                corporis?
              </p>
              <h4 className="text-xl font-bold mb-2">
                OFFICE IN <strong className="text-[#FFCC33]">DHAKA</strong>
              </h4>
              <div className="address">
                <div className="mb-2">
                  <p>
                    Address: <strong>Dhaka, Bangladesh</strong>
                  </p>
                </div>
                <div className="mb-2">
                  <p>
                    Phone: <strong>+8801833449963</strong>
                  </p>
                </div>
                <div className="mb-2">
                  <p>
                    Phone: <strong>+8801722234443</strong>
                  </p>
                </div>
                <div className="mb-2">
                  <p>
                    Email: <strong>tatkafood@gmail.com</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <form>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-[#2e2e2eee] bg-transparent border-0 border-b-2 border-gray-300 appearance-none     focus:outline-none focus:ring-0 focus:border-[#FFCC33] peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_first_name"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFCC33]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  name="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-[#2e2e2eee] bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-[#FFCC33] peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_email"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFCC33]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <textarea
                  rows="6"
                  type="text"
                  name="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none border-gray-300 focus:outline-none focus:ring-0 focus:border-[#FFCC33] peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_email"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFCC33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Message
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-[#FFCC33]  focus:ring-4 focus:ring-[#FFCC33] font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
