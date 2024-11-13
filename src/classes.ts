// // data transfer object
// interface PersonInterface {
//   age: number;
//   sayHello: () => string;
// }

// class Human {
//   // private name: string;

//   // accesibility modifiers
//   constructor(
//     protected name: string,
//     // protected age: number,
//   ) {
//     // this.name = name;
//   }

//   sayHello(): string {
//     return 'HELLO!';
//   }
// }

// // syntactic suggar
// // implements
// class Person extends Human implements PersonInterface {
//   age: number;

//   private birth: number;

//   constructor(name: string, age: number) {
//     super(name);

//     this.age = age;

//     this.birth = 2024 - age;

//     // internal usage
//     console.log(this.constructor.name);
//   }

//   sayName() {
//     return this.name;
//   }

//   getBirth() {
//     return this.birth;
//   }
// }

// // prototype chain
// // Person.__proto__ = Human;

// const person1 = new Person('Abraham', 30);

// console.log(person1.getBirth());

// // @ts-ignore
// console.log(person1.__proto__);

// // {}.name {}.algo
// // {name: patito, };
// function Patito(name: string) {
//   //@ts-ignore
//   this.name = name;

//   function sayName() {
//     // @ts-ignore
//     console.log(`Hello my name is patito ${this.name}`);
//   }

//   // @ts-ignore
//   this.sayName = sayName;
// }

// // @ts-ignore
// Patito.prototype.sayHello = function () {
//   console.log(this.name);
// };

// // @ts-ignore
// Patito.prototype.sayMessage = function (message) {
//   console.log(`Patito says: ${message}`);
// };

// // @ts-ignore
// const p = new Patito('Feo');

// p.sayHello();
// p.sayName();
// p.sayMessage("I'm ugly duck");

class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(
    private readonly id: string,
    public name: string,
  ) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Chris');

// accounting.employees[2] = 'Anna';

it.describe();
it.printEmployeeInformation();
// const accountingCopy = {name: 'Peter', describe: accounting.describe};

// accountingCopy.describe();
