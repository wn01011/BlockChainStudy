import React, { useState } from "react";
import "./App.css";
import BtnComp from "./components/BtnComp";
// import ClassComp from "./components/ClassComp";

// function App() {
//   const [isMount, setMount] = useState(true);
//   const [count, setCount] = useState(0);
//   const changeMount = () => {
//     setMount(!isMount);
//   };

//   const myHeader = (
//     <h1
//       onClick={() => {
//         changeMount();
//       }}
//     >
//       MyClassComponent
//       {isMount ? <ClassComp count={count} setCount={setCount} /> : <></>}
//     </h1>
//   );
//   const myDiv = (
//     <div>componentDidMount & componentDidUpdate & componentWillUnmount</div>
//   );
//   return (
//     <>
//       {myHeader} {myDiv}
//       {<ClassComp count={count} setCount={setCount} />}
//     </>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstNum: undefined, secondNum: undefined, calculNum: 0 };
  }

  selNum(num) {
    if (this.state.firstNum == undefined) {
      this.setState({ ...this.state, firstNum: num });
    } else if (this.state.secondNum == undefined) {
      this.setState({ ...this.state, secondNum: num });
    }
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    // 컴포넌트를 만들때 필수적인 요소이다. (Virtual DOM에 그려지는 HTML 문법)
    // 클래스 컴포넌트에서만 render() 사용 / 함수형 컴포넌트에서는 return 으로 바로 사용
    console.log(this);
    return (
      <div className="calculator">
        <div className="row">
          <BtnComp item="7" onClick={this.selNum.bind(this)}></BtnComp>
          <BtnComp item="8" onClick={this.selNum.bind(this)}></BtnComp>
          <BtnComp item="9" onClick={this.selNum.bind(this)}></BtnComp>

          <BtnComp
            item="*"
            onClick={function (e) {
              console.log(this.state.firstNum * this.state.secondNum);
              if (
                this.state.firstNum == undefined ||
                this.state.secondNum == undefined
              )
                return;
              this.setState({
                firstNum: undefined,
                secondNum: undefined,
                calculNum: this.state.firstNum * this.state.secondNum,
              });
            }.bind(this)}
          ></BtnComp>
        </div>
        <div className="row">
          <BtnComp item="4" onClick={this.selNum.bind(this)}></BtnComp>
          <BtnComp item="5" onClick={this.selNum.bind(this)}></BtnComp>
          <BtnComp item="6" onClick={this.selNum.bind(this)}></BtnComp>
          <BtnComp
            item="+"
            onClick={function (e) {
              console.log(this.state.firstNum + this.state.secondNum);
              if (
                this.state.firstNum == undefined ||
                this.state.secondNum == undefined
              )
                return;
              this.setState({
                firstNum: undefined,
                secondNum: undefined,
                calculNum: this.state.firstNum + this.state.secondNum,
              });
            }.bind(this)}
          ></BtnComp>
        </div>

        <div className="row">
          <BtnComp item="1" onClick={this.selNum.bind(this)}></BtnComp>
          <BtnComp item="2" onClick={this.selNum.bind(this)}></BtnComp>
          <BtnComp item="3" onClick={this.selNum.bind(this)}></BtnComp>
          <BtnComp
            item="-"
            onClick={function (e) {
              console.log(this.state.firstNum - this.state.secondNum);
              if (
                this.state.firstNum == undefined ||
                this.state.secondNum == undefined
              )
                return;
              this.setState({
                firstNum: undefined,
                secondNum: undefined,
                calculNum: this.state.firstNum - this.state.secondNum,
              });
            }.bind(this)}
          ></BtnComp>
        </div>
        <div className="row">
          <BtnComp
            item={Math.round(this.state.calculNum * 1000) / 1000}
            onClick={function (e) {
              if (this.state.firstNum == undefined) {
                this.setState({ ...this.state, firstNum: 1 });
              } else if (this.state.secondNum == undefined) {
                this.setState({ ...this.state, secondNum: 1 });
              }
            }.bind(this)}
          ></BtnComp>
          <BtnComp
            item="0"
            onClick={function (e) {
              if (this.state.firstNum == undefined) {
                this.setState({ ...this.state, firstNum: 2 });
              } else if (this.state.secondNum == undefined) {
                this.setState({ ...this.state, secondNum: 2 });
              }
            }.bind(this)}
          ></BtnComp>
          <BtnComp
            item="="
            onClick={function (e) {
              if (this.state.firstNum == undefined) {
                this.setState({ ...this.state, firstNum: 3 });
              } else if (this.state.secondNum == undefined) {
                this.setState({ ...this.state, secondNum: 3 });
              }
            }.bind(this)}
          ></BtnComp>
          <BtnComp
            item="/"
            onClick={function (e) {
              console.log(this.state.firstNum / this.state.secondNum);
              if (
                this.state.firstNum == undefined ||
                this.state.secondNum == undefined
              )
                return;
              this.setState({
                firstNum: undefined,
                secondNum: undefined,
                calculNum: this.state.firstNum / this.state.secondNum,
              });
            }.bind(this)}
          ></BtnComp>
        </div>
      </div>
    );
  }
}

export default App;
