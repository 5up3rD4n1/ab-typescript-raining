let text: string;

text = 'Hello';

text = 'World';

let num: number;

// number, boolean, string, null, undefined, string[], number[], object, {}, function, any, unknown, ByteArray, never, void

// typescript
interface Address {
  line1: string;
}

interface Person {
  name: string;
  address: Address;
  parents: {
    // optional
    mother?: Person;
    father?: Person;
  };
  createdAt: string;
  createdBy: string;
}

interface Animal {
  name: string;
  // union
  kind?: 'dog' | 'cat';
}

function greetPerson(person: Person) {
  console.log(person.name);
}

const person1: Person = {
  name: 'Abraham',
  address: {
    line1: 'Alabama',
  },
  parents: {
    mother: {
      name: "Abraham's Mom",
      address: {
        line1: 'same',
      },
    },
  },
};

const dog1: Animal = {
  name: 'hot dog',
};

greetPerson(dog1);

// type programming
interface Result<T> {
  page: number;
  results: T[];
}

function queryPeople(): Result<Person> {
  return {
    page: 0,
    results: [person1],
  };
}

interface Dog extends Animal {
  bark: string;
  breed: string;
  kind: 'dog';
}

interface Wolf extends Animal {
  bark: string;
  howl?: string;
  breed: string;
  kind: 'dog';
}

interface Cat extends Animal {
  miau: string;
  breed: string;
  kind: 'cat';
}

const dog2: Dog | string | number = {
  name: 'firulais',
  breed: 'zaguate',
  bark: 'woa',
  kind: 'dog',
};

// alias
type Mamal = Wolf | Dog | Cat;

function sayName(a: Mamal) {
  console.log(a.name);
}

function makeASound(a: Mamal) {
  // narrowing
  if (a.kind === 'cat') {
    a.miau;
    // a.bark;
  }

  if (a.kind === 'dog') {
    a.bark;
  }
}

// function name(params: string): void {
//   if (params === 'num') {
//     // return 0;
//   }

//   // return '';
// }

function name(params: string): number | string {
  if (params === 'num') {
    return 0;
  }

  // return void 0;
  // return undefined;

  return '';
}
+
