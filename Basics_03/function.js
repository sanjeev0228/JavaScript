function myName(){


// console.log("s");
// console.log("a");
// console.log("n");
// console.log("j");
// console.log("e");
// console.log("e");
// console.log("j");
}
// myName()

function add (num1,num2){
//  console.log(num1+num2);
}

// add(3,6)


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//  console.log(loginUserMessage("sanjeev"))
//  console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//  console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Sonu",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));