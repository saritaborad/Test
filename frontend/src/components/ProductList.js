import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, fetchProducts, removeFromWishlist } from "../actions/wishlistActions";
import { Link } from "react-router-dom";

const ProductList = () => {
 const dispatch = useDispatch();
 const products = useSelector((state) => state.products);
 const wishlist = useSelector((state) => state.wishlist);

 useEffect(() => {
  dispatch(fetchProducts());
 }, []);

 const handleAddToWishlist = (product) => {
  dispatch(addToWishlist(product));
 };

 const handleRemoveFromWishlist = (productId) => {
  dispatch(removeFromWishlist(productId));
 };

 return (
  <div className="container">
   <div className="m-5 d-flex align-items-center">
    <h2>Product List</h2>
    <div className="ms-auto">
     <Link to="/wishlist">
      Wishlist
      <i className="bi bi-heart-fill text-danger"></i>
     </Link>
    </div>
   </div>
   <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "70px" }}>
    {products.map((item, i) => (
     <div key={i}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      {wishlist.find((item1) => item1.id === item.id) ? <i className="bi bi-heart-fill text-danger" onClick={() => handleRemoveFromWishlist(item.id)}></i> : <i className="bi bi-heart" onClick={() => handleAddToWishlist(item)}></i>}
     </div>
    ))}
   </div>
  </div>
 );
};

export default ProductList;
