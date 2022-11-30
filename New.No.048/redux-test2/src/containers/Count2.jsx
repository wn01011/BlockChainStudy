import Count2Comp from "../components/Count2";
import { connect } from "react-redux";
import { action } from "../modules/count2";

const Count2Container = ({ count2, plus, minus, input }) => {
  return <Count2Comp count2={count2} plus={plus} minus={minus} input={input} />;
};

const mapStateToProps = (state, props) => {
  return { count2: state.count2, ...props };
};

const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => {
      dispatch(action.plus);
    },
    minus: () => {
      dispatch(action.minus);
    },
    input: (input) => {
      dispatch(action.input(input));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Count2Container);
// connect는 매개변수로 mapStateToProps 콜백함수 또는 mapStateToProps 콜백함수와 mapDispatchToProps 콜백함수를 받는다.
// mapStateToProps 콜백함수의 매개변수로는 state와 props를 받는다.
//  - state는 store(redux)의 state이다.
//  - props는 상위 컴포넌트(여기선 App.js)에서 전달한 props이다.
// mapDispatchToProps 콜백함수의 매개변수로는 dispatch를 받는다.
//  - dispatch는 store의 dispatch 메서드 이다.
//  connect의 매개변수인 두 콜백함수의 return 값인 객체는 객체 내의 각각의 프로퍼티가 2번째 함수?(Count2Container 를 매개변수로 받는 함수)
// mapStateToProps 콜백함수와 mapDispatchToProps 콜백함수의 리턴값을 props로 뒤의 컴포넌트에 전달한다.
