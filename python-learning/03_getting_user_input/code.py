# To get the user input use key word input()
name = input("Enter your name: ")
print(name) # Outupt = User entered name eg: amit

#Calculate area of a square

# size = input("Enter the size: ")
# area = size * size
# print(f"Size is {size}, area of square is {area}")

#output this will throw an error because input is in string format and we can not do maths opertion on string.
# So we need to convert the string to numbber to do maths for that we can use int()

size = int(input("Enter the size: "))
area = size * size
print(f"Size is {size}, area of square is {area}") #Output = Size is 10, area of square is 100