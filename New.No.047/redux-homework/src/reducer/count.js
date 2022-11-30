const reducer = (state = { count: 0, step: 1 }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "count/plus": {
      return { ...state, count: state.count + +state.step };
    }
    case "count/minus": {
      return { ...state, count: state.count - +state.step };
    }
    default:
      return state;
  }
};

export default reducer;
