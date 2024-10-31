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


products = [
    {"id": 1, "name": "Phone", "category": "Electronics"},
    {"id": 2, "name": "Laptop", "category": "Electronics"},
    {"id": 3, "name": "T-Shirt", "category": "Clothing"},
    {"id": 4, "name": "Apple", "category": "Clothing"}
]


def group_by_category(products):
    
    grouped_products = {}
    
    for product in products:
        category = product['category']
        
        # Initialize the category in the dictionary if it doesn't exist
        if category not in grouped_products:
            grouped_products[category] = []
        
        # Add the product to the category's list
        grouped_products[category].append(product)
    return grouped_products

group_by_category(products)
