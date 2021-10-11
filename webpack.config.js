/*
// __dirname : 절대경로
// console.log(__dirname); // '/Users/goorm/Documents/dev/webpack-tutorial'

//path : node 내장 module , 경로 조작하기 쉽게 조작하기 위한 도구
//.resolve() : / 로 경로 이어 붙혀주는 path 내 함수
const path = require("path");
const newPath = path.resolve(__dirname, "abc");
console.log(newPath); // '/Users/goorm/Documents/dev/webpack-tutorial/abc'
*/

const path = require("path");

module.exports = {
  entry: "/src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", //dist 폴더내에 bundle된 파일의 명
  },
  // 이 웹이 node 환경에서 이루어진다는 것을 명시해줌.
  // 이걸 안해주면 cli 에서 'npx webpack --target=node' 이렇게 일일히 명시 해주어야함.
  target: "node",
};
