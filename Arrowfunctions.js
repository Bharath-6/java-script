// Arrow Functions
// compact way of writing a function
//we use for short methods like multiplication and addition etc.
// const functionName = (para1,para2..)=>{
//     do some work
// }

// modern js
// sum function
const arrowsSum = (a,b)=>{
    console.log(a+b);
}
let a = 10;
let b = 20;
arrowsSum(a,b);

//returning 
const arrowsmul = (a,b)=>{
    return x*y;
};
let x = 10;
let y = 20;
console.log(arrowsmul(x,y));

// let arrowsmul = (a,b)=>{
//     return x*y;
// }
// let x = 10;
// let y = 20;
// we change the value of function also
//arrosmul = 5;
//and would be 5

//without input also it wil work
const printhel = () =>{
    console.log("hello");
};
printhel();

//question: create a function using "Function" keyword that takes a string as an argument & return the number of vowels in the string
function vowel(s){
    let count=0;
    for(const char of s){
        if(char == "a" || char== "e" || char=="i" || char=="o" || char=="u"){
            count++;
        }
    }
    return count;
}
let s= "Bharath";
console.log(vowel(s));

//question:create an arrow function to perform the same task
const countvow = (str) => {
    let count=0;
    for(const char of str){
        if(char == "a" || char== "e" || char=="i" || char=="o" || char=="u"){
            count++;
        }
    }
    return count;
}
str="jishnu"
console.log(countvow(str));

//for each loop in arrays
//arr.forEach(callBackFunction)
//CallbackFunction : Here, it is  a function to excute for each element in the array
//* A callback is a function passes as an argument to another function

let arr = [22,33,4,3];
arr.forEach((val)=>{
    console.log(val);
})

//functions can be passed as parameters in js
//A callback is a function passed as an argument to another function.

function abc(){
    console.log("hello");
}
function myFunc(abc){
    return abc;
}
//using arrow function
let arr1 = ["hyderabad","delhi", "kolkata"]
arr1.forEach((val, idx, arr)=>{
    console.log(val.toUpperCase(), idx, arr)
})

//interview questions:
//Q- what are higher order function/methods
//ans-where it takes a parameter and where it use another function as parameter or it return a function
//for each loop in arrays are the higher order function

//practice: for a given array of numbers, print the square of each value using the forEach loop
let square = [2,3,4,5];
square.forEach((num)=>{
    console.log(num*num);
});

//another apporoach
let nums=[67,55,44];
let calSquare = (num) =>{
    console.log(num*num);
};
nums.forEach(calSquare);

//Some more Array Methods
//Map:
//creates a new array with the results of some operation. The value its callback return are used to form new array
//arr.map(callbackFnx(value,index,arry))

//let newArr = arr.map((val) =>{
    //return val*2;
//});

let nu = [55,4,2,1];

let newArr = nu.map((val) => {
    return val*val;
});
console.log(newArr);//new values with array to newArr and nu contains same elements

//Some more array methods
//filter
//creates a new array of elements that give true for a condition/filter
//Eg: all even elements

//let newArr = arr.filter((val)=>{
//     return val%2==0;
// })

let even=[1,2,3,4,5];
let evenArr = even.filter((val)=>{
    return val % 2 ===0;
});
console.log(evenArr);// 2,4
//where even array contains same number it wont change we stored new filtered value in evenArr


//Some More Array Methods
//Reduce
//Perform some operations & reduces the array to a single value. It returnsa that single value.

//most usually uses for averages and sums

// const array1 = [1,2,3,4];
// //0+1+2+3+4
// const initialvalue = 0;
// const sumWithIntial = array1.reduce(
//     (accumulator, currentValue)=> accumulator+currentValue,initialvalue,
// );
// console.log(sumWithIntial);//10

let ans = [1,2,3,4];
const output = ans.reduce((prev,curr)=>{
    return prev + curr;
});
console.log(output);//where prev will start from 1 and current is 2 and the ans is 3 and it stores in prev and now curr is 3 like that..

// for max element
// const output = ans.reduce((res,curr)=>{
//     return prev>curr? prev: curr;

//practice:
//Q: we are givn array of marks of students. Filter our of the marks of students that scored 90+.


//Q:Take a number n as input from useer. create an array of number from 1 to n.
//use reduce method to calculate sum of all numbers in the array.
// use the reduce method to calculate product of all the number in the array.