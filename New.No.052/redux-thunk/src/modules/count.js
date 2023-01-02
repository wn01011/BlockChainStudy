import promiseTime from "./promiseTime";

const TYPE = {
  INCREAMENT: "count/increment",
  DECREMENT: "count/decrement",
};

const increment = () => {
  return {
    type: TYPE.INCREAMENT,
  };
};

const decrement = () => {
  return {
    type: TYPE.DECREMENT,
  };
};

// 기존의 redux 실행 순서
// 1. dispatch(action)을 호출한다. 해당 action은 reducer에 전달된다. << action은 무조건 객체 형식만 가능하다.
// 2. dispatch가 호출되면 reducer를 자동으로 호출한다.
// 3. reducer는 state와 action 매개변수를 받아 처리한다.
// 4. reducer의 return 값은 그대로 state에 정의된다.
// - useSelector를 사용하면 state 변화 시 랜더링을 다시 해준다. (reRendering)

// thunk 사용 시 실행 순서
// 1. dispatch(action)을 호출한다.
// 2. action이 함수인지 확인하여 함수라면 reducer에 전달하는 것이 아닌 action 함수 자체를 호출한다. << 확인은 thunk가 해준다. 전달하는 action 함수는 async, await가 가능하다.
// 3. action이 객체인 경우 기존의 redux 실행 순서와 마찬가지로 작동한다.

const asyncIncrement = () => {
  // 2. 사용자 클릭으로 dispatch(action.asyncIncrement()) 호출로 인해서 ayncIncrement가 호출된다.
  return async (dispatch, getState) => {
    // thunk 사용 시 action으로 함수를 dispatch에 전달할 수 있게 된다.
    try {
      const result = await promiseTime(TYPE.INCREAMENT, 1000);
      dispatch({ type: result });
    } catch (error) {
      dispatch({ type: "error", payload: error });
    }
  };
};
const asyncDecrement = () => {
  return async (dispatch, getState) => {
    // thunk 사용 시 action으로 함수를 dispatch에 전달할 수 있게 된다.
    try {
      const result = await promiseTime(TYPE.DECREMENT, 1000);
      dispatch({ type: result });
    } catch (error) {
      dispatch({ type: "error", payload: error });
    }
  };
};

export const action = { increment, decrement, asyncIncrement, asyncDecrement };

export const initialize = [];

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.INCREAMENT: {
      return +state + 1;
    }
    case TYPE.DECREMENT: {
      return +state - 1;
    }
    default:
      return state;
  }
};
