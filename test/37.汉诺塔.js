function hano(n, from, to, other) {
  if (n === 1) {
    console.log("move 1 from " + from + " to " + to);
  } else {
    hano(n - 1, from, other, to);
    console.log("move " + n + " from " + from + " to " + to);
    hano(n - 1, other, to, from);
  }
}

hano(3, "left", "right", "middle");
