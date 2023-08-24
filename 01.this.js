// 'use strict';

// 출력) 브라우저에서 window 기본 함수 출력
console.log('this_1', this);

function func() {
  console.log('this_2', this);
}

// 일반함수) 브라우저에서 window 기본 함수 출력
// 엄격모드 사용 시 undefined
func();

let object = {
  data: 'kim',
  func: function () {
    console.log('this_3', this);
  },
};

// 객체 안에서 실행되고 있는 오브젝트를 가리킴
object.func();

let object2 = {
  name: 'cho',
  data: {
    name: 'ahn',
    func: function () {
      console.log(this);
    },
  },
};

// 객체 안에 data 객체를 가리킴
object2.data.func();

let object3 = {
  name: 'cho',
  data: {
    name: 'ahn',
    func: () => {
      console.log(this);
    },
  },
};

// arrow function은 함수 바깥에 있던걸 가져다 써서 window를 가리킴
object3.data.func();

function Machine() {
  // 이 함수로 부터 새로 생성되는 오브젝트 (인스턴스)
  this.name = 'kim';
}

let myMachine = new Machine();
console.log(myMachine.name);
