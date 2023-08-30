{
  let arr1 = [100, 200, 300];

  let [num1, num2, num3] = arr1;
  console.log(num1, num2, num3);

  let arr2 = [100, 200];

  let [num4, num5, num6 = 300, num7] = arr2;
  console.log(num4, num5, num6, num7);

  let obj = { name: 'Cho', age: 30 };
  let { name: name2, age } = obj;
  console.log(name2, age);
}

{
  let name = 'Kim';
  let age = 30;
  let obj = { name, age };
  console.log(obj);
}

{
  let obj = { name: 'Kim', age: 30 };

  function func({ name, age }) {
    console.log(name, age);
  }

  func(obj);
}
