let a = [1, -1, -1, 1];

//acc=1,current=-1=>acc=0
//acc=0,current=-1=>acc=-1
//acc=-1,current=1=>acc=0

const b = a.reduce((acc, current) => {
  console.log("acc :" + acc + " current :" + current);
  console.log("acc :" + acc);
  return acc + current;
});

console.log("final acc :"+b);
