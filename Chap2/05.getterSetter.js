{
  let person = {
    name: 'Park',
    age: 30,

    // gettter
    // return이 있어야함

    get nextAge() {
      return this.age + 1;
    },

    // setter
    // 파라미터가 1개 이상 있어야함

    setAge(age) {
      this.age = age;
    },
  };

  console.log(person.age);
  console.log(person.nextAge);

  person.setAge(40);
  console.log(person.age);
  console.log(person.nextAge);
}

{
  class Person {
    constructor() {
      this.name = 'Park';
      this.age = 20;
    }

    get nextAge() {
      return this.age + 1;
    }

    set setAge(age) {
      this.age = age;
    }
  }

  const person = new Person();
  console.log(person);
  console.log(person.nextAge);
}
