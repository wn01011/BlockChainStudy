import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./modules/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// react에서 로딩창을 구현할 때?
//  - 스피너라고 하는 형태로 많이 구현된다. << 해당 형태는 원이 빙글빙글 도는 애니메이션
//  - react에서 스피너 또는 로딩창 구현 시 suspense / lazy 정도를 사용한다.
