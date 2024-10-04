#If is conditional statement to make decision if its true than do this otherwise some thing else
#Here will take user input for day of week and show him message based on the input

day = input('Enter the day of week:' )

# Here it will work only for Monday, if user type all caps MONDAY or all small monday it will fail
# if(day == 'Monday'):

# To work it will convert day into lower case and than check the condition
if(day.lower() == 'monday'):
    print(f'Hey its {day}, Have a nice week ahead!!!')
elif(day.lower() == 'friday'):
    print(f'Hey its {day}, Party Hard!!!')
else:
    print(f'Enjoy your {day}!!!!')
# If else is simliar to JS If else but here no {} instead : and here indention is required for scope of code
# you can use 2, 4, 6 , 8 space accroding to your choice
# If indention is not correct it will throw error