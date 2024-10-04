# f string used to format a string and pass the data runtime
name = "Amit"
print(f"Hello!!! {name}") #Output= Hello!!! Amit

name = "Preeti"
print(f"Hello!!! {name}") #Output= Hello!!! Preeti

#String format using format keyword
#Advantage of this we can define a template a later use with multiple values.
message = "Hi, {}"
name_message = message.format(name)
print(name_message) # Output= Hi, Preeti

info = "My name is {}. I am {} years old. I am from {}."
info_message = info.format("Amit", 30, "Banglore")
print(info_message) # Output = My name is Amit. I am 30 years old. I am from Banglore.