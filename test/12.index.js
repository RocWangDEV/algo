function fb(n, a = 0, b = 1) {
  if (n === 0) {
    return a;
  }
  return fb(n - 1, b, a + b);
};

console.log(fb(3));