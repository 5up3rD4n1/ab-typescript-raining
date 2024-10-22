# Homework 2

Always using typescript

1. Create an interface called Product
   1. Product MUST have the following properties
      1. name
      2. category
      3. count
      4. price
2. Create a list of products with at least 10 items
3. Using array functions create implement the following
   1. Create a new list with all product multipliying price by 2
   2. Create a function that recevies the category as parameter and filters all products of that specific category
   3. Create a function that groups products by category (result should be an object of keys where the key is the category and the value is an array of products of that category)
   4. Create a function that sums the total price of all items in an specific category
      1. e.g `total('pants') => 40000` `products = [{category: 'pants', count: 10, price: 4000}]`
   5. Create a function that returns the names of products which stock is lower than 5 items
