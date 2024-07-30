/* types of datatypes
 Primitive //call by value
String ,Number,Boolean,null,undefined,Symbol,Bigint



RefernceType--> Non Primitive
Array,object,Functions


*/ 
// https://262.ecma-international.org/5.1/#sec-11.4.3
// ******************************************************************************************
/*
memory use in JS

Stack(Primitive)
Heap(Non Primitive)







*/

let user ={
    email:"user@gmail.com",
    upi:"sanjeev@ybl"
}

let userTwo =user
userTwo.email="sanjeev2020@google.com"

console.log(user.email);
console.log(userTwo.email)
