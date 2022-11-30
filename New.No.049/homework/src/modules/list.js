// 리스트 정보
const TYPE = {
  REGIST: "list/regist",
  REMOVE: "list/remove",
};

const regist = ({ userId, title, context, time }) => ({
  type: TYPE.REGIST,
  payload: { userId, title, context, time },
});

const remove = (index) => ({
  type: TYPE.REMOVE,
  payload: { index },
});

export const action = { regist, remove };
export const initialize = [];

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE.REGIST:
      return [...state, payload];
    case TYPE.REMOVE:
      return [...state].filter((_, index) => index != payload.index);
    default:
      return state;
  }
};
