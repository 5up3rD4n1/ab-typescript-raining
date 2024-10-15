// https://libuv.org/
// read/write a file (request any type of resource from the machine)
// http request or network traffic

const axios = require('axios');

function generatePromise() {
  return new Promise((resolve, reject) => {
    const value = Math.random();

    console.log('THIS IS RUNNING');
    setTimeout(() => {
      if (value > 0.2) {
        resolve(value);
      } else {
        reject(value);
      }
    }, 1000);
  });
}

async function getUsers() {
  const result = await axios({
    url: 'http://localhost:3000/users',
    method: 'GET',
  });

  return result.data;
}

async function createUser(data) {
  const result = await axios({
    url: 'http://localhost:3000/users',
    method: 'POST',
    data,
  });

  return result.data;
}

function generateProfile(num) {
  return new Promise(r => {
    const value = Math.random();

    const time = value * 10000;

    console.log(`Triggering promise for ${num}`);

    setTimeout(() => {
      console.log(`RESOLVING VALUE FOR ${num}. Took: ${time}ms`);

      r(num * 2);
    }, time);
  });
}

async function hello() {
  for (const num of [1, 2, 3]) {
    // await new Promise((r) => {
    //   setTimeout(r, 2000);
    // });
    console.log(num);
  }
}

function hello2() {
  for (const num of [6, 4, 5]) {
    console.log(num);
  }
}

// function main() {
//   // chain
//   getUsers()
//     .then((response) => {
//       console.log(`The response is success, ${response}`);

//       return response * 2;
//     })
//     .catch((e) => {
//       console.error(e);
//     })
//     .then((value) => {
//       console.log(value);
//     });

//   // console.log(users);
// }

// Promise safe
async function forEach(arr, cb) {
  for (const i of arr) {
    await cb(i);
  }
}

// async function main() /** : Promise<any> blocked scope */ {
//   // chain
//   const usersPromise = getUsers(); // blocks execution until promise is resolved
//   hello2();

//   // console.log(users);

//   const users = await usersPromise;

//   console.log(users);

//   // const promiseResults = [1, 2, 3, 4, 5, 6].map((num) => generateProfile(num));

//   await forEach([1, 2, 3, 4, 5, 6], async (num) => {
//     const value = await generateProfile(num);
//     console.log(value);
//   });

//   console.log("NOT WAITING SHIT");

//   // const results = Promise.all(promiseResults);

//   // const resolvedPromises = await results;

//   // console.log(resolvedPromises);
// }

// async/await
// then.catch

// event loop
// for (true) {
// 1 timers (setInterval, setTimeout, nextTick)
// callback
// execution queue
// ---
// promises
//}

async function main() {
  const users = await getUsers();
  console.log(users);

  await createUser({id: '2', name: 'Dani', age: 30});

  const users2 = await getUsers();

  console.log(users2);
}

main();
