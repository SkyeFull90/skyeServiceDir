import unittest


def is_valid_name(name):
    # Check if the name contains only alphabetical characters
    if not name.isalpha():
        return False

    # Check if the name is at least 3 characters long
    if len(name) < 3:
        return False

    return True


class TestNameChecker(unittest.TestCase):
    def test_valid_name(self):
        self.assertTrue(is_valid_name("Alice"))
        self.assertTrue(is_valid_name("Bob"))

    def test_name_with_digits(self):
        self.assertFalse(is_valid_name("John123"))

    def test_short_name(self):
        self.assertFalse(is_valid_name("Jo"))

    def test_empty_name(self):
        self.assertFalse(is_valid_name(""))

    def test_name_with_spaces(self):
        self.assertFalse(is_valid_name("Mary Smith"))


if __name__ == '__main__':
    unittest.main()
