# 1. Ask user the age and show his age in number of days
age = int(input("Enter your age: "))
age_in_days = age*365
print(f"Your age in years: {age}, age in days: {age_in_days}") #Output=Your age in yesrs: 10, age in days: 3650

# 2. Ask user the radius od circle and show area
radius = float(input("Enter the radius of circle: "))
circle_area = 3.14 * radius * radius
print(f"Radius={radius}, Area={circle_area:.2f}") # Output= Radius=10.0, Area=314.0