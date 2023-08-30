{
  class Dog {
    constructor(type, color) {
      this.type = type;
      this.color = color;
    }
  }

  const dog1 = new Dog('말티즈', 'white');
  const dog2 = new Dog('진돗개', 'brown');
  console.log(dog1);
  console.log(dog2);

  class Cat extends Dog {
    constructor(type, color, age) {
      super(type, color);
      this.age = age;
    }

    plusAge() {
      if (this instanceof Cat) this.age += 1;
    }
  }

  const cat = new Cat('코숏', 'white', 5);
  console.log(cat);

  cat.plusAge();
  console.log(cat);
}

{
  class Unit {
    constructor() {
      this.attack = 5;
      this.HP = 100;
    }

    get betterPoint() {
      return console.log(this.attack + this.HP);
    }

    set heal(num) {
      this.HP += num;
    }
  }

  const unit = new Unit();
  console.log(unit);
  unit.betterPoint;
  unit.heal = 50;
  console.log(unit);
}
