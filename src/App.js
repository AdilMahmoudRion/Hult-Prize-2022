import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Components/Pages/Contact/Contact";
import Foods from "./Components/Pages/Foods/Foods";
import Vegetable from "./Components/Pages/Vegetable/Vegetable";
import Fish from "./Components/Pages/Fish/Fish";
import Navigation from "./Components/Shared/Navigation/Navigation";
import Footer from "./Components/Shared/Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="food" element={<Foods />} />
          <Route path="vegetable" element={<Vegetable />} />
          <Route path="fish" element={<Fish />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};

export default App;
