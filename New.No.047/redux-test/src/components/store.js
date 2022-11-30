import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
  reducer,
  { count: 0, diff: 2 },
  composeWithDevTools()
);

export default store;
