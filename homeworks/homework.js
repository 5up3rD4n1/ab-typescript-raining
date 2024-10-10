const people = require('./people')

/**  Objects

const obj1 = {
    forma: "redondo",
    tamano: "grande"
};

const obj2 = {
    color: "morado",
    version: '10'
};

const object = {...obj1, ...obj2};

console.log(object);

function changeToUpperCase (value) {
    const newObj = {};
    for (let key in value) {  
        newObj[key.toUpperCase()] = value[key];
    }
    console.log(newObj);
};

changeToUpperCase(object); 
*/

/** Arrays

function tinder(array) {
    let newArray = array.filter(a => a.gender == "F");
    console.log(newArray);
};

function mapping(array){
    const newArray = array.map(array => {
          return { ...array, age: array.age + 2}
      });
    console.log(newArray);
};

function removeAddress(array){
    for (let key of array) {
        delete key.address;   
    }
    console.log(array);
};

function removeAddress(array){
    for (let i = 0; i < array.length; i++) {
        const newObj = array[i];
        let keys = Object.keys(newObj);
        keys.splice(3);

        let newArray = {};
        for (let key of keys){
            newArray[key] = newObj[key];
        }
        array[i] = newArray
    }
    console.log(array);
};

removeAddress(people);
tinder(people);
mapping(people);
*/

