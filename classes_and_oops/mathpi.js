const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(Math.PI);
// Math.PI =5
// console.log(Math.PI);

// console.log(descriptor);


const abc ={
    name: 'Biscuit',
    price: 250,
    isAvailable: true,

}

// console.log(Object.getOwnPropertyDescriptor(abc,"name"));
// Object.defineProperty(abc,"name",{
//     writable:false
// })

// console.log(Object.getOwnPropertyDescriptor(abc,"name"));

// for (let [key ,value] of abc) {
//     console.log(``);
    
    
// }

for (let [key, value] of Object.entries(abc)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}