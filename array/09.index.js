function hanoi(n, from, to, other) {
    if (n === 1) {
        console.log(`move 1 from ${from} to ${to}`);
    } else {
        hanoi(n - 1, from, other, to);
        console.log(`move ${n} from ${from} to ${to}`);
        hanoi(n - 1, other, to, from);
    }
}
hanoi(3, 'left', 'right', 'middle');
