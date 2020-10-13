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
graph.add(4);
graph.add(5);
graph.add(23);
graph.add(15);
graph.add(14);

console.log(graph);



function highLevel(node,level,arr)
{ 
  if(!node) return;
  
    if(arr[level] == undefined)
    {
      arr[level] =node.value;
      console.log(node.value);
    }
    
      arr[level] = Math.max(arr[level],node.value);
      console.log(node.value);
    

  highLevel(node.left,parseInt(level)+1,arr);
  highLevel(node.right,parseInt(level)+1,arr);
}

function call()
{
 
  let arr =[];
  let level =0;
  highLevel(graph.root,level,arr);
  console.log(arr);
}

call();