//this is a comment

/*hello
world */

// operators in Js:
// used to perform some operation on data
// +,-,*,/

// *Modulus
// *Exponentiation
// *Increment
// *Decrement

//arthimetic operators
let a=5;
let b=2;
console.log("a=", a, "& b=", b);
console.log("a+b=", a+b);
console.log("a-b=", a-b);
console.log("a*b=", a*b);
console.log("a/b=", a/b);//2.5
//remainder
console.log("a%b=", a%b);//1
//exponentiation
console.log("a**b=", a**b);
//unary operators
// 1)increment
a++;
console.log("a++=",a);
// 2)decrement
b--;
console.log("b--=",b);


// a++(post increment) it wont change value in itself after it will change
// ++a(pre increment) first i will change then i will do
// a--(post decrement)
// --a(pre decrement)

console.log("a++=",a++);
console.log("++a=",++a);
console.log("a--=",a--);
console.log("--a=",--a);

//Assignment operators
// =(assign value)
// +=(a=a+value) same for all
// *=
// %=
// **=(exponention)

//comaparision operators
//two compare two values
// Equal to ==
// Not Equal !=
// Equal to & type ===
// Not euqal to & type !== 

// >,>=,<,<=
//if a = 5 and b="5" then it will return true in java script because implicitly it will take a number in string to int
console.log(a==b);
console.log(a!=b);
console.log(a===b);//strict check it will check data type as well
console.log(a!==b);

//Logical operators in js
// Logical AND &&(if 1 of condition is false then it is false)
let cond1 = a>b;
let cond2 = a!=b;
console.log("cond2 && cond2", cond1&&cond2);
// Logic OR ||(if 1 of the condition is true then it is true)
// Logical !(true will false and false will true)