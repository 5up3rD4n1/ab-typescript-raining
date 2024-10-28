interface Product {
    name: string;
    category: string;
    count: number;
    price: number;
  }

  const products: Product [] = [
    {
    name: 'Potatoes',
    category: "Vegetable",
    count: 105,
    price: 15,
    },
    {
    name: 'Tomatoes',
    category: "Vegetable",
    count: 200,
    price: 25,
    },
    {
    name: 'Apples',
    category: "Fruit",
    count: 75,
    price: 35,
    },
    {
    name: 'Bananas',
    category: "Fruit",
    count: 370,
    price: 10,
    },
    {
    name: 'Carrot',
    category: "Vegetable",
    count: 105,
    price: 20,
    },
    {
    name: 'Lemon',
    category: "Fruit",
    count: 300,
    price: 12,
    },
    {
    name: 'Onion',
    category: "Vegetable",
    count: 95,
    price: 5,
    },
    {
    name: 'Pear',
    category: "Fruit",
    count: 150,
    price: 17,
    },
    {
    name: 'Pumpkin',
    category: "Vegetable",
    count: 80,
    price: 55,
    },
];

/* Create a new list with all product multipliying price by 2
function multipyPrice<T extends Product>(products : Array<T>): Array<T> {
    const newArray: Array<T> = []
    for (const product of products){
        const newPrice = {...product, price: product.price * 2};
        newArray.push(newPrice);
    }

    return newArray;
};

console.log(multipyPrice(products));

// const newArray: Array<Product> = products.map(products => {return{...products, price: products.price * 2}});
// console.log(newArray);

*/