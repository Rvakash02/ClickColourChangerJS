console.log("Akash kumar");

const accountId = 12345; //cant be reassigned
let accountEmail = "akashKumar@gamil.com" ; //reassigned->good practice to use->block scope
var accountPassword = "773972"; //not good practice to use
accountCity = "Bihar"; //global variable-> can cause serious bugs 

// accountId = 1; cant be change const variable
// all these below can be modified
// accountEmail = "prity@gmail.com"
// accountPassword = "7474637"
// accountCity = "kolkata"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])