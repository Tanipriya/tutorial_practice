friends = {"Ram", "Gavish", "Mohit", "Dilip","Pradeep", "Hemant"}
office_friends = {"Ram", "Gavish", "Pradeep"}

# school_firends = {"Mohit", "Dilip", "Hemant"}, To get this set we can use difference() method
# Difference takes a set and removes element for it which is there in another set
school_firends = friends.difference(office_friends)
print('School Friends: ',school_firends) #Output = School Friends:  {'Hemant', 'Dilip', 'Mohit'}

test = office_friends.difference(friends)
print(test) #output: set() , Its a empty set

# Two sets are there for fruits and veg
fruits = {'Apple', 'Banana', 'Mango'}
veg = {'Tomato', 'Patato'}

# To add these to sets in to one use union() method, it will add both sets into one
fruits_veg = fruits.union(veg)
print('fruits veg union: ',fruits_veg) #Output = fruits veg union:  {'Banana', 'Apple', 'Patato', 'Mango', 'Tomato'}

# To sets of technolgies angular and python are there
angular = {"Amit", "Shiva", "Priyanka"}
python = {"Amit", "Shiva", "Danish" "Ravi"}

# To get a set which has collection of common in both sets use intersection() method
both = angular.intersection(python)
print('Both technologies: ', both) # Output = Both technologies:  {'Shiva', 'Amit'}