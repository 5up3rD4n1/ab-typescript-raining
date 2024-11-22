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

# products = [
#   { 'number': 1, 'price': 100, 'name': 'Orange juice' },
#   { 'number': 2, 'price': 200, 'name': 'Soda' },
#   { 'number': 3, 'price': 150, 'name': 'Chocolate snack' },
#   { 'number': 4, 'price': 250, 'name': 'Cookies' },
#   { 'number': 5, 'price': 180, 'name': 'Gummy bears' },
#   { 'number': 6, 'price': 500, 'name': 'Condoms' },
#   { 'number': 7, 'price': 120, 'name': 'Crackers' },
#   { 'number': 8, 'price': 220, 'name': 'Potato chips' },
#   { 'number': 9, 'price': 80,  'name': 'Small snack' }
# ]

# def vending_machine(products, money, product_number):
# 	valid = False
# 	for product in products:
# 		if product['number'] == product_number:
# 			valid = True
# 			item = product
		
# 	if not valid:
# 		return "Enter a valid product number"
# 	if item['price'] > money:
# 		return "Not enough money for this product"
	
# 	coins = [500, 200, 100, 50, 20, 10]
# 	change = []
# 	remainder = money - item['price']
# 	for coin in coins:
# 		if int(remainder/coin) != 0:
# 			for i in range(0,int(remainder/coin)):
# 				change.append(coin)
# 			remainder = remainder % coin
			
# 	return { "product": item['name'], "change": change}

# vending_machine(products, 1500, 4)

# def addTwoNumbers(l1, l2):
#         sumList1 = ''
#         sumList2 = ''
#         finalList = []
#         for x in range(len(l1)):
#             sumList1 += str(l1[x])
#         for x in range(len(l2)):
#             sumList2 += str(l2[x])
#         total = int(sumList1)+int(sumList2)
#         for x in range(len(str(total))):
#             finalList.append(str(total)[x])
#         return list(reversed(finalList))
    
# list1 = [9,9,9,9,9,9,9]
# list2 = [9,9,9,9]
     
# print(addTwoNumbers(list1,list2))

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# class Solution:
#     def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
#         def __init__(self, val=0, next=None):
#             self.val = val
#             self.next = next

#         while l1 is not None and l2 is not None:
#             print(l1.val)

# l1 = [2,4,3]
# l2 = [5,6,4]

# result = Solution.addTwoNumbers(l1,l2)

# def lengthOfLongestSubstring(s: str) -> int:
#     seen = set()
#     string = ''
#     largestString = []
#     if all(letter == s[0] for letter in s):
#             return 1
#     for x in range(len(s) - 1):
#         if s[x] != s[x + 1]:
#            string += s[x] 
#     for char in string:
#         if char not in seen:
#             seen.add(char)
#             largestString.append(char)
#     return len(largestString)


s = "abcabcbb"
b = "bbbbbbbbbbb"
c = "pwwkew"

# print(lengthOfLongestSubstring(s))

# class Solution:
#     def lengthOfLongestSubstring(self, s: str) -> int:
#         seen = set()
#         string = ''
#         largestString = [] 
#         for x in range(len(s) - 1):
#             if s[x] != s[x + 1]:
#                 string += s[x] 
#         for char in string:
#             if char not in seen:
#                 seen.add(char)
#                 largestString.append(char)
#         return len(largestString)       
    
# solution = Solution()
# print(solution.lengthOfLongestSubstring(s))


# class Solution:
#     def lengthOfLongestSubstring(self, s: str) -> int:
#         index_map = {}
#         longest = 0
#         start = 0
#         for i, elements in enumerate(s):
#             if elements in index_map and index_map[elements] >= start: 
#                 start = index_map[elements] + 1 
#             index_map[elements] = i 
#             print(index_map, "/", start)
#             longest = max(longest, i - start + 1)
#         return longest

# solution = Solution()
# print(solution.lengthOfLongestSubstring(b))
