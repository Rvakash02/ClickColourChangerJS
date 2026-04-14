///objects in javaScript
const jsUser = {
    name: "Akash",
    "age": 18, //can also give keyword as string 
    city: "Gaya",
    isLoggedIn: false,
    lastLogin: "monday"
    //all these name age city.... keyword is taken as string in JS 
};

//console.log(jsUser.name);
//console.log(jsUser["name"]);
//console.log(jsUser); //prints whole object


jsUser.age = 20; //modifications
//console.log(jsUser.age);

//object.freeze is used to resistic the modificantion of any object
// Object.freeze(jsUser);
// jsUser.name = "Prity Pandey" ;
// console.log(jsUser.name);

//we can create any function related to objects
jsUser.greeting = function () {
    console.log(`Hello ${jsUser.name}`);
    
}
// console.log(jsUser.greeting());

//.     PART 2 OF OBJECTS

const newUser = {} //empty object

newUser.name = "Akash kumar"
newUser.id = "123"
newUser.email = "akash02@amazon.com"

// console.log(newUser);

//we can alse do nesting of objects 
// const user = {
//     name : {
//         firstname : "Akash" ,
//         lastname : "kumar"
//     }
// }

//const obj4 = {...obj2, ...obj2, ...obj3} ;   // same as adding a array

//arrays of object
const users = [
    {
        name : "akash",
        id : "123",
        isLoggedIn : false
    },
    {
        name : "prity",
        id : "234",
        isLoggedIn : false
    },
    {
        name : "saloni",
        id : "345",
        isLoggedIn : true
    }
];

//now we can iterate through all objects of the array
// console.log(users[0].name);

const usersKeys = Object.keys(jsUser); //creating array of keys of JsUser
// console.log(usersKeys);
const usersValues = Object.values(jsUser); //creating array of values of JsUser
// console.log(usersValues);