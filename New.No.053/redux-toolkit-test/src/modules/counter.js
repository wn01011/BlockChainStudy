// const TYPE = {
//   INCREMENT: "counter/increment",
//   DECREMENT: "counter/decrement",
// };

// const increment = () => ({
//   type: TYPE.INCREMENT,
// });
// const decrement = () => ({
//   type: TYPE.DECREMENT,
// });

// export const action = { increment, decrement };

// export const initialize = 0;

// export const reducer = (state = initialize, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case TYPE.INCREMENT:
//       return state + 1;
//     case TYPE.DECREMENT:
//       return state - 1;
//     default:
//       return state;
//   }
// };

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const promiseTime = (count, extra) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log(count, extra);
        resolve(count.count);
      }, 1000 * count.time);
    } catch (error) {
      reject(error);
    }
  });
};

export const counterThunk = createAsyncThunk(
  "count/countThunk", // 첫번째 매개변수로 type의 이름을 설정한다.
  async (count, extra) => {
    // 두번째 매개변수로 reducer를 작성한다.
    // 이 reducer의 첫번째 매개변수는 전달될 함수의 매개변수이고 두번째 매개변수는 기타 정보를 모아놓은 인자가된다.
    return await promiseTime(count, extra);
  }
);

const counterSlice = createSlice({
  // createSlice로 actions, reducers, 등등을 전부 한번에 생성한다.
  name: "count", // action의 이름(type), action의 type에 '액션명/리듀서명'으로 표기된다.
  initialState: { value: 0, isLoading: false }, // 초기값, 객체로만 가능
  reducers: {
    // reducer를 만든다.
    increment: (state) => {
      state.value += 1; // 기존의 redux에서의 순수함수와는 달리 value를 직접 수정하는 방법도 가능하다.
      console.log(state);
    },
    decrement: (state) => {
      state.value -= 1;
    },
    input: (state, action) => {
      if (action.payload) state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    // 추가적인 리듀서를 작성한다.

    builder
      .addCase(counterThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(counterThunk.fulfilled, (state, action) => {
        // builder의 addCase 메서드를 사용해서 각 작업에 대해서 내용을 작성한다.
        // fulfilled의 경우 reducer가 성공적으로 완료되었을 시에 실행하는 작업이다.
        state.value = action.payload;
        state.isLoading = false;
      })
      .addCase(counterThunk.rejected, (state, action) => {});
  },
});

export const action = counterSlice.actions;
// createSlice는 action을 자동으로 만들어준다.(action함수다.)
// dispatch에 action으로 createSlice로 생성된 actions를 사용한다.
// dispatch(action)

export const reducer = counterSlice.reducer;
// store에 reducer으로 createSlice로 생성된 reducer를 사용한다.
