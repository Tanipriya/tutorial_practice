# Boolean is a value which can be wither true or false, which can be used for making decisons
# eg user age should be greater than 18 to register or password length should be greater than 8 chars
# By using conditional operators we can get True or False

print(10==10) # Checks both values are equal Will return True
print(10!=10) # Checks both values are not equal Will return False
print(10>5) # Checks left value is geater tahn right vaue returns True

# Comparion Operators ==, !=, >, < , >=, <=

#Comparison using is operator
a = [1,2,3] # When we create a list its stored in memory, values in list can be stored some where in memory. But list has its own storage.
b=  [1,2,3]
c = a
print('Equal Comparison:',a==b) #Output True
print('Is Comparison a & b', (a is b)) #Output False because they both are different vaiables
print('Is Comparison a & c', (a is c)) #Output True because they both are same vaiables