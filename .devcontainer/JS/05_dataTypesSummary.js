// Primitive / Value Type

// 7 types : String, Number, Boolean, Null, Undefiend, Symbol, BigInt 

const score = 100

const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null

let userEmail = undefined;

const id = Symbol('123')
const anotherid = Symbol('123')

// console.log(id === anotherid);

// const bigNumber = 8429472389472837487329847238748234892378327482
// const bigNum = 8429472389472837487329847238748234892378327482n
// console.log(bigNumber);
// console.log(bigNum);


// console.log(id);
// console.log(anotherid);




// Non Primitivev / Refrence Type

// Array, Objects, Function

// const heros = ["shaktiman", "naagrag", "doga"]

// const info = {
//     name: "yash",
//     age: 23,

// }
// console.log(heros);
// console.log(typeof heros);

// console.log(info);
// console.log(typeof info);

// const myFunction = function() {
//     console.log("hello world");
    
// }

// console.log(myFunction);

//********************************** Memory *******************************/

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubeName = "yash"

let anotherName = myYoutubeName

anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "userOne@google.com",
    upi: "user@ypl",
}

let userTwo = userOne

userTwo.email = "userTwo@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);
