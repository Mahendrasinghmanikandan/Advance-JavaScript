const fs = require("fs");
fs.readFile("./temp.json", "utf8", (err, data) => {
  let temp = JSON.parse(data);
  // console.log(temp);
  // temp.pop(temp[1]);
  // temp.push(["php", "codeigniter", "Ajax"]);
  // console.log(temp.unshift("msm"));
  // temp.filter((res) => {
  //   console.log(res == "msm");
  // });
  // temp[1].name = "nancy";

  // temp.map((res) => {
  //   console.log();
  // });
  temp.splice(1, 0, { name: "nesrin", age: 21 });
  fs.writeFile("./temp.json", JSON.stringify(temp), (err) => {});
});
