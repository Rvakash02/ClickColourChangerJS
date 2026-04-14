const num = 500;
console.log(num);

const balance = new Number(200);  //its an object
console.log(balance); //[Number: 200] 

console.log(balance.toString()); // number converted to string
console.log(balance.toString().length); //now we can use all the property and function of string

console.log(balance.toFixed(2)); //it covert number to decimal upto given number

const otherNum = 234.028384
console.log(otherNum.toPrecision(5)); //convert decimal no to precise N numric digit 234.03

const hundreds = 1000000000
console.log(hundreds.toLocaleString());//1,000,000,000

console.log(hundreds.toLocaleString('en-IN')); //1,00,00,00,000

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// console.log(Math);
// console.log(Math.abs(-42));
// console.log(Math.round(4.1));
// console.log(Math.ceil(4.0000000001));
// console.log(Math.floor(4.9));
 
console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor( (Math.random()*10) +1));

const min = 10;
const max = 20;

console.log(Math.floor( Math.random() * (max - min +1) + min ));
 