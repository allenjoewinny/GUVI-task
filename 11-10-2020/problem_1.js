  
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
let result =[];
function display_right(node,result,level)
{
    
    if(!node)
    {
        return;
    }

    if(!result[level])
    {
      result[level] = node.value;
    }

    display_right(node.right,result,level+1);
    display_right(node.left,result,level+1);
   
}
display_right(graph.root,result,0);
console.log(result);