/*
singleton
object literals
Object.create
*/ 
const mySym =Symbol("key1")

const jsUser ={
    name:"Sanjeev ",
    age:20,
    [mySym]:"key1",
    location:"delhi",
    email:"sanjeev@google.com",
    lastLoginDays:["Monday","Saturday"]

}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser.mySym);
console.log(jsUser[mySym]);

jsUser.email="sanjeev@chatgpt.com"
Object.freeze(jsUser)
console.log(jsUser);

jsUser.greeting =function(){
console.log("Hello js user");

}
console.log(jsUser.greeting);

