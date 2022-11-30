import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer as logIn, initialize as logInIni } from "./modules/logIn";
import { reducer as regist, initialize as registIni } from "./modules/regist";
import { reducer as logOut, initialize as logOutIni } from "./modules/logOut";

const rootReducer = combineReducers({ logIn, regist, logOut });

const store = createStore(
  rootReducer,
  { ...logInIni, ...registIni, ...logOutIni },
  composeWithDevTools()
);

export default store;
