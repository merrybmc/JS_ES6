// 1. 간단한 메소드 만들기

// 사람이라는 오브젝트가 하나 있습니다.
// 이 오브젝트에 sayHi 라는 함수를 추가하고 싶습니다.
// 사람.sayHi() 라고 작성하면 콘솔창에 '안녕 나는 손흥민' 이라는 글자가 나와야 합니다.
// '손흥민'이라는 이름을 하드코딩해서 출력하기 보다는 실제 오브젝트 내에 있는 name에 해당하는 값이 출력되면 좋을 것 같습니다.

let person = {
  name: '손흥민',
  sayHi() {
    console.log(`안녕 나는 ${this.name}`);
  },
  //   화살표 함수는 window를 가리킴
  //   sayHi: () => {
  //     console.log(`안녕 나는 ${this.name}`);
  //   },
};

person.sayHi();

// 2. 오브젝트 내의 데이터를 모두 더해주는 메소드 만들기

// myData에 전부 더하는 함수를 만들어서 data 내의 값을 모두 더하여 출력해주어야 함
let myData = {
  data: [1, 2, 3, 4, 5],
  sum() {
    let result;
    result = this.data.reduce((a, b) => a + b);
    console.log(result);
  },
};

myData.sum();
