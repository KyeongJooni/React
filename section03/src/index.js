//const moduleData = require("./math");
import { add, sub } from "./math.js"; //동일한 경로에서 불러오기 때문에 아래랑 합치는 거도 가능
import mul from "./math.js";
//console.log(moduleData.add(1, 2));
//console.log(moduleData.sub(1, 2));

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));
