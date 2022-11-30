import "./App.css";
import React from "react";
import {
  setRefrestToken,
  getCookieToken,
  removeCookieToken,
} from "./storage/Cookie";

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          setRefrestToken("김정규");
        }}
      >
        쿠키생성
      </button>
      <button
        onClick={() => {
          console.log(getCookieToken());
        }}
      >
        쿠키보기
      </button>
      <button
        onClick={() => {
          removeCookieToken();
        }}
      >
        쿠키삭제
      </button>
    </div>
  );
}

export default App;
