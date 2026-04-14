const myArr = [1,2,3,4,5,6];
//console.log(myArr);

const myArr2 = new Array(1,2,3,4,5,6);
//console.log(myArr2);

myArr2.push(3); //push element at the back of array
//console.log(myArr2);

myArr2.pop(); // pop element from back
//console.log(myArr2);

const slc = myArr.slice(0,4); 
// console.log(`slice =>  ${slc}`);
// console.log(`myarr =>  ${myArr}`);

const splc = myArr.splice(0,4);  //it remove the part of the array that we have splited
// console.log(`splice =>  ${splc}`);
// console.log(`myarr =>  ${myArr}`);

//****   we have 3 method to add two array     * */
const marvel_heros = ["akash","kumar","verma"];
const dc_heros = ["prity","kumari","pandey"];

//**add whole array as one element

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);  // [ 'akash', 'kumar', 'verma', [ 'prity', 'kumari', 'pandey' ] ]



const new_heros = marvel_heros.concat(dc_heros);
//console.log(new_heros);

//best use this method
//firstly it spread all the element of the arrays then add it to the new array
const all_new_heros = [...marvel_heros, ...dc_heros];//here we can add any no of array togather
//console.log(all_new_heros);
 
console.log(Array.isArray("akash02"));
console.log(Array.from("akash")); //spreads all the character and convert into array
console.log(Array.from({name : "akash"})); //it can also convert elements of objects into array

