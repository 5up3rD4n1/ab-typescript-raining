// var fnName;


// object
// __proto__
// prototype chain
//

// {
//   __proto__: {

//   }
// }

/**
 *
 * @param {*} param1
 * @param {*} fn () => {}
 */
function fnName(param1, fn) {
  console.log({param1})
}

// hoistin
// let
const myFn2 = (param1, param2) => {

}

// [key: value]
// ["key": value]
// []["1"] => =;
const ob1 = {
  name: "My name is OB1",
  greeting: (name) => {
    console.log(`Hello ${name}`)

    console.log(this.name);
  },

  fn2: () => {
    // console.log(ob.name);
    console.log(this.name);
  }
}

// scopes, this

const ob2 = {
  name: "My name is OB2",
  greeting(cb) {
    cb("Abraham")

    console.log(this.name);
  },

  fn: (cb) => {
   const value = 1 * 4 * Math.random();

   cb(null, value);
  }
}

// ob1.greeting("Abraham");

// ob2.greeting(ob1.greeting);

// ob2.fn();

function testThis() {
  const greeting = (error, value) => {
    if (error) {
      console.log('reventolio')
    }


    console.log(this.name);
    console.log(value);
  }

  ob2.fn(greeting);

  ob2.fn((_, value) => {
    console.log("This is from my anonimous fn", value);
  });
}


testThis();


// fnName();


// module.expors = {
//   ob1
// };

