import { combineReducers } from "redux";

// import { item } from "./reduer-items";
import item from "./reducer-selected";
import cartcount from "./cartcounter";

export const All = combineReducers({
  item,
  cartcount
});
