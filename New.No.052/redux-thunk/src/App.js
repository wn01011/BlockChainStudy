// redux-thunk는 비동기 처리를 사용하기 위해서 미들웨어로 쓰인다.
import { useDispatch, useSelector } from "react-redux";

import { action } from "./modules/count";
import promiseTime from "./modules/promiseTime";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count | 0);
  return (
    <div className="App">
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch(action.increment());
        }}
      >
        +
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(action.decrement());
        }}
      >
        -
      </button>
      <br />
      <button
        onClick={() => {
          promiseTime(action.increment(), 1000)
            .then((data) => {
              // then 메서드를 사용하여 매개변수로 콜백함수를 전달한다.
              // 전달된 콜백함수는 매개변수로 Promise의 resolve 결과를 받는다.
              // promiseTime.js의 6번째 줄에서 전달하는 type매개변수를 여기서 data 매개변수로 받는다.
              dispatch(data);
            })
            .catch((error) => {});

          // const callbackHell = (text, func) => {
          //   setTimeout(() => {
          //     console.log(text);
          //     if (func) func();
          //   }, 1000);
          // };

          // callbackHell("비동기 확인1", () => {
          //   callbackHell("비동기 확인2", () => {
          //     callbackHell("비동기 확인3", () => {
          //       callbackHell("비동기 확인4", () => {
          //         callbackHell("비동기 확인5");
          //       });
          //     });
          //   });
          // });

          // const callbackPromise = (text, time) => {
          //   return new Promise((resolve, reject) => {
          //     // resolve는 성공 시 결과를 전달한다. 전달할 데이터는 resolve의 매개변수로 전달한다.
          //     // reject는 실패 시 에러를 전달한다. 사용법은 resolve와 같다.
          //     try {
          //       // try 스코프 내의 코드를 실행한다.
          //       // 도중에 오류가 발생하면 아래의 catch의 error로 전달한다.
          //       if (text == "프라미스3" || text == "어싱크 확인4")
          //         reject("end");
          //       setTimeout(() => {
          //         resolve(text);
          //       }, time);
          //     } catch (error) {
          //       reject(error);
          //     }
          //   });
          // };
          // callbackPromise("프라미스1", 1000)
          //   .then((result) => {
          //     // then은 promise 성공 시 실행하는 콜백함수를 전달한다.
          //     // 콜백함수의 매개변수는 resolve에 전달된 매개변수를 받는다.

          //     console.log(result);
          //     return callbackPromise("프라미스2", 1000);
          //     // 다음 프라미스(작업)은 return 으로 반환하며 아래에 then으로 위의 프라미스(현재의 89번 줄)의 결과를 받을 수 있다.
          //   })
          //   .then((result) => {
          //     console.log(result);
          //     return callbackPromise("프라미스3", 1000);
          //   })
          //   .catch((error) => {
          //     console.error(error);
          //   });

          // const asyncFunc = async () => {
          //   try {
          //     console.log(await callbackPromise("어싱크 확인1", 1000));
          //     // await는 프라미스 함수가 끝날 때 까지 기다리도록 한다.
          //     // 아래의 줄로 내려가지 않는다. 즉, 비동기 작업을 동기처럼 작성할 수 있게 해준다.
          //     console.log(await callbackPromise("어싱크 확인2", 1000));
          //     console.log(await callbackPromise("어싱크 확인3", 1000));
          //     console.log(await callbackPromise("어싱크 확인4", 1000));
          //     console.log(await callbackPromise("어싱크 확인5", 1000));
          //   } catch (error) {
          //     console.error(error);
          //   }
          // };
          // asyncFunc();
        }}
      >
        Promise +
      </button>
      <br />
      <button
        onClick={async () => {
          const temp = await promiseTime(action.decrement(), 1000);
          // 1초간 기다린 후에 액션을 받아서
          dispatch(temp);
          // dispatch에 액션(temp)을 전달한다.
          // const temp = dispatch(await promiseTime(action.decrement(), 1000)) << 와 같이 작성하면 오류가 발생한다.
          // dispatch에 전달하는 매개변수는 기본적으로 객체 형식의 action만 가능하다. << {}로 된 Object(객체)만 가능하다.
          // action에서 비동기 처리를 할 수 있도록 중간 과정을 추가하는 것이 redux-thunk이다.
          // 중간 과정으로 Promise, axios등을 처리할 수 있도록 async, await를 사용할 수 있게 추가한다.
        }}
      >
        Promise -
      </button>
      <br />
      <button
        onClick={() => {
          // 1. 사용자가 클릭한다. 클릭 시 dispatch를 호출하며 action의 asyncIncrement 메서드를 호출한다.
          // 해당 메서드는 함수를 반환(return)한다.
          console.log("1. Click");
          dispatch(action.asyncIncrement());
        }}
      >
        Async +
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(action.asyncDecrement());
        }}
      >
        Async -
      </button>
      <br />
    </div>
  );
}

export default App;
