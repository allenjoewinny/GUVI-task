class bst {
  constructor() {
    this.root = null;
  }

  add(value) {
    let newNode = { value, left: null, right: null };

    if (this.root == null) {
      this.root = newNode;
      return;
    }
    let current = this.root;

    while (1) {
      if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      } else if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      }
    }
  }
}

let graph = new bst();
graph.add(2);
graph.add(1);
graph.add(3);
graph.add(4);
graph.add(5);
graph.add(6);
graph.add(7);
graph.add(8);
console.log(graph.root);

function deepestLeavesSum(graph) {
  let root = graph.root;
  let sum = 0;
  let deepestlevel = 0;

  const travese = (node, level) => {
    if (node == null) {
      return;
    }
    if (level === deepestlevel) {
      sum = sum + node.value;
    } else if (level > deepestlevel) {
      deepestlevel = level;
      sum = node.value;
    }

    travese(node.left, level + 1);
    travese(node.right, level + 1);
  };
  travese(root, 0);
  console.log(sum);
}

deepestLeavesSum(graph);
