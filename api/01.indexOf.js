const arr = ['a', 'b', 'c', 'd', 'a', 'e', 'a'];

const indexArr = [];

let idx = arr.indexOf('a');

while (idx !== -1) {
  indexArr.push(idx);
  idx = arr.indexOf('a', idx + 1);
}

console.log(indexArr);

const newArr = [1, 2, 3, 4, 5, 3];

console.log(newArr.indexOf(3));
console.log(newArr.indexOf(3, 3));

const arr01 = [1, 2];
arr01.push(undefined);
console.log(arr01.indexOf(undefined));

const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3
};

console.log(Array.prototype.indexOf.call(arrayLike, 3));

Array.prototype.forEach.call(arrayLike, (i) => console.log(i, 'a'));