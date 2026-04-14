 let score1 = "11"  // number
 let score2 = "11abc" // NaN
 let score3 = "akash" //NaN
 let score4 = true // 1 false => 0
 let score5 = null // 0
 let score6 = undefined // NaN

 let intoNumber1 = Number(score1)
 let intoNumber2 = Number(score2)
 let intoNumber3 = Number(score3)
 let intoNumber4 = Number(score4)
 let intoNumber5 = Number(score5)
 let intoNumber6 = Number(score6)


//  console.log(intoNumber1);
//  console.log(typeof intoNumber1);
//  console.log(intoNumber2);
//  console.log(typeof intoNumber2);
//  console.log(intoNumber3);
//  console.log(typeof intoNumber3);
//  console.log(intoNumber4);
//  console.log(typeof intoNumber4);
//  console.log(intoNumber5);
//  console.log(typeof intoNumber5);
//  console.log(intoNumber6);
//  console.log(typeof intoNumber6);
 

 // *************** Operations ****************

 let str1 = "hello "
 let str2 = "akash "
 let str3 = str1 + str2

//  console.log(str3);
//  console.log("1" + 2);
//  console.log(1 + "2");
//  console.log("1" + 2 + 2);
//  console.log(1 + 2 + "2 ");
 

let myName = "Akash kumar"

let anotherName = myName

// console.log(anotherName);
// console.log(myName);

let userOne = {
    name : "Akash kumar" ,
    email : "akash@gmail.com"
}

let userTwo = userOne

userTwo.name = "Prity pandey"

// console.log(userOne.name);
// console.log(userTwo.name);

//stack gives copy of the variable
//heap gives  reference of the variable