import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Components/Pages/Contact/Contact";
import Foods from "./Components/Pages/Foods/Foods";
import Vegetable from "./Components/Pages/Vegetable/Vegetable";
import Fish from "./Components/Pages/Fish/Fish";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="food" element={<Foods />} />
          <Route path="vegetable" element={<Vegetable />} />
          <Route path="fish" element={<Fish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
