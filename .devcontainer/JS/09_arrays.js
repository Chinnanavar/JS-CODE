// array 

const myArr = [1, 2, 3, 4, 5, true, "yash", 321, "yashi", "yashu"]
const myHeors = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4,)
// console.log(myArr[4]);

// Array methods

// myArr.push(6)
// myArr.push("yashu")
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(5));


// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);


//slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

// console.log(newArr);
const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);
