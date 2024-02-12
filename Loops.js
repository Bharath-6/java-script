// // for loop
// for(let i=1;i<=5;i++){
//     console.log("Bharath");
// }
// //infinite Loop: A Loop that never ends - never do in program
// //while condition
// // while(condition){
// //     //do some work
// // }

// let i=1;
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }
// // //do while loop 
// // do{
// //     // do some work
// // }
// // while(condition);

// // advantage: atlease one run
// //firt it will do then check the condition
// let j=1;
// do{
//     console.log("Bharath");
//     j++;
// }
// while(j<=5);

// // first do then check the condtion so above will print bharath 5 times not 6 times
// // for-of Loop//these helps to iterate in special data types
// // for-of Loop helps on strings and arrays
// // for(let val of strVar){
// //     //do some work
// // }
// let str = "Bharath";//iterator it helps on iterating --> characters
// for(let i of str){
//     console.log(i);// print all the character in the string
// }
// //calculate the length of string
// let size=0;
// for(let i of str){
//    console.log("i=",i);
//    size++; 
// }
// console.log(size);//7
// // for-in Loop
// //these are used for objects
// //syntax
// // for(let key in objVar){
// //     //do some work
// // }
// let student = {
//     name : "Bharath",
//     age : 23,
//     isPass: true,

// }
// for(let i in student){
//     console.log("key =",i,"value = ",student[i]);//returns the key
    
// }
// //question1:print all even numbers from 0 to 100.
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//question2: create a game where you start with any random game number.Ask the user to keep guessing the game number until
//the user enters correct value.
let gameNum = 8;
let userNum = prompt("Guess the game number:");
while(userNum!= gameNum){//game
    userNum=prompt("You entered wrong number");
}
console.log("Congratualations, you entered the right number");
