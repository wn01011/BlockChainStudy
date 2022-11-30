import { useState, useEffect } from "react";
import "./App.css";
import store from "./store";

function App() {
  const [inputCount, setCount] = useState(0);
  const [divCount, setDivCount] = useState(0);

  useEffect(() => {
    console.log(inputCount);
    store.dispatch({
      type: "count1/setDiff",
      payload: { diff: inputCount },
    });
  }, [inputCount]);

  useEffect(() => {}, [divCount]);

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
          setDivCount(store.getState().counter1.count1);
          store.dispatch({ type: "count1/Plus" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setDivCount(() => store.getState().counter1.count1);
          store.dispatch({ type: "count1/Minus" });
        }}
      >
        -
      </button>
      <div>{divCount}</div>
    </div>
  );
}

export default App;
