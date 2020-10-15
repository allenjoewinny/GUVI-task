function mincost(days,cost)
{
    let minCostEndingAt =[];
    
    for(let i =0;i<days.length;i++)
    {
        let curDay = days[i];
        let numberOfWeekPrior =1;
        let numberOfMontPrior =1;

        for(let  j=i-1;j>=0;j--)
        {
           let diffDay = curDay -days[j];
           if(diffDay >=30)
           {
               break;
           }
           else if(diffDay >=7)
           {
               numberOfMontPrior++;
           }
           else if(diffDay>=1)
           {
               numberOfMontPrior++;
               numberOfWeekPrior++;
           }
        }
        let min =Math.min(
        cost[0] + ~~minCostEndingAt[i-1],
        cost[1] + ~~minCostEndingAt[i-numberOfWeekPrior],
        cost[2] + ~~minCostEndingAt[i-numberOfMontPrior]
    );
    minCostEndingAt[i] = min;
    }
   console.log(minCostEndingAt.pop()); 
}


mincost([1,4,6,7,8,20],[2,7,15]);