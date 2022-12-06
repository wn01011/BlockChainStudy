// import { legacy_createStore as createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

// yarn add @reduxjs/toolkit
// redux toolkit 이라고 많이 부른다.
// redux 라이브러리의 업데이트 버전, 새로운 버전
// createStore가 deprecated된 원인

import { initialize, reducer } from "./counter";

// const store = createStore(
//   combineReducers({ count: reducer }),
//   { count: initialize },
//   composeWithDevTools()
// );

// export default store;

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { count: reducer },
  //   middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  //   미들웨어 추가 시 사용
  //   getDefaultMiddleware는 기본 미들웨어를 가져오는 함수
  //  - redux tookit은 기본적으로 'redux-devtools-extension' 라이브러리와 'redux-thunk'라이브러리를 지원한다.
});
