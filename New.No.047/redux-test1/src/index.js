import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// 위 import 와 아래 import 차이 : 위는 설치된 라이브러리, 아래는 개발자가 작성한 코드
//  - 교수님의 습관
// 단, import 는 다른 코드들에 비해서 무조건 위에 선언해주어야한다.

import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
