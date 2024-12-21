//singleton object
// const tinderUser = new Object()

//non singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggefIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "yash",
            lastname: "patel",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b",

}
const obj2 = {
    3: "c",
    4: "d",
    
}
const obj4 = {
    5: "e",
    6: "f",
    
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const user = [
    {
        id1: 1,
        email: "h@email.com",
    },
    {
        id1: 1,
        email: "h@email.com",
    },
    {
        id1: 1,
        email: "h@email.com",
    },
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggefIn'));


