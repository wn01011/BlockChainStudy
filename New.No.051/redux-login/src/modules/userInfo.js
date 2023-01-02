// 로그인한 유저의 정보
const TYPE = {
  LOGIN: "userInfo/login",
  LOGOUT: "userInfo/logout",
};

const logIn = (userId, userPw, userDB) => ({
  type: TYPE.LOGIN,
  payload: { userId, userPw, userDB },
});

const logOut = () => ({
  type: TYPE.LOGOUT,
});

export const action = { logIn, logOut };
export const initialize = { userId: "", userPw: "", userName: "" };

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE.LOGIN:
      console.log(payload.userDB);
      const tempUser = payload.userDB.find(
        (item) => item.userId == payload.userId && item.userPw == payload.userPw
      );
      if (tempUser) {
        return {
          userId: payload.userId,
          userPw: payload.userPw,
          userName: tempUser.userName,
        };
      } else {
        return initialize;
      }
    case TYPE.LOGOUT:
      return initialize;
    default:
      return state;
  }
};
