# 1. Create a list of 4 elements, whose sum should be 50

l1 = [5,10,15,20]
print('List l1:', l1)
l2= [20,30,0,0]
print('List l2:',l2)

# 2. Create a tuple with single value in it
# t = (15) Its not a tuple it will be treated as methods opertion
t1 = (5,) 
print('Tuple t1:', t1)
t2 = 5,
print('Tuple t2:', t2)
t3 = ('Apple',)
print('Tuple t3:', t3)

# 3. Create 2 sets set1 and set2 set1.intersection(set2) should be {10,15,30}

set1 = {5,10,12,15,25,30,50}
set2 = {10,15,20,30,40}
print('Common Set:', set1.intersection(set2))