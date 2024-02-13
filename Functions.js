//Functions
// BLock of code that performs a specific task, can be invoked whenever needed
//function functionName(){
    //do some wor
//}
//function call
// functionName();

//function functionName(param1,param2..){
    //do some work
//}
//redundancy--> repeat - so to rectify we use function
function myFunction(){
    console.log("Welcome");
    console.log("i am learning js");
}
myFunction();
//another function
function myFun(msg){ //with parameters
    console.log(msg);
}
let msg = "hello";
myFun(msg); //argument

//Function for adding two number

function sum(x,y){
    //the x and y are local variables --> scope - it works under the curly braces after curly braces it wont work
    // if try to print x outside the function it wil throw undefine
    //function parameters-> like local variables of function --> block scope
    let result = x+y;
    // console.log(result);
    return result; //returning the result
    //we can't print anything after return
}
let x=3;
let y=10;
console.log(sum(x,y));