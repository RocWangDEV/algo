/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    const n = difficulty.length;
    const m = worker.length;
    const map = new Map();
    let ans = 0;
    difficulty.sort((a, b) => a - b);
    worker.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        map.set(difficulty[i], profit[i]);
    }
    for (let i = 0; i < m; i++) {
        const target = findTarget(difficulty, worker[i], map);
        console.log(difficulty[target]);
        ans += target === -1 ? 0 : map.get(difficulty[target]);
    }
    console.log(map);
    return ans;
};

function findTarget(arr, target, map) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    let maxValue = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) {
            if (map.get(arr[mid]) > maxValue) {
                maxValue = map.get(arr[mid]);
                result = mid;
            }
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}

// 10 82 84 85 92

const difficulty  = [5,50,92,21,24,70,17,63,30,53], profit = [68,100,3,99,56,43,26,93,55,25], worker = [96,3,55,30,11,58,68,36,26,1];
console.log(maxProfitAssignment(difficulty, profit, worker));
