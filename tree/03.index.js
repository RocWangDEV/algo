const words = ["a", "banana", "app", "appl", "ap", "apply", "apple"];
// const words = ['aaa', 'ab'];

// class TrieNode {
//   constructor(val = '') {
//     this.val = val;
//     this.children = {};
//     this.isEndOfWord = false;
//   }
// }

// class Trie {
//   constructor() {
//     this.root = new TrieNode();
//   }

//   insert(word) {
//     let node = this.root;
//     for (let char of word) {
//       if (!node.children[char]) {
//         node.children[char] = new TrieNode(char);
//       }
//       node = node.children[char];
//     }
//     node.isEndOfWord = true;
//   }

//   search(word) {
//     let node = this.root;
//     for (let char of word) {
//       if (!node.children[char]) {
//         return false;
//       }
//       node = node.children[char];
//     }
//     return node.isEndOfWord;
//   }

//   startsWith(prefix) {
//     let node = this.root;
//     for (let char of prefix) {
//         if (!node.children[char]) {
//             return false;
//         }
//         node = node.children[char];
//     }
//     return true;
//   }
// }

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
    for (let i = 0; i < word.length; i++) {
        const ch = word[i];
        const index = ch;
        if (!node.children[index]) {
            node.children[index] = new Node();
        }
        node = node.children[index];
    }
    node.isEnd = true;
  }

  search(word) {
    let node = this;
    for (let i = 0; i < word.length; i++) {
        const ch = word[i];
        const index = ch;
        if (!node.children[index] || !node.children[index].isEnd) {
            return false;
        }
        node = node.children[index];
    }
    return node && node.isEnd;
  }
}

var longestWord = function(words) {
  const trie = new Trie();
  for (const word of words) {
    trie.insert(word);
  }
  console.log(trie);
  let longest = "";
  for (const word of words) {
    if (trie.search(word)) {
      if (word.length > longest.length || (word.length === longest.length && word.localeCompare(longest) < 0)) {
        longest = word;
      }
    }
  }
  return longest;
};

console.log(longestWord(words));