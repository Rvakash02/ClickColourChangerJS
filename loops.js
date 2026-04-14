const myArr = ['a', 'b', 'c', 'd', 5, 6, 7, 8, 9, 10]

for (const element of myArr) {
    //console.log(element);
}

for (const element in myArr) {
  //  console.log(element); //gives the index of the array for 0 -> n
}

myArr.forEach(  (item) => {
    //console.log(item);
}  )

myArr.filter( (item) => {
    const type = typeof(item)
    if(type == "string"){
        //console.log(item)
    }
})


const cart = [
    {
        course : "Java script" ,
        price : 1999
    },

    {
        course : "Dsa in C++" ,
        price : 2999
    },

    {
        course : "Frontend for beginer" ,
        price : 999
    },

    {
        course : "Backend for beginer" ,
        price : 3999
    }
]

const priceToPay = cart.reduce( (acc, item) => (acc + item.price) , 0);
console.log(priceToPay);
