//Strings in js
// string is a sequence of characters used to represent Text

// crete string
// let str = "Bharath";

// string length
// str.length
// string indices
// str[0],str[1],str[2]

// some of them have inbuilt properties - length
//functions-methods

let str = "America";
console.log(str[0]);//A
console.log(str[2]);//e

//Template Literals
let specialString = `This is a template literal`;
console.log(specialString);
console.log(typeof specialString);

let obj = {
    item:"pen",
    price:10,
};
console.log("The cost of ",obj.item,"is", obj.price);//numbers will be in highlight
// to write them in single line
//string interpolation
//to create string by doing susbstitution of placeholder
// `string text ${expression} string text`
let output = `the cost of ${obj.item} is ${obj.price} rupees`;//into single string but in this number wont be highlited
console.log(output);
//expression
let specialString1 = `this is a template literal ${1+2+3}`;
console.log(specialString1);
//escape  characters
// \n ->next line
console.log("Apna\ncollege"); //printing in next line
// \t-> tab space
console.log("Apna\tcollege");

let str1 = "Apna\tCollege"; //12
console.log(str.length);

//String methods in js
//strings are immutable in js
// These are built-in function to manipulate a String
//str.toUpperCase()
let str2 = " mvs ";
let newStr = str2.toUpperCase();// it wont change existing string it will create new string
console.log(str2);
console.log(newStr);
console.log(str2.toLowerCase());
console.log(str2.trim())
//str.toLowerCase()
//str.trim() // removes white spaces at starting and ending

//str.slice(start,end?) //returns part of string - it wont include ending value 
str2 = "0123456";
let ans = str2.slice(1,4); 
console.log(ans);//123
//str.concat(str2)//joins str2 and str1
ans = str.concat(str2)
console.log(ans);
//we can do like this also
ans = "This is my string "+str+str2;
console.log(ans);
//str.replace(searchVal,newVal)
ans = str2.replace(0,1);
console.log(ans)
console.log(str.replaceAll("Am","an")) //replaces all how many we want
//str.charAt(idx)
ans = str.charAt(0);
console.log(ans);

//question: Prompt the user to enter their full name.Generate a username for them based on the input.
//start username with @. followed by their name and ending with the fullname length.
//eg:user name = "shardhakhapra"  username should be "@shradhakhapra13"

let username = prompt("Enter Username");
let len = username.length;
console.log("@"+username+len);