import random
my_list = [random.randint(0,100) for i in range(10)]

print([x^2 for x in my_list])