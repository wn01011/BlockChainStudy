import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  initialize as userInfoIni,
  reducer as userInfoReducer,
} from "./userInfo";
import { initialize as userDBIni, reducer as userDBReducer } from "./userDB";
import { initialize as listIni, reducer as listReducer } from "./list";

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  userDB: userDBReducer,
  list: listReducer,
});
const store = createStore(
  rootReducer,
  { userInfo: userInfoIni, userDB: userDBIni, list: listIni },
  composeWithDevTools()
);

export default store;
