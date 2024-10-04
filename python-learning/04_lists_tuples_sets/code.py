# Lists, Tuples and Sets, 3 diffrent collections that allows to store multiple values in single variable

#List is declared using [], will be collection of multiple values. Its similar like JS Array
l = ['Amit', 'Preeti', 'Shiva']
print('list: ', l) #Output = list:  ['Amit', 'Preeti', 'Shiva']

#Accessing list using subscript notation, index starts from 0
#To print Amit from list
print('list first element: ',l[0]) #Output = Amit

#Changing the value of list 
l[0] ="Ankit"
print('Changed list: ', l) #Output = Changed list:  ['Ankit', 'Preeti', 'Shiva']

#Adding a new element to list use append(), it's similar to JS push() method
l.append('Rohit')
print('Appended List: ', l) #Output = Appended list:  ['Ankit', 'Preeti', 'Shiva', 'Rohit']

#Removing an elemnt form list use remove()
l.remove('Shiva')
print('Removed List: ', l) #Output = Removed list:  ['Ankit', 'Preeti', 'Rohit']

#Tuple is declared usinng (), will be collection of multiple values
#The key diff between list and tuple is we can not modify a tuple, you can not add or reomove elements to tuple.
t= ('Ram', 'Danish', 'Santosh')
print('tuple:', t) #Output = tuple: ('Ram', 'Danish', 'Santosh')

# Changing the values of tuple
# t[0] = 'Vikas' 
# It will thrown an error: TypeError: 'tuple' object does not support item assignment
# Tuple does not have append as we can not modify a tuple

#Accessing list using subscript notation, index starts from 0
#To print Danish from list
print('tuple second element: ',t[1]) #Output = Danish

#Set is declared using {}, will be collection of multiple values.
#The key diffrence is set allows only unique values.
#Set does not keep the order but list and tuple has order.
#As set does not have any order it does not allow subscript notation.
s={'Mohan', 'Pradeep', 'Sachin'}
print('set: ', s) #Output = set:  {'Mohan', 'Sachin', 'Pradeep'}

#Adding an element to set use add() method
s.add('Praveer')
print('Updated Set: ', s) #Output = Updated Set:  {'Pradeep', 'Mohan', 'Praveer', 'Sachin'}

s.add('Praveer') #It would not add Praveer again as set allows only unique values
print('Updated Set 2: ', s) #Output = Updated Set2:  {'Pradeep', 'Mohan', 'Praveer', 'Sachin'}