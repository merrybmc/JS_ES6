{
  // class (ES6)
  // constructor

  class Parent {
    name;
    constructor(name) {
      this.name = name;
      this.sayHi = function () {
        console.log('Hello');
      };
    }
    sayHi2() {
      console.log('World');
    }
  }

  Parent.prototype.sayHello = function () {
    console.log('Hello World');
  };

  let brother = new Parent('Kim');
  console.log(brother);
  brother.sayHi();
  brother.sayHi2();
  brother.__proto__;
  console.log(brother.__proto__);
  brother.sayHello();
}

{
  class GrandFather {
    constructor(name) {
      this.firstName = 'Kim';
      this.lastName = name;
    }

    sayHi() {
      console.log('할아버지 안녕');
    }
  }

  let grandFather = new GrandFather('Byeong Min');
  console.log(grandFather);

  class Father extends GrandFather {
    constructor(name, age) {
      super(name);
      this.age = age;
    }
    sayHi() {
      // 상속받은 것보다 우선순위
      console.log('아빠 안녕');
      // 부모의 sayHi도 불러오기
      super.sayHi();
    }
  }

  // super = 부모의 prototype

  let father = new Father('Byeong Min', 50);
  console.log(father);
  father.sayHi();
}
