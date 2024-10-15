// const {ob1} = require('./functions');

// Array functions
const nums = [1, 2, 4, 5, 3];

// map, filter, reduce, forEach

// map transformation

// item, index, array, _
const mapped = nums.map((item, index, arr) => {
  console.log(index);
  return item * 2;
});

console.log(mapped);

const filter = nums.filter(item => {
  return item % 2 === 0;
});

console.log(filter);

const result = nums.reduce((acc, curr, index, arr) => {
  return acc + curr;
}, 0);

console.log(result);

const reversed = nums.reduce((acc, curr, index, arr) => {
  // spread operator
  return [curr, ...acc];
}, []);

console.log(reversed);

// [1, 2, 4, 5];

// {}, 1, 0, [...arr] - iteracion 1
// {this_is_number_1: 2}, 2, 1, [...arr]
// {this_is_number_2: 4, this_is_number_1: 2}, 3, 2, [...arr]

const toObjectOfDouble = nums.reduce((acc, curr, index, arr) => {
  // spread operator
  return {
    //
    [`this_is_number_${curr}`]: curr * 2,
    ...acc,
  };
}, {});

console.log(toObjectOfDouble);

const ob1 = {hello: 1, value: true};
const ob2 = {world: 2, value: false};

// merge 2 objects
const ob3 = {value: null, ...ob1, ...ob2};
console.log(ob3);
