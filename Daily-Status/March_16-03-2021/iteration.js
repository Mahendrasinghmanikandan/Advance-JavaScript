var datas= [1, 2, 3];

//Foreach

const foreach=datas.forEach((data) => {
    return data;
});

console.log("Foreach:" + foreach);


//Map

datas.map((data) => {
    console.log("map:"+data);

});



//Filter

var filter = datas.filter((data) => {
    return data>=1;
})

console.log("filter:"+filter);


//Find
datas.find((data) => {
    console.log(data == 2);
    return data == 2;
})

console.log('');

//some 
var some=datas.some((data) => {
    
    return data == 2;
})

console.log(some);

//every

var every=datas.every((data) => {
    
    return data == 2;
})

console.log(every);

//Find index 

var findex=datas.findIndex((data) => {
    
    return data == 1;
})

console.log(findex);
