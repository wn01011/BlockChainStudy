const reducer = (state, action) => {
  switch (action.type) {
    case "plus": {
      console.log(state, action);
      return { ...state, count: state.count + state.diff };
    }
    case "text": {
      console.log(action.payload.diff);
      return { ...state, diff: +action.payload.diff };
    }
    default:
      return state;
  }
};

export default reducer;
