// then, catch, finally
// {
//   let promise = new Promise();

//   promise
//     // then = promise 코드 실행이 성공할 경우 실행
//     .then(() => {
//       console.log(1);
//     })
//     .then(() => {
//       console.log(2);
//     })
//     .then(() => {
//       console.log(3);
//     })
//     // catch = promise 코드 실행이 실패할 경우 실행
//     .catch(() => {
//       console.log('catch');
//     })
//     // finally = promise 코드가 성공하든 실패하든 무조건 실행
//     .finally(() => {});
// }

// Promise resolve reject
// Promise 성공 실패의 경우에 맞춰서 각각 다른 값 반환
// 어려운 연산이 끝나고 특정 코드를 실행하고 싶을 때 사용
// 콜백함수 대신 사용
{
  let promise = new Promise((resolve, reject) => {
    // 성공할 시 코드 실행
    const sum = () => {
      console.log(2);
    };
    resolve(sum());
    // 실패할 시 코드 실행
    reject('코드 에러');
  });

  promise.then().catch();
}

// Promise 예시
{
  let promise = new Promise((resolve, reject) => {
    // 1초 후에 성공한 코드 실행
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  // 성공/실패에 따라 코드 실행
  promise
    .then(() => console.log('성공!'))
    .catch(() => {
      console.log('실패!');
    });
}
