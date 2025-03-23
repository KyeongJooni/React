function add10(num) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업 실행하는 함수, executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
      reject("왜 실패했는지 이유..."); //비동기 작업 실패
    }, 2000);
  });
  return promise;
}

//then 메서드(성공했을 때만 작동)
// -> 그 후에
//promise
//  .then((value) => {
//    console.log(value);
//  })
//  .catch((error) => {
//    console.log(error);
//  }); // prosmie chaining

//실패했을 때
//prosmise.catch((error) => {
//  console.log(error);
//});

const p = add10(0);
p.then((result) => {
  console.log(result);
  return add10(result);
})
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
