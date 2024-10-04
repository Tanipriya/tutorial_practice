# in keyword is used to check whetrher something exists in a list

courses_completed = ['Angular', 'Node JS', 'Javascript', 'Jquery']

print('Node JS is in course_complete list: ','Node JS' in courses_completed) # Output = True
print('Python is in course_complete list: ','Python' in courses_completed) # Output = False

user_course = input('Enter course you have done: ')
print('Your course is in our course completed list: ', user_course in courses_completed)

#in keyword in if statement
if(user_course in courses_completed):
    print('Hurry!!! Your course is in our course completed list.')
else:
    print('Sorry!!! Course is not in list....')