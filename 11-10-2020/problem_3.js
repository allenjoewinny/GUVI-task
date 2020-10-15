// function to make the bfs to add a sum of all nodes which are grater than the present node


function add_grater(root)
{
    let sum =0;
    helper_fun(root,sum);
    console.log(root);
}
function helper_fun(node,sum)
{
  if(!node)
    {
        return;
    }
    helper_fun(node.right,sum);
    node.value += sum;
    sum =  root.value;
    helper_fun(node.left),sum;
}
