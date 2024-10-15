const people = require('./people');

/** Objects */

const obj1 = {
  forma: 'redondo',
  tamano: 'grande',
};

const obj2 = {
  color: 'morado',
  version: '10',
};

const object = {...obj1, ...obj2};

// physical address
// ax180182 [ | | | | ] = 64
// logical address
// newObj => ax180182
const newObj = {};

for (const key in object) {
  newObj[`${key.toUpperCase()}`] = object[key];
}

console.log(newObj);

// physical address
// ax180182 [ | | | | ] = 64
// logical address
// newObj2 => ax180182

// newObj2 => ax180182 => newObj2 => ax1998273
let newObj2 = {};

for (const key in object) {
  newObj2 = {
    ...newObj2, // spread operator
    [`${key.toUpperCase()}`]: object[key],
  };
}

console.log(newObj2);

// function changeToUpperCase (value) {
//     const newObj = {};
//     for (let key in value) {
//         newObj[key.toUpperCase()] = value[key];
//     }
//     console.log(newObj);
// };

// changeToUpperCase(object);

/** Arrays */

function tinder(array) {
  const newArray = array.filter(a => a.gender === 'F');
  console.log(newArray);
}

function mapping(array) {
  const newArray = array.map(person => {
    return {...person, age: person.age + 2};
  });
  console.log(newArray);
}

function removeAddress(array) {
  for (const key of array) {
    delete key.address; // [] index notation | object.key dot notation
  }
  console.log(array);
}

// function removeAddress(array) {
//   for (let i = 0; i < array.length; i++) {
//     const newObj = array[i];
//     let keys = Object.keys(newObj);
//     keys.splice(3);

//     let newArray = {};
//     for (let key of keys) {
//       newArray[key] = newObj[key];
//     }
//     array[i] = newArray;
//   }
//   console.log(array);
// }

function removeAddress2(arr) {
  // for (let index = 0; index > arr.length; index++) {
  //     const item = arr[index];
  // }

  return arr.map(item => {
    // keys(obj) => ["address", "name"] =>

    return Object.keys(item).reduce((acc, key) => {
      // acc = {age: 30}, key = "address"
      if (key === 'address') {
        return acc; // do nothing (noop), continue
      }

      // acc = {age: 30}, key = "name"
      return {
        ...acc, // {... {age: 30}, [key]: item[key]}
        [key]: item[key], // [name]: item[name] => "Abraham" => { age: 30, 'name': "Abraham"}
      };
    }, {});
  });
}

function removeAddress3(arr) {
  // for (let index = 0; index > arr.length; index++) {
  //     const item = arr[index];
  // }

  return arr.map(item => {
    delete item['address'];
    return item;
  });
}

// console.log(removeAddress3(people));
// side effect
// non-pure function
// pure function (no altera las referencias de los parametros y retorna siempre un valor nuevo)
// inmutability => variables or parameters cannot be changed, new values should be returned
// inplace => original object is modified
// console.log(people);
// tinder(people);
// mapping(people);

// ax12450 => [ | | ^ | | ]
// a[1] ax12450 + 1 => [ | | Í 0 | 1 ]
//                                 ^  a = b

/**Functions  */

// function oldPeople(array) {
//   let newArray = array.filter((a) => a.age <= 21);
//   return newArray;
// }

// function cityFilter(array) {
//   let newArray = array.filter((a) => a.address.city != "Alajuela");
//   return newArray;
// }

// function carloFilter(array) {
//   let newArray = array.filter((a) => a.name != "Carlo");
//   return newArray;
// }

// function addressFilter(array) {
//   let newArray = array.filter((a) => a.address.address1.length <= 15);
//   return newArray;
// }

// function filterOut(array) {
//   resultArray = array;
//   for (let key in array) {
//     if (
//       array[key].name === "Carlo" ||
//       array[key].age <= 21 ||
//       array[key].address.city === "Alajuela" ||
//       array[key].address.address1.length <= 15
//     ) {
//       resultArray = carloFilter(resultArray);
//       resultArray = oldPeople(resultArray);
//       resultArray = cityFilter(resultArray);
//       resultArray = addressFilter(resultArray);
//     }
//   }
//   return resultArray;
// }

function oldPeople(person) {
  return person.age <= 21;
}

function cityFilter(person) {
  return person.address.city != 'Alajuela';
}

function carloFilter(person) {
  return person.name != 'Carlo';
}

function addressFilter(person) {
  return person.address.address1.length <= 15;
}

function pairAge(person) {
  return person.age % 2 === 0;
}

function filterOut2(array, filter1, filter2) {
  return array.filter(filter1).filter(filter2);
}

console.log(filterOut2(people, addressFilter, carloFilter));
console.log(filterOut2(people, oldPeople, cityFilter));
console.log(filterOut2(people, pairAge, oldPeople));
