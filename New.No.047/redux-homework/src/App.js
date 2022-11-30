import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { useState, useEffect } from "react";

function App() {
  const [tempText, setTempText] = useState("");
  const [tempList, setTempList] = useState([]);
  const [a, setA] = useState(0);

  return (
    <Provider store={store}>
      <div className="App">
        <input
          type={"text"}
          onInput={(e) => {
            setTempText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            setTempList([...tempList, tempText]);
            store.dispatch({
              type: "text/plus",
              payload: { text: tempText },
            });
            console.log(store.getState());
          }}
        >
          push
        </button>
        <button
          onClick={() => {
            setTempList(tempList.slice(0, tempList.length - 1));
            store.dispatch({
              type: "text/minus",
              payload: { text: tempText },
            });
          }}
        >
          remove
        </button>
        <div>
          {store.getState().text.map((item, index) => (
            <div key={`tempList-${index}`}>{item}</div>
          ))}
        </div>
      </div>
    </Provider>
  );
}

export default App;
