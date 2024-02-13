//Arrays in js
//collections of items
// ex: stroing of students marks
//in object we have to stroe all the students marks like student1,student2....... like that
//so arrays are best
//for storing similar data types
//it is a linear form
//array is a object type
//we use index's in arrays
let marks = [56,66,55,42];
console.log(marks);
console.log(marks.length);//property

let heros=["kalyan","mahesh","prabhas"];
console.log(heros);
//arrays indices is of zero
//arr[0],arr[1],arr[2];
console.log(heros[0]);
//the array index which is not present in the array if we try to print it will show undefined
heros[2]="Ntr";
console.log(heros[2]);
//strings are immutable
//arrays are mutable

//looping in arry
for(let i=0;i<heros.length;i++){
    console.log(heros[i]);
}
//for of loop
for(let hero of heros){
    console.log(hero);
}
//in upper case
for(let hero of heros){
    console.log(hero.toUpperCase());
}

//question: for given array with marks of student-->[85,97,44,37,76,60]
//find the average marks of the entire class
let sum = 0;
let mark = [85,97,44,37,76,60];
for(let i=0;i<mark.length;i++){
    sum+=mark[i];
}
let result = sum/mark.length;
console.log(result);

//question: for a given array with prices of 5 items->[250,645,300,900,50]
//All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
let prices = [250,645,300,900,50];
let discount = 10;
for(let i=0;i<prices.length;i++){
    prices[i] = prices[i] - prices[i]/100 * 10 ;
    console.log("offer after 10% disscount:",prices[i]);
}

//Array Methods
//some array will change and some wont change but return new array
// Push(): add to end
//Pop() : delete from end & return
//toString() : converts array to string

let fooditems = ["potato","apple","tomato"];
fooditems.push("chips");//push at last
console.log(fooditems);
fooditems.pop();//delete at last
console.log(fooditems);
console.log(fooditems.toString());//this is a string
let copy = [20,22,33,44];
console.log(copy.toString());//this is a string
//concat() : joins multiple arrays & return result
//unshift() : add to Start
// shift():delete from start & return
let marvel = ["spiderman","ironman","Thor"];
let dc = ["superman","batman"];
let indian = ["bahubali-2","krish"];
let hollywood = marvel.concat(dc);
//we can concat three arrays also
let bollywood = marvel.concat(dc,indian);
console.log(bollywood);
indian.unshift("bahubali-1");
console.log(indian);//bahubali-1","bahubali-2","krish"
let val = indian.shift();
console.log(val);//bahubali-1
console.log(indian);//"bahubali-2","krish"

//Slice(); returns a piece of the array
//slice(startIdx, endIdx) - wont change in the original array
let points = [33,44,2,3,1];
console.log(points.slice(1,3));// 3rd index wont include upto before it will print from 0,1,2.
console.log(points.slice(1));// from 1 to end index.
console.log(points.slice());// give complete array
//Splice() : chane original array(add,remove,replace)
//splice(startIdx, delCount, newEl1)

// from which index i want to delete how many elements and if you want to replace this is the pattern of splice
let po = [1,2,3,4,5,6,7];
po.splice(2,2,101,102);// 
console.log(po);// 1,2,101,102,5,6,7

//add element
po.splice(2,0,101); //add 101 at index 2 and dont delete because we given 0
console.log(po);

//Delete Element
po.splice(3,1); //delete at index 3
console.log(po)

//replace 
po.splice()// replace element 5 at index 4 in updated array with 8
po.splice(4,1,8);
console.log(po);


console.log(po.splice(3));//102,8,6,7 it will print at index 3 to end and delete this elements
console.log(po.slice()); // No change 1,2,101

//question: create an array to store companies->"Bloomber","Microsoft","Uber","Google","Ibm","Netflix"
//1)Remove the first company from the array
//2)remove uber & add ola in it place
//3) add amazon at the end
let comapnies = ["Bloomber","Microsoft","Uber","Google","Ibm","Netflix"];
comapnies.shift();
console.log(comapnies);//removed first company
comapnies.splice(1,1,"Ola")
console.log(comapnies);//removed uber and added ola
comapnies.push("Amazon");
console.log(comapnies);//add amazon at the end

