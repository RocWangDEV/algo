var minimumPerimeter = function (neededApples) {
  let sub = 12,
    n = 4;
  if (neededApples <= 12) return 8;
  while (true) {
    let value = 0;
    for (let i = n; i >= n >> 1; i--) {
      console.log(value);
      if (i === n || i === n >> 1) {
        value = value + n * 4;
      } else {
        value = value + n * 8;
      }
    }

    console.log(value, n);

    sub = sub + value;

    if (sub >= neededApples) {
      break;
    }

    n = n + 2;
  }
  return n * 4;
};

minimumPerimeter(68);
