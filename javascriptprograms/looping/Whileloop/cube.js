
// {/* <html>
    
// </html>

// const temp = prompt("Enter a three-digit positive integer: ");
// let num = temp; */}
var num= 1253;
let sum = 0;
while (num != 0) {
  let digit = num % 10;
  sum += digit * digit * digit;
  num = Math.floor(num / 10);
}
console.log(sum);
