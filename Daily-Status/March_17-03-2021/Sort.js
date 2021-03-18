//Array
var array = ["B", "b", "a", "A"];

console.log(array);

//A-Z=>65-90
// a-z=>97-122

//Sort
var A = ["B", "b", "a", "A"];

A.sort();

console.log("Sort: " +A);

//reverse
var B = ["B", "b", "a", "A"];

B.reverse();

console.log("reverse: " + B);


//Numeric Sort
var N = [7, 8, 1, 2];

//Ascending
var Ascending = [7, 8, 1, 2];
//1it a=8,b=7 =>positive so=>a after b=>[7, 8, 1, 2]
//2it a=1,b=8 =>negative so=>a before b=>[7, 1, 8, 2]
//3it a=2 b=8 =>negative so=>a before b=>[7,1,2,8]
//next repeat 1 to 3=>until no more swap....
Ascending.sort((a, b) => {

    return a - b;
    
});

console.log("Ascending :" + Ascending);

//descending

var descending = [7, 8, 1, 2];

descending.sort((a, b) => {
    
    return b - a;
    
});

console.log("descending :" + descending);