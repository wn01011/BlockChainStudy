import React from "react";

export default class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    // Virtual DOM에 추가될 때 실행되는 함수
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    // state가 변경된 후에 실행되는 함수
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    // Virtual DOM에서 삭제될 때 실행되는 함수
    console.log("componentWillUnmount");
  }

  render() {
    console.log(this.props);
    return (
      <div
        onClick={function (e) {
          e.stopPropagation();
          this.props.setCount(+this.props.count + 1);
        }.bind(this)}
      >
        ㅎㅇㅎㅇ : {this.props.count}
      </div>
    );
  }
}

// yarn 이란
// - React가 Facebook에서 만든것이다.
// - Yarn은 React에 최적화하기 위해 FaceBook에서 만든 패키지 매니저이다.
// - npm 과 약간은 다르다. => node 18버전 들어오면서... 아예 달라졌다.
// - 설치법 : npm i -g corepack
// yarn create react-app yarntest
