function merge(list, left = 0, middle = 4, right = 7) {
  let l = left,
    r = middle;
  const temp = new Array();
  while (temp.length < list.length) {
    console.log(l, r, 123);
    if ((list[l] < list[r] || list[r] === undefined) && l < middle) {
      temp.push(list[l]);
      l++;
    } else {
      temp.push(list[r]);
      r++;
    }
  }
  return temp;
}

function mergeSort(list, left = 0, right = list.length - 1) {
  if (left >= right) return;
  const middle = (left + right) >> 1;
  mergeSort(list, left, middle);
  mergeSort(list, middle + 1, right);
  merge(list, left, middle, right);
}

// console.log(mergeSort([3, 7, 2, 6, 0, 1, 5, 4]));

console.log(merge([0, 1, 4, 5, 2, 3, 6, 7]));
