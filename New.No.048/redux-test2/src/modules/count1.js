const TYPE = {
  PLUS: "count1/plus",
  MINUS: "count1/minus",
  INPUT: "count1/input",
};
// action 에서 사용할 type을 미리 정의해둔다.

const plus = {
  type: TYPE.PLUS,
};

const minus = {
  type: TYPE.MINUS,
};
// 각각의 액션을 미리 지정해준다.

const input = (input) => {
  return {
    type: TYPE.INPUT,
    payload: { input },
  };
};
// input에 대한 action을 return 하는 함수

export const action = { plus, minus, input };

export const initialize = { count1: 0 };

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.PLUS:
      return state + 1;
    case TYPE.MINUS:
      return state - 1;
    case TYPE.INPUT:
      return payload.input;
    default:
      return state;
  }
};
