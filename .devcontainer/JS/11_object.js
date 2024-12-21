// singleton 

// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
   name: "yash",
   "full name": "Yash Patel",
   [mySym]: "mykey1",
   age: 19,
   location: "vadodara",
   email: "abc@email.com",
   isLoggedIn: false,
   lastLoginDays: ["Monday", "Saturday"],

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);


jsUser.email = "yash@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "yash@gpt.com"
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("hello JS user");
    
}

jsUser.greeting2 = function() {
    console.log(`hello JS user, ${this.name}` );
    
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2(

));


