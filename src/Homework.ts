import { access } from "fs";

interface Product {
  name: string;
  category: string;
  count: number;
  price: number;
}

const products: Product[] = [
  {
    name: 'Potatoes',
    category: 'Vegetable',
    count: 105,
    price: 15,
  },
  {
    name: 'Tomatoes',
    category: 'Vegetable',
    count: 200,
    price: 25,
  },
  {
    name: 'Apples',
    category: 'Fruit',
    count: 75,
    price: 35,
  },
  {
    name: 'Bananas',
    category: 'Fruit',
    count: 370,
    price: 10,
  },
  {
    name: 'Carrot',
    category: 'Vegetable',
    count: 105,
    price: 20,
  },
  {
    name: 'Lemon',
    category: 'Fruit',
    count: 300,
    price: 12,
  },
  {
    name: 'Onion',
    category: 'Vegetable',
    count: 95,
    price: 5,
  },
  {
    name: 'Pear',
    category: 'Fruit',
    count: 150,
    price: 17,
  },
  {
    name: 'Pumpkin',
    category: 'Vegetable',
    count: 80,
    price: 55,
  },
  {
    name: 'Car',
    category: 'Toy',
    count: 3,
    price: 150,
  },
  {
    name: 'Doll',
    category: 'Toy',
    count: 2,
    price: 150,
  },
];

/** 1. Create a new list with all product multipliying price by 2 */

// function multipyPrice<T extends Product>(products: Array<T>): Array<T> {
//   const newArray: Array<T> = [];
//   for (const product of products) {
//     const newPrice = {...product, price: product.price * 2};
//     newArray.push(newPrice);
//   }

//   return newArray;
// }

// console.log(multipyPrice(products));

// const newArray: Array<Product> = products.map(products => {
//   return {...products, price: products.price * 2};
// });
// console.log(newArray);

/** 2. Create a function that recevies the category as parameter and filters all products of that specific category */
/*
function receiveCategory<T extends Product>(param: Array<T>): Array<T> {
  const newArray = param.filter(a => a.category === 'Fruit');
  return newArray;
}

console.log(receiveCategory(products));*/

// function filterCategory(category: string): Product[] {
//   return products.filter(product => product.category === category);
// }

// const vegetable = filterCategory('Vegetable');
// const fruit = filterCategory('Fruit');

// console.log('Vegetable Products:', vegetable);
// console.log('Fruit Products:', fruit);

/**3. Create a function that groups products by category  */

// function groupByCategory(products: Product[]) {
//   return products.reduce(
//     (acc: Record<string, Product[]>, product: Product) => {
//       const {category} = product;
//       console.log(acc);
//       if (!acc[category]) {
//         acc[category] = [];
//       }

//       acc[category].push(product);
//       return acc;
//     },
//     {} as Record<string, Product[]>,
//   );
// }

// console.log(groupByCategory(products));

/**4. Create a function that sums the total price of all items in an specific category */

// function sumTotalByCategory(category: string) {
//   return products
//     .filter(product => product.category === category)
//     .reduce((acc, product) => acc + product.price, 0);
// }

// console.log(`Vegetable total sum is: ${sumTotalByCategory('Vegetable')}$`);
// console.log(`Fruits total sum is: ${sumTotalByCategory('Fruit')}$`);

/**5. Create a function that returns the names of products which stock is lower than 5 items  */

function lowStock(products: Product[]) {
  products.forEach(stock => {
    if (stock.count < 5) {
      console.log(stock.name);
    }
  });
}

lowStock(products);
