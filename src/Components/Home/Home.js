import React from "react";
import Contact from "../Pages/Contact/Contact";
import Fish from "../Pages/Fish/Fish";
import Foods from "../Pages/Foods/Foods";
import Product from "../Pages/Product/Product";
import Vegetable from "../Pages/Vegetable/Vegetable";
import Banner from "../Shared/Banner/Banner";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Home = () => {
  return (
    <>
      <Navigation></Navigation>
      {/* <Banner></Banner> */}
      <Product></Product>
      <Fish></Fish>
      {/* <Foods></Foods>
        <Vegetable></Vegetable> */}
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
