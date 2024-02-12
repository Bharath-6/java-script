// // // //alert
// // // alert("hello"); //one time pop up

// // // //prompt
// // // // it gives message and takes input
// // // prompt("hello");
// // let name = prompt("hello");
// // console.log(name);// print what ever we give in prompt in broswer input
// Question:
// get user to input a number using prompt("enter a Number:"). check if the number is a multiple of 5 or not

let number = prompt("Enter a number:");
if(number%5==0){
    console.log("it is multiple of 5");
}
else{
    console.log("it is not a multiple of 5");
}

// questions 2: write a code which can give grades to students according to their scores:
let score = prompt("Enter a the marks");
if(score>=80 && score<=100){
    console.log("Grade A");
}
else if(score>=70 && score<=89){
    console.log("Grade is B");
}
else if(score>=60 && score<=69){
    console.log("Grade is C");
}
else if(score>=50 && score<=59){
    console.log("Grade is D");
}
else{
    console.log("Fail");
}