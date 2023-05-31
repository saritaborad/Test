import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wishlist from "./components/Wishlist";
import ProductList from "./components/ProductList";

const RouteMain = () => {
 return (
  <div>
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<ProductList />} />
     <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
   </BrowserRouter>
  </div>
 );
};

export default RouteMain;
