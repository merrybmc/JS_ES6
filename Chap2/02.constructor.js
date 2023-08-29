function Student() {
  this.name = 'kim';
  this.age = 15;
}

const student = new Student();
console.log(student);

function Machine(name) {
  this.name = name;
  this.age = 20;
  this.sayHi = function () {
    console.log('안녕하세요' + this.name + '입니다');
  };
}

const machine1 = new Machine('Park');
console.log(machine1);
machine1.sayHi();

// 연습문제

function Product(name, price) {
  this.name = name;
  this.price = price;
}

let basicProduct1 = { name: 'shirts', price: 50000 };
let basicProduct2 = { name: 'pants', price: 60000 };

let product1 = new Product('shirts', 50000);
let product2 = new Product('pants', 60000);
console.log(product1);
console.log(product2);
