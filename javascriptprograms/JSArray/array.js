// //    print all even numbers
//    var arr=[10,25,30,45,50,65]
//    for(let num of arr){
//        if(num%2==0)
//        console.log(num);
       
   var arr=[11,12,13,14,15]
   var even=[]
   var odd=[]

   for(let num of arr)
   {
       if(num%2==0)
       {
       even.push(num)
       }
       else
       odd.push(num)
   }
   console.log(even);
   console.log(odd);