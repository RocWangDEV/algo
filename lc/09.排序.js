// function quickSort(list) {
//   if (list.length <= 1) return list;
//   const baseValue = list[0];
//   const left = [], right = [];
//   for (let i = 1; i < list.length; i++) {
//     if (list[i] < baseValue) {
//       left.push(list[i]);
//     } else {
//       right.push(list[i]);
//     }
//   }
//   return [...quickSort(left), baseValue, ...quickSort(right)];
// };

function swap(arr, left, right) {
  if (left !== right) {
    arr[left] = arr[left] ^ arr[right];
    arr[right] = arr[left] ^ arr[right];
    arr[left] = arr[left] ^ arr[right];
  }
}

function partition(arr, low, high) {

}

function quickSort(arr) {
  let index = 0;
  let leftSpace = -1;
  while (index < arr.length) {
    if (arr[index] <= arr[arr.length - 1]) {
      swap(arr, ++leftSpace, index);
    } else {

    }
    index++;
  }
}

const arr = [3, 1, 4, 6, 5, 0, 4, 2];
quickSort(arr);
console.log(arr);
// console.log(quickSort(arr));