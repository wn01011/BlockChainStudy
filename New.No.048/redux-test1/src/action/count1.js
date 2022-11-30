export const COUNT1 = {
  PLUS: "count1/Plus",
  MINUS: "count1/Minus",
  SETDIFF: "count1/setDiff",
};

const plus = () => ({
  type: COUNT1.PLUS,
});

const minus = () => ({
  type: COUNT1.MINUS,
});

const setDiff = (diff) => ({
  type: COUNT1.SETDIFF,
  payload: { diff },
});

export const actions = { plus, minus, setDiff };
