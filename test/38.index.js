function fn(str) {
  const ans = new Set();
  let path = "";
  process(str.split(""), 0, ans, path);
  return ans;
}

function process(str, index, ans, path) {
  if (index === str.length) {
    ans.add(path);
    return;
  }
  process(str, index + 1, ans, path);
  process(str, index + 1, ans, path + str[index]);
}

console.log(fn("acccc"));
