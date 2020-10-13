var count =0;
function j(x,y)
{
    if(x == (y/2))
    {
        console.log(1);
        return;
    }
     while(x <= (y/2))
    {
        x = x*2;
        count++;
        // console.log(count);/
    }
    if(x>(y/2))
    {
        x = (x)-1;
        count+=1;
        if(x*2 < y)
        {
            j(x,y);
        }   
    }

    console.log(count+1);
}


j(3,12);