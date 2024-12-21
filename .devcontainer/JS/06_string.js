const name ="yash"
const repoCount = 50

// console.log(name + repoCount );

console.log(`Hello  my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String('yash-patel-yashu')
console.log(gameName);

console.log(gameName[2]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(1, 3)
console.log(newString);

const anotherString = gameName.slice(-3, -1)
console.log(anotherString);

const newString1 = "        yash           "
console.log(newString1);

console.log(newString1.trim());

const url = "https://google.com"

console.log(url.replace('google', 'yash'))

console.log(url.includes('google'));

console.log(gameName.split('-'));














