// spread Operator

// Array에 ...을 붙이면 대괄호를 제거해준다.
var arr = ['hello', 'worid'];
console.log(...arr);

// String에 ...을 붙이면 문자 하나씩 펼쳐준다.
var str = 'hello';
console.log(str);
console.log(...str);

var myArr1 = [1, 2, 3];
var myArr2 = [4, 5];
var myArr3 = [...myArr1, ...myArr2];
console.log(myArr3);

// 얕은복사 깊은복사
var myArr4 = [1, 2, 3];
var myArr5 = myArr4;
var myArr6 = [...myArr4];

console.log(myArr4);
console.log(myArr5);
console.log(myArr6);

myArr4[2] = 4;

// myArr5는 myArr4의 메모리 주소를 복사
console.log(myArr4);
console.log(myArr5);
console.log(myArr6);

// 복사하다가 값 중복이 일어나면
var obj1 = { a: 1, b: 2 };
var obj2 = { a: 2, ...obj1 };
console.log(obj2);
// 중복되었던 값 a가 1으로 변경
// 중복되는 값이 있으면 뒤에 쓰일수록 그 값이 적용됨

function sum(a, b, c) {
  console.log(a + b + c);
}

sum(1, 2, 3);

// 배열의 값을 넣는 경우
var numArr = [10, 20, 30];
sum(numArr[0], numArr[1], numArr[2]); // 60
