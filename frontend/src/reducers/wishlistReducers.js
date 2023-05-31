const initialState = {
 products: [],
 wishlist: [],
 error: null,
};

const wishlistReducer = (state = initialState, action) => {
 console.log(state, action);
 switch (action.type) {
  case "ADD_TO_WISHLIST":
   return {
    ...state,
    wishlist: [...state.wishlist, action.payload],
   };
  case "REMOVE_FROM_WISHLIST":
   return {
    ...state,
    wishlist: state.wishlist.filter((product) => product.id !== action.payload),
   };
  case "FETCH_PRODUCTS_SUCCESS":
   return {
    ...state,
    products: action.payload,
    error: null,
   };
  case "FETCH_PRODUCTS_FAILURE":
   return {
    ...state,
    products: [],
    error: action.payload,
   };

  default:
   return state;
 }
};

export default wishlistReducer;
