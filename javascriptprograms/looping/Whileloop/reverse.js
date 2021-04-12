var num=123;
var res="" // empty string
while (num!=0) {
    // extracting last number 
    let digit=num%10; //digit=123%10=3 , 
    console.log(digit); // printing the last number
    res=res+digit; // keeping values to an empty string
    num=Math.floor(num/10) // cutting of the last digit 
    
}
console.log(res);