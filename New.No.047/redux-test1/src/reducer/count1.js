const reducer = (state = { count1: 0, diff: 1 }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "count1/Plus": {
      console.log(state, action);
      return { ...state, count1: state.count1 + +state.diff };
    }
    //   ...state << 기존에 state를 넣는다.
    //  count1 : state.count1 + payload.input << count1 프로퍼티에 payload로 받은 input프로퍼티를 더한다.
    case "count1/Minus": {
      console.log(state, action);
      return { ...state, count1: state.count1 - +state.diff };
    }
    case "count1/setDiff": {
      console.log(state);
      return { ...state, diff: payload.diff };
    }

    default:
      return state;
  }
};

export default reducer;
