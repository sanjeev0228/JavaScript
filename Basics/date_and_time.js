// dates
let myDate = new Date()
console.log(myDate.toDateString);

console.log(myDate.toLocaleString());

console.log(typeof myDate)
let mycreateDate = new Date(2023,0,23)
console.log(mycreateDate.toDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})