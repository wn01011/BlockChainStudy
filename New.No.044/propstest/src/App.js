import React, { useState } from "react";
import "./App.css";

function App() {
  let num = 0;
  const [num1, setNum1] = useState(0);
  const [color, setColor] = useState(0);

  const increase = () => {
    num += 1;
    setNum1(num1 + 1);
    console.log(num1);
  };

  return (
    <div className="App" onClick={increase}>
      <ChlidFunc text="string" num={num1} setColor={setColor} />
      <ChlidComp text="string" num={num1} color={color} />
    </div>
  );
}

class ChlidComp extends React.Component {
  constructor(props) {
    // props란 부모 컴포넌트가 전달한 데이터
    // 보통은 읽기 전용으로 쓴다. << 재정의를 하지 않는다.
    super(props);
    // 클래스형 컴포넌트에서는 constructor(생성자)에서 매개변수로 받아
    // 상속 부모 클래스(React.Component)의 constructor(super)를 호출한다.
    // 이후 this.props를 사용하여 호출할 수 있다.
    console.log(this.props);
  }

  render() {
    return (
      <>
        <div style={{ color: "#" + this.props.color.toString(16) }}>
          {/* toString(여기에 숫자가 들어가면) 해당 진수로 바꿔준다. */}
          {this.props.num}
        </div>
      </>
    );
  }
}

function ChlidFunc(props) {
  // 함수형 컴포넌트에서는 매개변수로 바로 받는다.
  // {}를 사용하여 구조 분해 할당을 할 수 있다.
  // const {} = props와 같다.
  console.log(props);
  const changeColor = () => {
    props.setColor((state) => state + 50);
    //props의 setColor 메서드를 호출한다.
  };
  return <div onClick={changeColor}>{props.num}</div>;
}

export default App;
