function all(str) {
  const ans = new Array();
  const list = str.split("");
  if (str === null || list.length === 0) return ans;
  // let path = "";
  // f(list, path, ans);
  g(list, 0, ans);
  return ans;
}

function g(str, index, ans) {
  if (index === str.length) {
    ans.push(str.join(""));
  } else {
    for (let i = index; i < str.length; i++) {
      swap(str, index, i);
      g(str, index + 1, ans);
      swap(str, index, i);
    }
  }
}

function swap(chs, i, j) {
  [chs[i], chs[j]] = [chs[j], chs[i]];
}

function f(rest, path, ans) {
  const len = rest.length;
  if (len === 0) {
    ans.push(path);
  } else {
    for (let i = 0; i < len; i++) {
      const current = rest[i];
      rest.splice(i, 1);
      f(rest, path + current, ans);
      rest.splice(i, 1, current);
    }
  }
}

console.log(all("abc"));

// a b c d

// 0 a b c d
// 1 b
