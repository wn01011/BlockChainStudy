const TYPE = {
  LOGOUT: "logout/logout",
};

const logOut = (id, pw) => {
  return {
    type: TYPE.LOGOUT,
    payload: { id, pw },
  };
};

export const action = { logOut };

export const initialize = { id: "", pw: "" };

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.LOGOUT:
      return { id: "", pw: "" };
    default:
      return state;
  }
};
