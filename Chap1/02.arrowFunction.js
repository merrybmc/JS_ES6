{
  // 기본 함수
  // 1
  function func() {}

  // 2
  let func2 = function () {};

  // ES6 화살표 함수
  let func3 = () => {};

  let plus = (num) => console.log(num + 10);

  plus(5);

  // 장점
  // 1. 코드들을 기능으로 묶고 싶을 때 사용
  // 2. 입출력을 위한 용도로 쓰고 싶을 때 사용
  // 3. 파라미터가 1개면 소괄호 생략 가능
  // 4. 코드 한 줄이면 return과 중괄호 생략 가능
  // 5. 함수나 객체에서 바깥의 window 값을 내부에서 그대로 사용

  // 화살표 함수 예시

  // 1. forEach 콜백함수
  let myArr = [1, 2, 3, 4];
  myArr.forEach((num) => console.log(num));

  // 2. Object 안의 함수
  let myObj = {
    name: 'Kim',
    func: () => {
      console.log(this);
    },
  };
  console.log(myObj);
}
