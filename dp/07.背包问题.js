const weights = [3, 2, 4, 7];
const values = [5, 6, 3, 19];
const bag = 11;
function dp(w, v, b) {
    return process(w, v, 0, b);
}
function process(w, v, index, capacity) {
    if (capacity < 0) {
        return -1;
    }
    if (index === w.length) {
        return 0;
    }
    const value1 = process(w, v, index + 1, capacity);
    const pre = process(w, v, index + 1, capacity - w[index]);
    let value2 = 0;
    if (pre !== -1) {
        value2 = v[index] + pre;
    }
    return Math.max(value1, value2);
}
console.log(dp(weights, values, bag));