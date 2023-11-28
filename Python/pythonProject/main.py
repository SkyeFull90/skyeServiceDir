# Let's start a coffe shop together!! We're going to build this in python

# build the robot barista

print("Hello welcome to NetworkChuck Coffee!!!!!!")

name = input("What is your name? ")

print("Hello " + name + ", thank you so much for coming in today.")

menu = "Black Coffee, White Coffee, Cappuccino, Latte, Espresso, Mocha"

print(name + "what would you like to drink? We have " + menu)
order = input("What would you like to drink? ")

print("Okay, so you would like a " + order + ", that will be $5.00")

print("Thank you for your order, " + name + ", please pay at the counter and we will call your name when your order is ready.")

print("Order up for " + name + "!!!")

print("Here is your " + order + ", enjoy!")

print("Thank you for coming to NetworkChuck Coffee, " + name + ", have a great day!")

# Now let's build the coffee shop in a function


def coffee_shop():
    print("Hello welcome to NetworkChuck Coffee!!!!!!")

    name = input("What is your name? ")

    print("Hello " + name + ", thank you so much for coming in today.")

    menu = "Black Coffee, White Coffee, Cappuccino, Latte, Espresso, Mocha"

    print(name + "what would you like to drink? We have " + menu)
    order = input("What would you like to drink? ")

    print("Okay, so you would like a " + order + ", that will be $5.00")

    print("Thank you for your order, " + name + ", please pay at the counter and we will call your name when your order is ready.")

    print("Order up for " + name + "!!!")

    print("Here is your " + order + ", enjoy!")

    print("Thank you for coming to NetworkChuck Coffee, " + name + ", have a great day!")
    
# Call the function
coffee_shop()

# Now let's build the coffee shop in a function with a parameter


def coffee_shop(name):
    
    print("Hello " + name + ", thank you so much for coming in today.")

    menu = "Black Coffee, White Coffee, Cappuccino, Latte, Espresso, Mocha"

    print(name + "what would you like to drink? We have " + menu)
    order = input("What would you like to drink? ")

    print("Okay, so you would like a " + order + ", that will be $5.00")

    print("Thank you for your order, " + name + ", please pay at the counter and we will call your name when your order is ready.")

    print("Order up for " + name + "!!!")

    print("Here is your " + order + ", enjoy!")

    print("Thank you for coming to NetworkChuck Coffee, " + name + ", have a great day!")
    
# Call the function
coffee_shop("Chuck")
