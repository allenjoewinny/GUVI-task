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
graph.add(3);
graph.add(1);
// graph.add(4);
graph.add(0);
// graph.add(23);
// graph.add(15);
// graph.add(14);

console.log(graph.root.left);

function leftmost(graph)
{
   let node = graph.root;
   let queue =[];
   let level =[];
   let left = node;
   queue.push(node);
   while(queue.length>0)
   {
     let temp = queue.shift();

     if(temp.left)
     {
         level.push(node.left);
     }
     if(temp.right)
     {
         level.push(temp.right);
     }

     if(queue.length == 0 && level.length>0)
     {
         queue = level;
         left = level[0];
         level =[];
     }
   }
   console.log(left.value);
}

leftmost(graph);