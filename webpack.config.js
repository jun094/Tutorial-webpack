/*
// __dirname : 절대경로
// console.log(__dirname); // '/Users/goorm/Documents/dev/webpack-tutorial'

//path : node 내장 module , 경로 조작하기 쉽게 조작하기 위한 도구
//.resolve() : / 로 경로 이어 붙혀주는 path 내 함수
const path = require("path");
const newPath = path.resolve(__dirname, "abc");
console.log(newPath); // '/Users/goorm/Documents/dev/webpack-tutorial/abc'
*/

module.exports = {
  entry: "/src/index.js",
  output: "/dist",
};
