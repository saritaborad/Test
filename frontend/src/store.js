import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import wishlistReducer from "./reducers/wishlistReducers";

const store = createStore(wishlistReducer, applyMiddleware(thunk));

export default store;
