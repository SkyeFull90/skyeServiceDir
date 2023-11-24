import pytest
from unittest.mock import patch
import main


def test_main():
    with patch('builtins.input', return_value='Test'):
        with patch('builtins.print') as print_mock:
            main.main()
            print_mock.assert_any_call('Hello welcome to NetworkChuck Coffee!!!!!!')
            print_mock.assert_any_call('Hello Test, thank you so much for coming in today')