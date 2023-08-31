// 비동기식처리 (Asynchronous)
// 오래 걸리는 작업이 있을 경우
// 재껴두고 다른 작업부터 처리하는 방식
{
  //   console.log(1);
  //   setTimeout(() => {
  //     console.log(2);
  //   }, 1000);
  //   console.log(3);
}

// JS 순차적으로 실행하려면
{
  console.log(1);
  // 콜백함수 사용
  setTimeout(function () {
    console.log(2);
  }, 1000);
}

// 순차적 콜백함수 사용 예시
{
  function firstFunc(func) {
    console.log(1);
    func();
  }

  function secondFunc() {
    console.log(2);
  }

  firstFunc(secondFunc);
}
