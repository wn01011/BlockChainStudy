import logo from "./logo.svg"; // 이미지를 불러온다.
import "./App.css"; // css 파일을 불러온다.
import Test from "./Test.jsx";

function App() {
  // 파스칼 표기법을 사용 << Component이다. (이후 설명 예정)
  return (
    <div className="App">
      <Test test="테스트중입니다." value1="이건 벨류?">
        <div>이게 테스트?</div>
        <div>테스트2?</div>
      </Test>
      {/* Component의 예시이다. */}

      {/* react에서는 class가 아닌 className 이라고 한다. */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
