def is_valid_name(name):
    # Check if the name contains only alphabetical characters
    if not name.isalpha():
        return False

    # Check if the name is at least 3 characters long
    if len(name) < 3:
        return False

    return True


def main():
    name = input("Enter a name: ")

    if is_valid_name(name):
        print("The name is valid.")
    else:
        print("The name is not valid.")


if __name__ == "__main__":
    main()
