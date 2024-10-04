#varibale is name for value, here in below example value is 100 and its name is x
#It is similar to Javascript var,let, const keyword. If no keyword in JS its global variable.
#Here in python we dont need any keyword. Just value and name of it.
#When we define like this value assigment will happen first means 100 will be stored first than,
#  it will be refered as x
x=50

items = 100 #integer
price = 2.50 #float
discount = 20
amount = items * (1-discount/100)* price

#To display the result we use print similar to JS console.log
print(amount) # output = 200

#String, can be stored in "" or ''
name = "Amit"
surname = 'More'
print(name, surname) #Output = Amit More
print(name*2) #Ouput = AmitAmit

#Changing varibale
a=10 #value 10 is assigned to a
b=a  #value of a is 10 which is assigned to b
print(a)# output = 10
print(b)# output = 10

b=20 #value of b changed, a is still the same
print(a)# output = 10
print(b)# output = 20

