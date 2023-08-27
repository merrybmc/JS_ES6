// 변수의 Hoisting 현상
// 변수의 선언을 변수 범위 맨위로 끌고오는 현상

// 아직 변수 선언을 안했는데 먼저 출력하면
// undefined
console.log(age); // undefined

var age = 30;

console.log(age); // 30
