const words = ["a", "banana", "app", "appl", "ap", "apply", "apple"];

class Node {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.children = new Node();
    this.isEnd = false;
  }

  insert(word) {
    let node = this;
    for (const str of word) {
      const index = str.charCodeAt() - 'a'.charCodeAt();
      if (!node.children[index]) {
        node.children[index] = new Node();
      }
      node = node.children[index];
    }
    node.isEnd = true;
  }

  search(word) {
    let node = this;
    for (const str of word) {
      const index = str.charCodeAt() - 'a'.charCodeAt();
        if (!node.children[index] || !node.children[index].isEnd) {
            return false;
        }
        node = node.children[index];
    }
    return node && node.isEnd;
  }
}

var longestWord = function(words) {
  let ans = '';
  const trie = new Trie();
  for (const word of words) {
    trie.insert(word);
  }
  for (const word of words) {
    if (trie.search(word) && word.length > ans.length) {
      ans = word;
    }
  }
  return ans;
};

console.log(longestWord(words));