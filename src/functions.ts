interface Human1 {
  name: string;
}

const person: Human1 = {
  name: 'Abraham',
};

// generics T definition
function getMyName<T extends Human1>(param1: T): T {
  console.log(param1.name);

  param1.name = 'Name is other';

  return param1; // type "casting"/resolution
  // casting change type
  // polymorphism -> adopt multiple shapes as log as it comes from the same parent
  // person => male, female, other =>
  // (Array) list
}

interface Male extends Human1 {
  isFather: boolean;
}

const father: Male = {
  name: 'Abraham',
  isFather: false,
};

const otherF = getMyName(father);

console.log(otherF.isFather);
