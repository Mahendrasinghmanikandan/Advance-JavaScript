//Objects
const Palying_eleven =
    {
    batsman: 6,
    All_rounder: 2,
    bowlers: 3,
    name:"india"
    }
console.log("with-out this :"+Palying_eleven.name);

//this

const Palying_eleven2 =
{
    batsman: 6,
    All_rounder: 2,
    bowlers: 3,
    name: "india",
    result: function () {
        console.log("with this :"+this.name);
    }
};

Palying_eleven2.result();

