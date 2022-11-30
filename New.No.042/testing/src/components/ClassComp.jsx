import React from "react";

export default class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.props.func();
    this.state = { test: "state test" };
    // state 선언 및 정의 (초기화)
    // state : 상태값, React에서의 리 랜더링(다시 그리기)의 기준이된다.
    // state가 변경(재정의)되면 render 메서드를 다시 실행하여 웹페이지에 출력한다.
  }

  componentDidMount() {
    console.log("coponentDidMount");
    // 컴포넌트가 Virtual DOM에 생성될 때(마운트될 때)실행되는 메서드
  }

  componentDidUpdate(_props, _state) {
    console.log("componentDidUpdate");
    console.log(_props, _state);
    // 바뀌기 전 상태...?
    console.log(this.props, this.state);
    // 바뀌고 난 후 상태...?
    // state 값이 변화했을 때 실행되는 메서드
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    // 컴포넌트가 돔에서 삭제될 때 실행되는 메서드이다.
  }

  render() {
    return (
      <div
        onClick={function () {
          this.setState({ test: this.state.test + "1" });
          // state 재정의
        }.bind(this)}
      >
        <div>
          ClassComp {this.props.text} {this.state.test}
        </div>
      </div>
    );
  }
}
