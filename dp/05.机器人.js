/**
 * M = 5
 * S = 2
 * N = 3
 * E = 3
 *
 * [][o][e][][]
 *
 * 2-3-4-3
 * 2-1-2-3
 * 2-3-2-3
 */

function walk(total, current, rest, end) {
  if (rest === 0) {
    return current === end ? 1 : 0;
  }
  if (current === 1) return walk(total, current + 1, rest - 1, end);
  if (current === total) return walk(total, current - 1, rest - 1, end);
  return (
    walk(total, current + 1, rest - 1, end) +
    walk(total, current - 1, rest - 1, end)
  );
}

const M = 5;
const S = 2;
const N = 3;
const E = 3;

console.log(walk(M, S, N, E));
