//var num=7;
var low=1;
var upp=300;
for(let i=low; i<=upp; i++)
{
    let flag = 0
    if(i==1 || i==2)
    {
        console.log(i);
        continue;
    }
    for(j=2;j<=i/2;j++)
    {
        if(i%j==0)
        {
            flag=1;
            break;
        }
    }
        
    if (flag==0)
        {
        console.log(i);
        }
}