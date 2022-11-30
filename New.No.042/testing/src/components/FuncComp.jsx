import { useState, useEffect } from "react";
export default function FuncComp({ text, func }) {
  // 함수형 컴포넌트에서 클래스형 컴포넌트의 기능들을 사용하기 위해 사용하는 것을 Hook이라고 한다.
  // Hook은 use로 시작한다.
  // useState, useEffect, useCallback, useMemo, useRef, useContext, useReducer 등등이 있다.
  // Hook은 사용자가 구현할 수도 있다.(커스텀 훅)
  //   - Custom Hook과 Component의 차이 => HTML 문법으로 return 하는가? 안하는가?
  // useState와 useEffect는 뺄 수 없는 Hook이다. 다만 나머지는 사용하지 않아도 크게 상관없다.
  const [test, setTest] = useState("state test");
  // state 선언 및 정의 (초기화)
  // state가 변경(재정의) 되면 컴포넌트를 다시 불러온다.
  // 단, 다시 불러올 때 Hook으로 된 변수, 함수들은 다시 부르지 않는다. (useState 등등)
  // use가 붙은 녀석들을 보고 Hook이라고 한다.
  // useState는 함수형 컴포넌트의 투톱 중 하나다.

  const [test1] = useState("state1 test");

  func();

  useEffect(() => {
    // useEffect는 랜더링 후에 실행되는 콜백함수이다.
    console.log("useEffect");
    return () => {
      console.log("componentWillUnmount");
      // 빈배열에서 useEffect에서 함수를 리턴하면 componentWillUnmount와 같은 작동을 한다.
    };
  }, []);
  // useEffect의 두번째 매개변수는 state값의 배열을 넣는다.
  // 빈배열의 경우 componentDidMount와 같은 역할을 한다.
  // 즉, Mount됐을때만 실행한다.
  // useEffect는 함수형 컴포넌트의 투톱 중 하나다.

  useEffect(() => {
    console.log("state change");
  });
  // 두번째 매개변수를 적지 않았다면 componentDidUpdate와 같다.
  // 왜? => 밑의 state예시를 봐보면 감지하는 대상이 없기 때문이다.

  useEffect(() => {
    console.log("test change");
    // state 중 test값이 변화 했을 때 실행되는 메서드
    // 감지하고 싶은 state들만 넣어서 감지가 가능하다.
  }, [test]);
  // 두 번째 매개변수 배열의 아이템으로 프로그래머가 감지하고 싶은 state를 넣는다.

  useEffect(() => {
    console.log("test, test1 change");
  }, [test, test1]);
  // 여러개도 가능하다.

  return (
    <div
      onClick={function () {
        setTest(test + "1");
      }}
    >
      <div>
        FuncComp {text} {test} {test1}
      </div>
    </div>
  );
}
