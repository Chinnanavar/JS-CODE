let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);




// let myCreatedDate = new Date(2024, 11, 21)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

// let myDateHour = new Date(2023, 0, 23, 5, 3)
// console.log(myDateHour.toLocaleString());
let myDateHour = new Date("2-12-2024")
// console.log(myDateHour.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myDateHour.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate.getMonth() + 1);

// console.log(`Today's Date is ${newDate.getDate()} and month is ${newDate.getMonth() + 1} and year is ${newDate.getFullYear()} and day is ${newDate.getDay()} and time is ${newDate.getHours()} ${newDate.getMinutes()}`);

let da = newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(da);
