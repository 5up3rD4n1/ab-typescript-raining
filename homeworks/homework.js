const people = require('./people')

/** Objects

const obj1 = {
    forma: "redondo",
    tamano: "grande"
};

const obj2 = {
    color: "morado",
    version: '10'
};

const object = {...obj1, ...obj2};
const newObj = {};

for (let key in object){
    newObj[`${key.toUpperCase()}`] = object[key];
}

console.log(newObj);

// function changeToUpperCase (value) {
//     const newObj = {};
//     for (let key in value) {  
//         newObj[key.toUpperCase()] = value[key];
//     }
//     console.log(newObj);
// };

// changeToUpperCase(object);
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

/**Functions 
 * 

function oldPeople(array){
    let newArray = array.filter(a => a.age <= 21);
    return newArray;
}

function cityFilter(array){
    let newArray = array.filter(a => a.address.city != "Alajuela");
    return newArray;
}

function carloFilter(array){
    let newArray = array.filter(a => a.name != "Carlo");
    return newArray;
}

function addressFilter(array){
    let newArray = array.filter(a => a.address.address1.length <= 15);
    return newArray;
}


function filterOut(array){
    resultArray = array;
    for (let key in array){
        if (array[key].name === "Carlo" || array[key].age <= 21 || array[key].address.city === "Alajuela" || array[key].address.address1.length <= 15 ){
            resultArray = carloFilter(resultArray);
            resultArray = oldPeople(resultArray);
            resultArray = cityFilter(resultArray);
            resultArray = addressFilter(resultArray);
        } 
    }
    return resultArray;
}

console.log(filterOut(people));
*/





