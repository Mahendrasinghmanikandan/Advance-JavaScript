//Array
var array = ["Banana", "Orange", "Apple", "Mango"];

console.log(array);

//toString

var A = ["Banana", "Orange", "Apple", "Mango"];
console.log("toString :"+A.toString());

//Join

var B = ["Banana", "Orange", "Apple", "Mango"];
console.log("Join :"+B.join(":"));

//pop

var C = ["Banana", "Orange", "Apple", "Mango"];
console.log("pop :" + C.pop()+"  Balance :"+C);

//push

var D = ["Banana", "Orange", "Apple", "Mango"];
console.log("push :" + D.push("msm")+"  Total :"+D);

//shift

var E = ["Banana", "Orange", "Apple", "Mango"];
console.log("shift :" + E.shift()+"  Balance :"+E);

//unshift

var F = ["Banana", "Orange", "Apple", "Mango"];
console.log("unshift :" + F.unshift("msm") + "  Total :" + F);

//splice

var  G= ["Banana", "Orange", "Apple", "Mango"];
console.log("splice :" + G.splice(1,0,"msm") + "  Total :" + G);


//slice

var  H= ["Banana", "Orange", "Apple", "Mango"];
console.log("slice :" + H.slice(1) + "  Total :" + H);


//merge

var I1 = ["Banana1", "Orange1", "Apple1", "Mango1"];
var I2 = ["Banana2", "Orange2", "Apple2", "Mango2"];
var I3 = I1.concat(I2);
console.log("array_1 :" + I1, "\n array_2 :" + I2 + "\n merge_array :" + I3);

//delete

var  J= ["Banana", "Orange", "Apple", "Mango"];
console.log("delete 0'th:" + delete J[0] + "  Balance :" + J);

//Changing Elements

var  k= ["Banana", "Orange", "Apple", "Mango"];

k[0] = 1;

console.log("Changing Elements :" + k);
