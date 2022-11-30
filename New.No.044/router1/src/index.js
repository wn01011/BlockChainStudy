import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// Router 설정에 있어서 root를 설정한다.
// 해당 컴포넌트가 없을 시 라우터를 구현하지 못한다.
// React 시작할 때 무조건 넣는다고 생각하자.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
