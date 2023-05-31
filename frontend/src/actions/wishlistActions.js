import axios from "axios";

export const addToWishlist = (product) => {
 return {
  type: "ADD_TO_WISHLIST",
  payload: product,
 };
};

export const removeFromWishlist = (productId) => {
 return {
  type: "REMOVE_FROM_WISHLIST",
  payload: productId,
 };
};

export const fetchProducts = () => {
 return async (dispatch) => {
  try {
   const response = await axios.get("http://localhost:3014/products");
   dispatch({
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: response.data.data,
   });
  } catch (error) {
   dispatch({
    type: "FETCH_PRODUCTS_FAILURE",
    payload: error.message,
   });
  }
 };
};
