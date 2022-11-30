// useContext라는 Hook을 사용한다.
// Context란 무엇인가? 전역 상태 관리 이다.
// let, const 같은 명령어로 변수를 지정했다 했을 때
// React에서 사용하는 변수, 상태값들은 거의 대부분이 지역 변수, 상태값이다.
// 특히! 상태값은 무조건 지역 스코프에 포함되어 외부로 나갈 수 없다. >> 지역 변수와 같다.
// 전역 스코프에서 상태값을 쓰고 싶다. => Context라는 녀석이다.

import { createContext, useContext, Component } from "react";
import { useState } from "react";

const TestContext = createContext();

export default function ContextTest() {
  const [num, setNum] = useState(12);
  return (
    // 제공자
    <TestContext.Provider value={{ num, setNum }}>
      {/* 하위 컴포넌트 내에서 어디서든지 변수를 쓸 수 있도록 하기 위해 Provider 컴포넌트로 감싼다.*/}
      {/* Provider 컴포넌트의 value props를 사용해 전역 변수로 사용할 데이터 값을 정의한다. */}
      <Child1 />
    </TestContext.Provider>
  );
}
function Child1({}) {
  return <Child2 />;
}
function Child2({}) {
  return <Child3 />;
}
function Child3({}) {
  const item = useContext(TestContext);
  return (
    <div
      onClick={() => {
        item.setNum(item.num - 1);
      }}
    >
      chlid3 {item.num} <Child4 />
    </div>
  );
}
function Child4({}) {
  const item = useContext(TestContext);
  // Context를 가져오기 위해 useContext를 사용한다.
  // 매개변수로 생성한 Context를 가져온다.
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        item.setNum(item.num + 1);
      }}
    >
      child {item.num}
      <Child5 />
    </div>
  );
}

class Child5 extends Component {
  render() {
    return (
      // 소비자
      <TestContext.Consumer>
        {(item) => {
          console.log(item);
          return <div>child 5 {item.num}</div>;
        }}
      </TestContext.Consumer>
    );
  }
}
