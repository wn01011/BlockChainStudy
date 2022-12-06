import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { action, counterThunk } from "./modules/counter";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.count.value;
  });
  const isLoading = useSelector((state) => state.count.isLoading);
  const [inputCount, setCount] = useState(0);
  const [input, setInput] = useState(0);

  return (
    <div>
      <div>{count}</div>
      {!isLoading || <div>Now Loading...</div>}
      <div>
        <input
          type={"number"}
          value={input}
          onInput={({ target: { value } }) => {
            setInput(value);
            dispatch(action.input(value));
          }}
          placeholder={"inputCount"}
        />
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(action.increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(action.decrement());
          }}
        >
          -
        </button>
      </div>
      <div>
        <input
          type={"number"}
          value={inputCount}
          onInput={(e) => {
            setCount(e.target.value);
          }}
          placeholder={"time"}
        />

        <button
          onClick={() => {
            dispatch(counterThunk({ count: inputCount, time: 3 }));
          }}
        >
          set Count
        </button>
      </div>
    </div>
  );
}

export default App;
