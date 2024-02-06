function findIt(list) {
  const content = new Array(32).fill(0);
  for (let i = 0; i < list.length; i++) {
    const current = list[i];
    for (let j = 31; j >= 0; j--) {
      if ((current & (1 << j)) !== 0) {
        content[j]++;
      }
    }
  }
  for (let i = 0; i < 32; i++) {
    if (content[i] > 1) {
      content[i] = content[i] % 3;
    }
  }
  return parseInt(content.reverse().join(''), 2);
}

console.log(findIt([5, 7, 5, 5]));