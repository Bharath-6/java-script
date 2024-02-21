console.log("hello");
// it will also work because console log is part of the window object where window is global object and it contains so many properties which use
window.console.log("hello2");

//window object:
// The window object represents an open window in a browser. It is browsers object(not java script's ) & is automatically created by browser
// it is a global objecct with lots of properties & methods

/* what is Dom?
when a page is loaded, the browser creates a Document object model(Dom) of the page
to access html in java script
window
   |
Document
    |
Html
 Head: meta,meta,title,link
 body: div-img,h1,p,div,-script

 this tree inside the dom is every part we say node where is also know as object

console.log->print
console.dir-> Document _> property Method  to print the object and where dir is also part of window */

console.dir(document); //we will get entire document
console.dir(document.body);//object body
console.log(document.body)//html version

//dynamic changes - which we do dyanamically which we won't touch the html and css files in the basis of user it can be called as dynamic manipulation we use dom for this

// if we access java script in head means before body if it load we can't access  dom elements

/* Dom Manipulation

Selecting with id
document.getElementById("myid")

Selecting with class
document.getElementsByClassName("myClass")

Selecting with tag
document.getElementsByTagName("D") */

//accessing the h1 html tag here in js
let heading = document.getElementById("heading"); //h1
console.dir(heading)

//if you want give bases on id styling you can use #heading{

//}

//class is used by . and class name
//two or more tags to use because we cant use id becuase it is unique
//it will return a  html collection it is also a type of array

let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
