import equals from "./strictEqual.test.js";

console.log(equals);

let valueA = -0;
let valueB = 0;

const strictEquals = (valueA, valueB) => {
  let result = Object.is(valueA, valueB);
  console.log(result);
};

scrictEquals(valueA, valueB);

module.export = strictEquals;
