// useReducer << reducer 를 사용하는 Hook
// reducer가 무엇인가? << 변수를 정의함에 있어서 선행 작업? 정도 되는 함수이다.
// state / reducer / action / dispatch
// state : 상태값이다.
// action : 요청이다.
// dispatch : 요청을 받는 함수이다.
// reducer : 요청을 실행하는 함수이다.
// 동사무소에 가서 주민등록 등본 발급한다.
//  - 가서 번호표 뽑고 기다렸다 순서가 되면 접수원에게 가서 서류를 제출 / '발급해주세요' 라고 말하고 민증, 지문, 돈을 준다.
//  - 접수원이 모든 것을 받아서 확인 후에 정보를 받아 출력해서 우리에게 전달
//      - 서류 제출 / "발급해주세요" << action - 어떤 작업을 원하는지(주민등록 등본을 발행해 주세요 = 요청 ){민증, 지문, 돈 = 필요한것}
//      - 접수원이 요청을 받는다. << dispatch
//      - 접수원이 일을 한다. << reducer
// Redux = 전역변수(Context) + "-"(Reducer) =>
import { useReducer, createContext } from "react";
export const OfficeContext = createContext();

const reducer = (state, action) => {
  // reducer : 작업해서 state를 정의하는 메서드
  switch (action.type) {
    case "주민등록등본":
      if (action.payload.pay < 500) return "돈 내놔";
      return "주민등록등본이 발급되었습니다.";
    case "주민등록초본":
      return "주민등록초본 발급되었습니다.";
    case "건축물대장":
      return "건축물대장 발급되었습니다.";
    case "지방세납세증명":
      return "지방세납세증명 발급되었습니다.";
    case "운전면허 정보":
      return "운전면허 정보 발급되었습니다.";
    case "전입신고":
      return "전입신고 발급되었습니다.";
    case "병적증명서":
      return "병적증명서 발급되었습니다.";
    default:
      return "요청이 없습니다.";
  }
  console.log(state, action);
  return state;
};

export default function ReducerTest({ children }) {
  // children은 컴포넌트의 자식 컴포넌트(엘리먼트포함)이다.
  const [result, requestDispatch] = useReducer(reducer, "요청이 없습니다.");
  // const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <OfficeContext.Provider
      value={{ result, requestDispatch }}
      className="reducer"
    >
      {children}
    </OfficeContext.Provider>
  );
}
