function open_lock(d,target)
{
    let dead = new Set(d);
    let queue = [['0000',0]];
    let seen = new Set(['0000']);

    for ( let [curr, turns] of queue)
    {
        if(curr === target)
        {
            console.log(turns);
        }
        if(dead.has(curr))continue;
        for(let next of getnextset(curr))
        {
            if(seen.has(next))continue;
            seen.add(next);
            queue.push([next,turns+1])
        }
    }
    return -1;
};

function getnextset(str)
{
 let ans = [];

 for(let i=0;i<4;i++)
 {
     ans.push(str.slice(0,i) + ((+str[i] +1)%10) + str.slice(i+1));
     ans.push(str.slice(0,i) + ((+str[i]+9)%10) + str.slice(i+1));
 }
 return ans;
}

 open_lock(["0201","0101","0102","1212","2002"],'0202')
