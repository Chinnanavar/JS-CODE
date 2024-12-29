const user = {
    username: "yash",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "yash"
//     console.log(this.username);
    
// }   
// chai()

// const chai = function(){
//     let username = "yash"
//      console.log(this.username);

// }
// chai()

// const chai = () => {
//     let username = "yash"
//     console.log(this);
// }
// chai()

// const add = (n1,n2) => {
//     return n1 + n2
// }
// console.log(add(2,3))

// const add = (n1,n2) => n1 + n2

// const add = (n1,n2) => (n1 + n2)

const add = (n1,n2) => ({username: "yash"})

console.log(add(2,3))

const myArray = [2,4,5,78,9]

// myArray.forEach(function() => {})