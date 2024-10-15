// Destructuring
const age = 30;

const obj = {
  age,
};

console.log(obj);

const obj2 = {
  name: 'Abraham',
  address: {
    city: 'Alajuela',
    zipCode: '20101',
    directions: {
      line1: 'Apt 1',
      line2: 'Buiding 2',
    },
    location: {
      lat: 10.00002,
      lon: 107.0,
    },
  },
  description: 'bla bla',
  gender: 'M',
};

// const name = obj2.name;
// const address = obj2.address;

const {
  name: objectName,
  address: {
    zipCode,
    location: {lat: latitude},
  },
  ...remainingObj
} = obj2;
// const { zipCode } = address;

console.log(objectName);
console.log(remainingObj);

const name = 'ABC';

console.log(name, objectName);

console.log(latitude);

// fn({dresciption, gender});

// Index notation
// obj[]

const obj3 = {};

obj3['name'] = 'Dani';

console.log(obj3);

// Dynamic index manipulation

let objIndex = 'age';

obj3[objIndex] = 10; // {..., age: 10}

objIndex = 'address';

obj3[objIndex] = {city: 'Alajuela'};

console.log(obj3);

const indexes = ['name', 'age', 'address'];

indexes.forEach(key => {
  // string interpolation
  // f'hakhdf {var}'
  const newKey = `new_${key}`;

  console.log(newKey);

  obj3[newKey] = obj3[key];
});

console.log(obj3);

const obj4 = indexes.reduce((acc, key, index) => {
  console.log('acc:', acc, 'key:', key, 'index', index);

  return {
    ...acc,
    [`new_${key}`]: index,
  };
}, {});

console.log(obj4);

// Arrays
const numbers = [1, 2, 3, 4, 5];

const even = [2, 4, 6, 8, 10];

const odds = [1, 3, 5, 7, 9];

const oddsAndEvens = [...odds, ...even];

console.log(oddsAndEvens);

const [first, second, ...remainingArr] = oddsAndEvens;

console.log(first, second, remainingArr);

const result = odds.reduce((acc, numb, index) => {
  const other = even[index];
  return [...acc, numb, other];
}, []);

console.log(result);

// Functions with rest operators

function test(name, ...params) {
  console.log(params);

  const [first, second, ...rest] = params;

  console.log(first + second, rest);

  console.log(params.reduce((acc, i) => acc + i));
}

test('Abraham', 1, 1, 2, 2, 2, 2, 2, 43);

// Destructuring Obj + Arr | Arr + Obj

const obj5 = {
  params: [1, 2, 3],
};

const array3 = [{obj5}];

const {
  params: [firstNumber, ...rest],
} = obj5;

console.log('----------');
console.log(firstNumber, rest);

const [
  {
    obj5: {
      params: [firstNumberParam, ...restParams],
    },
  },
] = array3;

console.log('----------');
console.log(firstNumberParam, restParams);

console.log(Object.keys([1, 3, 4]));
console.log([1, 3, 4]['0']);

// Functions
// options bag

// onlyEven: boolean
function run(arr, {isEven = true, maxNumber} = {maxNumber: 3}) {
  if (typeof arr === 'string') {
    //
    const obj = JSON.parse(arr);

    console.log(obj);

    return;
  }

  if (typeof arr === 'number') {
    console.log(arr + 1);

    return;
  }

  if (typeof arr === 'object' && !Array.isArray(arr)) {
    console.log(JSON.stringify(arr));

    return;
  }

  // if (options.onlyEven) {
  //   return arr.filter((i) => i % 2 === 0);
  // }

  // options.maxNumber = 3
  // true
  // undefined, null, 0, '', NaN

  console.log('RUN------------');
  console.log(arr, isEven, maxNumber);

  if (!arr && Array.isArray(arr)) {
    arr.map();
  }

  return arr;
}

run('{"name": "Dani"}');
run(obj5);
