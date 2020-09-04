import { combineReducers } from "redux";

import contacts from "./contacts";

const allReducer =  combineReducers({
  contacts,
});

export default allReducer;