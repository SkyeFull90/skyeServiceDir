import {useEffect, useState} from 'react';
import usersData from './userData.json';

function Login() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [isLockedOut, setIsLockedOut] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const { username, password } = formData;
        const user = usersData.users.find(
            (u) => u.username === username && u.password === password
        );
        if (user) {
            setErrorMessage('');
            alert('Login successful!');
        } else {
            setFormData((prevState) => ({
                ...prevState,
                password: '',
            }));
            setErrorMessage('Invalid username or password');
            setAttempts((prevState) => prevState + 1);
        }
    }

    // Lock the user out after 5 unsuccessful attempts
    useEffect(() => {
        if (attempts >= 5) {
            setIsLockedOut(true);
        }
    }, [attempts]);

    return (
        <form onSubmit={handleSubmit} className="flex space-x-4">
            <label>
                Username :
                <input className="shadow-2xl shadow-cyan-500/50"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    disabled={isLockedOut}
                />
            </label>
            <br />
            <label>
                Password :
                <input className="shadow-2xl shadow-cyan-500/50"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isLockedOut}
                />
            </label>
            <br />
            <button type="submit" disabled={isLockedOut} className="btn btn-outline btn-accent  bg-cyan-600 shadow-xl shadow-cyan-500/50 rounded-lg">
                {isLockedOut ? `Locked out! Try again later` : `Login`}
            </button>
            {errorMessage && <p>{errorMessage}</p>}
        </form>
    );
}

export default Login;
