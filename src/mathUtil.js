const pi = 3.14;
const getCircleArea = (r) => r * r * pi;
const getSquareArea = (d = d * d);

// commonJS 내보내기 방법 1
// module.exports = {
//   pi,
//   getCircleArea,
// };

// commonJS 내보내기 방법 2
// exports.pi = pi;
// exports.getCircleArea = getCircleArea;

// ESM 으로 내보내기 방법 1
//export { pi, getCircleArea };

// ESM 으로 내보내기 방법 2
export default { pi, getCircleArea, getSquareArea };
