import { legacy_createStore as createStore } from "redux";
// createStore는 이름 그대로 store 만드는 함수. Deprecated 되었다.
//  - Deprecated : 중요도가 떨어져 더 이상 사용되지 않고 앞으로는 사라지게 될 (컴퓨터 시스템 기능 등)
//    - ex) img 태그의 width 속성 (attribute) << style로 사용하라고 했었다.
// createStore를 대신하는 함수가 @reduxjs/toolkit 라이브러리의 configureStore 메서드이다.
// createStore가 왜 살아났느냐 ? << 기존의 코드들이 너무 많아서 사용자가 너무 많다.
import { Provider } from "react-redux";
// React에서 Redux를 사용하기 위한 Root 컴포넌트를 가져온다. (Provider)
import { composeWithDevTools } from "redux-devtools-extension";
// 브라우저의 Redux DevTool과 연결해준다. 함수이다.
import store from "./components/store";

function App() {
  return (
    <Provider store={store}>
      {/*
       Redux를 사용하기 위해 Root 컴포넌트로 전체를 감싸준다.
       기존 Root Component는 Provider의 자식 컴포넌트가 된다. 
       Provider의 props로 store를 전달한다.
      */}

      <div className="App" style={{ textAlign: "center" }}>
        <input
          type="number"
          onInput={(e) => {
            store.dispatch({ type: "text", payload: { diff: e.target.value } });
          }}
        />
        <button
          onClick={() => {
            store.dispatch({ type: "plus", payload: { count: 0 } });
            // store의 dispatch 메서드를 사용해서 action({type : "plus", payload: {}}을 reducer에 전달한다.)
          }}
        >
          {"asdf"}
        </button>
      </div>
    </Provider>
  );
}

export default App;
