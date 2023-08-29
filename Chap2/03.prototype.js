// prototype === 유전자
{
  let num = 5;
  let obj = { name: 'hwang' };

  console.log(num.prototype);
  console.log(obj.prototype);

  let arr = [3, 1, 2];
  let arr2 = new Array(1, 2, 3);

  console.log(arr);
  console.log(arr2);

  arr.sort();
  console.log(arr);

  let obj2 = { name: 'kim' };
  let obj3 = new Object();
}
