import { combineReducers } from "redux";
import count from "./count";
import text from "./text";

export default combineReducers({ count, text });
