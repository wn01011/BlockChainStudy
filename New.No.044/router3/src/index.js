import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/Login";
import Log from "./components/Log";
import In from "./components/Log/In";
import Out from "./components/Log/Out";

const router = createBrowserRouter([
  {
    /* 이 안에서 라우터에 대한 설정을 모두 구현한다. */
    path: "", // root
    element: <App />, // component
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "log",
        element: <Log />,
        children: [
          {
            path: "in",
            element: <In />,
          },
          {
            path: "out",
            element: <Out />,
          },
        ],
      },
    ],
  },
]);

// Router 설정에 있어서 root를 설정한다.
// 해당 컴포넌트가 없을 시 라우터를 구현하지 못한다.
// React 시작할 때 무조건 넣는다고 생각하자.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
