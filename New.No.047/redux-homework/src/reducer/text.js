const reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "text/plus": {
      console.log([...state, payload.text], action);
      return [...state, payload.text];
    }
    //   ...state << 기존에 state를 넣는다.
    //  count1 : state.count1 + payload.input << count1 프로퍼티에 payload로 받은 input프로퍼티를 더한다.
    case "text/minus": {
      console.log(state.slice(0, state.length - 1), action);
      return state.slice(0, state.length - 1);
    }
    default:
      return state;
  }
};

export default reducer;
