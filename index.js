// commonJS로 받기
//const { getCircleArea } = require("./mathUtil");

// ESM 으로 받기 1
//import { getCircleArea } from "./mathUtil";
import mathUtil from "./mathUtil";

//const res = getCircleArea(2);
const res = mathUtil.getCircleArea(2);
console.log(res);
