import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Wishlist = () => {
 const wishlist = useSelector((state) => state.wishlist);
 return (
  <div className="container">
   <div className="m-5 d-flex align-items-center">
    <h2>Product List</h2>
    <div className="ms-auto">
     <Link to="/">Home</Link>
    </div>
   </div>
   <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "70px" }}>
    {wishlist.length > 0 ? (
     wishlist.map((item, i) => (
      <div key={i}>
       <h3>{item.name}</h3>
       <p>{item.description}</p>
      </div>
     ))
    ) : (
     <p>your wishlist is empty</p>
    )}
   </div>
  </div>
 );
};

export default Wishlist;
