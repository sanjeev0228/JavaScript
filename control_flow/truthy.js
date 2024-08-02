const userEmail=[]

if (userEmail) {
    console.log("got the email");
} else{
    console.log("dont have user email");
}


/*
***************falsy value****************

flase,0,-0,bigInit 0n,"" ,null,undefined,Nan


*************truthy value*****************

"0",'flase'," ",[],{},function(){}
*/ 


// if (userEmail.length === 0) {
//     console.log("array is emty");
// }


// nullish coalescing opertor(??):null undefined


let val1;
// val1=5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15666

console.log(val1);


//ternary opertor
// condtion ? true:false




