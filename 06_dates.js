//dates 

let myDate = new Date();

console.log(myDate); //prints very confusing date
console.log(myDate.toDateString()); //prints somehow readable date only => Sun Mar 29 2026
console.log(myDate.toLocaleString()); //prints both date and time => 3/29/2026, 2:02:12 PM
console.log(myDate.toLocaleDateString()); //print date only 3/29/2026
console.log(myDate.toLocaleTimeString()); //prints only time
console.log(myDate.toTimeString());