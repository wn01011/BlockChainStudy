function testFunc(num, time, func) {
  setTimeout(() => {
    if (func) {
      func(num, time, func);
    } else {
      console.log(num, time, "end");
    }
  }, time);
}

// testFunc(
//   1,
//   1000,
//   testFunc(2, 2000, testFunc(3, 3000, testFunc(3, 3000, testFunc(4, 4000))))
// );

function testPromise(num = 1) {
  return new Promise((resolve, reject) => {
    // resolve는 완료 했을 때
    // reject는 에러 발생 시
    try {
      if (num > 10) reject({ data: "숫자가 너무 커" });
      else {
        console.log(num, num * 100);
        setTimeout(() => {
          resolve(num + 1);
        }, num * 100);
      }
    } catch (error) {
      console.log(error);
    }
  });
}

// testPromise(1)
//   .then((data) => {
//     return testPromise(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function asyncFunc() {
  // async : promise를 기다리기 위해서(동기처럼 사용하기 위해서) 사용한다.
  try {
    let temp = await testPromise(1);
    temp = await testPromise(temp);
    temp = await testPromise(temp);
    temp = await testPromise(temp);
    temp = await testPromise(temp);
    temp = await testPromise(temp);
    temp = await testPromise(temp);
    temp = await testPromise(temp);
    temp = await testPromise(temp);
    temp = await testPromise(temp);
    temp = await testPromise(temp);
    temp = await testPromise(temp);
    // await + promise : promise 를 기다려서 resolve 값을 반환받는다.
    console.log("temp : " + temp);
  } catch (err) {
    console.log(err);
  }
}
asyncFunc();
