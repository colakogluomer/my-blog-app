import { combineReducers } from "redux";
import postReducer from "./post";
import authReducer from "./auth";

const rootReducer = combineReducers({
  posts: postReducer,
  auth: authReducer,
});

export default rootReducer;
