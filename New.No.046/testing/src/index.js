import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// strictmode가 무엇인가?
// - 안전하지 않은 생명주기 메서드를 체크해서 알려준다. (componentDidMount, componentDidUpdate)을 체크해서 알려준다.
// - componentWillMount << 라는 놈이 있었다. 이런 것들을 확인해준다.
// - ref에 대한 경고를 해준다.
//  - 스트링 형식의 ref가 있었다. << 결국 과거의 잔재다.
// - 메모리 누수 등의 부작용 검사를 해준다.
//  - 메모리가 삭제되지 않는 현상(메모리 누수) 등의 문제가 발생했을 때 알려준다.
// - 레거시 Context API에 대한 검사를 해준다.
//  - Context API만 남았으며 레거시 Context API가 없다. << 결국 과거의 잔재이다.
//  개인적 생각으론 지금은 없어도 상관없다. => 교수님 생각
