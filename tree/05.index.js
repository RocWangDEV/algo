const tree = [
  {
    id: 1,
    text: "节点1",
    parentId: 0,
    children: [
      {
        id: 2,
        text: "节点1_1",
        parentId: 1,
      },
    ],
  },
];

function trans(data) {
  const ans = [];

  function doit(list) {
    list.forEach((item) => {
      const { id, text, parentId, children } = item;
      ans.push({
        id,
        text,
        parentId,
      });
      if (Array.isArray(children) && children.length) {
        doit(children);
      }
    });
  }
  doit(data);

  return ans;
}

console.log(trans(tree));
