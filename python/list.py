import random
my_list = []
for i in range(100):
    my_list.append(random.randint(0,100))

#2
my_list =list(map(lambda x: x^2,my_list))
print(my_list)

#3
my_list = list(filter(lambda x: x <= 2000,my_list))

#4
print(reduce(add, my_list))