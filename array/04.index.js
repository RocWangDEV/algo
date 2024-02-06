// [2, 5, 3, 0, 5, 0]

// class Solution {
//   public int findRepeatDocument(int[] documents) {
//       int i = 0;
//       while(i < documents.length) {
//           if(documents[i] == i) {
//               i++;
//               continue;
//           }
//           if(documents[documents[i]] == documents[i]) return documents[i];
//           int tmp = documents[i];
//           documents[i] = documents[tmp];
//           documents[tmp] = tmp;
//       }
//       return -1;
//   }
// }

function swap(list, l, r) {
  [list[l], list[r]] = [list[r], list[l]];
}

function findIt(list) {
  let i = 0;
  while (i < list.length) {
    if (list[i] === i) {
      i++;
      continue;
    }
    if (list[i] === list[list[i]]) return list[i];
    swap(list, i, list[i]);
  }
  return -1;
}

console.log(findIt([3,4,2,1,1,0]));