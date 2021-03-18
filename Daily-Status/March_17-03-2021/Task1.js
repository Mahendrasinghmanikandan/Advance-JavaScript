let a = [1, '1', 'Name', [1, 2], true];


a.forEach((data,index) => {
    a[index] = typeof (data);
})

console.log(a);
