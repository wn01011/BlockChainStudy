import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducer/index";

const store = createStore(
  reducer,
  { counter1: { count1: 0, diff: 1 }, counter2: { count2: 0, diff: 1 } },
  composeWithDevTools()
);

export default store;
// 컴포넌트가 아니기 때문에 store.js 대문자로 시작하는 파스칼표기법을 사용하지 않고 카멜 표기법 사용,
// HTML 문법을 사용하지 않기때문에 jsx가 아니라 js
