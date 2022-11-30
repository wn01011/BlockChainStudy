import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

const store = createStore(
  reducer,
  {
    count: { count: 0, step: 1 },
    text: ["test", "test1", "test2"],
  },
  composeWithDevTools()
);

export default store;
