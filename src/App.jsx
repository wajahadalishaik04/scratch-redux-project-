import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import UserScreen from "./screens/UserScreen";
import ProductScreen from "./screens/ProductScreen";

import Loader from "./components/Loader";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Home" element={<HomeScreen />} />
          <Route path="/Users" element={<UserScreen />} />
          <Route path="/Products" element={<ProductScreen />} />
        </Routes>
      </BrowserRouter>
      <Loader />
    </>
  );
};

export default App;
