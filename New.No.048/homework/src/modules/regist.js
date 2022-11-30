const TYPE = {
  REGIST: "regist/regist",
};

const regist = ({ id, pw }) => {
  console.log(id, pw);
  return {
    type: TYPE.REGIST,
    payload: { id: id, pw: pw },
  };
};

export const action = { regist };

export const initialize = [];

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.REGIST:
      return [...state, { id: payload.id, pw: payload.pw }];
    default:
      return state;
  }
};
