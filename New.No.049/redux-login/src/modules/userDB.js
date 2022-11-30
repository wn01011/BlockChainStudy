// 회원가입한 유저들의 정보
const TYPE = {
  REGIST: "userDB/regist",
};

// action
// action은 type과 payload로 이루어진 객체이다.
const regist = (userId, userPw, userName) => ({
  type: TYPE.REGIST,
  payload: { userId, userPw, userName },
});

export const action = { regist };

export const initialize = [];

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  console.log(state);
  switch (type) {
    case TYPE.REGIST:
      if (state.find((item) => item.userId === payload.userId)) return state;
      else return [...state, payload];
    default:
      return state;
  }
};
// 삼항연산자 => 조건 ? 참 : 거짓
// isBool ? "true" : "false"
// if(isBool){return "true"} else {return "false"}
