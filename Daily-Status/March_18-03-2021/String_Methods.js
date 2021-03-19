//Length
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(alphabet+"-> Length :"+alphabet.length);

//indexOf() vs lastIndexOf() vs search()

var str = "ABCA";
console.log("indexOf() vs lastIndexOf() vs search():"+str);
console.log("indexof(A) :" + str.indexOf("A"));
console.log("lastIndexOf(A) :" + str.lastIndexOf("A"));

console.log("indexof(A,1) :" + str.indexOf("A",1));
console.log("lastIndexOf(A,1) :"+str.lastIndexOf("A",1));

//search()

console.log("search", str.search("C"));


//slice() vs subString() vs substr()

var str2 = "ABCDE";
console.log("str2 :", str2);
//slice
console.log("slice +:", str2.slice(1));
console.log("slice -:", str2.slice(-4));

console.log("slice +:", str2.slice(0,4));
console.log("slice -:", str2.slice(-3, -1));

//substring

console.log("substring :", str2.substring(1,2));

//substr 

console.log("substr :", str2.substr(1,2));

//replace() 

console.log("replace :", str2.replace("A", "S"));

//toUpperCase() vs toLowerCase()

//toUpperCase()
console.log("toUpperCase :", str2.toUpperCase());

//toLowerCase()
console.log("toLowerCase :", str2.toLowerCase());

//concat()

console.log("concat :", str2.concat("",str));

//trim()

var str3 = " MSM ";

console.log("trim :" + str3.trim(""));

//padStart vs padEnd

//padStart

console.log("padStart :" + str3.padStart(9, "."));

//padEnd

console.log("padEnd :" + str3.padEnd(9, "."));


//charAt() vs charCodeAt()

//charAt

console.log("charAt :" + str3.charAt(1));

//charCodeAt

console.log("charCodeAt :" + str3.charCodeAt(1));


//split

console.log("split :" + str3.split(""));
