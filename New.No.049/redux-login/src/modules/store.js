import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  initialize as userInfoIni,
  reducer as userInfoReducer,
} from "./userInfo";
import { initialize as userDBIni, reducer as userDBReducer } from "./userDB";

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  userDB: userDBReducer,
});
const store = createStore(
  rootReducer,
  { userInfo: userInfoIni, userDB: userDBIni },
  composeWithDevTools()
);

export default store;
