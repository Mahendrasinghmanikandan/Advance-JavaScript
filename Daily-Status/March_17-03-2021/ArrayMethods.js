//Array
var array = ["Banana", "Orange", "Apple", "Mango"];

console.log(array);

//toString

var A = ["Banana", "Orange", "Apple", "Mango"];
console.log("toString :"+A.toString());

//Join

var B = ["Banana", "Orange", "Apple", "Mango"];
console.log("Join :"+B.join("*"));

//pop

var C = ["Banana", "Orange", "Apple", "Mango"];
console.log("pop :" + C.pop()+"  Balance :"+C);

//push

var D = ["Banana", "Orange", "Apple", "Mango"];
console.log("push :" + D.push("Kiwi")+"  Total :"+D);

//shift

var E = ["Banana", "Orange", "Apple", "Mango"];
console.log("shift :" + E.shift()+"  Balance :"+E);

//unshift

var F = ["Banana", "Orange", "Apple", "Mango"];
console.log("unshift :" + F.unshift("Kiwi") + "  Total :" + F);




//splice

var  G= ["Banana", "Orange", "Apple", "Mango"];
console.log("splice :" + G.splice(1,0,"msm") + "  Total :" + G);


//slice

var  H= ["Banana", "Orange", "Apple", "Mango"];
console.log("slice :" + H.slice(1) + "  Total :" + H);
