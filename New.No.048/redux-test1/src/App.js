import { useState, useEffect } from "react";
import "./App.css";
import store from "./store";
import { COUNT1, actions as count1Actions } from "./action/count1";

function App() {
  const [inputCount, setCount] = useState(0);
  const [divCount, setDivCount] = useState(0);
  const [_, setRender] = useState(false);
  // _ 란 보통 사용하지 않을 변수의 이름으로 설정한다. 일종의 관례
  //  _ 라는 라이브러리(lowbar)도 있다. << 주의사항

  useEffect(() => {
    console.log(inputCount);
    store.dispatch(count1Actions.setDiff(inputCount));
  }, [inputCount]);

  return (
    <div className="App">
      <input
        type="number"
        onInput={(e) => {
          setCount((count) => +e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          store.dispatch(count1Actions.plus());
          // setDivCount(store.getState().counter1.count1);
          setRender((state) => !state);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          store.dispatch(count1Actions.minus());
          // setDivCount(() => store.getState().counter1.count1);
          setRender((state) => !state);
        }}
      >
        -
      </button>
      <div>{store.getState().counter1.count1}</div>
    </div>
  );
}

export default App;
