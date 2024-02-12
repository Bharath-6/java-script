// primitive:
// Number
// String
// Boolean
// undefined
// null
// BigInt
// Symbol

// Non primitive:
// Objects:collection of values--> key : value
// Array,function

// object ex:// collection of different types of variables
const student = {
    fullName : "Rahul Kumar",
    age: 20,
    cgpa:8.2,
    isPass: true,
};
//const name = "Rahul";
//name = "Sachin";// it thorws error here but for objects it wont beacuse objects are collections to get error we need to change the address of object
console.log(student["age"]);//20
console.log(student.age);//20
student["age"] = student["age"]+1;
student["name"] = "Rahul Sharma";
console.log(student["name"])
console.log(student["age"])//21
//checking in consle
// >student
// ENTER
// display all details
// >type of student
// ENTER
// 'object'
// >student["fullName"]
// ENTER
// 'Rahul Kumar'

//practice:
// 1)create a const object called "product" to store information of amazon product
const product = {
    name : "pen",
    rating : 4,
    offer: 5,
    price:270,
};
console.log(product);

// if String
// "123"+1
// '1231'

//practice:
// 2) create a const object called "profil" to store information like insta profile
const profile = {
    name : "Bharath",
    followers:569,
    following:14,

};
console.log(profile);