# Let's start a coffe shop together!! We're going to build this in python

# build the robot barista

print("Hello welcome to NetworkChuck Coffee!!!!!!")

name = input("What is your name? ")

print("Hello " + name + ", thank you so much for coming in today.")

menu = "Black Coffee, White Coffee, Cappuccino, Latte, Espresso, Mocha"

print(name + " what would you like to drink? We have " + menu)
order = input("What would you like to drink? ")
price = 8
quantity = input("How many coffee would you like?\n")
total_price = price * int(quantity)

print("Okay, so you would like " + quantity + ' ' + order)

print("Thank you for your order, " + name + ", please pay " + str(total_price) + ' ' + "at the counter and we will call"
                                                                                 "your name when your order is ready.")


print("Order up for " + name + "!!!")

print("Here is your " + quantity + ' ' + order + ", enjoy!")

print("Thank you for coming to NetworkChuck Coffee, " + name + ", have a great day!")
