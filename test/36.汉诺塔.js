function hano(n) {
  leftToRight(n);
}

function leftToRight(n) {
  if (n === 1) {
    console.log("move 1 from left to right");
    return;
  }
  leftToMiddle(n - 1);
  console.log(`move ${n} from left to right`);
  middleToRight(n - 1);
}

function leftToMiddle(n) {
  if (n === 1) {
    console.log("move 1 from left to middle");
    return;
  }
  leftToRight(n - 1);
  console.log(`move ${n} from left to middle`);
  rightToMiddle(n - 1);
}

function rightToMiddle(n) {
  if (n === 1) {
    console.log("move 1 from right to middle");
    return;
  }
  rightToLeft(n - 1);
  console.log(`move ${n} from right to middle`);
  leftToMiddle(n - 1);
}

function middleToRight(n) {
  if (n === 1) {
    console.log("move 1 from middle to right");
    return;
  }
  middleToLeft(n - 1);
  console.log(`move ${n} from middle to right`);
  leftToRight(n - 1);
}

function middleToLeft(n) {
  if (n === 1) {
    console.log("move 1 from middle to left");
    return;
  }
  middleToRight(n - 1);
  console.log(`move ${n} from middle to left`);
  rightToLeft(n - 1);
}

function rightToLeft(n) {
  if (n === 1) {
    console.log("move 1 from right to left");
    return;
  }
  rightToMiddle(n - 1);
  console.log(`move ${n} from right to left`);
  middleToLeft(n - 1);
}

hano(31);
