function j(n) {
  if (n <= 1) return 1;
  return n * j(n - 1);
}

console.log(j(100));
