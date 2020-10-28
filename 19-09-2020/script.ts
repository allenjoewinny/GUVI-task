interface input {
    bread:string;
    food:string;
    age:number;
    origin:string;
}
class Pets_availabe
{
   pets =[];
   count:number;
   input_arr: string;
   constructor()
   {
       this.count = 0;
   }

   setInput(input_arr)
   {
       let temp_arr = input_arr.split(" ");
      
    this. pets[this.count] = ({bread:temp_arr[0],
    food:temp_arr[1],
    age:temp_arr[2],
    origin:temp_arr[3]});
    console.log(this.pets);
    this.count++;    
   }

   each_count()
   {
       let c ={}
       for(let i =0;i<this.pets.length;i++)
       {
           if(!c[this.pets[i].bread])
           {
               c[this.pets[i].bread] =1;
           }
           else
           {
               c[this.pets[i].bread]++;
           }
       }
       return c;
   }
}
let k = new Pets_availabe();
k.setInput('dog nv 2 india');
k.setInput('cat nv 2 india');
class pets_quereies
{
   enqurie = [];
   count = 0;
   plain_Input =[];
   
   store_enquere(input:string)
   {
       this.plain_Input[this.count] = input;
      let temp  = input.split(" ");
      let temp_1 ={};
       for(let j=0;j<temp.length;j++)
          {
              if(!temp_1[temp[j]])
              {
                temp_1[temp[j]]=1;
              }
              else{
                temp_1[temp[j]]++; 
              }
          }
          console.log(temp_1);
          this.enqurie[this.count] = temp_1;
          this.count++;
      
   }

   match_enquere()
   {
      let temp = k.each_count();
      
      let result =[];
      for(let i=0;i<this.enqurie.length;i++)
      {
      for(let key in this.enqurie[i])
      {
          if((!temp[key]))
          {
              result[i] = 'not';
              break;
          }
          else if(this.enqurie[i][key]>temp[key])
          {
              result[i] = 'not';

          }
          else{
              result[i] = 'Available'
          }
      }
    }
    return [result, this.plain_Input];
   }

   match_5()
   {
        let result = this.match_enquere();
        console.log(result[0]);
        return [result[0].slice(0,5), this.plain_Input];
   }
}

let z = new pets_quereies();
z.store_enquere('dag cat');
z.match_enquere();

