# """Modue Fro distance and slope"""
# class Line:
#     """ Defininf Line"""

#     def __init__(self, coor1, coor2) -> None:
#         self.coor1 = coor1
#         self.coor2 = coor2

#     def distance(self):
#         """representing Distance"""
#         x1, y1 = self.coor1
#         x2, y2 = self.coor2

#         return ((x2-x1)**2 + (y2-y1)**2)**0.5

#     def slope(self):
#         """representing Slope"""
#         x1, y1 = self.coor1
#         x2, y2 = self.coor2

#         return (y2-y1) / (x2-x1)

# c1 = (3,2)
# c2 = (8,10)

# myline = Line(c1,c2)

# print(myline.distance())
# print(myline.slope())


# products = [
#     {"id": 1, "name": "Phone", "category": "Electronics"},
#     {"id": 2, "name": "Laptop", "category": "Electronics"},
#     {"id": 3, "name": "T-Shirt", "category": "Clothing"},
#     {"id": 4, "name": "Apple", "category": "Clothing"}
# ]


# def group_by_category(products):
    
#     grouped_products = {}
    
#     for product in products:
#         category = product['category']
        
#         # Initialize the category in the dictionary if it doesn't exist
#         if category not in grouped_products:
#             grouped_products[category] = []
        
#         # Add the product to the category's list
#         grouped_products[category].append(product)
#     return grouped_products

# group_by_category(products)

products = [
  { 'number': 1, 'price': 100, 'name': 'Orange juice' },
  { 'number': 2, 'price': 200, 'name': 'Soda' },
  { 'number': 3, 'price': 150, 'name': 'Chocolate snack' },
  { 'number': 4, 'price': 250, 'name': 'Cookies' },
  { 'number': 5, 'price': 180, 'name': 'Gummy bears' },
  { 'number': 6, 'price': 500, 'name': 'Condoms' },
  { 'number': 7, 'price': 120, 'name': 'Crackers' },
  { 'number': 8, 'price': 220, 'name': 'Potato chips' },
  { 'number': 9, 'price': 80,  'name': 'Small snack' }
]

def vending_machine(products, money, product_number):
	valid = False
	for product in products:
		if product['number'] == product_number:
			valid = True
			item = product
		
	if not valid:
		return "Enter a valid product number"
	if item['price'] > money:
		return "Not enough money for this product"
	
	coins = [500, 200, 100, 50, 20, 10]
	change = []
	remainder = money - item['price']
	for coin in coins:
		if int(remainder/coin) != 0:
			for i in range(0,int(remainder/coin)):
				change.append(coin)
			remainder = remainder % coin
			
	return { "product": item['name'], "change": change}

vending_machine(products, 1500, 4)