const TYPE = {
  LOGIN: "logIn/logIn",
};

const logIn = ({ id, pw }) => {
  return {
    type: TYPE.LOGIN,
    payload: { id: id, pw: pw },
  };
};

const logOut = () => {
  return {
    type: TYPE.LOGIN,
    payload: { id: "", pw: "" },
  };
};

export const action = { logIn, logOut };

export const initialize = { id: "", pw: "" };

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.LOGIN: {
      return { id: payload.id, pw: payload.pw };
    }
    default:
      return state;
  }
};
